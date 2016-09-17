var LOAD_URL = require('../src_front/constant/constant').LOAD_URL;

var buildModel = require("../models/buildModels").buildModel;

module.exports = function (req, res, next){
	
	var model = buildModel(LOAD_URL[req.params.param][2]);
	
	model.find( function (err, models) {
		
             if (err){				 
				//console.log(err);				  
				next(err);
			 } 
 
             res.models = models;
			// console.log(models);
			 next();
    });	
}	
		
	



