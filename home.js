const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const target = document.querySelector(button.dataset.tabTarget);
    tabContents.forEach(content => {
      if (content === target) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});

function checkGuess(guess) {
    let num = Math.floor(Math.random() * 10);
    if (num == 0) {
        num = 1;
    }
    if (guess == num) {
        alert("Correct");
    }
    else {
        alert("Incorrect");
    }
}

var score;
var duration = 5; // seconds
var startTime;
var ended = true;
var timerTxt = document.getElementById("timer");
var scoreTxt = document.getElementById("score");
var clicksTxt = document.getElementById("clicks");
var startBtn = document.getElementById("start");
var clickArea = document.getElementById("clickarea");
var show = function(elem) {
  elem.style.display = 'inline';
};
var hide = function(elem) {
  elem.style.display = 'none';
};
function startGame() {
  hide(startBtn);
  score = -1;
  ended = false;
  startTime = new Date().getTime();
  var timerId = setInterval(function() {
    var total = (new Date().getTime() - startTime) / 1000;
    if (total < duration) {
      timerTxt.textContent = total.toFixed(3);
      clicksTxt.textContent = (score / total).toFixed(2);
    } else {
      ended = true;
      clearInterval(timerId);
      var cps = (score / duration).toFixed(2);
      timerTxt.textContent = duration.toFixed(3);
      clicksTxt.textContent = cps;
      show(startBtn);
      setTimeout(function() {
          alert(score + ' clicks in ' + duration + ' seconds, which is ' + cps + ' cps.');
      }, 10);
    }
  }, 1);
}
function endGame() {
var cps = (score / duration).toFixed(2);
timerTxt.textContent = duration.toFixed(3);
clicksTxt.textContent = clicsBySeconds;
show(startBtn);
setTimeout(function() {
  alert(score + ' clicks in ' + duration + 
  ' seconds, which is ' + cps + 
  ' cps.');
}, 10);
}
startBtn.addEventListener("click", function(e) {
startGame();
});
clickArea.addEventListener("click", function(e) {
if (!ended) {
  score++;
  scoreTxt.textContent = score;
}
});