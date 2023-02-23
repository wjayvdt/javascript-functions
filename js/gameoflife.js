function seed() {
	return arguments;
}

function same([x, y], [j, k]) {
	return ([x,y] === [j,k]);
}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {
	return (this.contains(cell));
}

const printCell = (cell, state) => {
	if (state.contains.call(cell)) {
		return '\u25A3';
	} else {
		return '\u25A2';
	}
};

const corners = (state = []) => {
	return {topRight: [4,2], bottomLeft: [1,1]};
};

const printCells = (state) => {
	return true;
};

const getNeighborsOf = ([x, y]) => {
	return true;
};

const getLivingNeighbors = (cell, state) => {
	return true;
};

const willBeAlive = (cell, state) => {
	return true;
};

const calculateNext = (state) => {
	return true;
};

const iterate = (state, iterations) => {
	return true;
};

const main = (pattern, iterations) => {
	return true;
};

const startPatterns = {
    rpentomino: [
      [3, 2],
      [2, 3],
      [3, 3],
      [3, 4],
      [4, 4]
    ],
    glider: [
      [-2, -2],
      [-1, -2],
      [-2, -1],
      [-1, -1],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 2],
      [2, 3]
    ],
    square: [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2]
    ]
  };
  
  const [pattern, iterations] = process.argv.slice(2);
  const runAsScript = require.main === module;
  
  if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
      main(pattern, parseInt(iterations));
    } else {
      console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
  }
  
  exports.seed = seed;
  exports.same = same;
  exports.contains = contains;
  exports.getNeighborsOf = getNeighborsOf;
  exports.getLivingNeighbors = getLivingNeighbors;
  exports.willBeAlive = willBeAlive;
  exports.corners = corners;
  exports.calculateNext = calculateNext;
  exports.printCell = printCell;
  exports.printCells = printCells;
  exports.startPatterns = startPatterns;
  exports.iterate = iterate;
  exports.main = main;