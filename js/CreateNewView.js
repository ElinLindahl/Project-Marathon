var CreateNewView = function (container, Model) {
	this.submitbutton = container.find("#submitbutton");
	this.createfield = container.find("#createField");
	this.marathonfield = container.find("#marathonField");
	this.chosenMovies = container.find("#chosenMovieList");
	var all ='';


	this.update = function(obj){
		if (obj){
			Marathon = obj;
		};
		

		this.marathonDiv = function (){
			all += "<h3 class='he'>"+Marathon.name+"</h3>";
			all += "<h5 class='he'>Place: "+Marathon.place+" | Date: "+Marathon.date+" | Time: "+Marathon.time+"</h5></span>";
			all += "<div id='dropDiv' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
			all +="<div id='rtime'>Watching time:"+ +"";
			this.marathonfield.html(all);
			this.chosenMovies.html(movObjList);
		}
	
	this.confirmbutton = container.find("#confirmbutton");
	this.deletebutton = container.find("#deletebutton");
	
	}
	this.update();
	Model.addObserver(this);

	
}
