import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BankWeapons extends BaseSchema {
  protected tableName = 'bank_weapons'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('bank_id')
      .unsigned()
      .references('banks.id')
      .onDelete('CASCADE')
      table.integer('weapon_id').notNullable()
      table.integer('amount').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
