

const containerRps = document.querySelectorAll(`button`);
const pc = document.querySelector(`#pcChoice`);
const result1 = document.querySelector(`#result1`);
const result2 = document.querySelector(`#result2`);
const result3 = document.querySelector(`#result3`);
const finalWinner = document.querySelector(`#theWinnerIs`);


let text = ``;

let buttonClicks = 0;

containerRps.forEach((button)=>{

    button.addEventListener(`click`, () => {
       
        if(buttonClicks >= 3){return;}
    
        function getComputerChoice(){
            return choices[Math.floor(Math.random() * choices.length)] 
        }
        let choices=[`rock`,`paper`,`scissors`];
        let computerSelection = getComputerChoice(); console.log(computerSelection); 
        pc.textContent = computerSelection ;
   

        if (computerSelection == button.id ){
            text = text + `It's a tie!` + `  `
        }
        else if (computerSelection == `rock` && button.id == `paper`){
            text = text + `You win!` + `  `
        }
        else if (computerSelection == `paper` && button.id == `scissors`){
            text = text + `You win!` + `  `
        }
        else if (computerSelection == `scissors` && button.id == `rock`){
            text = text + `You win!` + `  `
        }
        else {
            text = text + `You lose!` + `  `
        }

     
        resultsArray = text.split(`  `);
        
        
        result1.textContent = resultsArray[0];
        result2.textContent = resultsArray[1];
        result3.textContent = resultsArray[2];
        
        

        let r1 = resultsArray[0];
        let r2 = resultsArray[1];
        let r3 = resultsArray[2];
       
        
        function theWinnerIs(){
           
            if(r1==`You win!` && r2==`You win!` && r3==`You win!`|| r1==`You win!` && r2==`You win!` && r3==`It's a tie!` || r1==`You win!` && r2==`You win!` && r3==`You lose!` 
            || r1==`You win!` && r2!=`You win!` && r3==`You win!` || r1!=`You win!` && r2==`You win!` && r3==`You win!` || r1==`It's a tie!` && r2==`It's a tie!` && r3==`You win!` 
            || r1==`It's a tie!` && r2==`You win!` && r3==`It's a tie!` || r1==`You win!` && r2==`It's a tie!` && r3==`It's a tie!`) {
            return `YOU WIN!`}
            
            if(r1==`You lose!` && r2==`You lose!` && r3==`You lose!` || r1==`You lose!` && r2==`You lose!` && r3==`It's a tie!` || r1==`You lose!` && r2==`You lose!` && r3==`You win!` 
            || r1==`You lose!` && r2!=`You lose!` && r3==`You lose!` || r1!=`You lose!` && r2==`You lose!` && r3==`You lose!` || r1==`It's a tie!` && r2==`It's a tie!` && r3==`You lose!` 
            || r1==`It's a tie!` && r2==`You lose!` && r3==`It's a tie!` || r1==`You lose!` && r2==`It's a tie!` && r3==`It's a tie!`){
            return `YOU LOSE!`}
            
            if(r1==`It's a tie!` && r2==`It's a tie!` && r3==`It's a tie!` ||r1==`You lose!` && r2==`It's a tie!` && r3==`You win!` || r1==`You lose!` && r2==`You win!` && r3==`It's a tie!` 
            || r1==`You win!` && r2==`You lose!` && r3==`It's a tie!` || r1==`You win!` && r2==`It's a tie!` && r3==`You lose!` || r1==`It's a tie!` && r2==`You win!` && r3==`You lose!` 
            || r1==`It's a tie!` && r2==`You lose!` && r3==`You win!`){
            return `YOU TIED!`}
            
        }
        
        let winner = theWinnerIs();
        const para = document.createElement(`p`);
        para.textContent = winner;
        finalWinner.appendChild(para)

        ++buttonClicks;
            
    });  
});

   


