import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Payments extends BaseSchema {
  protected tableName = 'payments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('account_id')
        .unsigned()
        .references('accounts.id')
        .onDelete('CASCADE')
      table.integer('status').notNullable().defaultTo(0)
      table.integer('payment_form').notNullable()
      table.decimal('total').notNullable()
      table.string('payment_id').notNullable()
      table.decimal('cash').notNullable()
      table.text('description').notNullable()
      table.bigInteger('created_at').defaultTo(new Date().getTime() / 1000)
      table.bigInteger('updated_at').defaultTo(new Date().getTime() / 1000)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
