import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BoxFree extends BaseSchema {
  protected tableName = 'box_free'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.integer('item_id').notNullable()
      table.integer('category_item').notNullable()
      table.integer('amount').notNullable().defaultTo(1)
      table.integer('rate').notNullable().defaultTo(100)
      table.integer('available').notNullable().defaultTo(1)
      table.string('border_color')
      table.bigInteger('updated_at').defaultTo(new Date().getTime() / 1000)
      table.bigInteger('created_at').defaultTo(new Date().getTime() / 1000)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
