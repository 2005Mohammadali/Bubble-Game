let bubbles = ``;
function makeBubble() {
    bubbles = ``;
    let random_num = 0;
    for (let i = 1; i <= 135; i++) {
        random_num = Math.floor(Math.random() * 10)
        bubbles += `<div class="bubble">${random_num}</div>`
    }

    document.querySelector(".part2").innerHTML = bubbles
}
makeBubble()

let timer = 60;
function runtimer() {
    let timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").textContent = timer
        }
        else {
            clearInterval(timerInterval)
            document.body.querySelector(".part2").innerHTML = `<h1>Game Over</h1> <h5>Your Score: ${score} </h5> <button>Play Again</button>`
            document.body.querySelector(".part2 button").addEventListener("click", function gameRestart(){
                timer = 60;
                document.querySelector("#score").textContent = 0;
                runtimer()
                makeBubble()
                getNewHit()
                gameLogic()
            })
        }
    }, 1000)
}
runtimer()

let hit = 0;
function getNewHit() {
    hit = Math.floor(Math.random() * 10)
    document.querySelector("#hit").textContent = hit
}
getNewHit()

let score = 0;
function incScore() {
    score += 10;
    document.querySelector("#score").textContent = score
}
function decScore() {
    score -= 1;
    document.querySelector("#score").textContent = score
}

document.body.querySelector(".part2").addEventListener("click", function gameLogic(dets) {
    if (dets.target.textContent <= 10) {
        let clkd_num = Number(dets.target.textContent)
        if (clkd_num === hit) {
            incScore();
            makeBubble();
            getNewHit();
        }
        else if (clkd_num !== hit) {
            decScore()
            makeBubble();
            getNewHit();
        }
    }
    else{
        makeBubble();
        getNewHit();
    }
})

