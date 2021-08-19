import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Weapons extends BaseSchema {
  protected tableName = 'weapons'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_web')
      table.string('json_class')
      table.string('description')
      table.string('name')
      table.integer('icon_index')
      table.integer('price')
      table.integer('animation_id')
      table.string('note')
      table.integer('id')
      table.json('features')
      table.string('params')
      table.integer('etype_id')
      table.integer('wtype_id')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
