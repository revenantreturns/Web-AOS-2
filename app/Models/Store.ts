import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Store extends BaseModel {
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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
