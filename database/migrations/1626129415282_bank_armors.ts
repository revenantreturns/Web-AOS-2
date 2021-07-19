import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BankArmors extends BaseSchema {
  protected tableName = 'bank_armors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('bank_id')
      .unsigned()
      .references('banks.id')
      .onDelete('CASCADE')
      table.integer('armor_id', 2).notNullable()
      table.integer('amount', 2).notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
