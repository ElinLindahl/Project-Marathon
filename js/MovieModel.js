var MovieModel = function() {
observerlist = [];
serchList = [];
chosenList = [];
movObjList = []; 
finalList = [];
marathonTemp = [];
MarathonName = '';
MarathonPlace = '';
MarathonDate = '';
MarathonTime = '';


	
	this.addObserver = function(observer) {
		observerlist.push(observer);
	}

	var notifyObservers = function(obj) {
		for(i in observerlist) {
			observerlist[i].update(obj);
			console.log(obj);
		}
	} 

	this.notify = function(obj) {
		notifyObservers(obj);
	}
	//Creates a new marathon-object
	this.createMarathon = function (name, place, date, time) {
		var marathon = new Object();
			marathon.name = name;
			marathon.place = place;
			marathon.date = date;
			marathon.time = time;
			marathonTemp.push(marathon);
			notifyObservers(marathon);
	}

	
	//Get movies by title
	this.getmovie = function (query) {
		var apikey = "tmaras95gturfua7r8tdvrym";
		var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";

		// construct the uri with our apikey
		var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;

		$(document).ready(function() {
			// send off the query
			$.ajax({
				url: moviesSearchUrl + '&q=' + encodeURI(query),
				dataType: "jsonp",
				success: function (data) {
	        		movies = data.movies;
		 			notifyObservers(movies);
		 			tempMovies = [];
		 			for(i in movies){
		 				tempMovies.push(movies[i]);
		 			}
		 		}
			
			});
		});
	}

	this.getMarathonList = function () {
		str=''
		for(i in chosenList) {
			str+= chosenList[i];
		}
		return str;
	}


	this.showMovies = function(){
		for(i in chosenList){
			m = Model.getmovie(i);
			movObjList.push(m);
		}
		console.log(movObjList);	
	}
	
	//Get total Runtime of your Marathon
	this.getRuntime = function(finalList){
		var time = 0
		for (var i=0; i<finalList.length; i++){
			//i=int(i);
			if (finalList[i].runtime==null){
				time += parseInt(90);
			}	
			else {	
			time += parseInt(finalList[i].runtime);
			}
		}	
	return time
	}

	//Sets the endtime of the marathon 
	this.setEndtime = function(startTime, runTime){
		var time = startTime;
		if (time!= null){
			var dela = time.split('.');
			var h = dela[0];
			var min = dela[1];
			var start = parseInt(h*60)+parseInt(min);
			var endTime = "";
			var totalTime = start + runTime;
			var hours = parseInt(totalTime/60);
			var hoursString = hours.toString();
			var minutes = totalTime % 60;
			var minutesString = minutes.toString();
			if (hoursString.length == 1){
				hoursString = "0" + hoursString;
			}
			if (minutesString.length == 1){
				minutesString = "0" + minutesString;
			}
			endTime = hoursString + "." + minutesString;
		return endTime
		}
	}

		
	
}