import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Configs extends BaseSchema {
  protected tableName = 'configs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.text('title').defaultTo('WebAOS 2.0')
      table.text('cash_name').defaultTo('Crystal Coins')
      table.integer('max_news').defaultTo(10)
      table.integer('max_rank').defaultTo(30)
      table.integer('max_rank_guild').defaultTo(30)
      table.integer('max_items_store').defaultTo(20)
      table.text('download_link').defaultTo('Link Here')
      table.integer('discount').defaultTo(0)
      table.text('ip_server').defaultTo('localhost')
      table.integer('port_server').defaultTo(5000)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
