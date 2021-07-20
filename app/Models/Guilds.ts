import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Guilds extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public leader: string

  @column()
  public notice: string

  @column()
  public description: string

  @column()
  public flag: string

  @column()
  public created_at: number

  @column()
  public updated_at: number

  // AUXILIAR
  public icon: String;
}
