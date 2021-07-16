import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Stores extends BaseSchema {
  protected tableName = 'stores'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('category').notNullable()
      table.text('name').notNullable()
      table.text('description').notNullable()
      table.decimal('price').notNullable()
      table.text('url_image').notNullable()
      table.text('name_image').notNullable()
      table.integer('amount').notNullable()
      table.integer('purchased').notNullable()
      table.integer('item_id').notNullable()
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
