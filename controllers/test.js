var passport = require('koa-passport');
var TestSchema = require('../models/users').Test;
var validatInput = require('../shared/validateInput');

module.exports = {
	index: async function(ctx, next) {
		console.log('Router hit: /test/index');
		ctx.body = {succes: true, info: "Route hit: /test/index"};
		next();
	},

	create: async function(ctx, next) {
		console.log('Router hit: /test/create');
		ctx.body = {succes: true, info: "Route hit: /test/create"};
		next();
	},

	show: async function(ctx, next) {
		console.log('Router hit: /test/show');
		ctx.body = {succes: true, info: "Route hit: /test/show for id: " + ctx.params.id};
		next();
	},

	update: async function(ctx, next) {
		console.log('Router hit: /test/update');
		ctx.body = {succes: true, info: "Route hit: /test/update for id: " + ctx.params.id};
		next();
	},

	destroy: async function(ctx, next) {
		console.log('Router hit: /test/destroy');
		ctx.body = {succes: true, info: "Route hit: /test/destroy for id: " + ctx.params.id};
		next();
	}
};