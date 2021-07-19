import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ActorVariable from 'App/Models/ActorVariable'

export default class ActorVariableSeeder extends BaseSeeder {
  public async run () {
    for (let i = 0; i < 100; i++) {
      await ActorVariable.createMany([
        {
          actor_id: 1,
          variable_id: i + 1,
          value: 0
        },
        {
          actor_id: 2,
          variable_id: i + 1,
          value: 0
        },
        {
          actor_id: 3,
          variable_id: i + 1,
          value: 0
        },
      ])
    }
  }
}
