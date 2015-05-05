var MovieModel = function() {
observerlist = [];
serchList = [];
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
	        		console.log(movies);
		 			notifyObservers(movies);
		 		}
			
			});
		});




		// callback for when we get back the results
		// function searchCallback(data) {
		// 	$(document.body).append('Found ' + data.total + ' results for ' + query);
		// 	var movies = data.movies;
 	// 		console.log(movies);
 		
	 // 		$.each(movies, function(index, movie) {
	 //   			$(document.body).append('<h5>' + movie.title + '</h5>');
	 //   			$(document.body).append('<img src="' + movie.posters.thumbnail + '" />');
	 //   			notifyObservers();
		// 	});

		// }
	}
}