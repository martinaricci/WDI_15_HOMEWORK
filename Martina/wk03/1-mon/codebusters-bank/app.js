console.log('bank');

var inputSavings = document.querySelector('.num1');
var savingsBox = document.querySelector('.savings-box');

var withdrawBtnSavings = document.querySelector('.withdraw1');
var depositBtnSavings = document.querySelector('.deposit1');
var savingsResult = document.querySelector('.result1');

var inputChecking = document.querySelector('.num2');
var withdrawBtnChecking = document.querySelector('.withdraw2');
var depositBtnChecking = document.querySelector('.deposit2');

// when click on DEPOSIT the result1 += newValue.
depositBtnSavings.addEventListener('click', function() {
    // trasforma il totale in un numero da una string
    var total = parseInt(savingsResult.value);
    total += parseInt(inputSavings.value);
    
    savingsResult.value = total;
    if (total > 0) {
        
        // savingsBox.style.backgroundColor = 'green';

        savingsBox.classList.add('bg-green');
    }
    inputSavings.value = 0;

})


// PSEUDO CODE FOR THE SAVINGS ACCOUNT
// console.log('saving = ' + inputSavings.value);


// ------------- 1 -------------- //
// when a newValue is added in num1Input, 
    // when click on DEPOSIT the result1 += newValue.
    // when click on Withdraw the result1 -= newValue
        // if num1Input is > the result1, console.log('transaction denied, no enough funds').


// --------------- 2 -------------- //
// if the value in result1 === 0  the background-color in SAVINGS-BOX should turn red,
// if the value in result1 is > 0, the background-color should turn gray.


