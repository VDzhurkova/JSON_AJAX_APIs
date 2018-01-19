/*This is my script for the open weather API*/

var theButton = document.getElementById("myButton");

theButton.addEventListener("click", getWeather, false);


function getWeather() {

var userCity = document.getElementById("theCity").value;

//console.log(userCity);

var theAPICall = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+userCity+"&units=metric&cnt=7&APPID=c28fdbe65749ea1a4b9619693816143b";

var myRequest = new XMLHttpRequest();

myRequest.open("GET", theAPICall, true);
//console.log(myRequest);

myRequest.send();

myRequest.onload  = function() {

		if (myRequest.readyState == 4 && myRequest.status == 200) {

				var myData  = JSON.parse(myRequest.responseText);
				console.log(myData);
				var weatherImage = "http://openweathermap.org/img/w/"+myData.list[0].weather[0].icon+ ".png";
				document.getElementById("imageToday").src = weatherImage;
				document.getElementById("highToday").src = myData.list[0].temp.max + "<br><br>";
				document.getElementById("lowToday").src = myData.list[0].temp.min + "<br><br>";
				document.getElementById("day").src = myData.list[0].weather[0].description + "<br><br>";





		}
	}

}
