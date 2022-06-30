let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
var btn = document.getElementsByClassName("score-btn")
const countdownEl = document.getElementById("match-timer")
const foulHome = document.getElementById("foul-home")
const foulGuest = document.getElementById("foul-guest")



const startingMinutes = 10
let time = startingMinutes*60
let refreshIntervalId = setInterval(updateCountdown, 1000) //update every 1 second



function updateCountdown() {
    let minutes = Math.floor(time / 60)
    let seconds = time % 60
    
    seconds = seconds < 10 ? '0' + seconds : seconds
    minutes = minutes < 10 && minutes >= 0  ? '0' + minutes : minutes
    countdownEl.innerHTML = `${minutes}:${seconds}`
    time--
    
    
     if (time < 0) { //stop the setInterval whe time = 0 for avoid negative time
                clearInterval(refreshIntervalId);
}
}



// Resetting to default game parameters
function newGame() {
    homePoints.innerText = 0
    guestPoints.innerText = 0
    foulHome.innerText = 0
    foulGuest.innerText = 0
    
    guestScore.style.backgroundColor = ""
    homeScore.style.backgroundColor = "" 

    if (time < 0) { //stop the setInterval whe time = 0 for avoid negative time
        time = startingMinutes*60
        refreshIntervalId = setInterval(updateCountdown, 1000)
        updateCountdown()
    } else {
        time = startingMinutes*60
        updateCountdown()
    }

}

// Adding points
function add1Home() {
    homePoints.innerText++
    //check()
}


function add2Home() {
    homePoints.innerText =  parseInt(homePoints.innerText) + 2
    //check()
}


function add3Home() {
    homePoints.innerText =  parseInt(homePoints.innerText) + 3
    //check()
}


function add1Guest() {
    guestPoints.innerText++
    //check()
}


function add2Guest() {
    guestPoints.innerText =  parseInt(guestPoints.innerText) + 2
    //check()
}


function add3Guest() {
    guestPoints.innerText =  parseInt(guestPoints.innerText) + 3
    //check()
}

function addFoulHome() {
       foulHome.innerText++ 
}

function addFoulGuest() {
       foulGuest.innerText++ 
}




// checking who has the higher score and highlighting the leading team
Array.prototype.map.call(btn, (b) => {
  b.addEventListener("click",  function check() {
    if (parseInt(homePoints.innerText) > parseInt(guestPoints.innerText)) {
        homeScore.style.backgroundColor = "green"
        guestScore.style.backgroundColor = ""
    } else if (parseInt(homePoints.innerText) < parseInt(guestPoints.innerText)) {
        guestScore.style.backgroundColor = "green"
        homeScore.style.backgroundColor = ""
    } else {
        guestScore.style.backgroundColor = ""
        homeScore.style.backgroundColor = "" 
    }

})
})
