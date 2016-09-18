import React from "react"
import NavLink from "./NavLink"
import {connect} from "react-redux"
import './styles/categories.css'


 var Categories = React.createClass({
  render() {
	  
	const{categories} = this.props;
	//console.log(categories)
    return(<div className="Categories">
		<ul role="nav">
			<li><NavLink to="/categories" onlyActiveOnIndex={true}>Все записи</NavLink></li>
			{
				categories.map((category, i)=>{ 

                 return <li key={i}><NavLink to={"/categories/"+category._id} onlyActiveOnIndex={true}>{category.title}</NavLink></li>

				})	
			}	
		</ul>
		Записи: 
		
		{this.props.children}
	</div>)
  }
})  

function mapStateToProps(state){
	//console.dir(state)
	return{
		
		categories: state.CategoryReducer
		
	}
}

 export default connect(mapStateToProps)(Categories)