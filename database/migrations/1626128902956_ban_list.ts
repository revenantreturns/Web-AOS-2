import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BanList extends BaseSchema {
  protected tableName = 'ban_list'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('account_id')
      .unsigned()
      .references('accounts.id')
      .onDelete('CASCADE')
      table.string('ip')
      table.bigInteger('time')
      table.bigInteger('ban_date')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
