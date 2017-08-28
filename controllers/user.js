var UserSchema = require('../models/users').User;
var validatInput = require('../shared/validateInput');

module.exports = {
	create: async function (ctx, next) {
		ctx.body = await UserSchema.create(ctx.request.body);
		next()
	},

	update: async function(ctx, next) {
		ctx.body = await UserSchema.update({_id: ctx.request.body._id}, {$set: ctx.request.body}, {upsert: false})
	},

	getAll: async function(ctx, next) {
		ctx.body = await UserSchema.find({});
		next();
	},

	delete: async function(ctx, next) {
		ctx.body = await UserSchema.remove(ctx.request.body);
		next();
	},

	deleteAll: async function(ctx, next) {
		ctx.body = await UserSchema.remove({});
		next();
	},

	active: async function(ctx, next) {
		ctx.body = await UserSchema.update({_id: ctx.request.body._id}, {$set: {active: true}}, {multi: false});
	},

	deactive: async function(ctx, next) {
		ctx.body = await UserSchema.update({_id: ctx.request.body._id}, {$set: {active: false}}, {multi: false});
	},

	count: async function(ctx, next){
		ctx.body = await UserSchema.count({});
	}
};