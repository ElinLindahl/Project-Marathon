var SearchView = function (container, Model) {
	
	this.searchbutton = container.find("#searchbutton");
	this.AllMovies = container.find(".movies");
	this.deletebutton = container.find("#deletebutton");
	this.test = container.find("#searchBoxx");
	box = '';

	this.update = function(obj){
		str = '';
		if (obj){
			Movies = obj;
			for(i = 0; i < Movies.length; i++){

				str += "<li class='moviebox'><div class='movie' id="+encodeURI(Movies[i].title)+" onclick='showInfo("+Movies[i].id+")' draggable='true' ondragstart='drag(event)'>";
				str += "<h5>"+Movies[i].title +"</h5><button id='deletebutton"+Movies[i].id+"' class='round-button' type='button' onclick='deleteMovie("+Movies[i].id+")'>X</button>";
				str += "<div id='description"+Movies[i].id+"' class='desc'><table class='padded'><tr><td><img src='"+Movies[i].posters.thumbnail+"'></td><td><p> Runtime: "+Movies[i].runtime+" min </br> Year: "+Movies[i].year+"</br>Audience rating: "+Movies[i].ratings.audience_score+"/100</br>Critics rating: "+Movies[i].ratings.critics_score+"/100</p></td></tr><tr><td colspan='2'><p class='small'>"+Movies[i].synopsis+"</p></td></tr></table></div>";
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

    //gets the last movietitle that the user searched for and prints it in the serach box
	var x = Model.getSearchword();
	var text="";
	
	if (x == "null"){
		text="EnterMovieTitle";
	}
	else{
		text=x;
	}
	
	searchBox="<input id='searchword' type='text' class='form-control' value="+ text+">";
	      		
	this.test.html(searchBox);
	
	
	
	Model.addObserver(this);


}
