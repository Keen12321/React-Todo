import axios from 'axios'
import store from '../store'

export function getData() {
	axios.get('http://localhost:3001/todos').then(resp => {
		store.dispatch({
			type: 'GET_DATA',
			payload: resp.data
		})
		console.log(resp.data)
	})
}

export function addToDo(todo) {
	axios.post('http://localhost:3001/todos', {
		name: todo
	}).then(resp => {
		getData()
	})
}

export function deleteToDo() {
	axios.delete(`http://localhost:3001/todos/${this.state.id}`).then(resp => {
		getData()
	})
}