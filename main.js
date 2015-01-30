$(document).ready(function () {
  //all code that is dom dependent lives here


  //CREATING EVENTS///

  ////BILL MURRAY/////////////

  $(".box").find("select").on("change", function () {

    if ($(this).val() === "AnswerA") {

      $(this).closest(".box").css("background", "url(http://www.fillmurray.com/200/200)");

    }

    else if ($(this).val() === "AnswerB") {

      $(this).closest(".box").css("background", "url(images/guessagain.jpg)");

    }
    else if ($(this).val() === "AnswerC") {

      $(this).closest(".box").css("background", "url(images/guessagain.jpg)");

    }
    else { $(this).closest(".box").css("background", "url(images/defaultbg.jpg)");

  }

});

///////NICK CAGE/////////

$(".box2").find("select").on("change", function () {
  if ($(this).val() === "AnswerA") {
    $(this).closest(".box2").css("background", "url(http://www.placecage.com/200/200)");
  }
  else if ($(this).val() === "AnswerB") {
    $(this).closest(".box2").css("background", "url(images/guessagain.jpg)");
  }
  else if ($(this).val() === "AnswerC") {
    $(this).closest(".box2").css("background", "url(images/guessagain.jpg)");
  }
  else { $(this).closest(".box2").css("background", "url(images/defaultbg.jpg)");
}
});

//CLOSES THE JAVASCRIPT///

});
