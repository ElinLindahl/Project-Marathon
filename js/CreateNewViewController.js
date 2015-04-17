var CreateNewViewController = function(view, model) {

//Get form values and call createMarathon function in model
view.submitbutton.click(function(){
	 	model.MarathonName = $("#MarathonName").val();
	 	model.MarathonPlace = $("#Place").val();
	 	model.MarathonDate = $("#Date").val();
	 	model.MarathonTime = $("#Time").val();
	 	model.createMarathon(model.MarathonName,model.MarathonPlace,model.MarathonDate,model.MarathonTime);
		view.marathonDiv();
	 	view.createfield.hide();
	 	view.marathonfield.show();
	 	

	// 	view.selectType(model.MarathonName);
	 	
	 	//model.Marathon[this.name] = MarathonName;

	 });
}