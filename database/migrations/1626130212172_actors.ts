import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Actors extends BaseSchema {
  protected tableName = 'actors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table
      .integer('account_id')
      .unsigned()
      .references('accounts.id')
      .onDelete('CASCADE')
      table.integer('slot_id').notNullable()
      table.string('name').notNullable()
      table.string('character_name').notNullable()
      table.integer('character_index').notNullable()
      table.string('face_name').notNullable()
      table.integer('face_index').notNullable()
      table.integer('class_id').notNullable()
      table.integer('sex').notNullable()
      table.integer('level').notNullable()
      table.integer('exp').notNullable()
      table.integer('hp').notNullable()
      table.integer('mp').notNullable()
      table.integer('mhp').notNullable()
      table.integer('mmp').notNullable()
      table.integer('atk').notNullable()
      table.integer('def').notNullable()
      table.integer('int').notNullable()
      table.integer('res').notNullable()
      table.integer('agi').notNullable()
      table.integer('luk').notNullable()
      table.integer('points').notNullable()
      table.integer('guild_id').notNullable().defaultTo(0)
      table.integer('revive_map_id').notNullable()
      table.integer('revive_x').notNullable()
      table.integer('revive_y').notNullable()
      table.integer('map_id').notNullable()
      table.integer('x').notNullable()
      table.integer('y').notNullable()
      table.integer('direction').notNullable()
      table.integer('gold').notNullable().defaultTo(0)
      table.integer('online').notNullable().defaultTo(0)
      table.text('comment').notNullable().defaultTo("Hello World!")
      table.bigInteger('last_login').notNullable()
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
