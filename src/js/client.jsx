import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Layout from './components/Layout.jsx'
import store from './store'

ReactDOM.render(
	<Provider store={ store }>
		<Layout />
	</Provider>,
	document.getElementById( 'content' )
);
