import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Guilds from 'App/Models/Guilds'

export default class GuildsController {
  public async index({ view, request, auth }: HttpContextContract) {
    if (await auth.use("web").check()) {
      await auth.use('web').authenticate()
    }
    const page = request.input('page', 1)
    const limit = 10
    const topguild = await Guilds.query().paginate(page, limit)

    topguild.baseUrl('/topguild')

    topguild.forEach(guild => {
      const colors = guild.flag.split(',');
      let width = 8;
      let height = 8;

      var html = '';

      for(let i = 0 ; i < colors.length ;){
          for(let j = 0 ; j < height ; j ++){
            for (let k = 0 ; k < width ; k++){
              html += ("<div class='draw" + colors[i] + "'></div>");
              i++;
            }
            html += ("<br></div><div class='reset'>")
          }
      }
      guild.icon = html;
    });

    return view.render('guilds/topguild', { topguild })
  }
}
