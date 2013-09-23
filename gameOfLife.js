function Life($scope,$timeout) {

	function Cell(isAlive,numNghb) {
		this.isAlive = isAlive;
		this.numNghb = numNghb;
	}


	// Neccessary to create 2D array
	function createCells(rows) {			
		var arr = [];
		for (i=0;i<rows;i++)
			arr[i] = [];

		return arr;
	}

	

	$scope.cells = createCells(20);

	// To be used in preserving current
	// generation of cells
	var nextGen = createCells(20);		
										

	// This is the initializer									
	// for the crntgen of cells									
	for (i=0;i<20;i++)							
		for(j=0;j<20;j++)						
			$scope.cells[i][j] = new Cell(false,0);

	// This is the initializer
	// for the nextgen of cells
	for (i=0;i<20;i++)							
		for(j=0;j<20;j++)						
			nextGen[i][j] = new Cell(false,0);


	//do {
	$scope.playSimulation = function () {  
		// Neighbor counter
		for (i=0;i<20;i++)							
			for(j=0;j<20;j++)
			{
				var tempNghb = 0;
				if (i-1>=0){
					if ($scope.cells[i-1][j].isAlive)
						tempNghb++;
					if (j+1<20)
						if ($scope.cells[i-1][j+1].isAlive)
							tempNghb++;
					}
				if (j+1<20){
					if ($scope.cells[i][j+1].isAlive)
						tempNghb++;
					if (i+1<20)
						if ($scope.cells[i+1][j+1].isAlive)
							tempNghb++;
					}
				if (i+1<20)	{
					if ($scope.cells[i+1][j].isAlive)
						tempNghb++;
					if (j-1>=0)
						if ($scope.cells[i+1][j-1].isAlive)
							tempNghb++;
					}
				if (j-1>=0)	{
					if ($scope.cells[i][j-1].isAlive)
						tempNghb++;
					if (i-1>=0)
						if ($scope.cells[i-1][j-1].isAlive)
							tempNghb++;
					}
				$scope.cells[i][j].numNghb = tempNghb;
			}


		// Checks the life-state of the current generation
		// against the rules to determine the		
		// life-state of the nextgen	
		for (i=0;i<20;i++)							
			for(j=0;j<20;j++)						 
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


		// Assigns the life-states for the	
		// view	from the "next generation" 
		// to the "current generation"
		for (i=0;i<20;i++)							
			for(j=0;j<20;j++)						
				$scope.cells[i][j].isAlive = nextGen[i][j].isAlive;
	}
	//}while(false)

	$scope.lifeStep = function () {
		$scope.playSimulation();
	}

	var stop;
	$scope.play = false;

	$scope.playLife = function() {
		stop = $timeout(function(){
			if ($scope.play === true) {
				$scope.playSimulation();
				$scope.playLife();
			} else
				$timeout.cancel(stop);
			
		}, 300);
	};

	$scope.playLifeButton = function() {
		$scope.play = !$scope.play;
		$scope.playLife();
	};






}
