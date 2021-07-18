import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import moment from 'moment'


export default class DashboardController {

  public async index(ctx: HttpContextContract) {
    const user = ctx.auth.use('web').user!

    var expires
    
    if (user.vip_time < new Date().getTime() / 1000){ 
      const expiresVip = "Voce nao tem vip"
      expires = expiresVip
    } else {
      const expiresVip = moment(new Date(user.vip_time).getTime() * 1000).locale('pt-br').startOf('minute').fromNow()
      expires = expiresVip
    }

    return ctx.view.render('admin/dashboard', { expires })
  }

}
