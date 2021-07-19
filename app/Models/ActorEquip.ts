import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Actors from './Actors'

export default class ActorEquip extends BaseModel {

  public static table = 'actor_equips'

  @column({ isPrimary: true })
  public id: number

  @column()
  public actor_id: number

  @belongsTo(() => Actors, {
    foreignKey: 'actor_id'
  })
  public actors: BelongsTo<typeof Actors>

  @column()
  public slot_id: number

  @column()
  public equip_id: number

}
