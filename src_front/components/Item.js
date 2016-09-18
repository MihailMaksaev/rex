import React from "react"


export default React.createClass({
	
	render(){
		const {title, desc, created}= this.props
		var date = new Date(created)
		return <div> <h3> {title} </h3> <p> {desc} <br/> <span>{date.getFullYear()+":"+date.getMonth()+":"+date.getDate()}</span></p> </div>
	}
	
	
	
})