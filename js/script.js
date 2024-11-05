const mario = document.querySelector(".mario");
const poop = document.querySelector(".poop");
var score =0;
const pontos = document.querySelector(".score");
pontos.innerHTML = "";

const jump =() => {

    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 600);
}

const loop = setInterval(()=>{
    const poopPosition = poop.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    if(poopPosition <= 250 && marioPosition <64 && poopPosition >-2){

        poop.style.animation = 'none';
        poop.style.left = `${poopPosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = "/img/game-over.png";
        mario.style.width = "5%";
        mario.style.marginLeft = "10em";

        clearInterval(loop);

    }
    else{
        score +=1;
        pontos.innerHTML = `SCORE: ${score}`;
        if(score>=500){
            poop.style.animation = '1s';
        }
    }
   

}, 10)



document.addEventListener('keydown', jump);

