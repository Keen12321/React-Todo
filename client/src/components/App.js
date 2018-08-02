import React, { Component } from 'react'
import '../styles/App.css'
import store from '../store'
import {Provider} from 'react-redux'

import Home from './Home'
import Filter from './Filter'

class App extends Component {
  render() {
    return (
    	<Provider store = {store}>
    		<div className="border">
		      <div className="container">
		        <Home />
		        <Filter />
	      	</div>
	     	</div>
	    </Provider>
    )
  }
}

export default App
