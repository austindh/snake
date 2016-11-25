import React from 'react';
import { connect } from 'react-redux';

import Window from './Window.jsx';

//Defines how component will listen to state (which part of state to be passed to component)
function mapStateToProps( state ) {
	return { state: state }
}

class Layout extends React.Component {
	render() {

		console.log( this.props.state );

		return (
			<div id="main">
				<Window state={ this.props.state.snake } />
			</div>
		)
	}
}

export default connect( mapStateToProps )( Layout )
