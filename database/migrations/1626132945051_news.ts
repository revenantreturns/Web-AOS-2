import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class News extends BaseSchema {
  protected tableName = 'news'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('title').notNullable()
      table.text('content').notNullable()
      table.text('writer').notNullable()
      table.integer('type').notNullable()
      table.bigInteger('created_at').defaultTo(new Date().getTime() / 1000)
      table.bigInteger('updated_at').defaultTo(new Date().getTime() / 1000)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
