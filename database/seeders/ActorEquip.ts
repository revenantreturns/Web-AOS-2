import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ActorEquip from 'App/Models/ActorEquip'

export default class ActorEquipSeeder extends BaseSeeder {
  public async run() {
    for (let i = 0; i < 9; i++) {
      await ActorEquip.createMany([
        {
          actor_id: 1,
          slot_id: i,
          equip_id: 0
        },
        {
          actor_id: 2,
          slot_id: i,
          equip_id: 0
        },
        {
          actor_id: 3,
          slot_id: i,
          equip_id: 0
        },
      ])
    }
  }
}
