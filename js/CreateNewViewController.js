var CreateNewViewController = function(view, model) {

//Get form values and call createMarathon function in model, 
//then call function in view to 
view.submitbutton.click(function(){
	 	model.MarathonName = $("#MarathonName").val();
	 	model.MarathonPlace = $("#Place").val();
	 	model.MarathonDate = $("#Date").val();
	 	model.MarathonTime = $("#Time").val();
	 	model.createMarathon(model.MarathonName,model.MarathonPlace,model.MarathonDate,model.MarathonTime);
	 	view.createfield.hide();
	 	view.marathonfield.show();
	 	view.marathonDiv();
	 });
}