import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ActorSkill from 'App/Models/ActorSkill'

export default class ActorSkillSeeder extends BaseSeeder {
  public async run () {
    await ActorSkill.createMany([
      {
        actor_id: 1,
        skill_id: 80
      },
      {
        actor_id: 2,
        skill_id: 80
      },
      {
        actor_id: 3,
        skill_id: 80
      },
    ])
  }
}
