import {LoadItems} from '../actions/LoadActions'


 const ADD_ITEM = "add_item";
 
 const LOAD_ITEMS = "load_items";


 const initialState = []; // LoadItems();

 
 export default function ItemReducer(state=initialState, action){
	 
	 switch (action.type) {
		 
		 case ADD_ITEM : 		 
		 return[
		 ...state,
		 action.payload
		 ]
		 
		 case LOAD_ITEMS : 		 
		 return action.payload
		 
		 default: return state;
		 
	 }
	 
	 
 }