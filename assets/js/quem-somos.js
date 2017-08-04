$(".data_num").each(function(){
  var target = $(this).find("span"),
      startVal = parseInt(target.html()),
      endVal = parseInt(target.data("n"));

  var numAnim = new CountUp(target, startVal, endVal);
  numAnim.start();
});
