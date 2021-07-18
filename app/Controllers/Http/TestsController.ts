import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const geoip = require('geoip-lite')

export default class TestsController {
  public async index(ctx: HttpContextContract) {
    const geo = geoip.lookup("177.55.205.30")
    return ctx.view.render('pages/test', { geo })
  }
}
