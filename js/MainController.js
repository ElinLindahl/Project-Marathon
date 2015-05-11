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

//Drop-function for movies
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    chosenList.push(data);

    for(i in tempMovies) {
      for(j in chosenList){
       if(encodeURI(tempMovies[i].title) == chosenList[j]) {
        //push result in temporary movielist so we can reach them
          $("#deletebutton"+tempMovies[i].title.replace(/\s+/g, "")).show();
          finalList.push(tempMovies[i]);
          chosenList.splice(chosenList[j],1);
       }
      }
    }

}

function PrintElem(elem)
{
    PrintPage($(elem).html());
}

function PrintPage(data) 
{
    //Creates popup so that the user can have a look of how the print will be
    var mywindow = window.open('', 'printable', 'height=600,width=800');
    mywindow.document.write('<html><head><title>'+marathonTemp[0].name+'</title>');

    mywindow.document.write('<link rel="stylesheet" type="text/css" href="printview.css"></head><body >');

    mywindow.document.write("<button class='btn btn-default' type='button' onclick='window.print()'>OK!</button>");
    mywindow.document.write("<div id='printheader'><h2>"+marathonTemp[0].name+"</h2><p>Where? "+marathonTemp[0].place+"</br>When? "+marathonTemp[0].date+ "</br> Time? "+marathonTemp[0].time+"</p></div>");
    mywindow.document.write(data);
    mywindow.document.write('<div id="notes">Your own notes</div>');
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10

    return true;
}

      function deleteMovie(ev){
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        var index = finalList.indexOf(data);
        finalList.splice(index,1);
        console.log(finalList);
      }

      // for(i in finalList){
      //   $("#deletebutton"+finalList[i].title.replace(/\s+/g, "")).click(function(){
      //     console.log("tabort");
      //     var index = finalList.indexOf(data);
      //     finalList.splice(index,1);
      //     console.log(finalList);
      //   });
      // }
// function dropback(ev){
// 	ev.preventDefault();
// 	var data = ev.dataTransfer.getData("text");
  
//   ev.target.appendChild(document.getElementById(data));
    
//     var index=chosenList.indexOf(data);
//     chosenList.splice(index,1);
//     console.log(chosenList);
// }

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

model.notify(finalList);
console.log(finalList);
	
var Searchview = new Searchview($("#SearchView"),model);
window.SearchviewController = new SearchviewController(Searchview,model);

var CreateNewView = new CreateNewView($("#CreateNewView"),model);
window.CreateNewViewController = new CreateNewViewController(CreateNewView,model);

//var MarathonListView = new MarathonListView($("#MarathonListView"),model);
//window.MarathonListViewController = new MarathonListViewController(MarathonListView,model);

var OverviewView = new OverviewView($("#OverviewView"),model);
window.OverviewViewController= new OverviewViewController(OverviewView,model);


}
