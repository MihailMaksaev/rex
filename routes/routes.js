var parseFileForm = require('../middleware/parseFileForm');
var createObject = require('../middleware/createObject');
var loadItems = require('../middleware/loadItems');

var NODE_ENV = process.env.NODE_ENV || 'development';
console.log(NODE_ENV);
var path = require('path');


module.exports = function (app){
		
    app.get("/load/:param", loadItems, function(req, res ){
		
		//console.log("load__"+ req.params.param);
		res.status(200).jsonp({ [""+req.params.param]: res.models });
	});	
	
    app.post("/create", parseFileForm, createObject,  function(req, res, next){	
    //res.header('Access-Control-Allow-Credentials', 'true');	
	
		var sess = req.session;
	
		if(sess.views){
			sess.views++;
		}
     
      res.status(200).jsonp({ mess: 'данные сохранены' });	 
    });	
	
if(NODE_ENV != "production")	{
	app.get("/*",  function(req, res){
		
		var sess = req.session;
		if(sess.views){
			sess.views++;
		}else{
			sess.views =1;
		}
	 //console.log(req.cookies);	

		res.render('index', {title: "hello world", NODE_ENV: NODE_ENV});     
	});
}else{
	
	app.get("/*",  function(req, res){
		
		var sess = req.session;
		if(sess.views){
			sess.views++;
		}else{
			sess.views =1;
		}
	 ///console.log(sess);
	 //console.log(req.cookies);	

		 res.sendFile(path.resolve(__dirname, '../dist/index.html'));       
	});	
}

}	
 /*
	   app.get("/test",  function(req, res){
		
		var sess = req.session;
		if(sess.views){
			sess.views++;
		}else{
			sess.views =1;
		}
	 ///console.log(sess);
	 //console.log(req.cookies);	
   res.sendFile(path.resolve(__dirname, '../dist/index.html'));
		
	 
	// console.log(req.body );       
	});
   */ 

	

