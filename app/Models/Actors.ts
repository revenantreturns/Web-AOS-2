import { column, hasMany, HasMany, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Accounts from './Accounts'
import ActorEquip from './ActorEquip'
import ActorHotBar from './ActorHotBar'
import ActorSkill from './ActorSkill'
import ActorSwitch from './ActorSwitch'
import ActorVariable from './ActorVariable'

export default class Actors extends BaseModel {

  @column({ isPrimary: true })
  public id: number

  @hasMany(() => ActorEquip, {
    foreignKey: 'actor_id',
  })
  public actor_equips: HasMany<typeof ActorEquip>

  @hasMany(() => ActorSkill, {
    foreignKey: 'actor_id',
  })
  public actor_skill: HasMany<typeof ActorSkill>

  @hasMany(() => ActorSwitch, {
    foreignKey: 'actor_id',
  })
  public actor_switches: HasMany<typeof ActorSwitch>

  @hasMany(() => ActorVariable, {
    foreignKey: 'actor_id',
  })
  public actor_variables: HasMany<typeof ActorVariable>

  @hasMany(() => ActorHotBar, {
    foreignKey: 'actor_id',
  })
  public actor_hotbar: HasMany<typeof ActorHotBar>

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

  @column()
  public created_at: number

  @column()
  public updated_at: number

  public topPosition: number

  public toSex: string
}
