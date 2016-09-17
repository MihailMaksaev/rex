import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'

import {Provider} from "react-redux"

import configureStore from './store/configureStore'
import App from './components/App'
import FilterItems from './containers/FilterItems'
import {POST_ACTIONS, LOAD_URL} from './constant/constant'
import buildForm from './containers/buildForm'
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
	    <IndexRoute component={FilterItems}/> 
        <Route path={"/sendPost/"+POST_ACTIONS.addSoundFile[0]} component={ buildForm(POST_ACTIONS.addSoundFile)}></Route>	
        <Route path={"/sendPost/"+POST_ACTIONS.addItem[0]} component={ buildForm(POST_ACTIONS.addItem)}></Route>
        <Route path={"/sendPost/"+POST_ACTIONS.addCategory[0]} component={ buildForm(POST_ACTIONS.addCategory)}></Route>
        <Route path={"/sendPost/"+POST_ACTIONS.login[0]} component={ buildForm(POST_ACTIONS.login)}></Route>
        <Route path={"/sendPost/"+POST_ACTIONS.registration[0]} component={ buildForm(POST_ACTIONS.registration)}></Route>		
	</Route>	
  </Router>
</Provider>  
), document.getElementById('root'));



//console.log("hello from webpack");
