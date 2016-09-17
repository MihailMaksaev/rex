import {LoadCategories} from "../actions/LoadActions"

const ADD_CATEGORY = "add_category";

const LOAD_CATEGORY = "load_category_items";



const initialState  = [];
					 
export default function CategoryReducer(state=initialState, action){
	
	switch (action.type){
		case ADD_CATEGORY:
		return[
		...action.payload,
		state
		]
		
		case LOAD_CATEGORY:
		//console.log(action.payload);
		return action.payload;

		default: return state;		
	}	
}					 