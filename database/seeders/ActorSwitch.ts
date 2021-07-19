import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ActorSwitch from 'App/Models/ActorSwitch'

export default class ActorSwitchSeeder extends BaseSeeder {
  public async run () {
    for (let i = 0; i < 100; i++) {
      await ActorSwitch.createMany([
        {
          actor_id: 1,
          switch_id: i + 1,
          value: 0
        },
        {
          actor_id: 2,
          switch_id: i + 1,
          value: 0
        },
        {
          actor_id: 3,
          switch_id: i + 1,
          value: 0
        },
      ])
    }
  }
}
