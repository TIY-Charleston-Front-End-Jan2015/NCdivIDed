$(document).ready(function () {
  //all code that is dom dependent lives here


  //CREATING EVENTS///

  //Michael Jordan//

  $(".box1").find("select").on("change", function () {

    if ($(this).val() === "AnswerA") {

      $(this).closest(".box1").css("background", "url(images/guessagain.jpg)");

    }

    else if ($(this).val() === "AnswerB") {

      $(this).closest(".box1").css("background", "url(images/jordan.jpeg)");

    }
    else if ($(this).val() === "AnswerC") {

      $(this).closest(".box1").css("background", "url(images/guessagain.jpg)");

    }
    else { $(this).closest(".box1").css("background", "url(images/defaultbg.jpg)");

  }

});


///////Nolan Ryan/////////

$(".box2").find("select").on("change", function () {
  if ($(this).val() === "AnswerA") {
    $(this).closest(".box2").css("background", "url(images/nolanryan.jpg)");
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


/////////Usain Bolt//////////////
$(".box3").find("select").on("change", function () {
  if ($(this).val() === "AnswerA") {
    $(this).closest(".box3").css("background", "url(images/guessagain.jpg)");
  }
  else if ($(this).val() === "AnswerB") {
    $(this).closest(".box3").css("background", "url(images/bolt.jpg)");
  }
  else if ($(this).val() === "AnswerC") {
    $(this).closest(".box3").css("background", "url(images/guessagain.jpg)");
  }
  else { $(this).closest(".box3").css("background", "url(images/defaultbg.jpg)");
}
});


////////Neymar//////////
$(".box4").find("select").on("change", function () {
  if ($(this).val() === "AnswerA") {
    $(this).closest(".box4").css("background", "url(images/guessagain.jpg)");
  }
  else if ($(this).val() === "AnswerB") {
    $(this).closest(".box4").css("background", "url(images/guessagain.jpg)");
  }
  else if ($(this).val() === "AnswerC") {
    $(this).closest(".box4").css("background", "url(images/neymar.jpg)");
  }
  else { $(this).closest(".box4").css("background", "url(images/defaultbg.jpg)");
}
});

////////marshawn lynch//////

$(".box5").find("select").on("change", function () {
  if ($(this).val() === "AnswerA") {
    $(this).closest(".box5").css("background", "url(images/Lynch.jpg)");
  }
  else if ($(this).val() === "AnswerB") {
    $(this).closest(".box5").css("background", "url(images/guessagain.jpg)");
  }
  else if ($(this).val() === "AnswerC") {
    $(this).closest(".box5").css("background", "url(images/guessagain.jpg)");
  }
  else { $(this).closest(".box5").css("background", "url(images/defaultbg.jpg)");
}
});


////////Mia Hamm//////
$(".box6").find("select").on("change", function () {
  if ($(this).val() === "AnswerA") {
    $(this).closest(".box6").css("background", "url(images/mia.jpg)");
  }
  else if ($(this).val() === "AnswerB") {
    $(this).closest(".box6").css("background", "url(images/guessagain.jpg)");
  }
  else if ($(this).val() === "AnswerC") {
    $(this).closest(".box6").css("background", "url(images/guessagain.jpg)");
  }
  else { $(this).closest(".box6").css("background", "url(images/defaultbg.jpg)");
}
});

//CLOSES THE JAVASCRIPT///

});
