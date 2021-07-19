import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AccountFriends extends BaseSchema {
  protected tableName = 'account_friends'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('account_id')
      .unsigned()
      .references('accounts.id')
      .onDelete('CASCADE')
      table.string('name')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
