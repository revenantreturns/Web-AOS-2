import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class BoxFree extends BaseModel {

  public static table = 'box_free'

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public item_id: number

  @column()
  public category_item: number

  @column()
  public amount: number

  @column()
  public rate: number

  @column()
  public available: number

  @column()
  public border_color: string

  @column()
  public created_at: number

  @column()
  public updated_at: number
}
