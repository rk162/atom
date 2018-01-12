

var app = {};

app.init = function(){

       var alertButton = document.getElementById("alertButton");

       alertButton.addEventListener("click",app.alertBox);

       var confirmButton = document.getElementById("confirmButton");

      confirmButton.addEventListener("click",app.confirmBox);

      var promptButton = document.getElementById("promptButton");

      promptButton.addEventListener("click",app.promptBox);
}

app.confirmBox = function(){
         var response = confirm("Are you sure");
         console.log(response);

}

app.alertBox = function(){
         alert("Hello from Javascript");

}

app.promptBox = function(){
	var info = prompt('Your email id');
	console.log(info);
}

app.init();
