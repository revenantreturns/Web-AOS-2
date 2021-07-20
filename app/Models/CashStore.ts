import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class CashStore extends BaseModel {

  public static table = 'cash_store'

  @column({ isPrimary: true })
  public id: number

  @column()
  public qty: number

  @column()
  public bonus: number

  @column()
  public price: number

  @column()
  public purchased: number

  @column()
  public created_at: number

  @column()
  public updated_at: number
}
