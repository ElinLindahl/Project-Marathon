var SearchView = function (container, Model) {
	this.AllMovies = container.find("#movies");
	this.update = function(obj){ 
		Movies = Model.getmovie();
		console.log(Movies);
		this.AllMovies.html(Movies);
	}

	this.update();
	Model.addObserver(this);

}