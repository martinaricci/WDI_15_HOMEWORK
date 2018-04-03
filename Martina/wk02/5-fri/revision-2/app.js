console.log('hello');

var boxesClicked = [];
var mainBox = document.getElementById('main-box');

var playerClicks = function(event) {
    var boxClicked = event.target.classList[1];

    var row1 = mainBox.querySelector('.row1');
    var boxes = row1.querySelectorAll('.box');
    
    if (boxesClicked.length === 0) {
        boxesClicked.push(boxClicked)
    } else {
        for (var i = 0; i < boxesClicked.length; i++) {
            // se elemento non e' nell array includilo
            if (!boxesClicked.includes(boxClicked)) {
                boxesClicked.push(boxClicked)
            } 
        }
    }
    changeGreen(boxes);
}

function changeGreen(listOfBoxes) {
    for (var i = 0; i < boxesClicked.length; i++) {
        if (boxesClicked.length === 3) {
            listOfBoxes[i].style.backgroundColor = 'green';
        }
     }
}

mainBox.addEventListener('click', playerClicks);