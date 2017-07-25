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
  delay: 200,
  once: true
});

// Mobile alternative for BS3 tabs
if($("#mobile_tabs").length !==0){
  $("#mobile_tabs").on("change", function(){
    $('#tabs_about a[href="'+$(this).val()+'"]').tab('show');
    $("html, body").scrollTop($("#mobile_tabs").offset().top);
  });
}

$(document).ready(function(){

  // Animate the bottom border from main title
  if($("h2.obj-w-border-2").length > 0){
    var td = $("h2.obj-w-border-2").find("span"),
        tdr = td.parent().width() - (td.width() + td.position().left),
        hr = td.find("hr");
    hr.width(td.width() + tdr);
  }

  $(".case").on("mouseover", function(){
    var td = $(this).find("span.obj-w-border-2 span"),
        tdr = td.parent().width() - (td.width() + td.position().left),
        hr = td.find("hr");
    hr.width(td.width() + tdr);
  }).on("mouseleave", function(){
    var td = $(this).find("span"),
        hr = td.find("hr");
    hr.width(0);
  });
});

$(window).scroll(function(){
  // Calls AOS again if content height's changes
  if(wrapperHeight !== $("#wrapper").height()){
    wrapperHeight = $("#wrapper").height();
    AOS.refresh();
  }
});
