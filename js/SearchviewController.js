var SearchViewController = function(view, model ) {

		
	this.refresh = function (){
		view.searchbutton.click(function(){ 
		model.getmovie ($("#searchword").val());			
		
 		var word = ($("#searchword").val());
		model.setSearchword(word);
		});
	}
	this.refresh();
}