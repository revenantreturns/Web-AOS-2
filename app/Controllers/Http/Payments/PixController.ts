import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import CashStore from 'App/Models/CashStore'
import Payments from 'App/Models/Payments'
import Configs from 'App/Models/Configs'

const https = require("https")
var axios = require("axios")
var fs = require("fs")
const path = require('path')

export default class PixController {
	public async index(ctx: HttpContextContract) {
		const user = ctx.auth.use('web').user!
		const item = await CashStore.findOrFail(ctx.params.id)
		var cert = fs.readFileSync(
			path.resolve(__dirname, `../../../../certs/${Env.get('GN_CERT')}`)
		)
		var credentials = {
			client_id: Env.get('GN_CLIENT_ID'),
			client_secret: Env.get('GN_CLIENT_SECRET'),
		}
		var data = JSON.stringify({ grant_type: "client_credentials" })
		var data_credentials = credentials.client_id + ":" + credentials.client_secret
		var auth = Buffer.from(data_credentials).toString("base64");

		const agent = new https.Agent({
			pfx: cert,
			passphrase: "",
		})
		const sendCredentials = {
			method: "POST",
			url: Env.get('GN_ENDPOINT').concat("/oauth/token"),
			headers: {
				Authorization: "Basic " + auth,
				"Content-Type": "application/json",
			},
			httpsAgent: agent,
			data: data,
		}
		const authResponse = await axios(sendCredentials)

		const accessToken = authResponse.data?.access_token

		const reqGN = axios.create({
			baseURL: Env.get('GN_ENDPOINT'),
			httpsAgent: agent,
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Content-Type": "application/json",
			}
		})

		const dataCob = {
			calendario: {
				expiracao: 3600 // IN SECONDS
			},
			valor: {
				original: item.price
			},
			chave: Env.get('PIX'),
			solicitacaoPagador: "Informe o número ou identificador do pedido."
		}

		const cobResponse = await reqGN.post('/v2/cob', dataCob)
		const qrcodeResponse = await reqGN.get(`/v2/loc/${cobResponse.data.loc.id}/qrcode`)
		try {
			const payload = await user.related('payments').create({
				status: 0,
				payment_form: 1,
				total: cobResponse.data.valor.original,
				payment_id: cobResponse.data.txid,
				cash: item.qty,
				qrcode: qrcodeResponse.data.qrcode,
				imagemqrcode: qrcodeResponse.data.imagemQrcode
			})
			return ctx.response.redirect().toRoute('pix.payment', [payload.id])
		} catch {
			return ctx.response.json({ error: "erro ao cadastrar no banco de dados" })
		}
	}
	public async payment(ctx: HttpContextContract) {
		const payment = await Payments.findOrFail(ctx.params.id)
		const config = await Configs.findOrFail(1)

		const user = ctx.auth.use('web').user!
		if (payment.account_id == user.id) {
			return ctx.view.render('store/payments/pix', { payment, config })
		}
	}
}
