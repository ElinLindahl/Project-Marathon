var SearchView = function (container, Model) { //The view

	
//	var Movies = container.find("#Movies");
	
	var AllMovies = Model.getmovie();
	//console.log(Model.getmovie());

	
	this.AllMovies = container.find("#movies");
}

