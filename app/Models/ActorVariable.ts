import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Actors from './Actors'

export default class ActorVariable extends BaseModel {

  public static table = 'actor_variables'

  @column({ isPrimary: true })
  public id: number

  @column()
  public actor_id: number

  @belongsTo(() => Actors, {
    foreignKey: 'actor_id'
  })
  public actors: BelongsTo<typeof Actors>

  @column()
  public variable_id: number

  @column()
  public value: number
}
