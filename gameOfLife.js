function Life($scope,$timeout) {

	
	// Constructor for the cell object
	// represented by each gray square div
	function Cell(isAlive,numNghb) {
		this.isAlive = isAlive;
		this.numNghb = numNghb;
	}


	// Neccessary to initiate 2D array
	// for our grid of cells
	function createCells(rows) {			
		var arr = [];
		for (i=0;i<rows;i++)
			arr[i] = [];

		return arr;
	}


	// Shorthand for number of rows
	// and columns to make easy changes
	// if neccessary
	var numRows = 20;
	var numColumns = 30;
	
	// Initializer for the 2D array
	// of cells
	$scope.cells = createCells(numRows);

	// To be used in preserving current
	// generation of cells
	var nextGen = createCells(numRows);		
										

	// This is the initializer									
	// for the crntgen of cells									
	for (i=0;i<numRows;i++)							
		for(j=0;j<numColumns;j++)						
			$scope.cells[i][j] = new Cell(false,0);

	// This is the initializer
	// for the nextgen of cells
	for (i=0;i<numRows;i++)							
		for(j=0;j<numColumns;j++)						
			nextGen[i][j] = new Cell(false,0);


	$scope.playSimulation = function () {  
		// Here the function goes through each cell
		// and checks that cell's neighbors (diagonals inclusive)
		// Note how if the check is asking for a cell out 
		// of bounds, it checks the cell on the opposite wall
		for (i=0;i<numRows;i++)							
			for(j=0;j<numColumns;j++)
			{
				var tempNghb = 0;
				if (i-1>=0){
					if ($scope.cells[i-1][j].isAlive)
						tempNghb++;
					if (j+1<numColumns){
						if ($scope.cells[i-1][j+1].isAlive)
							tempNghb++;
					}else
						if ($scope.cells[i-1][0].isAlive)
							tempNghb++;
				}else{
					if ($scope.cells[numRows-1][j].isAlive)
						tempNghb++;
					if (j+1<numColumns){
						if ($scope.cells[numRows-1][j+1].isAlive)
							tempNghb++;
					}else
						if ($scope.cells[numRows-1][0].isAlive)
							tempNghb++;
				}
				if (j+1<numColumns){
					if ($scope.cells[i][j+1].isAlive)
						tempNghb++;
					if (i+1<numRows){
						if ($scope.cells[i+1][j+1].isAlive)
							tempNghb++;
					}else
						if ($scope.cells[0][j+1].isAlive)
							tempNghb++;
				}else{
					if ($scope.cells[i][0].isAlive)
						tempNghb++;
					if (i+1<numRows){
						if ($scope.cells[i+1][0].isAlive)
							tempNghb++;
					}else
						if ($scope.cells[0][0].isAlive)
							tempNghb++;
				}
				if (i+1<numRows)	{
					if ($scope.cells[i+1][j].isAlive)
						tempNghb++;
					if (j-1>=0){
						if ($scope.cells[i+1][j-1].isAlive)
							tempNghb++;
					}else
						if ($scope.cells[i+1][numColumns-1].isAlive)
							tempNghb++;
				}else{
					if ($scope.cells[0][j].isAlive)
						tempNghb++;
					if (j-1>=0){
						if ($scope.cells[0][j-1].isAlive)
							tempNghb++;
					}else
						if ($scope.cells[0][numColumns-1].isAlive)
							tempNghb++;
				}
				if (j-1>=0)	{
					if ($scope.cells[i][j-1].isAlive)
						tempNghb++;
					if (i-1>=0){
						if ($scope.cells[i-1][j-1].isAlive)
							tempNghb++;
					}else
						if ($scope.cells[numRows-1][j-1].isAlive)
							tempNghb++;
				}else{
					if ($scope.cells[i][numColumns-1].isAlive)
						tempNghb++;
					if (i-1>=0){
						if ($scope.cells[i-1][numColumns-1].isAlive)
							tempNghb++;
					}else
						if ($scope.cells[numRows-1][numColumns-1].isAlive)
							tempNghb++;
				}
				$scope.cells[i][j].numNghb = tempNghb;
			}


		// Checks the life-state of the current generation
		// against the rules to determine the life-state of		
		// the next generation, using number of neighbors
		for (i=0;i<numRows;i++)							
			for(j=0;j<numColumns;j++)						 
			{											
				if ($scope.cells[i][j].isAlive) {
					if ($scope.cells[i][j].numNghb === 2 || $scope.cells[i][j].numNghb === 3)
						nextGen[i][j].isAlive = true;
					else
						nextGen[i][j].isAlive = false;
				} else {
					if ($scope.cells[i][j].numNghb === 3)
						nextGen[i][j].isAlive = true;
				}

			}


		// Assigns the life-states for the view	from 	
		// the "next generation" to the "current generation"
		// Updating after the neighbor count prevents the function
		// from losing the data on the current generation
		for (i=0;i<numRows;i++)							
			for(j=0;j<numColumns;j++)						
				$scope.cells[i][j].isAlive = nextGen[i][j].isAlive;
	}

	// Bound to the "step forward" button
	// and makes a single call to our simulation
	$scope.lifeStep = function () {
		$scope.playSimulation();
	}

	var stop;
	$scope.play = false;

	// Using $timeout and "stop" this function
	// calls our simulation function until the
	// "$scope.play" is false.
	$scope.playLife = function() {
		stop = $timeout(function(){
			if ($scope.play === true) {
				$scope.playSimulation();
				$scope.playLife();
			} else
				$timeout.cancel(stop);
			
		}, 300);
	};

	// Bound to the "Play/Pause" button and 
	// changes the state of "$scope.play" each
	// time the button is clicked
	$scope.playLifeButton = function() {
		$scope.play = !$scope.play;
		$scope.playLife();
	};






}
