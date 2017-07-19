var csl = $("#carousel-om"),
    cpt = $("#caption"),
    caption = $("#caption > div > div");

csl.height($(window).height()).fadeIn();
caption.html(csl.find(".item.active .carousel-caption").html());
cpt.fadeIn().addClass("anima");

csl.on('slide.bs.carousel', function () {
  cpt.fadeOut("fast").removeClass("anima");
}).on('slid.bs.carousel', function () {
  caption.html(csl.find(".item.active .carousel-caption").html());
  cpt.css("margin-top","-"+(cpt.height()/2)+"px").fadeIn().addClass("anima");
});

$(document).ready(function(){
  cpt.css("margin-top","-"+(cpt.height()/2)+"px");

  $(".bbd").each(function(){
    setTimeout(function(){
      $(this).css("border-bottom","5px solid #FFF");
    },2000);
  });
});
