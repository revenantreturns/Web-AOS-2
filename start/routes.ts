import Route from '@ioc:Adonis/Core/Route'

/**
 *  HOME
 */
Route.get('/', 'HomeController/Home.index').as('home')

/**
 *  RANK LEVEL
 */
Route.get('/toplevel', 'Account/ActorsController.index').as('toplevel')

/**
 *  RANK GUILDS
 */
Route.get('/topguild', 'GuildsController/Guilds.index').as('topguild')

/**
 *  CLASSES
 */
Route.get('/admin', async ({ view, auth }) => {
  if (await auth.use("web").check()) {
    await auth.use('web').authenticate()
  }
  return view.render('admin/layouts/app')
}).as('admin')

/**
 *  CLASSES
 */
Route.get('/class', async ({ view, auth }) => {
  if (await auth.use("web").check()) {
    await auth.use('web').authenticate()
  }
  return view.render('pages/class')
}).as('class')

/**
 * TEST PAGE
 */
Route.get('/test', async ({ view, auth }) => {
  if (await auth.use("web").check()) {
    await auth.use('web').authenticate()
  }
  return view.render('pages/test')
}).as('test')

/**
 * CASH PAGE
 */
Route.get('/cashpage', async ({ view, auth }) => {
  if (await auth.use("web").check()) {
    await auth.use('web').authenticate()
  }
  return view.render('store/cashpage')
}).as('cashpage')

/**
 * STORE PAGE
 */
Route.get('/store', async ({ view, auth }) => {
  if (await auth.use("web").check()) {
    await auth.use('web').authenticate()
  }
  return view.render('store/store')
}).as('store').middleware('mod')

/**
 * AUTH
 */
Route.get('/login', "Auth/LoginController.login").as("login")
Route.post('/auth', "Auth/LoginController.auth").as("auth")
Route.get('/newaccount', "Auth/RegistersController.newaccount").as("newaccount")
Route.post('/register', "Auth/RegistersController.register").as("register")
Route.get('/generatemany', "Account/AccountsController.generateMany").as("generatemany")
Route.get('/accounts', "Account/AccountsController.index").as("accounts")
Route.get('/logout', async ({ auth, response }) => {
  await auth.use('web').logout()
  response.redirect('/login')
}).as('logout')

/**
 * ADMIN ROUTES
 */
 Route
 .group(() => {

   /**
    * admin.dashboard.index  /admin/dashboard (GET)
    * admin.dashboard.create /admin/dashboard/create
    * admin.dashboard.store /admin/dashboard (POST)
    * admin.dashboard.show /admin/dashboard/:id
    * admin.dashboard.edit  /admin/dashboard/:id/edit
    * admin.dashboard.update /admin/dashboard/:id (PUT, PATCH)
    * admin.dashboard.destroy /admin/dashboard/:id (DELETE)
    */
   Route.resource('dashboard', 'Admin/DashboardController')

   /**
    * admin.news.index  /admin/news (GET)
    * admin.news.create /admin/news/create
    * admin.news.store /admin/news (POST)
    * admin.news.show /admin/news/:id
    * admin.news.edit  /admin/news/:id/edit
    * admin.news.update /admin/news/:id (PUT, PATCH)
    * admin.news.destroy /admin/news/:id (DELETE)
    */
   Route.resource('news', 'Admin/NewsController')

   /**
    * admin.store.index  /admin/store (GET)
    * admin.store.create /admin/store/create
    * admin.store.store /admin/store (POST)
    * admin.store.show /admin/store/:id
    * admin.store.edit  /admin/store/:id/edit
    * admin.store.update /admin/store/:id (PUT, PATCH)
    * admin.store.destroy /admin/store/:id (DELETE)
    */
   Route.resource('store', 'Admin/StoreController')

 })
 .prefix('admin')
 .as('admin')
 .middleware('mod')
