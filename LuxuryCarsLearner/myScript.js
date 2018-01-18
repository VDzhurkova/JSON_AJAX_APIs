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

				if(manufacturerStored == ""){


					function clearAll(){

						var hideText = document.getElementsByClassName("data");

						for (var i=0;i<hideText.length;i++){
									hideText[i].innerHTML = "";

						}
					}

					clearAll();
					document.getElementById("messageAlert").innerHTML = "Please you must choose a car manufacturer to load data";

				 }

				else {

							document.getElementById("manufacturerC").innerHTML = myData.data[manufacturerStored].manufacturer;
							document.getElementById("modelC").innerHTML = myData.data[manufacturerStored].model;
							document.getElementById("priceC").innerHTML = myData.data[manufacturerStored].price;
							document.getElementById("descriptionC").innerHTML = myData.data[manufacturerStored].description;
							
							document.getElementById("overallC").innerHTML = myData.data[manufacturerStored].quality[0].rating;
							document.getElementById("mechanicalC").innerHTML = myData.data[manufacturerStored].quality[1].rating;
							document.getElementById("powertrainC").innerHTML = myData.data[manufacturerStored].quality[2].rating;
							document.getElementById("bodyC").innerHTML = myData.data[manufacturerStored].quality[3].rating;
							document.getElementById("interiorC").innerHTML = myData.data[manufacturerStored].quality[4].rating;
							document.getElementById("accessoriesC").innerHTML = myData.data[manufacturerStored].quality[5].rating;
                    
                    
                             var myVideo = document.getElementById("videoC");
                             myVideo.src = myData.data[manufacturerStored].video;

                             var myPicture = document.getElementById("imgC");
                             myPicture.src = myData.data[manufacturerStored].img;

                         
				}

			}

	}

	myRequest.send();




}





















