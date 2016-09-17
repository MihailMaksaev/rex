import {connect} from "react-redux"
//import LoadItems from "../actions/LoadItems"
import ListItem from "../components/ListItems"


 function mapStateToProps(state){
	 
	 return {
		 
		 items: state.ItemReducer

	 }
	 
 }
 




const VisibleItems = connect(mapStateToProps)(ListItem);


export default VisibleItems;