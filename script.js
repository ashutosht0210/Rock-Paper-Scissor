let box = document.querySelectorAll(".box");
let userMsg = document.querySelector("#msg-user");
let compMsg = document.querySelector("#msg-comp");
let winMsg = document.querySelector("#msg-win");

let n;
let choice;

let scoreW = 0, scoreL = 0, scoreD = 0;
let scoreWEl = document.querySelector("#score-w");
let scoreLEl = document.querySelector("#score-l");
let scoreDEl = document.querySelector("#score-d");

box[0].addEventListener("click",() => {
    userMsg.innerText = "You chose Rock.";
    n = Math.floor(Math.random() * 3);
    if(n==0) {
        compMsg.innerText = "Computer chose Rock.";
        winMsg.innerText = "It's a Draw!";
        scoreD++;
    }
    else if(n==1) {
        compMsg.innerText = "Computer chose Paper.";
        winMsg.innerText = "You Lose!";
        scoreL++;
    }
    else {
        compMsg.innerText = "Computer chose Scissors.";
        winMsg.innerText = "You Win!";
        scoreW++;
    }

    scoreWEl.innerText = scoreW;
    scoreDEl.innerText = scoreD;
    scoreLEl.innerText = scoreL;
});

box[1].addEventListener("click",() => {
    userMsg.innerText = "You chose Paper.";
    n= Math.floor(Math.random() * 3);
    if(n==0) {
        compMsg.innerText = "Computer chose Rock.";
        winMsg.innerText = "You Win!";
        scoreW++;
    }
    else if(n==1) {
        compMsg.innerText = "Computer chose Paper.";
        winMsg.innerText = "It's a Draw!";
        scoreD++;
    }
    else {
        compMsg.innerText = "Computer chose Scissors.";
        winMsg.innerText = "You Lose!";
        scoreL++;
    }

    scoreWEl.innerText = scoreW;
    scoreDEl.innerText = scoreD;
    scoreLEl.innerText = scoreL;
});

box[2].addEventListener("click",() => {
    userMsg.innerText = "You chose Scissors.";
    n= Math.floor(Math.random() * 3);
    if(n==0) {
        compMsg.innerText = "Computer chose Rock.";
        winMsg.innerText = "You Lose!";
        scoreL++;
    }
    else if(n==1) {
        compMsg.innerText = "Computer chose Paper.";
        winMsg.innerText = "You Win!";
        scoreW++;
    }
    else {
        compMsg.innerText = "Computer chose Scissors.";
        winMsg.innerText = "It's a Draw!";
        scoreD++;
    }

    scoreWEl.innerText = scoreW;
    scoreDEl.innerText = scoreD;
    scoreLEl.innerText = scoreL;
});

let replay = document.querySelector("#replay");

replay.addEventListener("click",()=> {
    location.reload();
});

