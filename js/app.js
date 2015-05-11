$(function() {
	//We instantiate our model
	

	var Model = new MovieModel();
	var searchView = new SearchView($("#SearchView"),Model);
	var createNewView = new CreateNewView($("#CreateNewView"),Model);
	var marathonListView = new MarathonListView($("#MarathonListView"),Model);
	var overviewView = new OverviewView($("#OverviewView"),Model);
	var startvVew = new StartView($("#StartView"),Model);



	//var mainController = new MainController(Model);
	var marathonListViewController = new MarathonListViewController(marathonListView, Model);
	var searchViewController = new SearchViewController(searchView, Model);
	var createNewViewController = new CreateNewViewController(createNewView, Model);
	var overviewViewController = new OverviewViewController(OverviewView, Model);
	var startViewController = new StartViewController(StartView, Model);
	
	
	//And create the needed controllers and views
	//	var MainController = new MainController(Model);
	
});
