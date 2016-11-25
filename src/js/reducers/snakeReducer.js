function getGrid( width = 100, height = 50 ) {
	let grid = [];
	for ( let i = 0; i < width; i++ ) {
		grid.push( [] );

		for ( let j = 0; j < height; j++ ) {
			grid[i].push( null );
		}
	}

	return grid;

}

let defaultState = {
	grid: getGrid(),
	head: [ 25, 33 ]
};


export default function reducer( state = defaultState, action ) {
	return state;
}
