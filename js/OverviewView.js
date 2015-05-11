var OverviewView = function (container, Model) {
	this.test = container.find("#otest");
	this.backbutton = container.find("#backbutton");
	
	str = '';
	this.update = function() {
		
		
		
		finlist = finalList;
		for(i = 0; i < finlist.length; i++){
<<<<<<< HEAD
			str +=	"<h3>"+finlist[i].title+"</h3>";
			str += "<table class='padded'><tr><td><img src='"+finlist[i].posters.thumbnail+"'></td><td><p> Runtime: "+finlist[i].runtime+" min </br> Year: "+finlist[i].year+"</br>Audience rating: "+finlist[i].ratings.audience_score+"/100</br>Critics rating: "+finlist[i].ratings.critics_score+"/100</p></td></tr><tr><td colspan='2'><p class='lsmall'>"+finlist[i].synopsis+"</p></td></tr></table>";
=======
			str += "<li class='moviebox'>";
			str +=	"<h3>"+finlist[i].title;"</h3>";
			str += "<table class='padded'><tr><td><img src='"+finlist[i].posters.thumbnail+"'></td><td><p> Runtime: "+finlist[i].runtime+" min </br> Year: "+finlist[i].year+"</br>Audience rating: "+finlist[i].ratings.audience_score+"/100</br>Critics rating: "+finlist[i].ratings.critics_score+"/100</p></td></tr><tr><td colspan='2'><p class='small'>"+finlist[i].synopsis+"</p></td></tr></table>";
			str += "</li>";
>>>>>>> origin/master
		}
		var RT=Model.getRuntime(finalList);
		
		var ET=Model.setEndtime(Model.MarathonTime, RT);
		console.log(ET);

		str+= "<h3>Total Runtime: " + RT + " min </h3>";//+ ET +"!";
		this.test.html(str);
	}
	this.update();
	Model.addObserver(this);

}


