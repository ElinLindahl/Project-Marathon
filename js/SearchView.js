var SearchView = function (container, Model) {
	this.AllMovies = container.find("#movies");
	str = '';

	this.update = function(obj){
		if (obj){
			console.log(obj);
			Movies = obj;
			for(i = 0; i < Movies.length; i++){
				str += "<p>";
				str += Movies[i].title;
				str += "</p>";
				
			}	
		}
	
		this.AllMovies.html(str);
	}
	this.update();
	Model.addObserver(this);

	Model.getmovie("Star wars");

}