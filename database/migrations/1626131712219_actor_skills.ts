import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ActorSkills extends BaseSchema {
  protected tableName = 'actor_skills'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('actor_id')
      .unsigned()
      .references('actors.id')
      .onDelete('CASCADE')
      table.integer('skill_id').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
