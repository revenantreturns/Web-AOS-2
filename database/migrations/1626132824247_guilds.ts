import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Guilds extends BaseSchema {
  protected tableName = 'guilds'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('leader').notNullable()
      table.text('notice').notNullable().defaultTo("Hi Members")
      table.text('description').notNullable().defaultTo("Guild News Here")
      table.text('flag').notNullable()
      table.bigInteger('created_at').defaultTo(new Date().getTime() / 1000)
      table.bigInteger('updated_at').defaultTo(new Date().getTime() / 1000)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
