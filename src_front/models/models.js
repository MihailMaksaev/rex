import {FORM_FILDS} from "../constant/constant"
//["title", "desc", "sound", "category", "username", "password"];

var models ={
	
	user: {
		formFilds: [{name: FORM_FILDS.username[0], type: "text", 
		             validType: {
									type: String,
									required: true,
									unique: true
					}},
 		            {name: FORM_FILDS.password[0], type: "password",
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
		formFilds: [{name: FORM_FILDS.title[0], type: "text",
		             validType: {
									type: String,
									required: true
					}}, 
		           {name: FORM_FILDS.desc[0], type: "textarea",
				    validType: {
									type: String,
									required: true
					}}, 
				   {name: FORM_FILDS.category[0], type: "select",
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
		formFilds: [{name: FORM_FILDS.title[0], type: "text",
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
		formFilds: [{name: FORM_FILDS.sound[0], type: "file", accept: "mp3",
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

