$(document).ready(function() {
	
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(3000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});



// document.getElementById("myBtn").addEventListener("click", tweenThis);

// function tweenThis(){
// 	TweenLite.to(".content", 2, {rotationX:-90, scaleX:0.8, z:-300, onComplete:complete});

// 	function complete(){
// 		window.open ('about.html','_self',false)
// 	}
// }