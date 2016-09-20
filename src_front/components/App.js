import React from "react"
import NavLink from "./NavLink"
import {POST_ACTIONS} from "../constant/constant"
//для включения семантик юи
var f = s;
//import './styles/app.css'
//['addSoundFile', "addItem", "addCategory", "login", "registration"]

 export default React.createClass({


  componentDidMount: function() {
	  
	  
	  
  $('.ui.menu .ui.dropdown').dropdown({
        on: 'hover'
      });
      $('.ui.menu a.item')
        .on('click', function() {
          $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')
          ;
        });	 
  }, 
  
  render() {
    return(<div className="App">
	
	        <h3 className="ui block olive header center aligned">Мой сайт визитка</h3>
			
				<div className="ui menu green inverted " role="nav">
					
					<NavLink to="/categories" >Категории</NavLink>
					
					<NavLink to={"/sendPost/"+POST_ACTIONS.addItem[0]} >Добавить запись</NavLink>
					<NavLink to={"/sendPost/"+POST_ACTIONS.addCategory[0]} >Добавить категорию</NavLink>
					<NavLink to={"/sendPost/"+POST_ACTIONS.addSoundFile[0]} >Добавить пестню</NavLink>
										
				<div className="right menu">	
					<div className="ui dropdown item"><i className="user icon"></i> <i className="dropdown icon"></i>
					   <div className="menu">
					        <NavLink  to={"/sendPost/"+POST_ACTIONS.login[0]} >Войти</NavLink>
					        <NavLink to={"/sendPost/"+POST_ACTIONS.registration[0]} >Регистрация</NavLink>
                       </div>
                   </div>
				</div>	

				</div>
				{this.props.children}				
	       </div> );
  }
})


