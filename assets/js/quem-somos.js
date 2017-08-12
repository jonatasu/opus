$(document).ready(function() {
  
    var options = {
      useEasing : true,
      useGrouping : true
    };

    $(".data_num").each(function(){
      var target = $(this).find("span"),
          endVal = target.data("count");

      var numAnim = new CountUp(target, 0, endVal, options);
      //console.log(target, endVal);
      numAnim.start();
    });

});
