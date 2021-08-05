import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BoxFree from 'App/Models/BoxFree'

export default class BoxFreeController {
  /**
   *
   * @param ctx
   * @returns
   */
  public async index(ctx: HttpContextContract) {
    const box = await BoxFree.all()
    return ctx.view.render('admin/boxfree/index', { box })
  }

  /**
   *
   * @param ctx
   * @returns
   */
  public async create(ctx: HttpContextContract) {
    return ctx.view.render('admin/boxfree/create')
  }

  /**
   *
   * @param ctx
   */
  public async store(ctx: HttpContextContract) {
    const { name, item_id, category_item, amount, rate, available, border_color } = ctx.request.all()
    try {
      BoxFree.create({ name, item_id, category_item, amount, rate, available, border_color })
      ctx.session.flash('created', 'Sucesso!')
      return ctx.response.redirect().toRoute('admin.boxfree.index')
    } catch {
      ctx.session.flash('erro', 'Erro!')
      return ctx.response.redirect().toRoute('admin.boxfree.create')
    }
  }

  /**
   *
   * @param ctx
   */
  public async edit(ctx: HttpContextContract) {
    const box = await BoxFree.findOrFail(ctx.params.id)
    return ctx.view.render('admin/boxfree/edit', { box })
  }

  /**
   *
   * @param ctx
   * @returns
   */
  public async update(ctx: HttpContextContract) {
    const { name, item_id, category_item, amount, rate, available, border_color } = ctx.request.all()
    try {
      await BoxFree.query().where('id', ctx.params.id).update({ name: name, item_id: item_id, category_item: category_item, amount: amount, rate: rate, available: available, border_color: border_color })
      ctx.session.flash("updated", "success")
      ctx.response.redirect().toRoute('admin.boxfree.index')
    } catch {
      ctx.session.flash('erro', 'Erro!')
      return ctx.response.redirect().toRoute('admin.boxfree.index')
    }
  }

  public async destroy(ctx: HttpContextContract) {
    const box = await BoxFree.findOrFail(ctx.params.id)
    try {
      await box.delete()
      ctx.session.flash('deleted', 'success')
      ctx.response.redirect().toRoute('admin.boxfree.index')
    } catch {
      ctx.session.flash('erro', 'Erro!')
      return ctx.response.redirect().toRoute('admin.boxfree.index')
    }
  }
}
