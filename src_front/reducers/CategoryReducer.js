import {LoadCategories} from "../actions/LoadActions"

const ADD_CATEGORY = "add_category";

const LOAD_CATEGORY = "load_category_items";



const initialState  = [];
					 
export default function CategoryReducer(state=initialState, action){
	
	switch (action.payload){
		case ADD_CATEGORY:
		return[
		...action.payload,
		state
		]
		
		case LOAD_CATEGORY:
		return action.payload;

		default: return state;		
	}	
}					 