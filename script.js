const holes = $(".hole");
const scoreBoard = $(".score");
let score = 0;
const moles = $(".mole");

// mettre 10s
$("#startGame").click(function (){
    startGame();
})

let trouHasard = holes[Math.floor(Math.random() * holes.length)];
let intervalTempsHasard = Math.random() * (1000 - 200) + 200;
function startGame() {
    $(trouHasard).addClass("up");
    moles.show(speed(intervalTempsHasard));
}

// Lorqu'on clique sur une taupe le score augmente de 1 a chaque fois
moles.click(function () {
    $(this).each(function (){
        $(trouHasard).removeClass("up");
        trouHasard = holes[Math.floor(Math.random() * holes.length)];
        score++;
        scoreBoard.html(score);
        setInterval(function () {
            startGame();
        },intervalTempsHasard);
    })
})



