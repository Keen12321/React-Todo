const initialState = {
	data: [],
	filter: 'all',
	count: 0
}

export default function (state = initialState, action) {
	switch(action.type) {
		case 'GET_DATA':
			return {...state, data:action.payload}
		case 'COUNT':
			return {...state, count: action.payload}
		case 'FILTER':
			return {...state, filter: action.payload}
		default:
			return state
	}
}

