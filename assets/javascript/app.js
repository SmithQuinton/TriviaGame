$("#start").on("click", function () {
    game.start();  
})

var questions = [{
        question: "What NBA franchise has the most championships?",
        choices: [" Los Angeles Lakers", " Golden State Warriors", " Boston Celtics", " Chicago Bulls"],
        answer: " Boston Celtics",
    },
    {
        question: "Which NBA player has the most points scored in a career?",
        choices: [" Kareem Abdul-Jabbar", " Karl Malone", " Kobe Bryant", " LeBron James"],
        answer: " Kareem Abdul-Jabbar",
    },
    {
        question: "What player appeared in the most career NBA games?",
        choices: [" Dirk Nowitzki", " John Stockton", " Robert Parish", " Vince Carter"],
        answer: " Robert Parish",
    },
    {
        question: "What NBA player has made the most 3-pointers?",
        choices: [" Ray Allen", " Stephen Curry", " Kyle Korver", " Reggie Miller"],
        answer: " Ray Allen",
    },
    {
        question: "What team is the laughing stock of the NBA",
        choices: [" New York Knicks", " New York Knicks", " New York Knicks", " New York Knicks"],
        ansswer: " New York Knicks",
    }
];
var game = {
    correct: 0,
    incorrect: 0,
    counter: 10,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter === 0) {
            console.log("time is up");
            // alert("Time is up");
            clearInterval(this.countdown);
            this.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown,1000); 
        $("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>10</span> Seconds </h2>");
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].choices.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].choices[j] + "'>'" + questions[i].choices[j])
            }
        };
        $("#subwrapper").append("<br><button id='end'>DONE</button> ")
    },
    done: function(){
        $.each($("input[name = 'question-0]':checked"),function(){
            if($(this).val() == questions[0].answer){
                 game.correct++;
            }
            else {
                game.incorrect++; 
            }
        });
        $.each($("input[name = 'question-1]':checked"),function(){
            if($(this).val() == questions[1].answer){
                 game.correct++;
            }
            else {
                game.incorrect++; 
            }
        });
        $.each($("input[name = 'question-2]':checked"),function(){
            if($(this).val() == questions[2].answer){
                 game.correct++;
            }
            else {
                game.incorrect++; 
            }
        });
        $.each($("input[name = 'question-3]':checked"),function(){
            if($(this).val() == questions[3].answer){
                 game.correct++;
            }
            else {
                game.incorrect++; 
            }
        });
        $.each($("input[name = 'question-4]':checked"),function(){
            if($(this).val() == questions[4].answer){
                 game.correct++;
            }
            else {
                game.incorrect++; 
            }
        });

        this.result();
    },

    result: function(){
        clearInterval(timer);
        $("#subwrapper h2").remove();
        $("#subwrapper").html("<h2>All Done</h2>");
        $("#subwrapper").append("<h3>Correct Answers: " + this.correct + "</h3>");
        $("#subwrapper").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        $("#subwrapper").append("<h3>Unanswered: " + (questions.length-(this.incorrect+this.correct))  + "</h3>");
    }
}