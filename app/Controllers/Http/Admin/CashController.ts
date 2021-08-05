import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CashStore from 'App/Models/CashStore'
import Configs from 'App/Models/Configs'

export default class CashController {
  /**
   * 
   * @param ctx 
   * @returns 
   */
  public async index(ctx: HttpContextContract) {
    const cashs = await CashStore.query().orderBy('qty')
    const config = await Configs.findOrFail(1)
    cashs.forEach(cash => {
      let x = parseInt(((cash.bonus * 100) / cash.qty).toPrecision())
      cash.calculate = x
    })
    return ctx.view.render('admin/cash/index', { cashs, config })
  }

  /**
   * 
   * @param ctx 
   */
  public async create(ctx: HttpContextContract) {
    return ctx.view.render('admin/cash/create')
  }

  /**
   * 
   * @param ctx 
   */
  public async store(ctx: HttpContextContract) {
    const { qty, bonus, price } = ctx.request.all()
    try {
      await CashStore.create({ qty,bonus,price})
      ctx.session.flash('created', 'Sucesso!')
      return ctx.response.redirect().toRoute('admin.cash.index')
    } catch {
      ctx.session.flash('erro', 'Erro!')
      return ctx.response.redirect().toRoute('admin.cash.create')
    }
  }

  /**
   * 
   * @param ctx 
   * @returns 
   */
  public async show(ctx: HttpContextContract) {
    const cash = await CashStore.findOrFail(ctx.params.id)
    return ctx.view.render('admin/cash/show', { cash })
  }

  /**
   * 
   * @param ctx 
   */
  public async edit(ctx: HttpContextContract) {
    const cash = await CashStore.findOrFail(ctx.params.id)
    return ctx.view.render('admin/cash/edit', { cash })
  }

  /**
   * 
   * @param ctx 
   */
  public async update(ctx: HttpContextContract) {
    const { qty, bonus, price } = ctx.request.all()
    try {
      await CashStore.query().where('id', ctx.params.id).update({ qty: qty, bonus: bonus, price: price })
      ctx.session.flash('updated', 'Sucesso!')
      return ctx.response.redirect().toRoute('admin.cash.index')
    } catch {
      ctx.session.flash('erro', 'Erro!')
      return ctx.response.redirect().toRoute('admin.cash.index')
    }
  }

  /**
   * 
   * @param ctx 
   * @returns 
   */
  public async destroy(ctx: HttpContextContract) {
    const getCash = await CashStore.findOrFail(ctx.params.id)
    try {
      await getCash.delete()
      ctx.session.flash('deleted', 'Sucesso!')
      return ctx.response.redirect().back()
    } catch {
      return ctx.response.json({ error: "um erro ocorreu" })
    }
  }
}
