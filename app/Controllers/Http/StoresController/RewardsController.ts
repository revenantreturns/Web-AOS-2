import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BoxFree from 'App/Models/BoxFree'

export default class RewardsController {
  public async boxfree(ctx: HttpContextContract) {
    const box = await BoxFree.all()
    let total = 0
    box.forEach(box => {
      total = total + box.rate
    })
    let x = Math.floor(Math.random() * total)
    let y
    for(let i = 0; i < box.length; i++) {
      x = x - box[i].rate
      if (x <= 0) {
        y = box[i].id
        break
      }
    }
    const result = await BoxFree
      .query()
      .where('id', y)
      .firstOrFail()
    return ctx.view.render('store/result', { result })
  }
}
