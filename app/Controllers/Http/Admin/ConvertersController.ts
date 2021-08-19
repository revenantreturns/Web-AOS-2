import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import Weapon from 'App/Models/Weapon'

export default class ConvertersController {

  /**
   *
   * @param ctx
   */
  public async converter(ctx: HttpContextContract) {
    return ctx.view.render('admin/converter/index')
  }

  /**
   *
   * @param ctx
   */
  public async weapons(ctx: HttpContextContract) {
    var guard = ctx.request.file('filejson')
    if (guard) {
      await guard.move(Application.tmpPath('uploads'))
      const jsonObject = require(Application.tmpPath('uploads/' + guard?.fileName + ''))
      var objectKeysArray = Object.keys(jsonObject)
      objectKeysArray.forEach(async (key) => {
        var obj = jsonObject[key]
        await Weapon.create({
          json_class: obj.json_class,
          description: obj['@description'],
          name: obj['@name'],
          icon_index: obj['@icon_index'],
          price: obj['@price'],
          animation_id: obj['@animation_id'],
          note: obj['@note'],
          id: obj['@id'],
          params: obj['@params'].toString(),
          etype_id: obj['@etype_id'],
          wtype_id: obj['@wtype_id'],
        })
      })
    }
  }

  /**
   *
   * @param ctx
   */
  public async actors(ctx: HttpContextContract) {

  }

  /**
   *
   * @param ctx
   */
  public async enemies(ctx: HttpContextContract) {

  }

  /**
   *
   * @param ctx
   */
  public async armors(ctx: HttpContextContract) {

  }

  /**
   *
   * @param ctx
   */
  public async classes(ctx: HttpContextContract) {

  }

  /**
   *
   * @param ctx
   */
  public async commonevents(ctx: HttpContextContract) {

  }

  /**
   *
   * @param ctx
   */
  public async items(ctx: HttpContextContract) {

  }

  /**
   *
   * @param ctx
   */
  public async maps(ctx: HttpContextContract) {

  }

  /**
   *
   * @param ctx
   */
  public async skills(ctx: HttpContextContract) {

  }

  /**
   *
   * @param ctx
   */
  public async states(ctx: HttpContextContract) {

  }

  /**
   *
   * @param ctx
   */
  public async system(ctx: HttpContextContract) {

  }

  /**
   *
   * @param ctx
   */
  public async tilesets(ctx: HttpContextContract) {

  }

  /**
   *
   * @param ctx
   */
  public async troops(ctx: HttpContextContract) {

  }

}
