var SearchView = function (container, Model) {
	this.AllMovies = container.find("#movies");

	this.update = function(obj){ 
		Movies = Model.getmovie('Gone with the Wind');
		this.AllMovies.html(Movies);
	}

	this.update();
	Model.addObserver(this);

}