import React from 'react';

// Game window
export default class Window extends React.Component {

	getCell( state, x, y ) {
		let { head } = state;
		let [ headX, headY ] = head;
		let classes = [ 'cell' ];
		if ( x === headX && y === headY ) {
			classes.push( 'snake' );
		}

		return (
			<div className={ classes.join( ' ' ) } key={ x + '_' + y } id={ x + '_' + y }></div>
		)
	}

	render() {
		let { grid } = this.props.state;
		let width = grid.length;
		let height = grid[0].length;

		// Place 0, 0 at bottom left corner of screen
		let rows = [];
		for ( let y = height - 1; y >= 0; y-- ) {
			let row = [];
			for ( let x = 0; x < width; x++ ) {
				row.push( this.getCell( this.props.state, x, y ) );
			}
			rows.push( <div className="row" key={ y }>{ row }</div> );
		}



		return (
			<div id="window">{ rows }</div>
		)
	}

}
