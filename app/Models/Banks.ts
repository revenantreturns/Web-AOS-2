import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Accounts from './Accounts'

export default class Banks extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public account_id: number

  @belongsTo(() => Accounts, {
    foreignKey: 'account_id'
  })
  public accounts: BelongsTo<typeof Accounts>

  @column()
  public gold: number

}
