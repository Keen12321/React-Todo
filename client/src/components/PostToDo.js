import React, { Component } from 'react'
import { addToDo } from '../actions/todoData'


class PostToDo extends Component {
	state = {
		name: '',
	}

	handleChange = event => {
		this.setState({
			name: event.target.value
		})
	}

	handleKeyPress = event => {
		if (event.key === 'Enter') {
			event.preventDefault()
			addToDo(this.state.name)
			document.getElementById("input").value = "";
			this.setState({
				name: ''
			})
		}
	}

 	render() {
   	return (
	 		<input id="input" type="text" onChange={this.handleChange} onKeyPress={this.handleKeyPress} placeholder="Do the dishes..."/>
   	)
 	}
}

export default PostToDo