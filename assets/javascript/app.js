$(document).ready(function() {
    // Entry page displaying start button
    //upon clicking start trivia page is displayed
    // Timer starts counting down fom 60 seconds

    var timeleft = 30;
    var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdown").textContent = "Time Remaining: " + timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);





    var correct = 0;
    var wrong = 0;
    function submit() {
        var total = 5;
        var score = 0;

        var q1 = document.forms["quiz"]["q1"].value;
        alert(q1);
    };

$('input').on('click', function(){
    $("input[type='radio']:selected").val();
})

if ($("#q1answer:selected").val() == "a") {
    console.log("A")
}

});






// 8-10 questions displayed
// each question has 4 possible answers
// only 1 answer can be chosen, i.e. only one box checked at a time
// all correct answers need to be counted
// all incorrect answers need to be counted
// all unanswered questions need to be counted


//Display Correct Answer count
//     //Display Incorrect Answer count
//     //Display Unanswered count
