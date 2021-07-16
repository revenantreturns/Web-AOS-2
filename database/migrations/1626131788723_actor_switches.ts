import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ActorSwitches extends BaseSchema {
  protected tableName = 'actor_switches'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('actor_id')
      .unsigned()
      .references('actors.id')
      .onDelete('CASCADE')
      table.integer('switch_id').notNullable()
      table.integer('value').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
