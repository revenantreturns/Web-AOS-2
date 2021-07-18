import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Configs from 'App/Models/Configs'
import Store from 'App/Models/Store'
import Accounts from 'App/Models/Accounts'
import moment from 'moment';
import 'moment/locale/pt-br';

export default class StoreController {
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

  public async show(ctx: HttpContextContract) {
    if (await ctx.auth.use("web").check()) {
      await ctx.auth.use('web').authenticate()
    }
    const config = await Configs.findOrFail(1)
    const item = await Store.findOrFail(ctx.params.id)

    return ctx.view.render('store/show', { item, config })
  }

  public async payment(ctx: HttpContextContract) {
    if (await ctx.auth.use("web").check()) {
      await ctx.auth.use('web').authenticate()
    }
    const user = ctx.auth.use('web').user!
    const item = await Store.findOrFail(ctx.params.id)

    if (user.cash > item.price) {
      let sum = user.cash - item.price
      let amount = item.amount

      if (item.category == 0) {
        let date
        if(user.vip_time > new Date().getTime() / 1000) {
          date = new Date(user.vip_time).getTime() + (amount * 86400) // amount = DAY VALOR || 86400 = SECONDS IN DAY
        } else {
          date = new Date().getTime() / 1000 + (amount * 86400)
        }
        try {
          await Accounts.query().where('id', user.id).update({ vip_time: date, cash: sum })
          return ctx.response.json({ success: "sucesso!" })
        } catch {
          return ctx.response.json({ error: "erro!" })
        }
      }
      else if (item.category == 1) {

      }
      else if (item.category == 2) {

      }
      else if (item.category == 3) {
      }
    }
    else {
      ctx.session.flash("withoutcash", "without cash")
      return ctx.response.redirect().toRoute('store.show', [ctx.params.id])
    }
  }
}
