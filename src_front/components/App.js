import React from "react"
import NavLink from "./NavLink"
import {POST_ACTIONS} from "../constant/constant"
import './styles/app.css'
//['addSoundFile', "addItem", "addCategory", "login", "registration"]

 export default React.createClass({
  render() {
    return(<div className="App">
	
	        My sounds
				<ul className="navMainUl" role="nav">
					
					<li ><NavLink to={"/sendPost/"+POST_ACTIONS.login[0]} >Войти</NavLink></li>
					<li ><NavLink to={"/sendPost/"+POST_ACTIONS.registration[0]} >Регистрация</NavLink></li>
					
					<li ><NavLink to={"/sendPost/"+POST_ACTIONS.addItem[0]} >Добавить запись</NavLink></li>
					<li ><NavLink to={"/sendPost/"+POST_ACTIONS.addCategory[0]} >Добавить категорию</NavLink></li>
					<li ><NavLink to={"/sendPost/"+POST_ACTIONS.addSoundFile[0]} >Добавить пестню</NavLink></li>
					
					
					<li className="navMainLi"><NavLink to="/categories" >Категории</NavLink></li>

				</ul>
				{this.props.children}				
	       </div> );
  }
})