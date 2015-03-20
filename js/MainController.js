var MainController = function(model) {
	
var Searchview = new Searchview($("#Searchview"),model);
window.SearchviewController = new SearchviewController(Searchview,model);

var CreateNewView = new CreateNewView($("#CreateNewView"),model);
//window.CreateNewViewController = new CreateNewViewController(CreateNewView,model);

var MarathonListView = new MarathonListView($("#MarathonListView"),model);
//window.MarathonListViewController = new MarathonListViewController(MarathonListView,model);

var OverviewView = new OverviewView($("#OverviewView"),model);
//window.OverviewViewController= new OverviewViewController(OverviewView,model);


}
