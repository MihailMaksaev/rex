import React from "react"
import Item from "./Item"



 export default React.createClass({
  render() {
	  
	const {items} = this.props  
	//console.dir(items);
    return(<div>
				<p> сдесь будет список песен </p>
				{
					items.map((item, i)=>{
						return <Item title={item.title} desc={item.desc} date={item.date}  key={i} />
				    })
				}
	      </div>);
  }
})



