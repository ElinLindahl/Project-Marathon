var CreateNewViewController = function(view, model) {

//Get form values and call createMarathon function in model, 
//then call function in view to 
view.submitbutton.click(function(){
	 	model.MarathonName = $("#MarathonName").val();
	 	model.MarathonPlace = $("#Place").val();
	 	model.MarathonDate = $("#datepicker").val();
	 	model.MarathonTime = $("#Time").val();
	 	model.createMarathon(model.MarathonName,model.MarathonPlace,model.MarathonDate,model.MarathonTime);
	 	view.createfield.hide();
	 	view.marathonfield.show();
	 	view.marathonDiv();
	 	model.getmovie ($("#searchword").val()); //Gör att filmerna i searschview stannar kvar
	 });


view.confirmbutton.click(function(){
	 	view.marathonfield.hide();
	 	view.SearchView.hide();
	 	view.OverviewView.show();
	 	
	
	 });





}