import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ActorSelfSwitches extends BaseSchema {
  protected tableName = 'actor_self_switches'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('actor_id')
      .unsigned()
      .references('actors.id')
      .onDelete('CASCADE')
      table.integer('map_id').notNullable()
      table.integer('event_id').notNullable()
      table.string('ch').notNullable()
      table.integer('value').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
