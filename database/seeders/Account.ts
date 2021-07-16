import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Accounts from 'App/Models/Accounts'

export default class AccountSeeder extends BaseSeeder {
  public async run () {
    await Accounts.createMany([
      {
        username: 'admin',
        email: 'admin@admin.com',
        password: 'admin',
        group: 2,
        cash: 99999999
      },
      {
        username: 'lola',
        email: 'lola@lola.com',
        password: 'lola',
        group: 0,
        cash: 0
      },
      {
        username: 'nietore',
        email: 'nietore@nietore.com',
        password: 'nietore',
        group: 2,
        cash: 99999999
      }
    ])
  }
}
