const mario = document.querySelector('.mario'); // accessing the class
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump'); // add 'jump' to class

    setTimeout(() => {

        mario.classList.remove('jump');
        
    },500); // remove 'jump' from class
}


/* Speeds up the game every 0.5s */
const animation = document.getElementsByClassName('pipe');

function speed() {
  for (let i = 0; i < animation.length; i++) {
    const currentDuration = parseFloat(window.getComputedStyle(animation[i]).getPropertyValue('animation-duration'));
    const newDuration = Math.max(currentDuration - 0.5,0.5);
    animation[i].style.animationDuration = newDuration + 's';
  }
  setTimeout(speed, 10000);
}

setTimeout(speed, 10000);


// game over rules
const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px','');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src ="./img/game-over.png";
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }
}, 10); 



document.addEventListener('keydown', jump)// jump when clicked