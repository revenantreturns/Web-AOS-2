import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Enemies extends BaseSchema {
  protected tableName = 'enemies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_web')
      table.string('json_class')
      table.string('name')
      table.integer('gold')
      table.integer('battler_hue')
      table.integer('exp')
      table.integer('hit')
      table.string('battler_name')
      table.json('actions')
      table.string('note')
      table.integer('id')
      table.integer('eva')
      table.json('features')
      table.string('params')
      table.json('drop_items')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
