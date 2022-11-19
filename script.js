window.onload = (event) => {
  // $("#messageBox").center();
  alert(
    "Please enter a number and check with secret number.If you are wrong,score value was smaller.If your value was right,score value must be entered in the high score.And You try next time again with pressing again button."
  );
};

$(document).ready(function () {
  $("#messageBox").show();
  var secretNum = Math.trunc(Math.random() * 20) + 1;
  var scoreNum = 20;
  var highScore = 0;
  var num = 0;

  $("#btnClick").click(function () {
    var inputNum = Number($("#input").val());
    console.log(inputNum);
    //for input number.
    if (!inputNum) {
      $("#message").text("No Number...");
    } else if (inputNum == secretNum) {
      $("#message").text("Correct Number");
      $("body").css("background", "#34ebbd");
      $("#secret").text(`${secretNum}`);
      if (scoreNum > highScore) {
        highScore = scoreNum;
        $(".highScore").text(`${highScore}`);
      }
    } else if (inputNum > secretNum) {
      //when input number greater than secret number,the message show you.Check with score number again.
      if (scoreNum > 0) {
        $("#message").text("Too High");
        scoreNum--;
        $(".score").text(`${scoreNum}`);
      } else {
        $("#message").text("Sorry! You Lose.");
        $(".score").text(`${num}`);
      }
    } else if (inputNum < secretNum) {
      //when input number less than secret number,the message show you.Check with score number again.
      if (scoreNum > 0) {
        $("#message").text("Too Low");
        scoreNum--;
        $(".score").text(`${scoreNum}`);
      } else {
        $("#message").text("Sorry! You Lose.");
        $(".score").text(`${num}`);
      }
    }
  });

  //When you press again button,the game must be started again.
  $("#again").click(function () {
    scoreNum = 20;
    $(".score").text(`${scoreNum}`);
    secretNum = Math.trunc(Math.random() * 20) + 1;
    $("#message").text("Start Guessing....");
    $("#secret").text("?");
    $("#input").val("");
    $("body").css("background", "rgb(95, 162, 164)");
  });
});

// function CenterElementPosition() {
//   $(".centreElementWithJQuery").CSS({
//     position: "absolute",
//     left: ($(window).width() - $(".centreElementWithJQuery").outerWidth()) / 2,
//     top: ($(window).height() - $(".centreElementWithJQuery").outerHeight()) / 2,
//   });
// }
