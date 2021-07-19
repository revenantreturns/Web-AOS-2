import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Actors from './Actors'

export default class ActorSwitch extends BaseModel {

  public static table = 'actor_switches'

  @column({ isPrimary: true })
  public id: number

  @column()
  public actor_id: number

  @belongsTo(() => Actors, {
    foreignKey: 'actor_id'
  })
  public actors: BelongsTo<typeof Actors>

  @column()
  public switch_id: number

  @column()
  public value: number

}
