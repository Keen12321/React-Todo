import React, { Component } from 'react'
import { filter, addToDo } from '../actions/todoData'

class Filter extends Component {
	all = (event) => {
		filter('all')
	}
	
	active = (event) => {
		filter('active')
	}

	completed = (event) => {
		filter('completed')
	}

 	render() {
   	return (
   		<div className="filter">
	 			<a onClick={this.all}>All</a>
	 			<a onClick={this.active}>Active</a>
	 			<a onClick={this.completed}>Complete</a>
	 		</div>
   	)
 	}
}

export default Filter