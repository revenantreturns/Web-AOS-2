import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ActorQuests extends BaseSchema {
  protected tableName = 'actor_quests'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('actor_id')
      .unsigned()
      .references('actors.id')
      .onDelete('CASCADE')
      table.integer('quest_id').notNullable()
      table.integer('state').notNullable()
      table.integer('kills').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
