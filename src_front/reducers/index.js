import {combineReducers} from "redux"
 
import ItemReducer from "./ItemReducer"
import CategoryReducer from "./CategoryReducer"
//import FormFildsReducer from "./FormFildsReducer"
import MainStateReducer from "./MainStateReducer"


export default combineReducers({
	
	ItemReducer,
	CategoryReducer,
	//FormFildsReducer,
	MainStateReducer
})