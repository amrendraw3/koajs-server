var WebsiteSchema = require('../models/website').Website;
var validatInput = require('../shared/validateInput');

module.exports = {
	create: async function (ctx, next) {
		ctx.body = await WebsiteSchema.create(ctx.request.body);
		next()
	},

	update: async function(ctx, next) {
		ctx.body = await WebsiteSchema.update({_id: ctx.request.body._id}, {$set: ctx.request.body}, {upsert: false})
	},

	getHome: async function(ctx, next) {
		ctx.body = await WebsiteSchema.findOne({name: "Home"});
		next();
	},

	getPage: async function(ctx, next) {
		ctx.body = await WebsiteSchema.findOne(ctx.request.body);
		next();
	},

	getAll: async function(ctx, next) {
		ctx.body = await WebsiteSchema.find({});
		next();
	},

	delete: async function(ctx, next) {
		ctx.body = await WebsiteSchema.remove(ctx.request.body);
		next();
	},

	deleteAll: async function(ctx, next) {
		ctx.body = await WebsiteSchema.remove({});
		next();
	},

	active: async function(ctx, next) {
		ctx.body = await WebsiteSchema.update({_id: ctx.request.body._id}, {$set: {active: true}}, {multi: false});
	},

	deactive: async function(ctx, next) {
		ctx.body = await WebsiteSchema.update({_id: ctx.request.body._id}, {$set: {active: false}}, {multi: false});
	},

	count: async function(ctx, next){
		ctx.body = await WebsiteSchema.count({});
	}
};