console.log('hello arrays and objects')

// var dayOfTheWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']



// dayOfTheWeek.pop();

// var newLength = dayOfTheWeek.unshift('sunday');

// var dayOfTheWeek = [['monday', 'tuesday', 'wednesday', 'thursday', 'friday'], ['saturday', 'sunday']];

// //Remove the weekdays
// var newLength = dayOfTheWeek.shift();

// //Remove the weeekends
// //dayOfTheWeek.pop([]);

// var dayOfTheWeek = ['saturday', 'sunday'];


// /*
// create an object with my favorite recipe. It should have title, servings and ingredients.

// one console.log statement for each
// */

// var favRecipe = {
// 	title: 'gnocchi',
// 	servings: ['serves', 4],
// 	ingredients: ['ingredients:', 'potatoes', 'flour', 'egg', 'salt']	
// }

// console.log(favRecipe.title);
// console.log(favRecipe.servings);
// console.log(favRecipe.ingredients);


/*
Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
*/

 var books = [
 {
 	title: 'the alchemist',
 	author: 'paulo coelho',
 	alreadyRead: true,
 },
 {
 	title: 'the warrior of light',
 	author: 'paulo coelho',
 	alreadyRead: true,
 },
 {
 	title: 'brida', 
 	author: 'paulo coelho',
 	alreadyRead: false
 }
 ];

 	for (var i = 0; i < books.length; i++) {
 		var book = books[i];
 		var bookInfo = book.title + ' ' + 'by ' + book.author;
 		if (book.alreadyRead === true) {
 			console.log('you already read ' + bookInfo);
 		} else {
 			console.log('you still need to read ' + bookInfo);
 		}
 }


/*
Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

var favMovie = {

 	title: 'seven pounds',
 	duration: 20,
    stars: ['jack', 'tom', 'phil']
 };

 var printMovie = function() {
 	console.log(favMovie.title + 'lasts for ' + favMovie.duration + '. Stars: ' + favMovie.stars)
 };







