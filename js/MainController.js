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
    ev.target.appendChild(document.getElementById(data));
    chosenList.push(data);
    model.showMovies();
    console.log(chosenList);

}
function dropback(ev){
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
    var index=chosenList.indexOf(data);
    chosenList.splice(index,1);
    console.log(chosenList);
}
//Date-picker function
$(function() {
    $( "#datepicker" ).datepicker();
  });

//Autocomplete function
    $(function() {
      $("#searchword").autocomplete({
        //minLength and delay to prevent a large amout of calls
        minLength: 3,
        delay: 500,

        source: function(query, result) {
          $.getJSON("http://api.rottentomatoes.com/api/public/v1.0/movies.json?callback=?", {
            apikey: "tmaras95gturfua7r8tdvrym",
            q: query.term,
            page_limit: 10
          }, function(data) {
            // Data is an array of objects and must be transformed for autocomplete to use
            var array = data.error ? [] : $.map(data.movies, function(m) {
              return {
                label: m.title + " (" + m.year + ")",
                url: m.links.alternate
              };
            });
            result(array);
          });
        },
      });
    });
    
function allowDrop(ev) {
    ev.preventDefault();
}
function allowNewPlace(ev){
	ev.preventDefault();

}




var MainController = function(model) {
	
var Searchview = new Searchview($("#Searchview"),model);
window.SearchviewController = new SearchviewController(Searchview,model);

var CreateNewView = new CreateNewView($("#CreateNewView"),model);
window.CreateNewViewController = new CreateNewViewController(CreateNewView,model);

//var MarathonListView = new MarathonListView($("#MarathonListView"),model);
//window.MarathonListViewController = new MarathonListViewController(MarathonListView,model);

var OverviewView = new OverviewView($("#OverviewView"),model);
window.OverviewViewController= new OverviewViewController(OverviewView,model);


}
