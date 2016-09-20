import /*ReactDOM,*/ { findDOMNode } from 'react-dom'
import {FORM_FILDS} from "../constant/constant"

//FORM_FILDS = ['title', "desc", "sound", "category", "username", "password"];
export function fildsValidation(filds, refs, POST_ACTION_CONST){
	
	// обьект с ссылками для очистки полей ввода
	 var sendObj={}, refsArr=[];
	 
	 	 // название запроса(обязательное поле)
	 sendObj[0] = POST_ACTION_CONST;
	
	 for(let j=0; j<filds.length; j++){
 
		 var result = validFild (filds[j].name, FORM_FILDS, sendObj, refs);
		 
		if(!result){ 
		 //console.log(result);
		   return false ;
		}
		else if(result != "no ref"){
			refsArr.push(result);
			}
	
	}
	   // sendObj.created = Date.now();
         /*
		for (var ii=0; ii<refsArr.length; ii++ ){

			findDOMNode(refs[refsArr[ii]].refs[ii]).value = "";
		}
		*/
	    return sendObj;
}


function validFild (fildName, formFildsConst, sendObj, refs){
	//var sendObj = {};
		//console.log('1'+fildName);

			//console.dir(refs);
			var ref = findDOMNode(refs[fildName].refs[fildName]);
			// console.dir(ref);
			if(fildName == FORM_FILDS.categoryId){
             
			 if(!ref.value.trim())return false;
			  
			 	sendObj[fildName] = ref.value;
				
				
				//findDOMNode(refs[fildName].refs[fildName]).value = "";
				console.log(ref.value);
				
				return fildName;

			}
			else if(fildName!=formFildsConst.sound){
				
				//console.dir(ref)
				
				if(!ref.value.trim() || ref.value.length<3)return false;
				
				sendObj[fildName] = ref.value;
				ref.value ="";
				
				return fildName;
												
			}else if(fildName==formFildsConst.sound){
				
					if(!ref.files[0])return false;
			
			       sendObj.file = ref.files[0]//.getDOMNode().files[0];
				
				return "no ref";
			}
	
}

