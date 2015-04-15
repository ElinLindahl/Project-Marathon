$(function() {
	//We instantiate our model
	var Model = new MovieModel();
	var searchView = new SearchView($("#SearchView"),Model);
	var createNewView = new CreateNewView($("#CreateNewView"),Model);
	
	
	//And create the needed controllers and views
//	var MainController = new MainController(Model);
	
});
