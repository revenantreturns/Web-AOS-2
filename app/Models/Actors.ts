import { DateTime } from 'luxon'
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Accounts from './Accounts'

export default class Actors extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @column()
  public account_id: number

  @belongsTo(() => Accounts, {
    foreignKey: 'account_id'
  })
  public accounts: BelongsTo<typeof Accounts>

  @column()
  public slot_id: number

  @column()
  public name: string

  @column()
  public character_name: string

  @column()
  public character_index: number

  @column()
  public face_name: string

  @column()
  public face_index: number

  @column()
  public class_id: number

  @column()
  public sex: number

  @column()
  public level: number

  @column()
  public exp: number

  @column()
  public hp: number

  @column()
  public mp: number

  @column()
  public mhp: number

  @column()
  public mmp: number

  @column()
  public atk: number

  @column()
  public def: number

  @column()
  public int: number

  @column()
  public res: number

  @column()
  public agi: number

  @column()
  public luk: number

  @column()
  public points: number

  @column()
  public guild_id: number

  @column()
  public revive_map_id: number

  @column()
  public revive_x: number

  @column()
  public revive_y: number

  @column()
  public map_id: number

  @column()
  public x: number

  @column()
  public y: number

  @column()
  public direction: number

  @column()
  public gold: number

  @column()
  public online: number

  @column()
  public comment: string

  @column()
  public last_login: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public topPosition: number

  public toSex: string
}
