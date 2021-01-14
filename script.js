const holes = $(".hole");
const scoreBoard = $(".score");
let score = 0;
const moles = $(".mole");
let trouHasard = holes[Math.floor(Math.random() * holes.length)];
let intervalTempsHasard = Math.random() * (1000 - 200) + 200;

$("#startGame").click(function (){
        startGame();

})

function startGame() {
    $(trouHasard).addClass("up");
    moles.click(function () {
        $(this).each(function (){
            $(trouHasard).removeClass("up");
            trouHasard = holes[Math.floor(Math.random() * holes.length)];
            score++;
            scoreBoard.html(score);
            setInterval(function () {
                $(trouHasard).addClass("up");
            },intervalTempsHasard);
        })
    })
    setTimeout(function () {
        alert("FINI, ton score final est de " + score + "!!!");
        location.reload();
    }, 10000)
}

// Lorqu'on clique sur une taupe le score augmente de 1 a chaque fois




