import {FORM_FILDS} from "../constant/constant"
//["title", "desc", "sound", "category", "username", "password"];

var models ={
	
	user: {
		formFilds: [{name: FORM_FILDS.username, type: "text", 
		             validType: {
									type: String,
									required: true,
									unique: true
					}},
 		            {name: FORM_FILDS.password, type: "password",
					 validType: {
									type: String,
									required: true,
									virtual: true
								
					}}],
					
		otherFilds: [{name: "created", type: "number",
		             validType: {
		                            type: Number,
		                            default: Date.now 
                     }},
  		            {name: "role", type: "number", 
					validType: {
		                            type: Number,
		                            default: 1
                    }}],
	},
	item: {
		formFilds: [{name: FORM_FILDS.title, type: "text",
		             validType: {
									type: String,
									required: true
					}}, 
		           {name: FORM_FILDS.desc, type: "text",
				    validType: {
									type: String,
									required: true
					}}, 
				   {name: FORM_FILDS.categoryId, type: "select",
				   validType: {
									type: String,
									required: true
					}}],
		otherFilds: [{name: "created", type: "number", 
		             validType: {
		                            type: Number,
		                            default: Date.now
                    }}],
	},
    category: {
		formFilds: [{name: FORM_FILDS.title, type: "text",
		            validType: {
									type: String,
									required: true
					}}],
		otherFilds: [{name: "created", type: "number", 
		              validType: {
		                            type: Number,
		                            default: Date.now 
                    }}],
	},
	sound: {
		formFilds: [{name: FORM_FILDS.sound, type: "file", 
		            validType: {
		                            type: Number
                    }}],
		otherFilds: [{name: "created", type: "number", 
		              validType: {
		                            type: Number,
		                            default: Date.now
                    }}],
	}
	
	
}

export {models};

