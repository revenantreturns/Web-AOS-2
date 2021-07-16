import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Configs from 'App/Models/Configs'

export default class ConfigsSeeder extends BaseSeeder {
  public async run() {
    await Configs.create(
      {
        title: "WebAOS 2.0",
        cash_name: "Crystal Coins",
        max_news: 10,
        max_rank: 30,
        max_rank_guild: 30,
        max_items_store: 20,
        download_link: "Link Here",
        discount: 0,
        ip_server: "localhost",
        port_server: 5000
      }
    )
  }
}
