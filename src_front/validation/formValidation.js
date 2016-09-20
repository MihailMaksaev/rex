import /*ReactDOM,*/ { findDOMNode } from 'react-dom'
import {FORM_FILDS} from "../constant/constant"

//FORM_FILDS = ['title', "desc", "sound", "category", "username", "password"];
export function fildsValidation(filds, refs, POST_ACTION_CONST){
	
	// обьект с ссылками для очистки полей ввода
	 var sendObj={}, refsArr=[];
	 
	 	 // название запроса(обязательное поле)
	 sendObj[0] = POST_ACTION_CONST;
	
	 for(let j=0; j<filds.length; j++){
 
		 var result = validFild (filds[j],  sendObj, refs);
		 
		if(!result){ 
		 //console.log(result);
		   return false ;
		}
		else if(result != "no ref"){
			refsArr.push(result);
	    }
	
	}
	   // sendObj.created = Date.now();
         
		for (var ii=0; ii<refsArr.length; ii++ ){
			
			findDOMNode(refs[refsArr[ii]].refs[refsArr[ii]]).value = "";
		}
		
	    return sendObj;
}


function validFild (fild,  sendObj, refs){

			var ref = findDOMNode(refs[fild.name].refs[fild.name]);
            
			if(fild.type=="file"){
				
				if(!ref.files[0])return false;
			
			      sendObj.file = ref.files[0]//.getDOMNode().files[0];
				
				return "no ref";
			}
			else if(fild.type!='file'){
				
				if(!ref.value.trim())return false;
				
				sendObj[fild.name] = ref.value;
				
				return fild.name;												
		   }	
}

