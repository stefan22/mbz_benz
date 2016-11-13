$(function() {
	

	function returnData(data) {
		//data is on data
		//console.log(data);

		// array of retDates,retTemp,retPres and retSpeed
		var retResults = [];
		// setting the first value in arrays, as specify by c3js.org chart library - timeseries.
		var retDates = ['x'];
		var retTemp = ['Average Temperature'];
		var retPres = ['Average Pressure'];
		var retSped = ['Average Speed'];

		//parsing data
		for (var key in data) {
			//if property belongs to object
			if(data.hasOwnProperty) {
				if((data[key].t !== null) && (data[key].p !== null) && (data[key].s !== null)) {

					retDates.push(key);	  	
					retTemp.push(data[key].t);
					retPres.push(data[key].p);
					retSped.push(data[key].s);

				} //data is not null
				    
			}//if hasOwnProperty
			
		}//for key in data

		console.log(retDates);
		console.log(retTemp);
		console.log(retPres);
		console.log(retSped);
		retResults.push(retDates,retTemp,retPres,retSped);
		console.log(retResults);
		$('#apidata').html(retResults);


	} //returnData





	function grabData() {

		$.ajax({
			url: 'http://foundationphp.com/phpclinic/podata.php?&raw&callback=?',
			jsonpCallback: 'jsonReturnData',
			dataType: 'jsonp',
			data: {
				startDate:'20150301',
				endDate: '20150302',
				format:'json'
			},
			success:function(response,status,http) {
				//console.log(response);
				returnData(response);
				
				
			},//success
			error: function(http, status, error) {
				console.log(error);
			} 

		});//ajax	

	}//grabData

	grabData();
	

}); //pageloaded


