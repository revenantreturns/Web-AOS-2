import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import Store from 'App/Models/Store'

export default class StoreController {
  /**
   *
   * @param param0
   * @returns
   */
  public async index({ view, request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 20
    const stores = await Store.query().orderBy('id', 'desc').paginate(page, limit)

    stores.baseUrl('/admin/store')
    return view.render('admin/store/index', { stores })
  }

  /**
   *
   * @param param0
   * @returns
   */
  public async create({ view }: HttpContextContract) {
    return view.render('admin/store/create')
  }

  /**
   *
   * @param param0
   * @returns
   */
  public async store({ request, session, response }: HttpContextContract) {
    const { category, name, description, price, amount, item_id } = request.all()

    const coverImage = request.file('cover_image', {
      size: '2mb',
      extnames: ['jpg', 'png', 'gif', 'jpeg'],
    })
    if (!coverImage) {
      return
    }
    var fileName = `${cuid()}.${coverImage.extname}`
    var path = "assets/images/store/".concat(fileName)

    await coverImage.move(Application.resourcesPath('images/store'), {
      name: fileName
    })
    try {
      await Store.create(
        {
          category: category,
          name: name,
          description: description,
          price: price,
          url_image: path,
          name_image: fileName,
          amount: amount,
          purchased: 0,
          item_id: item_id
        }
      )
      session.flash("created", "success")
      response.redirect().back()
    } catch {
      response.json({ error: "erro critico" })
    }
  }

  /**
   *
   * @param param0
   * @returns
   */
  public async show({ params, view }: HttpContextContract) {
    const store = await Store.findOrFail(params.id)
    return view.render('admin/store/show', { store })
  }

  /**
   *
   * @param param0
   * @returns
   */
  public async edit({ params, view }: HttpContextContract) {
    const store = await Store.findOrFail(params.id)
    return view.render('admin.store.edit', { store })
  }

  /**
   *
   * @param param0
   * @returns
   */
  public async update({ request, params, session, response }: HttpContextContract) {
    const { category, name, description, price, amount, item_id } = request.all()
    const getstore = await Store.findOrFail(params.id)

    const coverImage = request.file('cover_image', {
      size: '2mb',
      extnames: ['jpg', 'png', 'gif', 'jpeg'],
    })

    if (coverImage) {
      var fileName = `${cuid()}.${coverImage.extname}`
      var path = "assets/images/store/".concat(fileName)
      const fs = require('fs')
      const pathUnlink = Application.resourcesPath('images/store/' + getstore.name_image + '')

      await coverImage.move(Application.resourcesPath('images/store'), {
        name: fileName
      })

      await fs.unlink(pathUnlink, function (err) {
        if (err) throw err
      })

    } else {
      var fileName = getstore.name_image
      var path = getstore.url_image
    }

    try {
      await Store.query().where('id', params.id).update({ category: category, name: name, description: description, price: price, url_image: path, name_image: fileName, amount: amount, item_id: item_id })

      session.flash("updated", "success")
      response.redirect().back()
    } catch {
      response.json({ error: "erro critico" })
    }
  }

  /**
   *
   * @param param0
   * @returns
   */
  public async destroy({ params, session, response }: HttpContextContract) {
    const getStore = await Store.findOrFail(params.id)
    const fs = require('fs')
    const path = Application.resourcesPath('images/store/' + getStore.name_image + '')
    try {
      await fs.unlink(path, function (err) {
        if (err) throw err
      })
      await getStore.delete()
      session.flash('deleted', 'success')
      return response.redirect().back()
    } catch {
      return response.json
    }

  }
}
