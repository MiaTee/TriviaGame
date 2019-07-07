var correctAnswers = 0;
var wrongAnswers = 0;
var unansweredQuestions = 5;

$(document).ready(function() {
  //gameTimer();
  $(".button-div").click(function() {
    $(".trivia-questions").show();
    $(".button-div").hide();
    $(".user-done-button").show();
    console.log("I have been clicked!");
  });
  $(".user-done-button").click(function() {
    $(".game-status").show();
    $(".trivia-questions").hide();
    $(".button-div").hide();
    $(".user-done-button").hide();
    gameOver();
    //gameOver(correctInput, wrongInput, noInput);
  });
  $(".go-back-button-div").click(function() {
    location.reload();
  });
  $('.questionOne input[type="radio"]').click(function() {
    unansweredQuestions = unansweredQuestions - 1;
    console.log("Unanswered Questions:" + unansweredQuestions);

    //this is how to check if button was checked
    //$('input:radio[name=questionOne]')[0].checked = true;
    //or
    //$(".questionOne").attr('checked', 'checked');

    var answer = $(this).val();

    console.log(answer);
    if (answer === "Éclair") {
      correctAnswers = correctAnswers + 1;
      console.log(correctAnswers);
    } else {
      wrongAnswers = wrongAnswers + 1;
      console.log(wrongAnswers);
    }
  });
  $('.questionTwo input[type="radio"]').click(function() {
    var answer = $(this).val();
    unansweredQuestions = unansweredQuestions - 1;
    console.log(unansweredQuestions);
    console.log(answer);
    if (answer === "The Tanner Family") {
      correctAnswers = correctAnswers + 1;
      console.log(correctAnswers);
    } else {
      wrongAnswers = wrongAnswers + 1;
      console.log(wrongAnswers);
    }
  });
  $('.questionThree input[type="radio"]').click(function() {
    unansweredQuestions = unansweredQuestions - 1;
    console.log(unansweredQuestions);
    var answer = $(this).val();
    console.log(answer);
    if (answer === "Common fig") {
      correctAnswers = correctAnswers + 1;
      console.log(correctAnswers);
    } else {
      wrongAnswers = wrongAnswers + 1;
      console.log(wrongAnswers);
    }
  });
  $('.questionFour input[type="radio"]').click(function() {
    unansweredQuestions = unansweredQuestions - 1;
    console.log(unansweredQuestions);
    var answer = $(this).val();
    console.log(answer);
    if (answer === "Oscar Wilde") {
      correctAnswers = correctAnswers + 1;
      console.log(correctAnswers);
    } else {
      wrongAnswers = wrongAnswers + 1;
      console.log(wrongAnswers);
    }
  });
  $('.questionFive input[type="radio"]').click(function() {
    unansweredQuestions = unansweredQuestions - 1;
    console.log(unansweredQuestions);
    var answer = $(this).val();
    console.log(answer);
    if (answer === "Jim Morrison") {
      correctAnswers = correctAnswers + 1;
      console.log(correctAnswers);
    } else {
      wrongAnswers = wrongAnswers + 1;
      console.log(wrongAnswers);
    }
  });
});
function gameOver(a, b, c) {
  $(".game-status").append(
    "<p>" +
      "Correct Answers:" +
      correctAnswers +
      "</p>" +
      "<p>" +
      "Uncorrect Answers:" +
      wrongAnswers +
      "</p>" +
      "<p>" +
      "Unaswered Questions:" +
      unansweredQuestions +
      "</p>"
  );

  console.log("Correct Answers:" + correctAnswers);
  console.log("Uncorrect Answers:" + wrongAnswers);
  console.log("Unaswered Questions:" + unansweredQuestions);
}
// var gameStatus = setTimeout(() => {
//   gameOver(correctAnswers, wrongAnswers, unansweredQuestions);
// }, 0);
// function gameTimer() {
//   var counter = 15;
//   var newcounter = counter - 1;
//   // Display 'counter' wherever you want to display it.
//   if (counter === 0) {
//     gameOver();
//   }
//   setInterval(function() {
//     $(".game-timer").text(counter - newcounter + "Seconds");
//   }, 1000);
// }
