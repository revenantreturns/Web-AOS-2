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
   * SHOW STORE
   */
    Route.get('/boxfree', 'StoresController/RewardsController.boxfree').as('store.boxfree')

  /**
   * PAYMENT STORE
   */
  Route.post('/:id/payment', 'StoresController/Store.payment').as('store.payment').middleware('auth')

  /**
   * PAYMENT SUCCESSFULLY
   */
  Route.get('/:id/successfully', 'StoresController/Store.successfully').as('store.success').middleware('auth')

  /**
  * store.pix.index  /store/pix/:id/payment  (GET)
  */
  Route.get('pix/:id/new', 'Payments/PixController.index').as('pix.new').middleware('auth')

  /**
  * store.pix.index  /store/pix/:id/payment  (GET)
  */
  Route.get('pix/:id/payment', 'Payments/PixController.payment').as('pix.payment').middleware('auth')

  /**
   * CASH STORE PAGE
   */
  Route.get('/cash', 'StoresController/Cash.index').as('cashpage')

}).prefix('store')

/**
* ROUTE RESPONSE PAYMENT PIX
*/
Route.post('/paymentsuccessfully', 'Payments/PaymentSuccessfulliesController.index')

/**
* ROUTE RESPONSE PAYMENT PIX
*/
Route.post('/paymentsuccessfully/pix', 'Payments/PaymentSuccessfulliesController.pix')


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
    * admin.webhook.index  /admin/webhook (GET)
    */
   Route.resource('webhook', 'Admin/WebHooksController').only(['index'])

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

   /**
    * admin.boxfree.index  /admin/boxfree (GET)
    * admin.boxfree.create /admin/boxfree/create
    * admin.boxfree.store /admin/boxfree (POST)
    * admin.boxfree.show /admin/boxfree/:id (GET)
    * admin.boxfree.edit  /admin/boxfree/:id/edit (GET)
    * admin.boxfree.update /admin/boxfree/:id (PUT, PATCH)
    * admin.boxfree.destroy /admin/boxfree/:id (DELETE)
    */
   Route.resource('boxfree', 'Admin/BoxFreeController')

   /**
    * admin.cash.index  /admin/cash (GET)
    * admin.cash.create /admin/cash/create
    * admin.cash.store /admin/cash (POST)
    * admin.cash.show /admin/cash/:id (GET)
    * admin.cash.edit  /admin/cash/:id/edit (GET)
    * admin.cash.update /admin/cash/:id (PUT, PATCH)
    * admin.cash.destroy /admin/cash/:id (DELETE)
    */
   Route.resource('cash', 'Admin/CashController')


   /**
    * Converters
    */
   Route.get('converter', 'Admin/ConvertersController.converter').as('converter')
   Route.post('weapons', 'Admin/ConvertersController.weapons').as('weapons')

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
