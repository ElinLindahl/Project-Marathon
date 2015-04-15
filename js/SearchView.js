var SearchView = function (container, Model) {
	this.AllMovies = container.find("#movies");

	this.update = function(obj){
		console.log('hej');
		if (obj){
			console.log(obj);
			Movies = obj;	

			this.AllMovies.html(Movies);

		}
	}

	this.update();
	Model.addObserver(this);

	Model.getmovie("Top gun");

}