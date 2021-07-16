import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Configs extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public cash_name: string

  @column()
  public max_news: number

  @column()
  public max_rank: number

  @column()
  public max_rank_guild: number

  @column()
  public max_items_store: number

  @column()
  public download_link: string

  @column()
  public discount: number

  @column()
  public ip_server: string

  @column()
  public port_server: number

}
