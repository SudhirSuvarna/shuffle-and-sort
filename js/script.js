window.onload = function() {
    var grid = document.getElementById("grid"),
    gridItems = [1,2,3,4,5,6,7,8,9];
	
	var gridColorsMapping = {
		1: "td-class-3",
		2: "td-class-2",
		3: "td-class-1",
		4: "td-class-2",
		5: "td-class-1",
		6: "td-class-4",
		7: "td-class-4",
		8: "td-class-3",
		9: "td-class-1"
	}
	
	function sortGrid() {
		gridItems = gridItems.sort();
		renderOrUpdateGrid();
	}

    function shuffle() {
            var temp, gridSize = gridItems.length,
            rand;
        while (--gridSize) {
            rand = Math.floor(gridSize * Math.random());
            temp = gridItems[rand];
            gridItems[rand] = gridItems[gridSize];
            gridItems[gridSize] = temp;
        }
    }

    function renderOrUpdateGrid() {
		var i = 0;
		grid.innerHTML = '';
		while (i < gridItems.length) {
			var td = document.createElement('td');
			td.className = gridColorsMapping[gridItems[i]];
			if (!(i % 3)) {
				tr = document.createElement('tr');
				grid.appendChild(tr);
			}
			td.appendChild(document.createTextNode(gridItems[i]));
			tr.appendChild(td);
			i++;
		}
    }

    function shuffleGridNodes() {
		shuffle();
		renderOrUpdateGrid();
    }
    document.getElementById("shuffle").onclick = shuffleGridNodes;
	document.getElementById("sort").onclick = sortGrid;
	sortGrid();
}