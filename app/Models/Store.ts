import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Store extends BaseModel {

  public static table = 'store'

  @column({ isPrimary: true })
  public id: number

  @column()
  public category: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public price: number

  @column()
  public url_image: string

  @column()
  public name_image: string

  @column()
  public amount: number

  @column()
  public purchased: number

  @column()
  public item_id: number

  @column()
  public created_at: number

  @column()
  public updated_at: number
}
