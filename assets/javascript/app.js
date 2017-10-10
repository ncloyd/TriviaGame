$(document).ready(function() {


// Entry page displaying start button
	//upon clicking start trivia page is displayed
	// Timer starts counting down fom 60 seconds


$("#submit").click(function() {
  var val = $('input[name=q12_3]:checked').val();
  alert(val);
});


// 8-10 questions displayed
	// each question has 4 possible answers
		// only 1 answer can be chosen, i.e. only one box checked at a time


// $( "input:checkbox" )



// var answers1 = ["Ron", "Hermione", "Hedwig", "Dobey"];






//When the timer hits zero
	//Display Times Out!
	//Display Correct Answer count
	//Display Incorrect Answer count
	//Display Unanswered count
});