/*
rock.addEventListener(`click`,function(){

    function getComputerChoice(){
        return choices[Math.floor(Math.random() * choices.length)];
    }
    let choices=[`rock`,`paper`,`scissors`];
    
    
    let computerSelection= getComputerChoice();console.log (computerSelection);

    let text = ``
    if(computerSelection == `rock`){
        text = text + `It's a tie!`
    }
    else if(computerSelection == `paper`){
        text = text + `You lose!`
    }
    else if(computerSelection == `scissors`){
        text = text + `You win`
    }
    result.textContent = text;
})
paper.addEventListener(`click`,function(){

    function getComputerChoice(){
        return choices[Math.floor(Math.random() * choices.length)];
    }
    let choices=[`rock`,`paper`,`scissors`];
    
    let computerSelection= getComputerChoice();console.log (computerSelection);

    let text = ``
    if(computerSelection == `paper`){
        text = text + `It's a tie!`
    }
    else if(computerSelection == `scissors`){
        text = text + `You lose!`
    }
    else if(computerSelection == `rock`){
        text = text + `You win`
    }
    result.textContent = text;
})
scissors.addEventListener(`click`,function(){

    function getComputerChoice(){
        return choices[Math.floor(Math.random() * choices.length)];
    }
    let choices=[`rock`,`paper`,`scissors`];
    
    let computerSelection= getComputerChoice();console.log (computerSelection);

    let text = ``
    if(computerSelection == `scissors`){
        text = text + `It's a tie!`
    }
    else if(computerSelection == `rock`){
        text = text + `You lose!`
    }
    else if(computerSelection == `paper`){
        text = text + `You win`
    }
    result.textContent = text;
})*/


/*function playGame(){


    let results = ``    
    for(let i=0; i<3; i++){
      
        let computerSelection= getComputerChoice();
      
        console.log(`PC chooses: ${computerSelection}`)
        
        
        let playerSelection = [rock, paper, scissors]
      
        containerRps.forEach((button) => {
            button.addEventListener(`click`,playRound(computerSelection,playerSelection))
        });

        function playRound(computerSelection,playerSelection){
            if(playerSelection===null){
                return `You surrendered`
            } 
            else if( computerSelection===playerSelection){
                return `It's a tie!`;
            }                      
            else if( computerSelection===`rock` && button===scissors){
                return `You lose!`;
            }
            else if( computerSelection===`rock` && button===paper){
                return `You win!`;
            }
            else if( computerSelection===`paper` && button===rock){
                return `You lose!`;
            }
            else if( computerSelection===`paper` && button===scissors){
                return `You win!`;
            }
            else if( computerSelection===`scissors` && button===paper){
                return `You lose!`;
            }
            else if( computerSelection===`scissors` && button===rock){
                return `You win!`;
            }
           // else if(playerSelection!==`paper` || `rock` || `scissors`){
            //    return `not a valid input`
            //}   
            
        }
    
        //console.log(playRound(playerSelection,playerSelection));
        results = results + playRound(playerSelection,playerSelection) + `  `;
        
       

    }
    const newArray = results.split(`  `);
    

    console.log(newArray);

    let a = `You win!`;
    let b = `It's a tie!`;
    let c = `You lose!` ;
    let d = `not a valid input`;
    let e = `You surrendered`;

    let x = newArray[0];
    let y = newArray[1];
    let z = newArray[2];

    function theWinnerIs(){
        if( x===a && y===a || x===a && z===a || y===a && z===a || x===a && y===b && z===b || x===b && y===a && z===b || x===b && y===b && z===a){ 
            return `You are the winner`
        }
          
        else if (x===c && y===c || x===c && z===c || y===c && z===c || x===d && y===d || x===d && z===d || y===d && z===d || x===e && y===e || x===e && z===e || y===e && z===e || 
        x===c && y===b && z===b || x===b && y===c && z===b || x===b && y===b && z===c || x===d && y===b && z===b || x===b && y===d && z===b || x===b && y===b && z===d ||
        x===e && y===b && z===b || x===b && y===e && z===b || x===b && y===b && z===e || 
        x===c && y===d || x===c && z===d || y===c && x===d || y===c && z===d || z===c && y===d || z===c && x===d || 
        x===d && y===e || x===d && z===e || y===d && x===e || y===d && z===e || z===d && y===e || z===d && x===e ||
        x===c && y===e || x===c && z===e || y===c && x===e || y===c && z===e || z===c && y===e || z===c && x===e){
            return `You are the loser!`
        } 

        else  {
            return `You tied`
        }
        

    }
    console.log
    let finalWinner = theWinnerIs();
    console.log(finalWinner);


   
}
    

*/
