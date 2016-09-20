var NODE_ENV = process.env.NODE_ENV || 'development';
if(NODE_ENV == 'development')require('babel-register')({presets: [ 'es2015' ]});

var express = require('express');
var path = require('path');

var routes = require('./routes/routes');

//var cookieParser = require('cookie-parser');
var session = require('express-session');



var app = express();
var PORT = 3001;


app.engine('ejs', require("ejs-locals"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


if(NODE_ENV=='development'){
var webpackDevMiddleware = require('webpack-dev-middleware');
require('./webpack.config').dev(app, webpackDevMiddleware);
	
}


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
	
	var status = 404;
	if(err.status)status = err.status; 
	var mess = "not found";
	if(err.message)mess= err.message;
	
	res.status(status).send({ error: mess });
		
});

app.listen(PORT, function(error){ 
                
	if(error)console.log(error);     
     

console.info("listen port %s in your browser", PORT)  });