let home = 0
let guest = 0
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function add1Home(){
    home += 1 
    homeScore.textContent = home
}

function add2Home(){
    home += 2
    homeScore.textContent = home
}

function add3Home(){
    home += 3
    homeScore.textContent = home
}

function add1Guest(){
    guest += 1
    guestScore.textContent = guest
}

function add2Guest(){
    guest += 2
    guestScore.textContent = guest
}

function add3Guest(){
    guest += 3
    guestScore.textContent = guest
}

function newgame(){
    home = 0
    guest = 0
    homeScore.textContent = home
    guestScore.textContent = guest
}

