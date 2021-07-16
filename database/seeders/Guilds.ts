import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Guilds from 'App/Models/Guilds'

export default class GuildsSeeder extends BaseSeeder {
  public async run() {
    await Guilds.createMany([
      {
        name: "Fenix",
        leader: "Admin",
        notice: "Notícias aqui.",
        description: "",
        flag: "2,14,14,14,14,14,255,14,255,2,14,14,14,14,14,255,255,255,2,14,14,14,14,14,255,255,14,14,14,14,14,14,255,255,14,14,14,14,14,14,255,255,14,14,14,2,14,14,255,2,255,255,255,255,2,14,2,255,255,255,255,255,255,2",
      }
    ])
  }
}
