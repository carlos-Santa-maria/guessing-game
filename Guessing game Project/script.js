// using this variable, the game will select a random number
let randomNumber = Math.floor(Math.random() * 100) + 1;
// these are the vaiables used in the proyect
let numberUsed = document.getElementById("numberUsed");
let message = document.getElementById("message");
let Tries = document.getElementById("Tries");
let tries = 0 ; 

// this function will be runned when you click on the buttom
function getResult() {
    tries ++
    Tries.textContent = tries

    let numberSelected = parseInt(numberUsed.value)

    if(numberSelected < 1 || numberSelected > 100 || isNaN(numberSelected)){
        message.textContent = "Please, introduce a valid number between 1 and 100"
         
        return
    }
    if(numberSelected===randomNumber){
        message.textContent = "Congratulations!!! You've  guessed the number!!!"
        message.style.color ="green";
        numberSelected.disabled = true;
    }else if (numberSelected<randomNumber){
        message.textContent = "Higher, the number i'm thinking is higher";
        message.style.color ="red";

    }else{
        message.textContent = "Lower, the number i'm thinking is lower"
        message.style.color ="red";
    }

}
