import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Accounts extends BaseSchema {
  protected tableName = 'accounts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('username').unique().notNullable()
      table.string('password').notNullable()
      table.string('email').unique().notNullable()
      table.integer('group').defaultTo(0)
      table.timestamp('vip_time').defaultTo(this.now())
      table.text('cash').defaultTo(0)
      table.string('rememberMeToken')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
