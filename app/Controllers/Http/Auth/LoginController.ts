import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Accounts from 'App/Models/Accounts';
import CryptoJS from 'crypto-js';

export default class LoginController {

  public async login({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  public async auth({ auth, request, response, session }: HttpContextContract) {
    const { username, password } = request.only(['username', 'password'])
    const hash = CryptoJS.MD5(password).toString()
    try {
      const user = await Accounts
        .query()
        .where('username', username)
        .where('password', hash)
        .firstOrFail()
        
      await auth.use('web').login(user)

      return response.redirect().toRoute('home')
    } catch {
      session.flash('errors', {
        username: 'Post title is required',
      })
      return response.redirect().back()

    }
  }
}
