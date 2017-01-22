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


$(document).readyx(function() {
	$('button').on('click', function(){
	    $('button').removeClass('flips');
	    $(this).addClass('selected');
	});
});
