import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Accounts from './Accounts'

export default class Ban_List extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public account_id: number

  @belongsTo(() => Accounts, {
    foreignKey: 'account_id'
  })
  public accounts: BelongsTo<typeof Accounts>

  @column()
  public ip: string

  @column()
  public time: number

  @column()
  public ban_date: number

}
