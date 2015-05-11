var OverviewView = function (container, Model) {
	this.overview = container.find("#OverviewView");

	this.refresh = function (){
	list = Model.finalList;
	console.log(list);
	str= 'HEEEJ';
	if(list) {
		for(i = 0; i < list.length; i++){
			str += list[i].title;
		}	
		this.overview.html(str);
		}
	}
	this.refresh();
}
		

