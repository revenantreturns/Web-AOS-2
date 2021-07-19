import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Application from '@ioc:Adonis/Core/Application'

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(seeder: { default: typeof BaseSeeder }) {
    
    if (seeder.default.developmentOnly && !Application.inDev) {
      return
    }

    await new seeder.default(this.client).run()
  }

  public async run() {
    await this.runSeeder(await import('../Account'))
    await this.runSeeder(await import('../Actors'))
    await this.runSeeder(await import('../ActorEquip'))
    await this.runSeeder(await import('../ActorHotbar'))
    await this.runSeeder(await import('../ActorSkill'))
    await this.runSeeder(await import('../ActorSwitch'))
    await this.runSeeder(await import('../ActorVariable'))
    await this.runSeeder(await import('../Banks'))
    await this.runSeeder(await import('../Configs'))
    await this.runSeeder(await import('../Guilds'))
    await this.runSeeder(await import('../News'))
  }
}