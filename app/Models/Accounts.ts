import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Actors from './Actors'
import Ban_List from './Ban_List'
import Banks from './Banks'

export default class Accounts extends BaseModel {

  @hasMany(() => Actors, {
    foreignKey: 'account_id',
  })
  public actors: HasMany<typeof Actors>

  @hasMany(() => Ban_List, {
    foreignKey: 'account_id',
  })
  public ban_list: HasMany<typeof Ban_List>

  @hasOne(() => Banks, {
    foreignKey: 'account_id',
  })
  public banks: HasOne<typeof Banks>

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
  public vip_time: DateTime

  @column()
  public cash: number

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(accounts: Accounts) {
    if (accounts.$dirty.password) {
      accounts.password = await Hash.make(accounts.password)
    }
  }
}
