import { GuardsList } from '@ioc:Adonis/Addons/Auth'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthenticationException } from '@adonisjs/auth/build/standalone'

export default class ModMiddleware {

  protected redirectTo = '/'
  protected async authenticate (auth: HttpContextContract['auth'], guards: (keyof GuardsList)[]) {
    let guardLastAttempted: string | undefined

    for (let guard of guards) {
      guardLastAttempted = guard

      if (await auth.use(guard).check()) {
        if(auth.user?.group == 1 || auth.user?.group == 2)
        {
          auth.defaultGuard = guard
          return true
        }
      }
    }
    throw new AuthenticationException(
      'Unauthorized access',
      'E_UNAUTHORIZED_ACCESS',
      guardLastAttempted,
      this.redirectTo,
    )
  }

  public async handle ({ auth }: HttpContextContract, next: () => Promise<void>, customGuards: (keyof GuardsList)[]) {
    const guards = customGuards.length ? customGuards : [auth.name]
    await this.authenticate(auth, guards)
    await next()
  }
}
