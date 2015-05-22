$(function() {
	//We instantiate our model
	//And create the needed controllers and views
	

	var Model = new MovieModel();
	var searchView = new SearchView($("#SearchView"),Model);
	var createNewView = new CreateNewView($("#CreateNewView"),Model);
	var overviewView = new OverviewView($("#OverviewView"),Model);
	var startvVew = new StartView($("#StartView"),Model);

	var searchViewController = new SearchViewController(searchView, Model);
	var createNewViewController = new CreateNewViewController(createNewView, Model);
	var overviewViewController = new OverviewViewController(overviewView, Model);
	var startViewController = new StartViewController(StartView, Model);
	
	
});
