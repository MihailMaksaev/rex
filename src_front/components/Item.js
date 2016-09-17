import React from "react"


export default React.createClass({
	
	render(){
		const {title, desc, date}= this.props
		return <div> <h3> {title} </h3> <p> {desc} <br/> <span>{date}</span></p> </div>
	}
	
	
	
})