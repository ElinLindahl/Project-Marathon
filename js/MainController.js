 //Toggle descriptionbox for movies
 function showInfo(id) {
    $("#description"+id).toggle(100);
 }

 //Toggle make a marathon-form
 function showForm() {
    $("#Marathon").toggle(100);
 }

 //Drag-function for movies
 function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);

 }

 function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    ev.target.appendChild(document.getElementById(data));
}

function allowDrop(ev) {
    ev.preventDefault();
}

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
