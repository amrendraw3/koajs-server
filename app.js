var koa = require('koa'),
    path = require('path'),
    views = require('koa-views'),
    config = require('config'),
    cors = require("kcors"),
    serve = require('koa-static'),
    convert = require('koa-convert'),
    passport = require('koa-passport'),
    bodyParser = require('koa-bodyparser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/' + config.database.name);

var app = new koa();
app.use(cors());
app.use(bodyParser());

// app.use(passport.initialize());
// app.use(passport.session());

// initialize render helper
app.use(views('/Users/amrendra/work/tayh-app/dist', config.template.options));

require('./routes')(app);

app.listen(3000);