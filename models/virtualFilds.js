var VIRTUAL_FILDS_CONST = ["password"];

module.exports = {
	
	password : {
		
		set : function(password) {
				this._plainPassword = password;
				this.salt = Math.random() + '';
				this.hashedPassword = this.encryptPassword(password);
             },
		get : function() { return this._plainPassword; }	 
	}
}