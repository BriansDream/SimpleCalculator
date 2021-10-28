
// Object untuk menggambarkan data dan kondisi pada calculator
const Calculator = {
    displayNumber: "0",
    // Dibuat null karena nilai yang dimasukkan adalah berdasarkan aksi dari user
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false

}

const updateDisplay = () => {
    const displayNumber = document.querySelector('.result');
    displayNumber.innerText = Calculator.displayNumber;
}

const inputNumber = (data) => {
    if(Calculator.displayNumber === '0') {
        Calculator.displayNumber = data;
    } else {
        Calculator.displayNumber += data;
    }
}

function resetDisplay() {
    Calculator.displayNumber = "0";
    Calculator.operator = null;
    Calculator.firstNumber = null;
    Calculator.waitingForSecondNumber = false;

}


const buttons = document.querySelectorAll('.number');
for (let button of buttons) {
        button.addEventListener('click', (events) => {
            
            // Mendapatkan object elemen yang diclick
            let target = events.target;

            if(target.classList.contains('operator')) {

            handleOperator(target.innerText);
            updateDisplay();
            return;

            }

            if(target.classList.contains('equals')) {
                calculation();
                updateDisplay();
                return;
            }

            if(target.classList.contains('negative')) {
                inversNumber();
                updateDisplay();
                return;
            }

            if(target.classList.contains('clear')) {
                resetDisplay();
                updateDisplay();
                // Digunakan agar fungsi dibawah tidak dijalankan
                return;
            }


            



            inputNumber(target.innerText);
            updateDisplay();
            console.log(Calculator.displayNumber);
    })
 }

 
// General function

function handleOperator(operator) {
    
    if(!Calculator.waitingForSecondNumber) {
        Calculator.operator = operator;
        Calculator.waitingForSecondNumber = true;
        Calculator.firstNumber = Calculator.displayNumber;
        Calculator.displayNumber = '0';
    } else {
        alert("Kamu sudah memilih operator");
    }
}


// Declaring function
function inversNumber() {
    if(Calculator.displayNumber != '0') {
        Calculator.displayNumber *=-1;
    } 
    return;
}

// Expression function
const calculation = function() {
    if(Calculator.operator == '+') {
        Calculator.displayNumber = parseInt(Calculator.firstNumber) + parseInt(Calculator.displayNumber);
    } else {
        Calculator.displayNumber = parseInt(Calculator.firstNumber) - parseInt(Calculator.displayNumber);
    }
}