import React from 'react'
//import /*ReactDOM,*/ { findDOMNode } from 'react-dom'
import {fildsValidation} from "../validation/formValidation"
import Messenger from "./Messenger"
import {models} from "../models/models"


const FORM_ERROR = "form_error";




//nameFilds - название формы для отправки

export default React.createClass({
	
  addItem( filds, submitForm,  POST_ACTION_CONST,resetMess, e){
		
     e.preventDefault();
	 
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
	const{POST_ACTION_CONST,  submitForm, resetMess, ...rest} = this.props;
	//console.dir(rest.forSelect);   

		return(<div> 
	             <h3>{POST_ACTION_CONST[0]}9</h3>
		         <form method="post"  className="form" onSubmit={ this.addItem.bind(this, models[POST_ACTION_CONST[1]].formFilds, submitForm, POST_ACTION_CONST[0], resetMess) } >
				 
				 {
					 models[POST_ACTION_CONST[1]].formFilds.map((item, i)=>{
						 
						 if(item.type=="select"){
							 
							 return(<div key={i}><select  type={item.type} name={item.name} ref={item.name}>
							 
							 {rest.forSelect.map((item, i)=><option key={i} value={item._id}>{item.title}</option>)}
							       
			                 </select></div>);							 
						 }
						 
						 
						 return<div key={i} ><input onBlur={resetMess} type={item.type} name={item.name} ref={item.name}/></div>
						 
						 })					 
				 }
				     <Messenger/>
				   

					
					<button className="button" onClick={resetMess}  type="submit">OK</button>
		         </form>		
		      </div>)		
	}
	
	
	
})
				







