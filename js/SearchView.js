var SearchView = function (container, Model) {
	this.AllMovies = container.find(".movies");
	str = '';
	box = '';


	this.update = function(obj){
		if (obj){
			Movies = obj;
			for(i = 0; i < Movies.length; i++){
				str += "<div class='moviebox'><div class='movie' onclick='showInfo("+Movies[i].id+")'>";
				str += Movies[i].title;
				str += "<div id='description"+Movies[i].id+"' class='desc'><table class='padded'><tr><td><img src='"+Movies[i].posters.thumbnail+"'></td><td><p> Runtime: "+Movies[i].runtime+" min </br> Year: "+Movies[i].year+"</br>Audience rating: "+Movies[i].ratings.audience_score+"/100</br>Critics rating: "+Movies[i].ratings.critics_score+"/100</p></td></tr></table></div>";
				str += "</div></div>";
			}	
		}

	this.AllMovies.html(str);
	}

	this.update();
	Model.addObserver(this);
	Model.getmovie("Star wars");

}
