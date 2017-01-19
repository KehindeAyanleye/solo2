$(function() {
  //@ find a href that starts with a # but has other chracters after it
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          // @2000 is the time the scroll takes to get to the div 
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
});
