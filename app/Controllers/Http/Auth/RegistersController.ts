import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Accounts from 'App/Models/Accounts'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'

export default class RegistersController {
  public async register({ auth, session, request, response }: HttpContextContract) {
    request.only(['username', 'email', 'password'])

    const ValidatorSchema = schema.create({
      username: schema.string({ trim: true }, [
        rules.minLength(6),
        rules.maxLength(14),
        rules.unique({ table: 'accounts', column: 'username' })
      ]),
      email: schema.string({ trim: true }, [
        rules.email({
          sanitize: true,
          ignoreMaxLength: true
        }),
        rules.unique({ table: 'accounts', column: 'email' })
      ]),
      password: schema.string({ trim: true }, [
        rules.minLength(6),
        rules.maxLength(14)
      ])
    })

    const ValidatedData = await request.validate({schema: ValidatorSchema})

    session.flash('errors', {
      username: 'Post title is required',
      email: 'Post title is required',
      password: 'Post title is required',
    })

    const account = await Accounts.create({
      username: ValidatedData.username,
      email: ValidatedData.email,
      password: ValidatedData.password
    })

    await Mail.send((message) => {
      message
        .from(Env.get('SMTP_USERNAME'))
        .to(ValidatedData.email)
        .subject('Bem vindo!')
        .htmlView('emails/welcome', { name: ValidatedData.username })
    })

    await auth.use('web').login(account)

    return response.redirect().toRoute('login')
  }

  public async newaccount({view}: HttpContextContract) {
    return view.render('auth/register')
  }
}
