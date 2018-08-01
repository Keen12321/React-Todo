import React, { Component } from 'react'
import { getData, addToDo, deleteToDo } from '../actions/todoData'
import {connect} from 'react-redux'

class Home extends Component {
	state = {
		name: '',
		id: ''
	}

		componentDidMount() {
			getData()
		}	

		handleChange = event => {
			this.setState({
				name: event.target.value,
				id: event.target.value
			})
		}

		handleKeyPress = event => {
			if (event.key === 'Enter') {
				event.preventDefault()
				addToDo(this.state.name)
				this.setState({
					name: ''
				})
			}
		}

		handleSubmit = event => {
			event.preventDefault()
			deleteToDo()
		}


	 	render() {
	   	return (
	 			<div>
	 				<div className="title">Todo List</div>
	 				<input className="input" type="text" onChange={this.handleChange} onKeyPress={this.handleKeyPress} placeholder="Do the dishes..."/>
					{this.props.data.map((data, i) => (
						<div>
							<div>{data.name}</div>
							<button onClick={this.handleSubmit}>Delete</button>
						</div>
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