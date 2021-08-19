import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ActorsInfo extends BaseSchema {
  protected tableName = 'actors_info'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_web')
      table.string('json_class')
      table.string('name')
      table.integer('face_index')
      table.integer('character_index')
      table.integer('initial_level')
      table.string('face_name')
      table.string('character_name')
      table.integer('id')
      table.json('features')
      table.string('note')
      table.string('equips')
      table.string('nickname')
      table.string('description')
      table.integer('max_level')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
