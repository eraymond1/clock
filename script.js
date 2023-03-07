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

    if (hours >= 13){
        hours = hours - 12;
    }

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
        this.currentOperand = "";
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number){
      if(number === '.' && this.currentOperand.includes('.')) {
        return;
      }
       this.currentOperand += number;
    }

    chooseOperation(operation){
        if(this.currentOperand === ''){
            return;
        }

        if(this.previousOperand !==  ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) {
            return;
        }

        switch (this.operation){

            case '+':
                computation = prev + current
                break
            case '-':
                    computation = prev - current
                    break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return  
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number){
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if(isNaN(integerDigits)){
            integerDisplay = '';

        }else{
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay;
        }
        
    }

    updateDisplay(){
        
        currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation != null) {
            this.previousOperandTextElement.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }else{
            this.previousOperandTextElement.innerText = '';
        }
        
    }


}

const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})


class ticTacToe {
    constructor(oh, ex){
        this.oh = oh;
        this.ex = ex;
    }

    
}

const oh = document.querySelectorAll('[letter]');
const ex = doucment.querySelectorAll('[letter]');

oh.addEventListener('click', button => {

})

ex.addEventListener('click', button => {

})

