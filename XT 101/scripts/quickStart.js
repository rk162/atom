
var app = {};

 app.name = 'ramesh';

app.show = function(){
	console.log("Hello World");
	var greetDiv = document.getElementById("greeting");
	greetDiv.innerHTML = "<h1> Client Side Scripting</h1>"

}

app.init = function(){
	var greetButton = document.getElementById('greetButton');

	greetButton.addEventListener("click",app.show);

}