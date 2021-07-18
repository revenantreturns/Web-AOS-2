import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class News extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public content: string

  @column()
  public writer: string

  @column()
  public type: number

  @column()
  public created_at: number

  @column()
  public updated_at: number

  public toType: string

  public toPosition: number

}
