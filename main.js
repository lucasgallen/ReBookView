function Life($scope) {
	$scope.cells = [][];
	for (i=0; i<400; i++)
		for (j=0; j<20; j++)
		{
			$scope.cells[i].push(j);
		}
}