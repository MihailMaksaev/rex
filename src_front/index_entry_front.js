import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, IndexRedirect} from 'react-router'

import {Provider} from "react-redux"

import configureStore from './store/configureStore'
import App from './components/App'
import Categories from './components/Categories'
import FilterItems from './containers/FilterItems'
import {POST_ACTIONS, LOAD_URL} from './constant/constant'
import buildForm from './containers/buildForm'
//import './styles/app.css'
//import AddCategory from './containers/AddCategory'

import {loadAll} from "./actions/LoadActions"

 

var store = configureStore({});

store.dispatch(loadAll(LOAD_URL.load_category_items[0], LOAD_URL.load_category_items[1]));
store.dispatch(loadAll(LOAD_URL.load_items[0], LOAD_URL.load_items[1]));

//['addSoundFile', "addItem", "addCategory", "login", "registration"]

render((
<Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
	
	    <IndexRedirect to="/categories" />
		<Route path={"/sendPost"} component={ buildForm(POST_ACTIONS.login)}></Route>
		
        <Route path={"/sendPost/"+POST_ACTIONS.addSoundFile[0]} component={ buildForm(POST_ACTIONS.addSoundFile)}></Route>	
        <Route path={"/sendPost/"+POST_ACTIONS.addItem[0]} component={ buildForm(POST_ACTIONS.addItem)}></Route>
        <Route path={"/sendPost/"+POST_ACTIONS.addCategory[0]} component={ buildForm(POST_ACTIONS.addCategory)}></Route>
        <Route path={"/sendPost/"+POST_ACTIONS.login[0]} component={ buildForm(POST_ACTIONS.login)}></Route>
        <Route path={"/sendPost/"+POST_ACTIONS.registration[0]} component={ buildForm(POST_ACTIONS.registration)}></Route>	

        <Route path="/categories" component={Categories}>
		   <IndexRoute component={FilterItems}/>
		   <Route path="/categories/:catTitle" component={FilterItems}></Route>
		</Route>		
	</Route>	
  </Router>
</Provider>  
), document.getElementById('root'));



//console.log("hello from webpack");
