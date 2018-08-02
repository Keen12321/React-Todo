import React, { Component } from 'react'
import { getData } from '../actions/todoData'
import {connect} from 'react-redux'

import PostToDo from './PostToDo'
import MappedData from './MappedData'

class Home extends Component {

	componentDidMount() {
		getData()
	}

 	render() {
   	return (
 			<div>
 				<div className="title">Todo List</div>
 				<PostToDo />
				{this.props.data.map((data, i) => (
					<MappedData {...data}/>
				))}
 			</div>
	   )
	 }
}

	function mapStateToProps(appState) {
		return {
			data: appState.data
		}
	}


export default connect(mapStateToProps)(Home)