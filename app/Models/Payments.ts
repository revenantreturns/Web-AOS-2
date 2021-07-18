import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Accounts from './Accounts'

export default class Payments extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public account_id: number

  @belongsTo(() => Accounts, {
    foreignKey: 'account_id'
  })
  public accounts: BelongsTo<typeof Accounts>

  @column()
  public status: number

  @column()
  public payment_form: number

  @column()
  public total: number

  @column()
  public description: string

  @column()
  public created_at: number

  @column()
  public updated_at: number
}
