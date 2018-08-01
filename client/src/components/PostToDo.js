import React, { Component } from 'react'
import axios from 'axios'


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

			const todo = {
				name: this.state.name
			}

			axios.post('http://localhost:3001/todos', {
				name: name
			}).then(resp => {
				
			})
		}
	}

 	render() {
   	return (
   		<div>
 				<input className="input" type="text" onChange={this.handleChange} onKeyPress={this.handleKeyPress} placeholder="Do the dishes..."/>
 			</div>
   	)
 	}
}

export default PostToDo