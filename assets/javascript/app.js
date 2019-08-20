
// ------------------------ MY CODE DOWN HERE ----------------------------------------

var questions = [{
    question: "What NBA franchise has the most championships?",
    choices: [" Los Angeles Lakers", " Golden State Warriors", " Boston Celtics", " Chicago Bulls"],
    answer: " Boston Celtics",
    qu: "q1"
},
{
    question: "Which NBA player has the most points scored in a career?",
    choices: [" Kareem Abdul-Jabbar", " Karl Malone", " Kobe Bryant", " LeBron James"],
    answer: " Kareem Abdul-Jabbar",
    qu: "q2"
},
{
    question: "What player appeared in the most career NBA games?",
    choices: [" Dirk Nowitzki", " John Stockton", " Robert Parish", " Vince Carter"],
    answer: " Robert Parish",
    qu: "q3"
},
{
    question: "What NBA player has made the most 3-pointers?",
    choices: [" Ray Allen", " Stephen Curry", " Kyle Korver", " Reggie Miller"],
    answer: " Ray Allen",
    qu: "q4"
},
{
    question: "What team is the laughing stock of the NBA",
    choices: [" New York Knicks", " New York Knicks", " New York Knicks", " New York Knicks"],
    answer: " New York Knicks",
    qu: "q5"
}
];

var intervalID;
var running = false;
var timer;
function myTimer() {
var sec = 15
clearInterval(timer);
timer = setInterval(function() { 
$('#timer').text(sec--);
if (sec == -1) {
  clearInterval(timer);
result();
 } 
}   , 1000);

}

$("#start").on("click", function () {
start();
});

function start() {

console.log("you pressed a button - start function");
myTimer()
$("#start").hide();
$("#done").empty();

for (var i = 0; i < questions.length; i++) {
    $("#wrapper").append("<h2>" + questions[i].question + "<h2>");

    
    var choicesQu = questions[i].choices

    for (var j = 0; j < choicesQu.length; j++) {
        $("#wrapper").append("<input class='quiz' type='radio' name='" + questions[i].qu +
         "' value='" + choicesQu[j] + "'>'" + choicesQu[j]);
        
    }
};
$("#wrapper").append("<br><br><button id='end'>DONE</button>");
$("#end").on("click", function () {
    console.log("you clicked done button")
    result();
})
};



function decrement() {
$("#timer").html("<h3>Time remaining: " + timer + "</h3>");
if (timer === 0) {
    result();
}	
}

function result() {
var correct = 0;
var incorrect = 0;
var unanswered = 0;
clearInterval(timer);

for (var i = 0; i < questions.length; i++) {
   
    var isItChecked = $("input[name =" + questions[i].qu + "]:checked").val();
        console.log("Your answer: ");
        console.log(isItChecked);
        console.log("Correct Answer:" + questions[i].answer);
        console.log("---------")
    if (isItChecked === questions[i].answer) {
        correct++;
        
    } else if ( isItChecked === undefined) {
        unanswered++;
    } else if (isItChecked !== questions[i].answer){
        incorrect++;
    }

};

$("#timer").empty();
$("#wrapper").empty();
$("#done").html("<h2>Done</h2>");
$("#done").append("<h3>Correct Answers: " + correct + "</h3>")
$("#done").append("<h3>Incorrect Answers: " + incorrect + "</h3>");
$("#done").append("<h3>Unaswered: " + unanswered + "</h3>");
$("#done").append("<br><br><button id='playAgain'>PLAY AGAIN</button>");
$("#playAgain").on("click", function () {
    
    console.log("restarting game - button")
    start();
})
}