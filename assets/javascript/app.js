var correctAnswers = 0;
var wrongAnswers = 0;
var unansweredQuestions = 5;
$(document).ready(function() {
  $('.questionOne input[type="radio"]').click(function() {
    unansweredQuestions = unansweredQuestions - 1;
    console.log(unansweredQuestions);

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
function gameOver(correctInput, wrongInput, noInput) {
  console.log("Correct Answers:" + correctAnswers);
  console.log("Uncorrect Answers:" + wrongAnswers);
  console.log("Unaswered Questions:" + unansweredQuestions);
}
var gameStatus = setTimeout(() => {
  gameOver(correctAnswers, wrongAnswers, unansweredQuestions);
}, 30000);
