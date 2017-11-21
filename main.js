var cookie = document.getElementById('cookie')

var score = document.getElementsByClassName('.score')

var pointsShown = 0

var score = 0


// FUNCTION: WHEN CLICKED, INCREASE SCORE:

var upScore = function() {

    for (var i = 0; i >= 0; i++) {
        score += 10;
        pointsShown.innerHTML = score;
    }
}

// listen for cookie click/ do thing

cookie.addEventListener('click', upScore());

