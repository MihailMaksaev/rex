import React from 'react'
//import /*ReactDOM,*/ { findDOMNode } from 'react-dom'
import {fildsValidation} from "../validation/formValidation"
import Messenger from "./Messenger"

import {models} from "../models/models"

import TextField from "./formFields/text"
import SelectField from "./formFields/select"

import {FORM_FILDS} from "../constant/constant"

import { browserHistory } from 'react-router'



const FORM_ERROR = "form_error";


export default React.createClass({
	
 formValid: false,
		
 componentDidMount: function() { //ставим фокус в input
    
	//console.log(s);
//console.log(this.props.POST_ACTION_CONST);

var filds ={};

models[this.props.POST_ACTION_CONST[1]].formFilds.forEach((fild, i)=>{
	//console.dir(fild);
	//console.dir(FORM_FILDS[fild.name]);
	filds[fild.name] ={
		identifier : fild.name,
		rules: FORM_FILDS[fild.name][1]
	}
})

 this.formValid= $('form');
 
//console.dir(this.formValid);

 this.formValid.form({
    on: 'blur',
    fields: filds	
  });	

      //console.dir(formValid);
	 // console.dir(formValid.form('is valid'));
	
  },
	
  addItem( filds, submitForm,  POST_ACTION_CONST,resetMess, e){
		
     e.preventDefault();
	 
	 var semanticValidation = this.formValid.form('is valid');
	 
	 var sendObj = fildsValidation(filds, this.refs, POST_ACTION_CONST);
	 
	 if(!sendObj || !semanticValidation ){
		 
		// console.log("отправка формы"+this.formValid.form('is valid'));
        //если ошибка добавляем сообщение с ошибкой 		 
		resetMess(FORM_ERROR); 
		return;
	 }

    
	 
		console.dir(sendObj);
	
        submitForm(sendObj);	

         //this.forceUpdate();	

       browserHistory.push('/');	 
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





