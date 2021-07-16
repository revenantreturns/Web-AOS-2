import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ActorArmors extends BaseSchema {
  protected tableName = 'actor_armors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('actor_id')
      .unsigned()
      .references('actors.id')
      .onDelete('CASCADE')
      table.integer('armor_id').notNullable()
      table.integer('amount').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
