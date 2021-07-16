import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DashboardController {

  public async index({view}: HttpContextContract) {
    return view.render('admin/dashboard')
  }

  public async create({}: HttpContextContract) {

  }

  public async store({}: HttpContextContract) {

  }

  public async show({}: HttpContextContract) {

  }

  public async edit({}: HttpContextContract) {

  }

  public async update({}: HttpContextContract) {

  }

  public async destroy({}: HttpContextContract) {

  }

}
