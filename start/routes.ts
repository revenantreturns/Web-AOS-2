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
 * TEST PAGE
 */
Route.get('/test', 'TestsController.index').as('test')

/**
 * STORE ROUTES
 */
Route
  .group(() => {

  /**
   * LIST ALL STORE
   */
  Route.get('/', 'StoresController/Store.index').as('store')

  /**
   * SHOW STORE
   */
  Route.get('/:id/show', 'StoresController/Store.show').as('store.show')

  /**
   * PAYMENT STORE
   */
  Route.post('/:id/payment', 'StoresController/Store.payment').as('store.payment').middleware('auth')

  /**
   * PAYMENT SUCCESSFULLY
   */
  Route.get('/:id/successfully', 'StoresController/Store.successfully').as('store.success').middleware('auth')

  /**
   * CASH STORE PAGE
   */
  Route.get('/cash', 'StoresController/Cash.index').as('cashpage')

}).prefix('store')

/**
 * ADMIN ROUTES
 */
 Route
 .group(() => {

   /**
    * admin.dashboard.index  /admin/dashboard (GET)
    */
   Route.resource('dashboard', 'Admin/DashboardController').only(['index'])

   /**
    * admin.news.index  /admin/news (GET)
    * admin.news.create /admin/news/create
    * admin.news.store /admin/news (POST)
    * admin.news.show /admin/news/:id (GET)
    * admin.news.edit  /admin/news/:id/edit (GET)
    * admin.news.update /admin/news/:id (PUT, PATCH)
    * admin.news.destroy /admin/news/:id (DELETE)
    */
   Route.resource('news', 'Admin/NewsController')

   /**
    * admin.store.index  /admin/store (GET)
    * admin.store.create /admin/store/create
    * admin.store.store /admin/store (POST)
    * admin.store.show /admin/store/:id (GET)
    * admin.store.edit  /admin/store/:id/edit (GET)
    * admin.store.update /admin/store/:id (PUT, PATCH)
    * admin.store.destroy /admin/store/:id (DELETE)
    */
   Route.resource('store', 'Admin/StoreController')

 })
 .prefix('admin')
 .as('admin')
 .middleware('mod')


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