import { column, beforeSave, BaseModel, hasMany, HasMany, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Actors from './Actors'
import Ban_List from './Ban_List'
import Banks from './Banks'
import Payments from './Payments'
import CryptoJS from 'crypto-js';
import Distributor from './Distributor'

export default class Accounts extends BaseModel {

  @hasMany(() => Actors, {
    foreignKey: 'account_id',
  })
  public actors: HasMany<typeof Actors>

  @hasMany(() => Distributor, {
    foreignKey: 'account_id',
  })
  public distributor: HasMany<typeof Distributor>

  @hasMany(() => Ban_List, {
    foreignKey: 'account_id',
  })
  public ban_list: HasMany<typeof Ban_List>

  @hasOne(() => Banks, {
    foreignKey: 'account_id',
  })
  public banks: HasOne<typeof Banks>

  @hasMany(() => Payments, {
    foreignKey: 'account_id',
  })
  public payments: HasMany<typeof Payments>

  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public email: string

  @column()
  public group: number

  @column()
  public vip_time: number

  @column()
  public cash: number

  @column()
  public rememberMeToken?: string

  @column()
  public created_at: number

  @column()
  public updated_at: number

  @beforeSave()
  public static async hashPassword(accounts: Accounts) {
    if (accounts.$dirty.password) {
      var hash = CryptoJS.MD5(accounts.password).toString()
      accounts.password = hash
    }
  }
}
