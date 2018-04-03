console.log('ptv_ex.js');


/*
Write a javascript program that works out display the journey when you give it an origin and destination.
Consider diagramming the lines by sketching out the train lines and their stops and intersection. Think about what data structure to use to store each line and all the stops on each line.

The key to the lab is the intersection of the lines at Richmond.
*/



// There are 3 train lines:

var firstLine =  ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];

var secondLine = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];

var thirdLine = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];



var origin = "Melbourne Central";
var destination = "Richmond";

var journey = ["Melbourne Central", "Parliament", "Richmond"];

var stops = journey.length - 1;

console.log("origin: " + origin);
console.log("destination: " + destination); 
console.log(journey.join("----->"));
console.log(stops);

// DAL MIO PUNTO DI ORIGINE ARRIVARE FINO A RICHMOND.
// RICHMOND SARA' IL NUOVO PUNTO DI ORIGINE 
// DETERMINARE IL SECONDO JOURNEY


// TROVARE LA LINEA DEL MIO PUNTO DI ORIGINE

// var startingLine = 

// if (firstLine.indexOf(origin)) {
//     console.log(startingLine);
// } else if (secondLine.indexOf(origin)) {
//     console.log(startingLine);
// } else if (thirdLine.indexOf(origin)) {
//     console.log(startingLine);
// } else {
//     console.log('station not found');
// }

// return startingLine;



