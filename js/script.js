$(document).ready(function() {
	
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(3000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
<<<<<<< HEAD

});

$(document).ready(function() {

$('.gallery-item').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});

});


  
	  
    
    
  








=======
	
});
>>>>>>> 64bc0ab6ae6072f0214587e49b516a2469a4ebf2
