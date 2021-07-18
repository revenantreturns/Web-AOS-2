import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CashStore from 'App/Models/CashStore'

export default class CashController {
    public async index(ctx: HttpContextContract) {
        if (await ctx.auth.use("web").check()) {
            await ctx.auth.use('web').authenticate()
        }
        const cash = await CashStore.all()
        return ctx.view.render('store/cashpage', { cash })
    }
}