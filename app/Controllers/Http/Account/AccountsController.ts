import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Accounts from 'App/Models/Accounts'
import { AccountFactory } from 'Database/factories'

export default class AccountsController {

  public async generateMany({}: HttpContextContract) {
    const users = await AccountFactory.with('actors', 10).createMany(10)
    return users
  }

  public async index({}: HttpContextContract) {

    const accounts = (await Accounts.findOrFail(1)).related('actors')


    return accounts
  }
}
