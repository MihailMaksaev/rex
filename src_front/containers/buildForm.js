
import {connect} from "react-redux"
import {sendItemOnServerAction, resetMessAction} from "../actions/SendToServerActions"
import addForm from "../components/addForm"



/*
function mapStateToProps (state){

	return {
		//wait: state.MainStateReducer.wait_resp,
		forSelect: state.CategoryReducer, // если есть зависимые от состояния поля
		
		filds: state.FormFildsReducer//.addItem// [{name: "title", type: "text"}, {name: "desc", type: "text"}, {name: "category", type: "select"}]
		
	}
	
}
*/
function mapDispatchToProps (dispatch){
	
	 return {
           submitForm: (obj) => {
             dispatch(sendItemOnServerAction(obj))
            },
			resetMess : (mess)=>{
				dispatch(resetMessAction(mess))
			}
	 }
}

 function buildForm(POST_ACTION_CONST){
	
	var mapStateToProps = new Function('state', 
	' return{ forSelect: state.CategoryReducer,'+
	'POST_ACTION_CONST: ["'+POST_ACTION_CONST[0]+'", "'+POST_ACTION_CONST[1]+'" ],'+
	//'filds: state.FormFildsReducer["'+POST_ACTION_CONST+'"]
	'}');

	return connect(mapStateToProps, mapDispatchToProps)(addForm);
	
}
export default buildForm;

