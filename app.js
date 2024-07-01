const computerd = document.getElementById('computer')
const userd = document.getElementById('user')
const resultd = document.getElementById('result')
const possiblechance = document.querySelectorAll('button')
let userchoice
let computerchoice
let result

possiblechance.forEach(possiblechance => possiblechance.addEventListener('click', (e)=>{
    userchoice=e.target.id 
    userd.innerHTML= userchoice

    generatecomputer()
    getresult()
}))

function generatecomputer(){
    const randomnum = Math.floor(Math.random() * 3)+1

    if(randomnum === 1) {
        computerchoice = 'rock'
    }
    if(randomnum === 2) {
        computerchoice = 'scissors'
    }
    if(randomnum === 3) {
        computerchoice = 'paper'
    }
    computerd.innerHTML=computerchoice
}

function getresult() {
    if(computerchoice === userchoice)
        {
            result = 'Its a draw!!'
        }
    if(computerchoice === 'rock' && userchoice === 'paper'){
        result = 'You win!!'
    } 
    if(computerchoice === 'rock' && userchoice === 'scissors'){
        result = 'You Lost :(' 
    } 
    if(computerchoice === 'paper' && userchoice === 'rock'){
        result = 'You Lost :(' 
    }      
    if(computerchoice === 'paper' && userchoice === 'scissors'){
        result = 'You Win!!' 
    }  
    if(computerchoice === 'scissors' && userchoice === 'rock'){
        result = 'You Win!!' 
    } 
    if(computerchoice === 'scissors' && userchoice === 'paper'){
        result = 'You Lost :(' 
    } 
    resultd.innerHTML=result
}