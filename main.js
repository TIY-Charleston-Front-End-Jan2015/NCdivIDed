$(document).ready(function () {
  //all code that is dom dependent lives here


  //CREATING EVENTS///

  //Michael Jordan//
  $('h1').on('click',function(){

    if($('article').hasClass('shrink')){
      $('h1')
      .text('x')
      .css('color','rgb(200,200,200)')
      .attr('title',"click to close");
    }else{
     $('h1')
     .text('Stuck? Read their bio.')
     .css('color','rgb(66,66,66)')
     .attr('article',"click to open infoBox");
    }

    $('article').toggleClass('shrink');
  });


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


//MUSIC///



$(".boxA").find("select").on("change", function () {

  if ($(this).val() === "AnswerA") {

    $(this).closest(".boxA").css("background", "url(images/guessagain.jpg)");

  }

  else if ($(this).val() === "AnswerB") {

    $(this).closest(".boxA").css("background", "url(images/hankw.jpeg)");

  }
  else if ($(this).val() === "AnswerC") {

    $(this).closest(".boxA").css("background", "url(images/guessagain.jpg)");

  }
  else { $(this).closest(".boxA").css("background", "url(images/defaultbg.jpg)");

}

});



$(".boxB").find("select").on("change", function () {

  if ($(this).val() === "AnswerA") {

    $(this).closest(".boxB").css("background", "url(images/jmoore.jpeg)");

  }

  else if ($(this).val() === "AnswerB") {

    $(this).closest(".boxB").css("background", "url(images/guessagain.jpg)");

  }
  else if ($(this).val() === "AnswerC") {

    $(this).closest(".boxB").css("background", "url(images/guessagain.jpg)");

  }
  else { $(this).closest(".boxB").css("background", "url(images/defaultbg.jpg)");

}

});

$(".boxC").find("select").on("change", function () {

  if ($(this).val() === "AnswerA") {

    $(this).closest(".boxC").css("background", "url(images/avett.jpg)");

  }

  else if ($(this).val() === "AnswerB") {

    $(this).closest(".boxC").css("background", "url(images/guessagain.jpg)");

  }
  else if ($(this).val() === "AnswerC") {

    $(this).closest(".boxC").css("background", "url(images/guessagain.jpg)");

  }
  else { $(this).closest(".boxC").css("background", "url(images/defaultbg.jpg)");

}

});
$(".boxD").find("select").on("change", function () {

  if ($(this).val() === "AnswerA") {

    $(this).closest(".boxD").css("background", "url(images/guessagain.jpg)");

  }

  else if ($(this).val() === "AnswerB") {

    $(this).closest(".boxD").css("background", "url(images/guessagain.jpg)");

  }
  else if ($(this).val() === "AnswerC") {

    $(this).closest(".boxD").css("background", "url(images/beyonce.jpg)");

  }
  else { $(this).closest(".boxD").css("background", "url(images/defaultbg.jpg)");

}

});
//CLOSES THE JAVASCRIPT///

});
