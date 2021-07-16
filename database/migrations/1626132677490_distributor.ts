import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Distributor extends BaseSchema {
  protected tableName = 'distributor'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('account_id')
      .unsigned()
      .references('accounts.id')
      .onDelete('CASCADE')
      table.integer('item_id').notNullable()
      table.integer('kind').notNullable()
      table.integer('amount').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
