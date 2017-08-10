// Global variables
var navbar        = $('.navbar'),
    navbarHeight  = navbar.height(),
    wrapperHeight = $("#wrapper").height(),
    lastScrollTop = 0;

// Adds the class "" on the NAVBAR if on a mobile/tablet
function setNavbarFixedLocation(){
  if($(window).width() < 1200){
    navbar.addClass('navbar-fixed-top');
  } else {
    navbar.removeClass('navbar-fixed-top');
  }
}
// Check if we're on a mobile browser
window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

// Adds a class to the BODY tag if we're on mobile browser
function setMobileClassOnBody(){
  if(mobileAndTabletcheck() === true){
    $(".om").addClass('mobile-browser');
  } else {
    $(".om").removeClass('mobile-browser');
  }
}

// Change Footer place depending on the window size
function setFooterLocation(){
  if($(window).width() < 1200){
    $("#navbar").append($("#relocate_menu"));
    $("body").prepend($("#navbar"));
  } else {
    $("nav > div").append($("#navbar"));
    $("#main_footer").append($("#relocate_menu"));
  }
}

// Toggle class "menu-mobile-open" on tag BODY
$(".navbar-toggle").on("click", function(){
  $("body").toggleClass('mobile-menu-open');
  //$("#navbar").height($(window).height());
});

// Prevents a click on the active item on menu
$(".om nav.navbar li.active a").on("click", function(e){ e.preventDefault(); });

// Iniate the Animate On Scroll plugin
AOS.init({
  disable: 'mobile',
  offset: 100,
  duration: 1400,
  easing: 'ease-out',
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

// Execute after DOM Ready
$(document).ready(function(){
  setMobileClassOnBody();
  setNavbarFixedLocation();
  setFooterLocation();

  //$(".navbar-collapse.collapse").height($(window).height());

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

  // Shows NAVBAR when Scrolls Top!
  var st = $(this).scrollTop();
  if(!$("body").hasClass('mobile-menu-open')){
    if (st > lastScrollTop){
      navbar.addClass('navbar-scroll-custom');
    } else {
      navbar.removeClass('navbar-scroll-custom');
    }
    if(st === 0){
      navbar.removeClass("navbar-mobile-bg");
    } else {
      if(navbar.hasClass('navbar-mobile-bg') === false){
        navbar.addClass('navbar-mobile-bg');
      }
    }
  }
  lastScrollTop = st;

  // Calls AOS again if content height's changes
  if(wrapperHeight !== $("#wrapper").height()){
    wrapperHeight = $("#wrapper").height();
    AOS.refresh();
  }
})
.resize(function(){
  setMobileClassOnBody();
  setNavbarFixedLocation();
  setFooterLocation();
});
