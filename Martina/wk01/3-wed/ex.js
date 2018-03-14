for (var i = 0; i <= 20; i++) {
 	//if (i % 2 === 0) {
 		console.log(i + "is even");
 	} else {
 		console.log(i + "is odd");
 	}
 }


var multiplier = 9;

for (var i = 0; i <= 10; i++) {
	var result = i * multiplier;
 	console.log(i + ' * ' + multiplier + ' = ' + result);
 }

 for (var multiplier = 0; multiplier <= 10; multiplier++) {
 	for (var i = 0; i <= 10; i++) {
 		var result = i * multiplier;
 	    console.log(i + ' * ' + multiplier + ' = ' + result); 
 	}
 }


 var topChoices = ['blue', 'yellow', 'pink', 'red'];
 for (var i = 0; i < topChoices.length; i++) {
 	console.log('My #' + (i + 1) + ' choice is ' + topChoices[i]);
 }

