import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Stores extends BaseSchema {
  protected tableName = 'store'

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
      table.bigInteger('created_at').defaultTo(new Date().getTime() / 1000)
      table.bigInteger('updated_at').defaultTo(new Date().getTime() / 1000)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
