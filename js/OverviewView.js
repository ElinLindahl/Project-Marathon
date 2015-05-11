var OverviewView = function (container, Model) {
	this.test = container.find("#otest");
	
	str = '';
	this.update = function() {
		finlist = finalList;
		for(i = 0; i < finlist.length; i++){
			str += "<li class='moviebox'>";
			str +=	"<h3>"+finlist[i].title;"</h3>";

			str += "<table class='padded'><tr><td><img src='"+Movies[i].posters.thumbnail+"'></td><td><p> Runtime: "+Movies[i].runtime+" min </br> Year: "+Movies[i].year+"</br>Audience rating: "+Movies[i].ratings.audience_score+"/100</br>Critics rating: "+Movies[i].ratings.critics_score+"/100</p></td></tr><tr><td colspan='2'><p class='small'>"+Movies[i].synopsis+"</p></td></tr></table>";
			str += "</li>";
		}
		this.test.html(str);
	}
	this.update();
	Model.addObserver(this);

}


