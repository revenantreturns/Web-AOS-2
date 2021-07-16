 import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LoginController {

  public async login({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  public async auth({ auth, request, response, session }: HttpContextContract) {
    const { username, password } = request.only(['username', 'password'])
    try {
      await auth.attempt(username, password)
      return response.redirect().toRoute('home')
    } catch {
      session.flash('errors', {
        username: 'Post title is required',
      })
      return response.redirect().back()

    }
  }
}
