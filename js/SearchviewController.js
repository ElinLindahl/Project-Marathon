<<<<<<< Updated upstream
var SearchViewController = function(view, model ) {


	
	this.refresh = function (){
		view.searchbutton.click(function(){ //Sets the searched word as the value in the serachbar
		model.getmovie ($("#searchword").val());			
		});
	}
	this.refresh();
}
=======
var SearchviewController = function(view, model){

console.log("hejsan");

view.searchbutton.click(function(){
	model.searchstr= $("#search").val();
	console.log(model.searchstr);
	model.getmovie(model.searchstr);
	notifyObservers();

});

}
>>>>>>> Stashed changes
