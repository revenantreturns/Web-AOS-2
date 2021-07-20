import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CashStore extends BaseSchema {
  protected tableName = 'cash_store'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('qty').notNullable()
      table.integer('bonus').notNullable().defaultTo(0)
      table.string('price').notNullable()
      table.integer('purchased').defaultTo(0)
      table.bigInteger('created_at').defaultTo(new Date().getTime() / 1000)
      table.bigInteger('updated_at').defaultTo(new Date().getTime() / 1000)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
