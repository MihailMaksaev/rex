


var POST_ACTIONS = { addSoundFile: ['addSoundFile', 'sound', 'create' ],
                     addItem: ['addItem', 'item', 'create'],
					 addCategory: ['addCategory', 'category', 'create'],
					 login: ['login', 'user', 'authorization' ],
					 registration: ['registration', 'user', 'create']};
					 
					 
var LOAD_RESP_STATE ={
	//ожидание ответа при POST запросе
	WAIT_RESP: "WAIT_RESP",
	// ожидание ответа при GET запросе
	WAIT_LOAD_RESP: "WAIT_LOAD_RESP"		
}

var MESSEGE_CONST ={
	
	SERVER_ERROR: "server_error",
    SERVER_SUCCESS: "server_success",
    SERVER_WAIT: "server_wait"		
}	


const LOAD_URL ={
	load_items: ["load", "load_items", "item" ],
	load_category_items: ["load", "load_category_items", "category" ]
}
					 


var FORM_FILDS = {
	title: ["title",[
		  {
			type :   'minLength[3]',
			prompt : 'больше букв!'
		  }
		  
        ] ],
    desc: ["desc",[
		  {
			type :   'minLength[3]',
			prompt : 'больше букв!'
		  }
		  
        ] ],
    sound: ["sound", []],
	category: ["category", [
		  {
			type :   'minLength[1]',
			prompt : 'чегото не хватает'
		  }
		  
        ]],
	username: ["username", [
		  {
			type :   'minLength[3]',
			prompt : 'больше букв имени!'
		  }
		  
        ]],
	password: ["password",[
		  {
			type :   'minLength[3]',
			prompt : 'больше букв в паспорте!'
		  }
		  
        ]]
				 };
				   
				   

			   
//	export  {POST_ACTIONS, FORM_FILDS};

module.exports.LOAD_URL = LOAD_URL;

module.exports.MESSEGE_CONST = MESSEGE_CONST;

module.exports.LOAD_RESP_STATE = LOAD_RESP_STATE;

module.exports.POST_ACTIONS = POST_ACTIONS;

module.exports.FORM_FILDS = FORM_FILDS;