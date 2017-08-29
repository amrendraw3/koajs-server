module.exports = function(app) {
	var Router 		= require('koa-router'), 
			webController 	= require('../controllers/website');
			userController 	= require('../controllers/user'),
			bookingController = require('../controllers/booking');
			testController = require('../controllers/test');
			routeHandler = require('./routeHandler');
			router = new Router();

	// Do anything before processing route
	app.use(function(ctx, next){
		console.log('A route has been hit: ', ctx.request.body);
		next();
	})

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
	router.post('/users/bookings', userController.bookings);

	// User register/login management
	router.post('/login', userController.authenticate);

	// Booking APIs
	router.post('/booking', bookingController.create);
	router.post('/booking/all', bookingController.getAll);
	router.post('/booking/update', bookingController.update);
	router.post('/booking/delete', bookingController.delete);
	router.post('/booking/deleteAll', bookingController.deleteAll);
	router.post('/booking/active', bookingController.active);
	router.post('/booking/deactive', bookingController.deactive);
	router.post('/booking/count', bookingController.count);

	// Test Route APIs
	router.get('/test', testController.index); // get all documents
	router.post('/test', testController.create); // create a new record
	router.get('/test/:id', testController.show); // get one record with matching id
	router.put('/test/:id', testController.update) // update a document with matching id
	router.delete('/test/:id', testController.destroy) // delete a record with matching id

	app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(function(ctx, next){ // Handle request that matches no routes defined
  	console.log('A non-matching route has been hit!');
  	ctx.body = {succes: false, code: 404, info: 'A non-matching route has been hit!'};
  	next();
  })
  .use(function(ctx, body){ // Do anything after processing route
  	console.log('Route has been processed, response: ', ctx.response.body);
  });

};