console.log('bank');
// hints:



//search for the deposit button
var depositBtn = document.querySelector('button');

var deposit = function() {
    console.log('user click on deposit button')
}

//tell button to run a function on a click event
depositBtn.addEventListener('click', deposit)