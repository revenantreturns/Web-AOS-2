import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ActorEquips extends BaseSchema {
  protected tableName = 'actor_equips'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('actor_id')
      .unsigned()
      .references('actors.id')
      .onDelete('CASCADE')
      table.integer('slot_id').notNullable()
      table.integer('equip_id').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
