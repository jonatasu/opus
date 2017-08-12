jQuery(document).ready(function($){

  if($(window).width() < 768){

    // Custom EM and SPAN.SIDE-INFO heights
    $(".artigos").each(function(){
      var a_title = [], a_desc = [];

      $(this).find(".artigo .title").each(function(i){
        console.log($(this).html(),i,$(this).outerHeight());
        a_title.push($(this).height());
      });
      $(this).find(".artigo .description").each(function(){
        a_desc.push($(this).height());
      });

      a_title = Math.max.apply(null, a_title) / 1;
      a_desc = Math.max.apply(null, a_desc);

      $(this).find(".artigo .title").each(function(){
        $(this).height(a_title+"px");
      });
      $(this).find(".artigo .description").each(function(){
        $(this).height(a_desc+"px");
      });

    });

  }

});
