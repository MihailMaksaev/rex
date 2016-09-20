import React from "react"





export default React.createClass({
	
  render(){
    	
	var{name, type, resetMess} = this.props;
	
	var inp = <input onBlur={resetMess} type={type} ref={name} name={name}  placeholder={name}/>;
	
	var inpTextArea  = <textarea onBlur={resetMess} ref={name} name={name}   placeholder={name}></textarea>;
	
	if(type =='textarea')inp =  inpTextArea;

	return(<div className="field">
			    <label>{name}</label>
				{inp}
		   </div>)		
  }	
})