import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Configs from 'App/Models/Configs'
import Store from 'App/Models/Store'
import 'moment/locale/pt-br'
import { ItemType } from 'App/Enums/ItemType'

export default class StoreController {
  /**
   *
   * @param ctx
   * @returns
   */
  public async index(ctx: HttpContextContract) {
    if (await ctx.auth.use("web").check()) {
      await ctx.auth.use('web').authenticate()
    }
    const config = await Configs.findOrFail(1)
    const page = ctx.request.input('page', 1)
    const limit = config.max_items_store
    const stores = await Store.query().orderBy('id', 'desc').paginate(page, limit)
    stores.baseUrl('/store')
    return ctx.view.render('store/store', { stores, config })
  }

  /**
   *
   * @param ctx
   * @returns
   */
  public async show(ctx: HttpContextContract) {
    if (await ctx.auth.use("web").check()) {
      await ctx.auth.use('web').authenticate()
    }
    const config = await Configs.findOrFail(1)
    const item = await Store.findOrFail(ctx.params.id)
    return ctx.view.render('store/show', { item, config })
  }

  /**
   *
   * @param ctx
   * @returns
   */
  public async payment(ctx: HttpContextContract) {
    const user = ctx.auth.use('web').user!
    const item = await Store.findOrFail(ctx.params.id)
    if (user.cash >= item.price) {
      if (ItemType.VIP == item.category) {
        let vipAlreadExists = user.vip_time > new Date().getTime() / 1000
        let auxDate = vipAlreadExists ? new Date(user.vip_time).getTime() : new Date().getTime() / 1000
        let date = auxDate + (item.amount * 86400)
        try {
          await user.merge({ vip_time: date, cash: user.cash - item.price }).save()
          ctx.session.flash("successfully", true)
          return ctx.response.redirect().toRoute('store.success', [item.id])
        } catch {
          return ctx.response.json({ error: "erro!" })
        }
      }
      else {
        try {
          await user.related('distributor').create({ item_id: item.id, kind: item.category, amount: item.amount })
          await user.merge({ cash: user.cash - item.price }).save()
          ctx.session.flash("successfully", true)
          return ctx.response.redirect().toRoute('store.success', [item.id])
        } catch {
          return ctx.response.json({ error: "erro!" })
        }
      }
    }
    else {
      ctx.session.flash("withoutcash", "without cash")
      return ctx.response.redirect().toRoute('store.show', [ctx.params.id])
    }
  }

  /**
   *
   * @param ctx
   * @returns
   */
  public async successfully(ctx: HttpContextContract) {
    if (await ctx.auth.use("web").check()) {
      await ctx.auth.use('web').authenticate()
    }
    const item = await Store.findOrFail(ctx.params.id)
    var text
    if (ItemType.VIP == item.category) {
      if (item.amount > 1) { text = "dias" } else { text = "dia" }
    } else {
      if (item.amount > 1) { text = "unidades" } else { text = "unidade" }
    }
    return ctx.view.render('store/successfully', { item, text })
  }
}
