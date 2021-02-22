"use strict";

let number = document.querySelector('.number').value = Math.floor(Math.random()*10)+1;
let num = 20;
let highScore = document.querySelector('.highscore');
let fn = (n)=>document.querySelector('.message').textContent= n;
let numberText = (n)=>document.querySelector('.number').textContent= n;

//When 'Again' button clicked
let reload = document.querySelector('.again').addEventListener('click',()=>{
    numberText('?');
    number = document.querySelector('.number').value = Math.floor(Math.random()*10)+1;
    num = 20;
    document.querySelector('.score').textContent = 20;
    document.querySelector('body').style.backgroundColor= '#222 ';
    fn('Start guessing...');
    document.querySelector('.guess').value='';
})

//When 'Check' button clicked
let guess = document.querySelector('.check').addEventListener('click',()=>{
    let score = document.querySelector('.score');
    let value = Number(document.querySelector('.guess').value);
    //When Correct guess
    if (value === number) {
        fn('Correct Guess');
        if(highScore.textContent <= score.textContent){highScore.textContent= num;}
        numberText(number);
        document.querySelector('body').style.backgroundColor='#25dc77';
    }

    //Game Over
    else if(num === 1){
        fn('Game Over!!');
        score.textContent = 0;
        highScore.textContent= num;
    }
    else if(value >= number - 2 && value <= number - 1) {
        fn('give it lit\'bit more');
        score.textContent = num-=1;
    }
    else if(value <= number + 2 && value >= number + 1){
        fn('less it lit\'bit more');
        score.textContent = num-=1;  
    }
    else{
        fn('Too far away');
        score.textContent = num-=1;
    }
})
