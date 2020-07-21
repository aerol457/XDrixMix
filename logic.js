function Clicked(id) {

  MakeAMove(id);

  var detailsGame = CheckVictory();

  var itsDraw = CheckDraw();

  if (detailsGame.GameOver || count == 9) {
    if (itsDraw == 9 && !detailsGame.gameOver) {
      window.alert("Game Over! It's Draw");
    } else {
      window.alert("Game Over! Player " + detailsGame.Winner + " Win The Game");
      var score;
      if (detailsGame.Winner == "X") {
        score = document.getElementById("xscore").innerText;
        score++;
        document.getElementById("xscore").innerText = score;
      } else {
        score = document.getElementById("oscore").innerText;
        score++;
        document.getElementById("oscore").innerText = score;
      }
    }
    ResetGame();
  }
}









// Check If Have A Draw
function CheckDraw() {
  var count = 0;
  for (i = 21; i < 38; i += 2) {
    if (document.getElementById(i).innerText != "") {
      count++;
    }
  }
  return count;
}




//Check Who Play And Where
function MakeAMove(id) {
  const val = document.getElementById(id).innerText;
  var btn;
  if (id % 2 == 0) {
    const idLabelO = +id - 1 + 20;
    document.getElementById(idLabelO).innerText = val;
    document.getElementById(id).style.visibility = "hidden";
    document.getElementById(+id - 1).style.visibility = "hidden";
    for (i = 1; i < 18; i += 2) {
      btn = document.getElementById(i);
      btn.disabled = false;
    }
    for (i = 2; i <= 18; i += 2) {
      btn = document.getElementById(i);
      btn.disabled = true;
    }
  } else {
    const idLabelX = +id + 20;
    document.getElementById(idLabelX).innerText = val;
    document.getElementById(id).style.visibility = "hidden";
    document.getElementById(+id + 1).style.visibility = "hidden";
    for (i = 1; i < 18; i += 2) {
      btn = document.getElementById(i);
      btn.disabled = true;
    }
    for (i = 2; i <= 18; i += 2) {
      btn = document.getElementById(i);
      btn.disabled = false;
    }
  }
}





//Check If Game Over
function CheckVictory() {

  var val1, val2, val3;
  var winner = "";
  var gameOver = false;

  //Check Horizontal
  var idLabel = 19;
  while (idLabel != 37 && !gameOver) {
    idLabel += 2;
    val1 = document.getElementById(idLabel).innerText
    idLabel += 2;
    val2 = document.getElementById(idLabel).innerText
    idLabel += 2;
    val3 = document.getElementById(idLabel).innerText

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 == val2 && val1 == val3) {
        gameOver = true;
        winner = val1;
      }
    }

  }

  //Check Vertical
  idLabel = 21;
  while (idLabel != 27 && !gameOver) {
    val1 = document.getElementById(idLabel).innerText
    idLabel += 6;
    val2 = document.getElementById(idLabel).innerText
    idLabel += 6;
    val3 = document.getElementById(idLabel).innerText

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 == val2 && val1 == val3) {
        gameOver = true;
        winner = val1;
      }
    }
    idLabel -= 10;
  }

  //Check Slant
  idLabel = 25;
  var skip = 4;
  while (skip != 12 && !gameOver) {
    val1 = document.getElementById(idLabel).innerText
    idLabel += skip;
    val2 = document.getElementById(idLabel).innerText
    idLabel += skip;
    val3 = document.getElementById(idLabel).innerText

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 == val2 && val1 == val3) {
        gameOver = true;
        winner = val1;
      }
    }
    skip += 4;
    idLabel -= 12;
  }

  var details = {};
  details.GameOver = gameOver;
  details.Winner = winner;

  return details;
}




//Reset Game
function ResetGame() {
  for (i = 21; i < 38; i += 2) {
    document.getElementById(i).innerText = "";
  }
  for (i = 1; i < 19; i++) {
    document.getElementById(i).style.visibility = "visible";
    btn = document.getElementById(i);
    btn.disabled = false;
  }
}