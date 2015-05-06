$(function() {
	//We instantiate our model
	

	var Model = new MovieModel();
	var searchView = new SearchView($("#SearchView"),Model);
	var createNewView = new CreateNewView($("#CreateNewView"),Model);
	var marathonListView = new MarathonListView($("#MarathonListView"),Model);



	var marathonListViewController = new MarathonListViewController(marathonListView, Model);
	var searchViewController = new SearchViewController(searchView, Model);
	var createNewViewController = new CreateNewViewController(createNewView, Model);
	
	
	//And create the needed controllers and views
//	var MainController = new MainController(Model);
	
});
