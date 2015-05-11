var CreateNewView = function (container, Model) {
	this.submitbutton = container.find("#submitbutton");
	this.createfield = container.find("#createField");
	this.marathonfield = container.find("#marathonField");
	this.chosenMovies = container.find("#chosenMovieList");
	this.confirmbutton = container.find("#confirmbutton");
	var all ='';


	this.update = function(obj){
		if (obj){
			Marathon = obj;
		};
		

		this.marathonDiv = function (){
			all += "<h3>"+Marathon.name+"</h3>";
			all += "<h5>@"+Marathon.place+" Date: "+Marathon.date+" Time: "+Marathon.time+"</h5>";
			all += "<div id='dropDiv' ondrop='drop(event)' ondragover='allowDrop(event)'></div>";
			all +="<div id='rtime'>Watching time:"+ +"";
			all += "</div>"
			this.marathonfield.html(all);
			
		}
	}
	this.update();
	Model.addObserver(this);

	
}
