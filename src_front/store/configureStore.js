import {createStore, applyMiddleware} from "redux"
import CombineReducer from '../reducers'
//import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

export default function(initialState){
	//let logger = createLogger();
	
	return createStore(CombineReducer, initialState, applyMiddleware(/*logger,*/ thunk));
}