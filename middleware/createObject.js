var path = require('path'), fs = require('fs');
	
var POST_ACTIONS = require('../src_front/constant/constant').POST_ACTIONS;
// = ['addSoundFile', "addItem", "addCategory", "login", "registration"]	
var PATH_TO_SAVE_AUDIO_FILE = 	'../dist/uploads';

//var allModels = {};

var buildModel = require("../models/buildModels").buildModel; //('user');

module.exports = function saveObjectMid(req, res, next){
	
	saveObject(req.body)
	
function saveObject(objToSave, res){
	
	var POST_ACTION = objToSave['0'];
	
	var linkOnFile;
	
	 delete objToSave['0'];
	 
	 if(objToSave.linkOnFile){
		 
		 linkOnFile = objToSave.linkOnFile;
		 
		 delete objToSave.linkOnFile
	 }
	 

	//if(!allModels[ POST_ACTIONS[POST_ACTION][1] ]){
		
		var model = buildModel(POST_ACTIONS[POST_ACTION][1]);
	
	//}
	
		
	var obj = new model(objToSave);
	
	objToSave = {};

    obj.save(function (err, obj) {
          if (err) {
			  console.log(error);
			  next(new Error('Not today. Sorry.'));
			  //return err;
		  } 
		  
          
		  
		  if(linkOnFile){
			  
			  var mime = linkOnFile.split(".").pop();
			  
			  	    fs.rename(linkOnFile, path.join(path.resolve(__dirname, PATH_TO_SAVE_AUDIO_FILE), obj._id+'.'+mime), function(err, file){
						if(err)console.log(err);
						console.log("147RENAME file");
						
			        });
			  
			  
		  }
		  
		  console.log("153save in db");
          console.log(obj);
		  
		  next();
		  

    });	
}















//var user = new UserModel({username: "mihail", password: "mihail"})
//console.dir(user._doc._id);
/*
user.save(function (err, user) {
  if (err) return console.log(err);
  
  console.log(user);
  //fluffy.speak();
});
*/
/*
UserModel.find({ username: "mihail" }, function (err, users) {
  if (err) return console.log(err);
  users[0].password = "mihail1";
  users[0].save();
  console.log(users);
});
*/
/*
UserModel.authorize("mihail", "mihail", function(err, user){
	
	if(err){console.log(err)}
	
	console.log("user---"+user);
})

*/

/*
var contact = new Contact({
  phone: request.phone,
  status: request.status
});

// Convert the Model instance to a simple object using Model's 'toObject' function
// to prevent weirdness like infinite looping...
var upsertData = contact.toObject();

// Delete the _id property, otherwise Mongo will return a "Mod on _id not allowed" error
delete upsertData._id;
*/
// Do the upsert, which works like this: If no Contact document exists with 
// _id = contact.id, then create a new doc using upsertData.
// Otherwise, update the existing doc with upsertData

/*UserModel.update({name: "admin" }, {updated: Date.now()}, {upsert: true},

     function(err, user){
	 if(err)console.log(err);	 
	 console.log(user);
 });
*/


















}