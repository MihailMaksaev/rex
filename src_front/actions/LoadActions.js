import {LOAD_RESP_STATE, MESSEGE_CONST} from "../constant/constant";
			
export  function loadAll(url, param){
	
	//console.log("load items12");
	
	//return items;
	
	
	return function(dispatch){
			
		dispatch({
               type: LOAD_RESP_STATE.WAIT_LOAD_RESP,
			   payload: MESSEGE_CONST.SERVER_WAIT
            });
			
		fetch(window.location.protocol+'//'+window.location.host+'/'+url+'/'+param)
		
			.then(function(response) {
				
		    dispatch({
               type: LOAD_RESP_STATE.WAIT_LOAD_RESP,
			   payload: false
            });
			//console.log(response);  
			
            return response.json();
			 
        }).then(function(json) {
			
               console.log('parsed json');
			   console.dir(json[param]);
			   
		  dispatch({
               type: param,
			   payload: json[param]
            });
           
			   
        }).catch(function(ex) {
			
               console.log('parsing failed', ex);
        });	


		
	}	
}





















