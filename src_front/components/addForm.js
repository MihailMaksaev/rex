import React from 'react'
//import /*ReactDOM,*/ { findDOMNode } from 'react-dom'
import {fildsValidation} from "../validation/formValidation"
import Messenger from "./Messenger"

import {models} from "../models/models"

import TextField from "./formFields/text"
import SelectField from "./formFields/select"

const FORM_ERROR = "form_error";

export default React.createClass({
	
	
componentDidMount: function() { 
    
var formValid= $('form');

 formValid.form({
    on: 'blur',
    fields: {
      username: {
      identifier  : 'username',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter a value'
          }
        ]
      }
    }
  });	

	
  },
	
  addItem( filds, submitForm,  POST_ACTION_CONST,resetMess, e){
		
     e.preventDefault();
	 //console.log(this.refs);
	 
	 var sendObj = fildsValidation(filds, this.refs, POST_ACTION_CONST);
	 
	 if(!sendObj){
        //если ошибка добавляем сообщение с ошибкой 		 
		resetMess(FORM_ERROR); 
		return;
	 }	
		//console.dir(sendObj);
	
        submitForm(sendObj);		
  },
  
	
	render(){
	const nameFilds = this.props.params["nameToAdd"]; // параметр списка полей, также передается на сервер
	//console.log(nameFilds);
	const{POST_ACTION_CONST,  submitForm, resetMess, forSelect} = this.props;
	
	
	//console.dir(rest.forSelect);   

		return(<div style={{width: '500px', margin: 'auto'}} className="ui blue segment">
                		
	             <h4 className="ui block header center aligned">{POST_ACTION_CONST[0]} form.</h4>
				
		         <form method="post"  className="ui form" 
				 onSubmit={ this.addItem.bind(this, models[POST_ACTION_CONST[1]].formFilds,
				 submitForm, POST_ACTION_CONST[0], resetMess) }>
				 
				 {
					models[POST_ACTION_CONST[1]].formFilds.map((item, i)=>{
						 
						 if(item.type=="select"){
							 
							 return<SelectField forSelect={forSelect} key={i} ref={item.name} name={item.name} type={item.type} />							 
						 }
						 
						 return <TextField valRemove={this.updateFl} key={i} ref={item.name} name={item.name} type={item.type} resetMess={resetMess} />
					})	
                         					 
				 }
				     		   					
					<button onClick={resetMess} className="ui button"  type="submit">Submit</button>
					
					
					
					<div className="ui error message"></div>
					
					
		         </form>		
		      </div>)		
	}
	
	
	
})



				

//





