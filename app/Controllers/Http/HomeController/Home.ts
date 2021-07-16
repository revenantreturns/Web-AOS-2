import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Configs from 'App/Models/Configs'
import News from 'App/Models/News'

export default class HomeController {
  /**
   *
   * @param param0
   */
  public async index({view, request, auth}: HttpContextContract) {
    if (await auth.use("web").check()) {
      await auth.use('web').authenticate()
    }
    const config = await Configs.findOrFail(1)
    const page = request.input('page', 1)
    const limit = config.max_news || 20

    const news = await News.query().orderBy('id', 'desc').paginate(page, limit)

    news.baseUrl('/')

    return view.render('home/home', { news })
  }
}
