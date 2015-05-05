var SearchView = function (container, Model) {
	
	this.searchbutton = container.find("#searchbutton");
	this.AllMovies = container.find(".movies");
	
	box = '';

	this.update = function(obj){
		str = '';
		if (obj){
			Movies = obj;
			for(i = 0; i < Movies.length; i++){
				str += "<div class='moviebox' ondrop='drop(event)' ondragover='allowDrop(event)'><div class='movie' onclick='showInfo("+Movies[i].id+")' draggable='true' ondragstart='drag(event)'>";
				str += Movies[i].title;
				str += "<div id='description"+Movies[i].id+"' class='desc'><table class='padded'><tr><td><img src='"+Movies[i].posters.thumbnail+"'></td><td><p> Runtime: "+Movies[i].runtime+" min </br> Year: "+Movies[i].year+"</br>Audience rating: "+Movies[i].ratings.audience_score+"/100</br>Critics rating: "+Movies[i].ratings.critics_score+"/100</p></td></tr></table></div>";
				str += "</div></div>";
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
