import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ActorHotBar from 'App/Models/ActorHotBar'

export default class ActorHotbarSeeder extends BaseSeeder {
  public async run () {
    for (let i = 0; i < 9; i++) {
      await ActorHotBar.createMany([
        {
          actor_id: 1,
          slot_id: i,
          type: 0,
          item_id: 0
        },
        {
          actor_id: 2,
          slot_id: i,
          type: 0,
          item_id: 0
        },
        {
          actor_id: 3,
          slot_id: i,
          type: 0,
          item_id: 0
        },
      ])
    }
  }
}
