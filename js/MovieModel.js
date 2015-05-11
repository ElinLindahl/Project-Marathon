var MovieModel = function() {
observerlist = [];
serchList = [];
chosenList = [];
movObjList = []; 
finalList = [];
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
			notifyObservers(marathon);
	}

	
	//Movie by title
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
}