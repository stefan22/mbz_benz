//geolocation requires user consent
	function initMap() {
	  var map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: -34.397, lng: 150.644},
	    zoom: 9,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
	});
	
	var infoWindow = new google.maps.InfoWindow({map: map});

// Try HTML5 geolocation.
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    infoWindow.setPosition(pos);
    infoWindow.setContent('You are Here.');
    map.setCenter(pos);
}, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
}   else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
}
} //else

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
} //handleLocationError	





//****find_dealer*******//

function find_dealer() {

//alert('someone clicked!');

//accessing api
//debugger;
//passing parameters
var limit = document.getElementById('limit').value;
console.log('limit: ' + limit);
var postcode = document.getElementById('postcode').value;

//queryQ results
document.getElementById('searchQ').innerHTML = "<table><tr><th>Search results for:</th></tr>" +
										"<tr><td>Postcode: </td><td>" + postcode + "</td></tr>" +
									"<tr><td>Distance: </td><td>" + limit + "</td></tr></table>";

//for GET
var searchparams = "https://ws.mercedes-benz.co.uk/v2/lookup/retailers/mercedes?index=haversine"+"&limit="
+limit+"&postcode="+postcode;
console.log(searchparams);
//for POST
//var searchparams = "https://ws.mercedes-benz.co.uk/v2/lookup/retailers/mercedes?index=haversine";

//var searchparams1 = 'js/one.json';
//console.log(searchparams1);
	var http = new XMLHttpRequest();
	
	//debugger;
	http.onreadystatechange = function() {
			var output;
			var count = [];
			if ((http.readyState == 4) && (http.status == 200)) {
					var response = JSON.parse(http.responseText);
					console.log(response);
					var items = response.data;
					console.log('items: ' + items);
					//debugger;
					output = "<ul class='mdata'>";
					for (key in items) {
						output += "<li class='mdataname'>" + "<span>" + items[key].name + "</span>";
						output += "<ul class='datades'>";
						output += "<li>" + "Address: " + items[key].address1 + "</li>";
						output += "<li>" + "City: " + items[key].town_city + "</li>";
						output += "<li>" + "Telephone: " + items[key].telephone + "</li>";
						output += "<li>" + "Latitude: " + items[key].latitude + "</li>";
						output += "<li>" +  "Longitude: " + items[key].longitude + "</li>";
						//debugger;	
						output += "</ul>";
						output += "</li>";
					  	count++
					  	if(count == 5){continue;}
					}//for loop
				console.log(output);
				output += "</li></ul>";
				document.getElementById('search-results').innerHTML=output;
				
				

			} //if

	}; //hhtponreadystatechange

	http.open("GET",searchparams, true);
	//http.open("POST",searchparams, true);

	//leaving multipart for both
	http.setRequestHeader("Content-Type", "multipart/form-data");		
	
	//for GET
	http.send();

	//for POST
	//http.send("&limit="+limit+"&postcode="+postcode);

} //findadealer function

