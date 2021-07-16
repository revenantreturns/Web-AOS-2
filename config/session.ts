import Env from '@ioc:Adonis/Core/Env'
import Application from '@ioc:Adonis/Core/Application'
import { SessionConfig } from '@ioc:Adonis/Addons/Session'

const sessionConfig: SessionConfig = {
  enabled: true,
  driver: Env.get('SESSION_DRIVER'),
  cookieName: 'adonis-session',
  clearWithBrowser: false,
  age: '2h',
  cookie: {
    path: '/',
    httpOnly: true,
    sameSite: false,
  },
  file: {
    location: Application.tmpPath('sessions'),
  },
  redisConnection: 'local',
}

export default sessionConfig
