import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ActorVariables extends BaseSchema {
  protected tableName = 'actor_variables'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('actor_id')
      .unsigned()
      .references('actors.id')
      .onDelete('CASCADE')
      table.integer('variable_id').notNullable()
      table.integer('value').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
