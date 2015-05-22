var SearchViewController = function(view, model ) {

		
	this.refresh = function (){
		view.searchbutton.click(function(){ //Sets the searched word as the value in the serachbar
		model.getmovie ($("#searchword").val());			
		
 		var word = ($("#searchword").val());
		model.setSearchword(word);
		});
	}
	this.refresh();
}