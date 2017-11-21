var cookie = document.getElementById('cookie')

var score = document.getElementsByClassName('score')

var points = 0

// FUNCTION: WHEN CLICKED, INCREASE SCORE:

var upScore = function() {
        points += 10;
        score[0].innerHTML = points;
}

// RESET SCORE 

var reset = document.getElementById('reset')
var zeroOut = function() {
        points = 0;
        score[0].innerHTML = points
}

reset.addEventListener('click', zeroOut)


// listen for cookie click/ do thing

cookie.addEventListener("click", upScore);

// add cookie monster

if (score >= 100 && score <= 130) {
    
}