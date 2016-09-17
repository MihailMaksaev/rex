import {POST_ACTIONS, LOAD_RESP_STATE, MESSEGE_CONST} from "../constant/constant";


export function sendItemOnServerAction(obj){
	
	return function (dispatch/*, getState*/){
				
		    dispatch({
               type: LOAD_RESP_STATE.WAIT_RESP,
			   payload: MESSEGE_CONST.SERVER_WAIT
            })	
            var data = new FormData();
	
	        for(var key in obj){
		
		        data.append(key, obj[key]);
	        }
	
            fetch(window.location.protocol+'//'+window.location.host+'/'+POST_ACTIONS[obj['0']][2], {
               method: 'POST', 
			   contentType: false, // важно - убираем форматирование данных по умолчанию
               processData: false, // важно - убираем преобразование строк по умолчанию
			   body: data,
			   credentials: 'include' // нужно будет изменить на конкретый юрл пока что шлет куки на любой
            }).then(function(response) {
			   //console.log(document.cookie);
               //console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
               //console.log(response.status); // 200
			   
			   	 dispatch({
					type: LOAD_RESP_STATE.WAIT_RESP,
					payload: MESSEGE_CONST.SERVER_SUCCESS 
                 })

                return response.json();
            }).then(function(obj) {
				
             console.log(obj); 
			 
           }).catch(function(err){
			   console.log("err  "+err.status);
			   
			  dispatch({
                type: LOAD_RESP_STATE.WAIT_RESP,
			    payload: MESSEGE_CONST.SERVER_ERROR 
              })			  
		   });
	 
	}	
}

export function resetMessAction(mess){
	//console.log(mess);
	return {
              type: LOAD_RESP_STATE.WAIT_RESP,
			  payload: mess || false
           }	
}




