import React from "react"
import Item from "./Item"



 export default React.createClass({
  render() {
	 var category = "Все категории" 
	  if(this.props.params.catTitle)category = this.props.params.catTitle
	  
	const {items} = this.props  
	//console.dir(items);
    return(<div>		
				<h3>{category}</h3>
				{
					items.map((item, i)=>{
						if(category != "Все категории" && item.category != category)return
						return <Item  title={item.title} desc={item.desc} created={item.created}  key={i} />
				    })
				}
	      </div>);
  }
})



