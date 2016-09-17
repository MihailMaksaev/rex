var crypto = require('crypto');

module.exports.methods = {
	
	user: {
		
		encryptPassword: function(password) {
              return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
        },
		
	    checkPassword: function(password) {
           return this.encryptPassword(password) === this.hashedPassword;
        }	
				
	}
	
	
	
}


module.exports.statics = {
	
	user: {
		
		authorize: function(username, password, callback) {			
			var User = this;
			
			User.findOne({username: username}, function(err, user){
				if(err)console.log("error find user"+err);
				
				        if (user.checkPassword(password)) {
										callback(null, user);
						} else {
						callback(new Error("Пароль неверен"));
				}
			});
		}
	}
	
}