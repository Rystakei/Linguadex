var total_quizzes = 0; 

$(document).ready(function(){

function incrementQuizCounter(){
  total_quizzes++; 
  console.log(total_quizzes);
  $.ajax({
      url: '/decks/'+deckId,
      type: 'PUT',
      data: {deck: { times_reviewed: total_quizzes} },
      success: function(result) {
          // Do something with the result
      }
  });
}; 


  //hide the id

  $('#deckid').hide(); 
	// Get the length of an associative array
	Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };
	

  var terms = new Array();
  var definitions = new Array(); 
  var deckId = $('#deckid').text(); 

  $.getJSON('/decks/'+deckId+'.json', function(data) {
   	// Iterate through data.cards array and push the term and definition into the appropriate arrays
  	$.each(data.cards, function(index, card){
    		terms.push(card.term);
    		definitions.push(card.definition);
        
    	
    	});
    total_quizzes = data.times_reviewed;
    	setupQuiz();
  });


  function setupQuiz() {
  	var amountOfCards = terms.length;
  	

  	function getRandomInt(min, max) {
    	return Math.floor(Math.random() * (max - min + 1) + min);
  	}

    //Put card indices in random order and store them in an array
  	RandomizedCardIndices = [];

  	while (RandomizedCardIndices.length < amountOfCards) {
  		var randomIndex = getRandomInt(0,(amountOfCards-1)); 
  		if ($.inArray(randomIndex, RandomizedCardIndices) === -1) {
  		  RandomizedCardIndices.push(randomIndex);
  		}
  	}
    var counter = 0;
    takeQuiz(RandomizedCardIndices, amountOfCards, counter);
  }

  function takeQuiz(cardIndices, amountOfCards, counter) {
    var correctAnswers = new Array(); 
    var incorrectAnswers = new Array(); 
    // Add the input form for the first term to the web page
    // $('body').append('<div id="quizdiv" class="centered"></div>');
    $('#quizdiv').append('<span class="term"><h1>' + terms[cardIndices[counter]] + '</h1></span><br /><br /></span><input placeholder="Enter Answer"><button type="button" name = "button">Submit</button><br />');
    $('#quizdiv').append('<br /><br /><span id="notification"></span>')
    $('#quizdiv').before('<div class="answers centered">Correct Answers: <span id="correct">0/' + amountOfCards +'</span><br />Incorrect Answers: <span id="incorrect"><span id="correct">0/' + amountOfCards +'</span></div>');

    //The user should click on the button after the first option is chosen. Afterwards, their input will be evaluated and they
    //Will receive a message about whether it was correct or not. The answer will be added to the appropriate correct or
    //Incorrect answers array. 

    $( "button" ).first().click(function() {
      var $this = $(this); 
      var answer = $('input').first();

  		if (answer.val() === definitions[cardIndices[counter]]) {
  			//$('.term').text("").append('<h1>' + definitions[cardIndices[counter]]+'</h1>');
  			$('#notification').show(); 
  			$('#notification').text('Yup, ' + definitions[cardIndices[counter]] + ' is the correct answer. Good job!');
  			correctAnswers.push(answer);
  			$('#correct').first().text(correctAnswers.length + "/" + amountOfCards);
  			$('#centered').append('<p>Correct Answers: ' + correctAnswers.length + '<p>Incorrect Answers: ' + incorrectAnswers.length + '</p>');
  			counter ++;
        if (counter === amountOfCards) {
          return results(amountOfCards, correctAnswers, incorrectAnswers);
        }
        //Change the term displayed to the next term to be tested
  			$('.term').text("").append('<h1>' + terms[cardIndices[counter]]+'</h1>');
  			answer.val(""); 
  			$('#notification').fadeOut(3800); 
        
      } else {
  			$('#notification').show(); 
  			$('#notification').text("Sorry, your answer '" + answer.val() + "' is incorrect.  The answer should be: '" + definitions[cardIndices[counter]] + "'");
          incorrectAnswers.push(answer.val()); 
        $('#incorrect').first().text(incorrectAnswers.length + "/" + amountOfCards);
      }
    }); //end onclick function

  }

  function results(amountOfCards, correctAnswers, incorrectAnswers) {
    console.log("here's the results, guys");
    $('#quizdiv').hide(); 
    var finalResults = "<br /><h2>Quiz Completed! </h2><br /><h2>Score: " + ((correctAnswers.length-incorrectAnswers.length)/amountOfCards* 100).toFixed(2) + "%"; 
    $('.quizended').show().append(finalResults); 
    incrementQuizCounter();
    // <% @deck.times_reviewed == @deck.times_reviewed + 1 %>
    // <% @deck.save %>

  }
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




