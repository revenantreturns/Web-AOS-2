import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'

const https = require("https")
var axios = require("axios")
var fs = require("fs")
const path = require('path')

export default class WebHooksController {
	public async index(ctx: HttpContextContract) {

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

		const dataCob = {
			webhookUrl: "https://baiakmcz.com.br/paymentsuccessfully"
		}

		const req = {
			method: "PUT",
			url: Env.get('GN_ENDPOINT').concat(`/v2/webhook/${Env.get('PIX')}`),
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Content-Type": "application/json",
			},
			httpsAgent: agent,
			data: dataCob,
		}

		console.log(req)


		const reqRes = await axios(req)
		

	}
}
