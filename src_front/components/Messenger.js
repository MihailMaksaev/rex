import React from "react"
import {connect} from "react-redux"


const SERVER_ERROR = "server_error";
const SERVER_SUCCESS = "server_success";
const SERVER_WAIT = "server_wait";
const FORM_ERROR = "form_error";

var Messenger =  React.createClass({
	
	render(){
				
		var wait = this.props.message;
	    var mess ="";
	    if(wait == SERVER_WAIT)mess = "Идет отправка данных";
		if(wait == SERVER_ERROR)mess = "данные не сохранены - ошибка сервера";
		if(wait == SERVER_SUCCESS)mess = "данные сохранены";
		if(wait == FORM_ERROR)mess = "данные не корректны либо не введены";
		
		//console.log("render messenger");
		return<div>
		          {mess}
		     </div>
		
		
	}
	
})

function mapStateToProps(state){
	
	return{
		message: state.MainStateReducer.wait_resp
	}
	
}

export default connect(mapStateToProps)(Messenger);