import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Actors from 'App/Models/Actors'
import Configs from 'App/Models/Configs'
import News from 'App/Models/News'
import Store from 'App/Models/Store'

export default class HomeController {
  /**
   *
   * @param param0
   */
  public async index(ctx: HttpContextContract) {
    if (await ctx.auth.use("web").check()) {
      await ctx.auth.use('web').authenticate()
    }

    const config = await Configs.findOrFail(1)
    const page = ctx.request.input('page', 1)
    const limit = config.max_news || 20

    const news = await News.query().orderBy('id', 'desc').paginate(page, limit)
    const actors = await Actors.query().orderBy('exp', 'desc').limit(3)
    const stores = await Store.query().orderBy('id', 'desc').limit(5)

    news.baseUrl('/')

    return ctx.view.render('home/home', { news, actors, stores })
  }
}
