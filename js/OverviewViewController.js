var OverviewViewController = function(view, model) {

 view.backbutton.click(function(){
 	 	$("#marathonfield").show();
	 	$("#SearchView").show();
	 	$("#confirmbutton").show();
	 	$("#marathonField").show();
	 	$("#OverviewView").hide();	
	 	model.notify();
 });
}
