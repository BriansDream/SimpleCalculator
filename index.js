// Object ini digunakan sebagai tempat menyimpan data dan kondisi pada calculator
const calculator = {
    // Data dan kondisi dari kalkulator 
    displayNumber: "0",
    // Diberikan null karena property tersebut akan diberikan nilai ketika pengguna melakukan aksi
    operator: null,
    firstNumber: null,
    // Kondisi dimana kalkulator menunggu pengguna menentukan angka kedua dalam melakukan perhitungan
    waitingForSecondNumber: false
}

// Fungsi unum yang dilakukan oleh kalkulator

const updateDisplay = () => {
    document.querySelector('.display').innerHTML = calculator.displayNumber;
}

function clearCalculator () {
    calculator.displayNumber = '0',
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

// Memasukkan angka kedalam nilai DisplayNumber
const inputDigit = (digit) => {
// calculator.displayNumber += digit;
    // Memperbaiki angka awal pada calculator
if(calculator.displayNumber === '0') {
    calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

// Inisialisasi nilai seluruh element button yang ada
const buttons = document.querySelectorAll('.number');
for(let button of buttons) {
    button.addEventListener('click',(event) =>{
        
        // mendapatkan objek element yang diklik
        const target = event.target;

        // If target berisikan class clear
        // ClassList untuk melihat nilai class apa saja dalam bentuk array yang ada pada element target
        // Contains merupakan method dari array yang berguna untuk memastikan nilai yang terkandung dalam array tersebut.
        if(target.classList.contains('clear')) {

            clearCalculator();
            updateDisplay();
            // Agar fungsi event handler terhenti, sehingga kode yang dibawahnya tidak ikut tereksekusi
            return;
        }

        if(target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }

        if(target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }

        if(target.classList.contains('operator')) {
            handleOperator(target.innerText);
            return;
        }


        inputDigit(target.innerText);
        updateDisplay();
    });
}

// Aarow function expression
const inverseNumber = () => {
    if(calculator.displayNumber === '0') {
        return
    }
    calculator.displayNumber = calculator.displayNumber*-1;
}
// Expression function
const handleOperator = function(operator){
    if(!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;

        // Mengatur ulang nilai display number supala tombol selanjutnya dimulai dari 0 angka pertama lagi 
        calculator.displayNumber = '0';

    } else {
        alert('operator sudah ditetapkan');
    }
}


// Melakukan kalkulasi terhadap nilai - nilai yang terdapat pada objek calculator
// Pastikan kalkulator sudah memiliki nilai operator dan firstNumber ketika fungsi ini dijalankan

function performCalculation() {
    if(calculator.firstNumber == null || calculator.operator == null) {
        alert("Anda belum menetapkan operator");
        return;
    }

    let result = 0;
    if(calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }
    calculator.displayNumber = result;
}
