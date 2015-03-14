var one = false;
var two = false;
var three = false;
var four = false;
var five = false;
var six = false;
var ini = new Array();
window.onload = function() {
	var tables = getAllTables();
	makeAllTablesSortable(tables);
}

function getAllTables() {
	var tables = document.getElementsByTagName("table");
	return tables;
}

function changecolor(ths, i, one) {
	ths[i].style.backgroundColor = "rgb(164, 176, 252)";
	for (l = 0; l < ths.length; l++) {
		if (l != i) {
			ths[l].style.backgroundColor = "blue";
			ths[l].innerHTML = ini[l];
		}
	}
	if (!one) ths[i].innerHTML = ini[i] + "<img alt = 'up' src = 'ascend.png'>";
	else ths[i].innerHTML = ini[i] + "<img alt = 'down' src = 'descend.png'>";
}

function makeAllTablesSortable(tables) {
	var ths = document.getElementsByTagName("th");
	for (var i = 0; i < ths.length; i++) {
		ths[i].style.backgroundColor = "blue";
		ini[i] = ths[i].innerHTML;
	}
	ths[0].onclick = function() {
		changecolor(ths, 0, one);
		handleclick(tables, 0, 0, one);
		one = !one;
	}
	ths[1].onclick = function() {
		changecolor(ths, 1, two);
		handleclick(tables, 0, 1, two);
		two = !two;
	}
	ths[2].onclick = function() {
		changecolor(ths, 2, three);
		handleclick(tables, 0, 2, three);
		three = !three;
	}
	ths[3].onclick = function() {
		changecolor(ths, 3, four);
		handleclick(tables, 1, 0, four);
		four = !four;
	}
	ths[4].onclick = function() {
		changecolor(ths, 4, five);
		handleclick(tables, 1, 1, five);
		five = !five;
	}
	ths[5].onclick = function() {
		changecolor(ths, 5, six);
		handleclick(tables, 1, 2, six);
		six = !six;
	}
}

function handleclick(tables, i, j, sign) {
	var trs = tables[i].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
	var arr = new Array();
	var temp1 = "";
	var temp2 = ""; 
	var str = "";
	for (var k = 0; k < trs.length; k++) {
		var tds = trs[k].getElementsByTagName("td");
		arr[k] = "";
		for (var l = 0; l < tds.length; l++) {
			arr[k] += tds[l].innerHTML + ",";
		}
	}
	for (var l = 0; l < trs.length; l++) {
		temp1 = arr[l].split(",")[j];
		for (var k = l + 1; k < trs.length; k++) {
			temp2 = arr[k].split(",")[j];
			if (!sign) {
				if (temp2 < temp1) {
					str = arr[l];
					arr[l] = arr[k];
					arr[k] = str;
				}
			} else {
				if (temp2 > temp1) {
					str = arr[l];
					arr[l] = arr[k];
					arr[k] = str;
				}
			}
		}
	}
	for (var k = 0; k < trs.length; k++) {
		var s = arr[k].split(",");
		for (var l = 0; l < s.length - 1; l++) {
			trs[k].getElementsByTagName("td")[l].innerHTML = s[l];
		}
	}
}