var CreateNewView = function (container, Model) {

var Info = container.find("#AllInfo");

var All ='';
this.getDishes = function ()
	{


	All += "<h3>Create a new movie marathon:</h3></br></br>"
	All += "<p style='margin-left:3%'>Name:</p><input id='MarathonName' type='text' class='form-control' placeholder='Enter name of the marathon' style='margin-left:3%'>"
	All += "</br><p style='margin-left:3%'>Place:</p><input id='Place' type='text' class='form-control'  style='margin-left:3%'></br>"
	All += "<div class='col-xs-3'>"	
	All += "Date: <input id='Date' type='text' class='form-control'>"
	All += "Time: <input id='Place' type='text' class='form-control'></div>"
	All += "<div><span class='input-group-btn'>"
	All += "<button id='submitbutton' class='btn btn-default' type='button' style='margin-top:35%; margin-left:75%;' >Submit</button>"
	All += "</span></div>"
	
	
return All
};

Info.html(this.getDishes());


//this.Info.html(getDishes);

}
