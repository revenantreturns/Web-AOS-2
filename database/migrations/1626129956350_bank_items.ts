import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BankItems extends BaseSchema {
  protected tableName = 'bank_items'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('bank_id')
      .unsigned()
      .references('banks.id')
      .onDelete('CASCADE')
      table.integer('item_id').notNullable()
      table.integer('amount').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
