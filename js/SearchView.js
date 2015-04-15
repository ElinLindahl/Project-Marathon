var SearchView = function (container, Model) {
	this.update = function(){ //The view
	
	this.AllMovies = container.find("#movies");
	Movies = Model.getmovie();
	this.AllMovies.html(Movies);
	}

	this.update();
	Model.addObserver(this);

}