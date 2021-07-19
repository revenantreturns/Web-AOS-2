import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Banks from 'App/Models/Banks'

export default class BanksSeeder extends BaseSeeder {
  public async run () {
    await Banks.createMany([
      {
        account_id: 1,
        gold: 100000
      },
      {
        account_id: 2,
        gold: 0
      },
      {
        account_id: 3,
        gold: 100000
      },
  ])
  }
}
