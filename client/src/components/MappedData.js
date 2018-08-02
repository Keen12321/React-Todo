import React, { Component } from 'react'
import { updateStatus, deleteToDo } from '../actions/todoData'

class MappedData extends Component {
	state ={
		color: ''
	}

	componentDidMount() {
		if (this.props.status === 'incomplete') {
			this.setState({
				color: 'rgb(42 100 235)'
			}) 
		} else {
			this.setState({
				color: 'white'
			})
		}
	}

	update = (event) => {
		document.getElementById("textfield1").value = "";
		if (this.props.status === 'incomplete') {
			updateStatus(this.props.id, 'complete')
			this.setState({
				color: 'white'
			})
		} else {
			updateStatus(this.props.id, 'incomplete')
			this.setState({
				color: 'rgb(42 100 235)'
			})
		}
	}

	delete = (event) => {
		deleteToDo(this.props.id)
	}

 	render() {
   	return (
   		<div className="todoContainer">
	   		<div className="todoItem">{this.props.name}</div>
	   			<div className="icons">
			   		<i style={{color: this.state.color}} onClick={this.update} id="check" className="fa fa-check"></i>
			 			<i id="trash" onClick={this.delete} className="fa fa-trash"></i>
			 		</div>
	 		</div>
   	)
 	}
}

export default MappedData