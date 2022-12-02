var iconeMenu = document.querySelector("#icone__menu");


iconeMenu.addEventListener("click", function(event){
	this.classList.toggle("active"); 

	var menu = document.querySelector("#menu");
	menu.classList.toggle("invisivel")

});