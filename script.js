var noon = 12;
var evening = 18;

var showCurrentTime = function()
{
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours > noon){
        meridian = "PM";
    }

    // if (hours > noon){
    //     hours = hours - 12;
    // }

    var clockTime = hours + ':' + minutes + ':' + seconds + ':' + meridian + '!';

    clock.innerText = clockTime;
};

var updateClock = function()
{
    var time = new Date().getHours();

    showCurrentTime();

};
updateClock();

var oneSecond = 1000;

setInterval(updateClock, oneSecond);

setInterval(() => {    

    d = new Date();

    hr = d.getHours();
    min = d.getMinutes()
    sec = d.getSeconds();

    hr_rotation = 30 * hr + min / 2;
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;

}, 1000);

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement ;
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete(){

    }

    appendNumber(number){
        this.currentOperand = number;
    }

    chooseOperation(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
    }


}

const numberButton = document.querySelectorAll('[data-number]');
const operationsButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})



// var display = document.getElementById("result");
// var calcKeys = document.querySelector(".calculator_keys");
// var one = document.getElementById("1");
// var key = document.getElementsByTagName("button")
// var add = document.getElementById("addition");
// var equal = document.getElementById("equals");

// var buttonPressed = e => {
//         console.log("Target id: " + e.target.id);
        
        

//         if(e.target.id <= "9"){

//                 display.value += parseInt(e.target.id);
                

            
//         }

//         // if(e.target.id === "equals") {
//         //     var results = num1 + num2;
//         //     console.log("resutls are: " + results);
//         // }
        
        
//  }

//  var pressedButton = e => {
//     var sum = [];
//     var results;
//     let n;

//     const num1 = display.value;  
//     console.log("num1 is: " + num1);             
//             //     if(e.target.id <="9" && e.target.id != num1){
//             //         const num2 = display.value
//             //         console.log("Num1: " + num1);
//             //     console.log("Num2: " + num2);
                    
//             // }
//  }




        
//         function clearInput(){
//                 var clr = document.getElementById("delete");
//                 //console.log(display.value);
//                 if(clr.value !=""){
//                         display.value = "";
//                 }
//         }

//  for(let button of key){
//         button.addEventListener("click", buttonPressed);
        
//  }



