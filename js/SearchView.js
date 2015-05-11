var SearchView = function (container, Model) {
	
	this.searchbutton = container.find("#searchbutton");
	this.AllMovies = container.find(".movies");
	
	box = '';



	this.update = function(obj){
		str = '';
		if (obj){
			Movies = obj;
			for(i = 0; i < Movies.length; i++){

				str += "<li class='moviebox'><div class='movie' id="+Movies[i].id+" onclick='showInfo("+Movies[i].id+")' draggable='true' ondragstart='drag(event)'>";
<<<<<<< Updated upstream
				str += "<h5>"+Movies[i].title +"</h5>";
<<<<<<< HEAD
				str += "<div id='description"+Movies[i].id+"' class='desc'><table class='padded'><tr><td><img src='"+Movies[i].posters.thumbnail+"'></td><td><p> Runtime: "+Movies[i].runtime+" min </br> Year: "+Movies[i].year+"</br>Audience rating: "+Movies[i].ratings.audience_score+"/100</br>Critics rating: "+Movies[i].ratings.critics_score+"/100</p></td></tr><tr><td colspan='2'><p class='small'>"+Movies[i].synopsis+"</p></td></tr></table></div>";origin/master
=======
				str += "<div id='description"+Movies[i].id+"' class='desc'><table class='padded'><tr><td><img src='"+Movies[i].posters.thumbnail+"'></td><td><p> Runtime: "+Movies[i].runtime+" min </br> Year: "+Movies[i].year+"</br>Audience rating: "+Movies[i].ratings.audience_score+"/100</br>Critics rating: "+Movies[i].ratings.critics_score+"/100</p></td></tr><tr><td colspan='2'><p class='small'>"+Movies[i].synopsis+"</p></td></tr></table></div>";

=======
				str += "<img src='"+Movies[i].posters.thumbnail+"'></br><h5>"+Movies[i].title +"</h5>";
				str += "<div id='description"+Movies[i].id+"' class='desc'><table class='padded'><tr><td><p> Runtime: "+Movies[i].runtime+" min </br> Year: "+Movies[i].year+"</br>Audience rating: "+Movies[i].ratings.audience_score+"/100</br>Critics rating: "+Movies[i].ratings.critics_score+"/100</p></td></tr></table></div>";

				//str += "<li class='moviebox'><div class='movie' id='m"+i+"' onclick='showInfo("+Movies[i].id+")' draggable='true' ondragstart='drag(event)'>";
				//str += "<h5>"+Movies[i].title +"</h5>";
				//str += "<div id='description"+Movies[i].id+"' class='desc'><table class='padded'><tr><td><img src='"+Movies[i].posters.thumbnail+"'></td><td><p> Runtime: "+Movies[i].runtime+" min </br> Year: "+Movies[i].year+"</br>Audience rating: "+Movies[i].ratings.audience_score+"/100</br>Critics rating: "+Movies[i].ratings.critics_score+"/100</p></td></tr><tr><td colspan='2'><p class='small'>"+Movies[i].synopsis+"</p></td></tr></table></div>";
>>>>>>> Stashed changes
>>>>>>> origin/master
				str += "</div></li>";
			}	
		}
	this.AllMovies.html(str);
	this.tryIt = function(){ //since the controller doesn't exists yet the first time the view is runned
				try{
					SearchViewController.refresh();
				}
				catch(err){

				}
			}
			this.tryIt();
	}

	this.update();
	
	
	Model.addObserver(this);
//	Model.getmovie("Star wars");

}
