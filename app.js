var NODE_ENV = process.env.NODE_ENV || 'development';

if(NODE_ENV == 'development')require('babel-register')({presets: [ 'es2015' ]});



var testES;


testES = require("./test_babel/").lol;

console.log(testES);

var express = require('express');
var path = require('path');

/*
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config');
*/

var routes = require('./routes/routes');
//var bodyParser = require('body-parser');
//var cookieParser = require('cookie-parser');
var session = require('express-session');



var app = express();
var PORT = 3000;


app.engine('ejs', require("ejs-locals"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


if(NODE_ENV=='development'){
var webpackDevMiddleware = require('webpack-dev-middleware');
require('./webpack.config').dev(app, webpackDevMiddleware);
	
}

//var compiler = webpack(config);
//app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));

//app.use(cookieParser());
//app.use(bodyParser.json()); // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.use(session({
  secret: "secret",
  key: "sid",
  resave: false,
  saveUninitialized: false,
  cookie: { path: '/', httpOnly: false,  maxAge: 1000*60*60/* null*/ }
 
}));
//app.use(function(req, res, next){res.header('Access-Control-Allow-Credentials', 'true'); next();})
app.use(express.static(path.join(__dirname, "dist")));
// добавляем роуты
routes(app);



app.use(function(err, req, res, next){
	
	if(err)console.log(err);
		
});

app.listen(PORT, function(error){ 
                
	if(error)console.log(error);     
     

console.info("listen port %s in your browser", PORT)  });