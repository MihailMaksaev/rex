var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rex');

var db = mongoose.connection;

db.on('error', function(){ console.log( 'connection error:') });
db.once('open', function() {
	
     console.log('connection open');
	
});

var VIRTUAL_FILDS_CONST = ["password"];
//var configureStore = require('../src_front/store/configureStore').default;
// front models
var models= require('../src_front/models/models').models;
var virtual = require('./virtualFilds');
var methods =require('./methods').methods;
var statics =require('./methods').statics;

var allModels = {};



function buildModel(POST_ACTION_MODEL){
	
if(allModels[POST_ACTION_MODEL])return allModels[POST_ACTION_MODEL];

var param ={};

var formFilds = models[POST_ACTION_MODEL].formFilds;
var otherFilds = models[POST_ACTION_MODEL].otherFilds;
var virtualFilds = [];
	
	for (var i=0; i<formFilds.length; i++ ){
		
		if(!formFilds[i].validType.virtual){
		param[formFilds[i].name] = formFilds[i].validType;
		}else{
			if(formFilds[i].name == VIRTUAL_FILDS_CONST[0]){
				param.hashedPassword = param.salt = formFilds[i].validType;
			}
			virtualFilds.push(formFilds[i].name);
		}
	}
	for (var i=0; i<otherFilds.length; i++ ){
		
		if(!otherFilds[i].validType.virtual){
			
			param[otherFilds[i].name] = otherFilds[i].validType;
			
		}else{
			
			virtualFilds.push(formFilds[i].name);
		}
	}
	
	
	
var Schema = mongoose.Schema(param);

//Schema.set('autoIndex', false);

if(virtualFilds.length>0){
	for (var j=0; j<virtualFilds.length; j++ ){
		
		if(virtual[virtualFilds[j]]){
			
			Schema.virtual(virtualFilds[j]).set(virtual[virtualFilds[j]].set).get(virtual[virtualFilds[j]].get);
		}
	}	
}

if(methods[POST_ACTION_MODEL]){
	
	for (var key in methods[POST_ACTION_MODEL]){
		
		Schema.methods[key] = methods[POST_ACTION_MODEL][key]; 
	}	
}

if(statics[POST_ACTION_MODEL]){
	
	for (var key in statics[POST_ACTION_MODEL]){
		
		Schema.statics[key] = statics[POST_ACTION_MODEL][key]; 
	}	
}
allModels[POST_ACTION_MODEL] = mongoose.model(POST_ACTION_MODEL, Schema);
return 	allModels[POST_ACTION_MODEL];
	
}

module.exports.buildModel = buildModel; // 