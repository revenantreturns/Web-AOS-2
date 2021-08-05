import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CashStore from 'App/Models/CashStore'
import Configs from 'App/Models/Configs'

export default class CashController {
    public async index(ctx: HttpContextContract) {
        if (await ctx.auth.use("web").check()) {
            await ctx.auth.use('web').authenticate()
        }
        const cashs = await CashStore.query().orderBy('qty')
        const config = await Configs.findOrFail(1)
        return ctx.view.render('store/cashpage', { cashs, config })
    }
}