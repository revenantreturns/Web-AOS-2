import Account from 'App/Models/Accounts'
import Factory from '@ioc:Adonis/Lucid/Factory'
import Actors from 'App/Models/Actors'

export const ActorsFactory = Factory
  .define(Actors, ({ faker }) => {
    return {
      slot_id: 1,
      name: faker.internet.userName(),
      character_name: 'Charset01',
      character_index: 0,
      face_name: 'Charset01',
      face_index: 0,
      class_id: 1,
      sex: 0,
      level: 100,
      exp: 10000,
      hp: 500000,
      mp: 500000,
      mhp: 500000,
      mmp: 500000,
      atk: 1000,
      def: 1000,
      int: 1000,
      res: 1000,
      agi: 1000,
      luk: 1000,
      points: 1000,
      guild_id: 0,
      revive_map_id: 1,
      revive_x: 14,
      revive_y: 3,
      map_id: 1,
      x: 21,
      y: 12,
      direction: 2,
      gold: 999999,
      online: 0,
      comment: "Admin Team",
      last_login: 1610553586
    }
  })
  .build()

export const AccountFactory = Factory
  .define(Account, ({ faker }) => {
    return {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }
  })
  .relation('actors', () => ActorsFactory)
  .build()
