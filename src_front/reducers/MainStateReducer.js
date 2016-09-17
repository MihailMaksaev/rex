//import {SendItemOnServer} from "../actions/SendToServerActions"

import {LOAD_RESP_STATE} from "../constant/constant";

const initialState = {
	wait_resp: false, // send
	
	wait_load_res: false
	
}

export default function (state=initialState, action){
	
	switch (action.type){
		case LOAD_RESP_STATE.WAIT_RESP:
		return Object.assign({}, state, {wait_resp: action.payload});
		
		case LOAD_RESP_STATE.WAIT_LOAD_RESP:
		return Object.assign({}, state, {wait_load_res: action.payload});
		
		default: return state;
	}
	
}