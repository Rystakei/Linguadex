

$(document).ready(function(){
	// Get the length of an associative array
	Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
	

	var cards = new Array();
	cards["boire"] = "to drink";
	cards["cuire"] = "to cook";
	cards["savoir"] = "to know";
	cards["manger"] = "to eat";
	cards["avoir"] = "to have";

	var terms = ["boire", "cuire", "savoir", "manger", "avoir"];
	var definitions = ["to drink", "to cook", "to know", "to eat", "to have"];

	var amountOfCards = Object.size(cards);

	var correctAnswers = new Array(); 
	var incorrectAnswers = new Array(); 

	function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min + 1) + min);
	}

//Put card indices in random order and store them in an array
	RandomizedCardIndices = [];

	while (RandomizedCardIndices.length < amountOfCards) {
		var randomIndex = getRandomInt(0,(amountOfCards-1)); 
		if ($.inArray(randomIndex, RandomizedCardIndices) === -1)
		{
		RandomizedCardIndices.push(randomIndex);
		// $('body').append(" Added new index: " + randomIndex  + " Total in Array: " + RandomizedCardIndices.length + "<br /> ");
		}
	}
//Start the counter at 0
var counter = 0; 


// Add the input form for the first term to the web page
 $('body').append('<span class = "term">' + terms[RandomizedCardIndices[counter]] + '</span><input placeholder="Enter Term"><button type="button" name = "button">Submit</button><br />');



//The user should click on the button after the first option is chosen. Afterwards, their input will be evaluated and they
//Will receive a message about whether it was correct or not. The answer will be added to the appropriate correct or
//Incorrect answers array. 

$( "button" ).first().click(function() {
  var $this = $(this); 
  var answer = $('input').first();



  		if (answer.val() === definitions[RandomizedCardIndices[counter]])
  		{
  			$('body').append('<span class = "notification">Yup, ' + definitions[RandomizedCardIndices[counter]] + ' is the correct answer. Good job!</span>');
  			$('body').append('<p>Correct Answers: ' + correctAnswers.length + '<p>Incorrect Answers: ' + incorrectAnswers.length + '</p>');
  			counter ++;
  			correctAnswers.push(answer);
  			$('span').first().text(terms[RandomizedCardIndices[counter]]);
  			answer.val(""); 
  			$('.notification').first().fadeOut(3800); 

  		}
  		else
  		{
  			alert("Sorry, that answer is incorrect."); 
  		}


//end onclick function
});

// Display first term
// While counter is less than the the total quantity of items
// On submit click, 
// Check if the term is correct
// Display message above it saying if answer is correct or incorrect_answers
// Remove old objects
// Replace with new objects
// Increment Counter
// Display current results (# wrong/total, # right/total)

// After loop ends
// Display final results and percentages


// 	$('body').append("Let's start the quiz! The quiz will test knowledge of " + amountOfCards + " terms"); 

// 	var i = 0; 
// 	while (i < amountOfCards)
// 	{
// 		alert("The current value of i is:" + i);
// 		var answer = prompt("Please enter the English definition of: " + terms[i]);
// 		// var term = $('body').append("The current term is: " + terms[i]); 
// 		// var definition = $('body').append("The current definition is " + definitions[i]);
// 		if (answer === definitions[i]){
// 			confirm("Your answer, " + answer + " is correct!");
// 		}

// 		i++; 
// 	}

// $.each(RandomizedCardIndices, function(index, value) {
//   $('body').append((value + 1) + ': ' + '<span class = "term">' + terms[value] + '</span>' + '   <input placeholder="Enter Term"> <button type="button" name = "button' + [index] + '">Submit</button><br />' );
//    	$('button').first().click(function(){
//     	if ($('input').first().val() === definitions[value])
//   	{
//   		// alert($('input').first().val() + "is equal to: " + definitions[value]);
//   	}
//   });

// });

// var counter = 0; 
// 		$('button').first().click(function(){
// 			if ($('input').first().val() === definitions[value])
//   			{
//   				alert($('input').first().val() + "is equal to: " + definitions[value]);
//   				counter ++;
//   			}
//   			else
//   			{
//   				alert("Sorry, that answer is incorrect."); 
//   			}

// 		});



});
