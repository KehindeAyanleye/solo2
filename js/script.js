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

$(document).ready(function() {

$('.gallery-item').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

});