module.exports = function(app) {
	var Router 		= require('koa-router'), 
			webController 	= require('../controllers/website');
			userController 	= require('../controllers/user'),
			router = new Router();

	// Website APIs
	router.post('/', webController.getHome);
	router.post('/website/create', webController.create);
	router.post('/website/update', webController.update);
	router.post('/website/getpage', webController.getPage);
	router.post('/website/all', webController.getAll);
	router.post('/website/delete', webController.delete);
	router.post('/website/deleteAll', webController.deleteAll);
	router.post('/website/active', webController.active);
	router.post('/website/deactive', webController.deactive);
	router.post('/website/count', webController.count);

	// Users APIs
	router.post('/users', userController.create);
	router.post('/users/all', userController.getAll);
	router.post('/users/update', userController.update);
	router.post('/users/delete', userController.delete);
	router.post('/users/deleteAll', userController.deleteAll);
	router.post('/users/active', userController.active);
	router.post('/users/deactive', userController.deactive);
	router.post('/users/count', userController.count);

	app
  .use(router.routes())
  .use(router.allowedMethods());

};