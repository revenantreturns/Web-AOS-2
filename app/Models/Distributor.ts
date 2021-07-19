import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Accounts from './Accounts'

export default class Distributor extends BaseModel {
  
  public static table = "distributor"
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public account_id: number

  @belongsTo(() => Accounts, {
    foreignKey: 'account_id'
  })
  public accounts: BelongsTo<typeof Accounts>

  @column()
  public item_id: number

  @column()
  public kind: number

  @column()
  public amount: number

}
