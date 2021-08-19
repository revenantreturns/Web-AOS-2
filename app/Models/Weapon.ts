import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Weapon extends BaseModel {

  public static table = 'weapons'

  @column({ isPrimary: true })
  public id_web: number

  @column()
  public json_class: string

  @column()
  public description: string

  @column()
  public name: string

  @column()
  public icon_index: number

  @column()
  public price: number

  @column()
  public animation_id: number

  @column()
  public note: string

  @column()
  public id: number

  @column()
  public features: string

  @column()
  public params: string

  @column()
  public etype_id: number

  @column()
  public wtype_id: number
}
