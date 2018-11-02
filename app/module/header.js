define(["tools"],function(tools){
	function Header(){}

	Header.prototype.nav = function(){
		var subMenu = tools.$(".subMenu");
		console.log(subMenu.length);
		for(var i = 0;i<subMenu.length;i++){
			console.log("222");
			subMenu[i].onclick = function(){
				console.log(subMenu[i]);
				tools.$("ul",this)[0].style.display="block";
			}
		}
	}

	return new Header();
})