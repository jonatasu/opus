// Global variables
var navbarHeight = $(".navbar-om").height();
var wrapperHeight = $("#wrapper").height();

// Prevents a click on the active item on menu
$(".om nav.navbar li.active a").on("click", function(e){ e.preventDefault(); });

// Iniate the Animate On Scroll plugin
AOS.init({
  disable: 'mobile',
  offset: 100,
  duration: 1000,
  easing: 'ease-in-sine',
  delay: 200
});

$(document).ready(function(){

  // Animate the bottom border from main title
  if($("header#inside").length > 0){
    var td = $("header#inside h2 span"),
        tdr = td.parent().width() - (td.width() + td.offset().left),
        hr = td.find("hr");
    hr.width(td.width() + tdr);
  }
});

$(window).scroll(function(){
  // Calls AOS again if content height's changes
  if(wrapperHeight !== $("#wrapper").height()){
    wrapperHeight = $("#wrapper").height();
    AOS.refresh();
  }
});
