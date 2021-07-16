import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Actors from 'App/Models/Actors'
import Configs from 'App/Models/Configs'

export default class ActorsController {
  public async index({ view, auth, request }: HttpContextContract) {
    if (await auth.use("web").check()) {
      await auth.use('web').authenticate()
    }

    const config = await Configs.find(1)

    const page = request.input('page', 1)
    const limit = config?.max_rank || 30

    const toplevel = await Actors.query().orderBy('level', 'desc').paginate(page, limit)

    toplevel.forEach(actor => {
      if(actor.sex == 0)
      {
        actor.toSex = 'Masculino'
      } else {
        actor.toSex = 'Feminino'
      }
    })

    const length = toplevel.length;

    var j = 1;

    for(let i = (page * limit) - (limit - 1 ); i <= (page * limit) && j <= length; i ++){
        toplevel[j - 1].topPosition = i;
        j ++;
    }

    toplevel.baseUrl('/toplevel')
    return view.render('account/toplevel', { toplevel })
  }
}
