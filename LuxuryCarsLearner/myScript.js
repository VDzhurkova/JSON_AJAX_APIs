/* ----------------------------------------------------------------------------------------
		THIS IS MY JAVASCRIPT FILE FOR THE LUXURY CAR JSON AND AJAX PRACTICE

---------------------------------------------------------------------------------------- */

var mySurvey = document.getElementById("survey");
mySurvey.addEventListener("change", loadData, false);

var myManufacturer = document.getElementById("manufacturer");
myManufacturer.addEventListener("change", loadData, false);

function loadData(){

	var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;

	var myRequest = new XMLHttpRequest();

	myRequest.open("GET", "https://raw.githubusercontent.com/VDzhurkova/LuxuryCars/master/expensiveLuxuryCars.json", true);

	myRequest.onload = function(){
			if(myRequest.readyState == 4 && myRequest.status == 200){

				var myData = JSON.parse(myRequest.responseText);
				console.log(myData);

			}

	}

	myRequest.send();




}





















