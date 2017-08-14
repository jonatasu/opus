var alreadyRunnedNumbersCount = false;

function runNumbers(){
  if($(window).scrollTop() > ($("#num_1_target").offset().top - 600) && alreadyRunnedNumbersCount === false ){

    var options = {
          useEasing : true,
          useGrouping : true,
          separator : '',
          decimal : ',',
        },
        target_1 = document.getElementById("num_1_target"),
        target_2 = document.getElementById("num_2_target"),
        target_3 = document.getElementById("num_3_target"),
        target_4 = document.getElementById("num_4_target"),
        startVal = 0,
        endVal_1 = document.getElementById("num_1_n").value,
        endVal_2 = document.getElementById("num_2_n").value,
        endVal_3 = document.getElementById("num_3_n").value,
        endVal_4 = document.getElementById("num_4_n").value;

    var numAnim_1 = new CountUp(target_1, startVal, endVal_1, 0, 3, options),
        numAnim_2 = new CountUp(target_2, startVal, endVal_2, 0, 3, options),
        numAnim_3 = new CountUp(target_3, startVal, endVal_3, 0, 3, options),
        numAnim_4 = new CountUp(target_4, startVal, endVal_4, 0, 3, options);


    numAnim_1.start();
    numAnim_2.start();
    numAnim_3.start();
    numAnim_4.start();

    alreadyRunnedNumbersCount = true;
  }
}

$(window).scroll(function() { runNumbers(); });

$(document).ready(function() { runNumbers(); });
