import axios from 'axios'
import store from '../store'

export function getData() {
	var filter = store.getState().filter

	var fil = ''

	if (filter === 'all') {
		fil = ''
	}

	if (filter === 'completed') {
		fil = '?status=complete'
	}

	if (filter === 'active') {
		fil = '?status=incomplete'
	}

	axios.get('http://localhost:3001/todos' + fil).then(resp => {
		store.dispatch({
			type: 'GET_DATA',
			payload: resp.data
		})
	})

	axios.get('http://localhost:3001/todos?status=incomplete').then(resp => {
		store.dispatch({
			type: 'COUNT',
			payload: resp.data.length
		})
	})
}

export function filter(filter) {
	store.dispatch({
		type: 'FILTER',
		payload: filter
	})

	getData()
}

export function addToDo(name) {
	axios.post('http://localhost:3001/todos', {
		name: name,
		status: 'incomplete'
	}).then(resp => {
		getData()
	})
}

export function updateStatus(id, status) {
	axios.patch('http://localhost:3001/todos/' + id, {
		status: status
	}).then(resp => {
		getData()
	})
}

export function deleteToDo(id) {
	axios.delete('http://localhost:3001/todos/' + id).then(resp => {
		getData()
	})
}