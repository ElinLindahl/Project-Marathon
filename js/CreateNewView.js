var CreateNewView = function (container, Model) {
	this.submitbutton = container.find("#submitbutton");
	this.createfield = container.find("#createField");
	this.marathonfield = container.find("#marathonField");
	this.chosenMovies = container.find("#chosenMovieList");
	this.dropDiv=container.find("#dropDiv");	


	var all ='';


	this.update = function(obj){
		if (obj){
			Marathon = obj;
		};
		

		this.marathonDiv = function (){
			all += "<h4>"+Marathon.name+"";
			all += "@"+Marathon.place+" Date: "+Marathon.date+" Time: "+Marathon.time+"</h4>";
			all += "</br></br>Drag movies from the searchresults into the box below:)";
			all += "<div id='dropDiv' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
			all +="<div id='rtime'>Watching time:"+ +"";
			this.marathonfield.html(all);
			this.chosenMovies.html(movObjList);


	}
	if($('#dropDiv').children().length == 0){ 
		str="<h4>DRAG MOVIE OVER HERE!</h4>" 
	}
	this.dropDiv.html(str);
	this.confirmbutton = container.find("#confirmbutton");
	this.deletebutton = container.find("#deletebutton");
	
	}
	this.update();
	Model.addObserver(this);

	
}
