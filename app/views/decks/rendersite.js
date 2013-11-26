
 $(document).ready(function() {

    $(window).scroll(function() {
         var header = $(document).scrollTop();
     
         if (header > 30 ) { // Change this number to the amount you want to scroll before the header sticks
              $('#stickyribbon').addClass('sticky');
         } else {
              $('#stickyribbon').removeClass('sticky');
         }
    });
 });


 termsArray = [];
 definitionsArray = []; 

 //Finding Translation and Appending Term
function getTranslation(term){
	var query = "http://api.wordreference.com/0.8/22816/json/fren/"+ term; 

	var result = $.ajax({
	    url: query,
	    type:'GET',
	    dataType:'JSONP',
	    success: function(data){
	    var translation = data["term0"]["PrincipalTranslations"]["0"]["FirstTranslation"]["term"]
      //Add the term to the terms div
      $('#addingterms').append('<div class="selection"><span class="label">Term:</span> <span class="justadded">' + term + ' </span></div>');
      //Add the definition to definitions div
	    $('#addingdefinitions').append('<div class="selection"><span class="label">Definition:</span> '+ translation + "</div>");
      termsArray.push(term);
      definitionsArray.push(translation);

	    }
	});
};


 selectedTerms = []

if(!window.Kolich){
  Kolich = {};
}

Kolich.Selector = {};
Kolich.Selector.getSelected = function(){
  var t = '';
  if(window.getSelection){
    t = window.getSelection();
  }else if(document.getSelection){
    t = document.getSelection();
  }else if(document.selection){
    t = document.selection.createRange().text;
  }
  return t;
}

Kolich.Selector.mouseup = function(){
  var st = Kolich.Selector.getSelected();
  if(st!=''){
    // var selection = $('#addingterms').append('<div class="selection"><span class="label">Term:</span> <span class="justadded">' + st + ' </span></div>');
    // var newTerm = $('.justadded').first().text(); 
    var newTerm = "" + st + ""; 
    getTranslation(newTerm); 
    $('.justadded').removeClass('justadded');
  }
}

$(document).ready(function(){
  $(document).bind("mouseup", Kolich.Selector.mouseup);
});




function addDeck() {
  var data = {
    terms: termsArray,
    definitions: definitionsArray
  }

  $.post('deck/create', data)
}
var d = new Date();

$('#submit-cards').click(function() {
  createDeck();
});

function createDeck() {
  $.post("/decks", { deck: { name: d, language: "French"}}, 
    function(data) {
      console.log("Success! Here's the new Deck ID: " + data);
      createCards(data);
      window.location.href = "/decks/" + data;
    }, "json"); 
}


function createCards(deckId){

    $.ajax({
      url: "/cards",
      type: "POST",
      data: {"_method":"PUT", card: {deck_id: deckId, term: termsArray[i], definition: definitionsArray[i]}},
      success: function(result) {
              console.log("Just updated this data: " + data);
              }
    });
  }

function createCards2(deckId) {

  // termsArray, definitionsArray
  // for each term in termsArray, we want to:
  //  Create a new card
  //  With the term and definition from the appropriate index of those arrays

  for (i=0; i < termsArray.length; i++){
      $.post("/cards", {card: {deck_id: deckId, term: termsArray[i], definition: definitionsArray[i]}}, 
        function(data) {
          console.log("Yes! We've made cards! Here's the data: " + data);
      }, "json");  
  }

 $(function(){
        var stickyRibbonTop = $('#stickyribbon').offset().top;
          
        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyRibbonTop ) {
                        $('#stickyribbon').css({position: 'fixed', top: '0px'});
                } else {
                        $('#stickyribbon').css({position: 'static', top: '0px'});
                }
        });
}); 


}




