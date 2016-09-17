var  inspect = require('util').inspect;
var Busboy = require('busboy');
var path = require('path'), fs = require('fs');
	
var POST_ACTIONS = require('../src_front/constant/constant').POST_ACTIONS;
// = ['addSoundFile', "addItem", "addCategory", "login", "registration"]	
var PATH_TO_SAVE_AUDIO_FILE = 	'../dist/uploads';


var parseObj = {};


module.exports = function(req, res, next){
 
    var busboy = new Busboy({ headers: req.headers });
	
	
   busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
      console.log('Field [' + fieldname + ']: value: ' + inspect(val));
	  
	  parseObj[fieldname] = val;
	  

	  if(val == POST_ACTIONS.addSoundFile[0]){	// нужно проверить есть ли поле с названием формы
		busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
			
		var saveTo = path.join(path.resolve(__dirname, PATH_TO_SAVE_AUDIO_FILE), filename);	
		
		console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
		
		if(mimetype != 'audio/mp3'){file.resume(); }else{
		  			
			file.pipe(fs.createWriteStream(saveTo));		  
		}
		
			file.on('end', function(arg) {				
				console.log('File [' + fieldname + '] Finished');			
				parseObj.linkOnFile = saveTo;				
			});
			
			
      });		
	 } 		
   });
	
    busboy.on('finish', function() {
				
      console.log('50Done parsing form!');
	 // console.log(parseObj);
	  
      //res.writeHead(303, { Connection: 'close'/*, Location: '/' */});
  
	  req.body=parseObj;
	  
	   next();
    });
    req.pipe(busboy);
  
  
} 





 