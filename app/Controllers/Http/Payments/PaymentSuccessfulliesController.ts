import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PaymentSuccessfulliesController {
	public async index(ctx: HttpContextContract) {

	}
	public async pix(ctx: HttpContextContract) {
		console.log(ctx.request.body)
		
	}
}
