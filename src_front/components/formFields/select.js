import React from "react"



export default React.createClass({
	
	render(){
		
		const{name, type, forSelect}=this.props;
		
		return(<div className="field"><label>{name}</label>
							 
							 <select  type={type} name={name} ref={name}>
							 
							 {forSelect.map((item, i)=><option key={i} value={item._id}>{item.title}</option>)}
							       
			   </select></div>)
		
	}
	
})