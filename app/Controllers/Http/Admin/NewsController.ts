import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import News from 'App/Models/News'

export default class NewsController {
  /**
   * INDEX
   * @param param0
   */
  public async index({ view, request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 20
    const news = await News.query().orderBy('id', 'desc').paginate(page, limit)
    const length = news.length;
    var j = 1;
    for (let i = (page * limit) - (limit - 1); i <= (page * limit) && j <= length; i++) {
      news[j - 1].toPosition = i;
      j++;
    }
    news.baseUrl('/admin/news')
    return view.render('admin/news/index', { news })
  }

  /**
   * CREATE
   * @param param0
   */
  public async create({ view, auth }: HttpContextContract) {
    await auth.use('web').authenticate()
    return view.render('admin/news/create')
  }

  /**
   * STORE
   * @param param0
   */
  public async store({ request, session, response }: HttpContextContract) {
    const { title, content, writer, type } = request.all()
    try {
      await News.create({ title, content, writer, type })
      session.flash('created', 'Sucesso!')
      return response.redirect().toRoute('admin.news.index')
    } catch {
      session.flash('erro', 'Erro!')
      return response.redirect().toRoute('admin.news.create')
    }
  }

  /**
   * SHOW
   * @param param0
   */
  public async show({ params, view }: HttpContextContract) {
    const getNew = await News.findOrFail(params.id)
    return view.render('admin/news/show', { getNew })
  }

  /**
   * EDIT
   * @param param0
   */
  public async edit({ params, view }: HttpContextContract) {
    const getNew = await News.findOrFail(params.id)
    return view.render('admin/news/edit', { getNew })
  }

  /**
   * UPDATE
   * @param param0
   */
  public async update({ params, request, session, response }: HttpContextContract) {
    const { title, writer, content } = request.all()
    try {
      await News.query().where('id', params.id).update({ title: title, writer: writer, content: content })
      session.flash("updated", "success")
      return response.redirect().toRoute('admin.news.index')
    } catch {
      response.json({ error: "um erro ocorreu" })
    }
  }

  /**
   * DELETE
   * @param param0
   */
  public async destroy({ params, session, response }: HttpContextContract) {
    const getNew = await News.findOrFail(params.id)
    try {
      await getNew.delete()
      session.flash('deleted', 'Sucesso!')
      return response.redirect().back()
    } catch {
      return response.json({ error: "um erro ocorreu" })
    }
  }

}
