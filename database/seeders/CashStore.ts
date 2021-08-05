import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import CashStore from 'App/Models/CashStore'

export default class CashStoreSeeder extends BaseSeeder {
  public async run() {
    await CashStore.createMany([
      {
        qty: 500,
        bonus: 25,
        price: 5.00,
        purchased: 0
      },
      {
        qty: 1000,
        bonus: 150,
        price: 10.00,
        purchased: 0
      },
      {
        qty: 2500,
        bonus: 500,
        price: 25.00,
        purchased: 0
      },
      {
        qty: 5000,
        bonus: 1300,
        price: 50.00,
        purchased: 0
      },
      {
        qty: 10000,
        bonus: 3200,
        price: 100.00,
        purchased: 0
      },
      {
        qty: 20000,
        bonus: 8500,
        price: 200.00,
        purchased: 0
      },
    ])
  }
}
