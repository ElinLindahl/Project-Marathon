var CreateNewView = function (container, Model) {
	this.submitbutton = container.find("#submitbutton");
	this.createfield = container.find("#createField");
	this.marathonfield = container.find("#marathonField");

	var all ='';
	this.update = function(obj){
		if (obj){
			this.marathonDiv = function (obj){
				console.log('hej');
				console.log(obj);
				Marathon = obj;
				console.log('YEEE');
				console.log(Marathon);
				this.marathonfield.html(all);
			};
		}
	}
	this.update();
	Model.addObserver(this);
	
}
