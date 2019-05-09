// have a start screen in which user clicks start to initiate game.
// have the counter be the clock and starts ticking down when game starts.
// once the counter ends, scores will be TALLIED.
// or once user clicks done, scores will be TALLIED.
// have question array be in ROWS.
// have multiple choices be under questions, in ROWS
// user can only provide one answer per question.
// have a reset button to reset game.
// create a theme for the game.



// 3. create a <label> for "choose one



$(document).ready(function(event){

var correctAnswers = 0;
var incorrecAnswers = 0;
var userChoice 
var questionArray = ["In the movie Napolean Dynamite- What's the name of Napolean's llama? ", "In what year did Hurrican Katrina hit New Orleans? ", "What year did Apple release the first IPod? ","What country won the 2006 World Cup after defeating France? ", "In the 2000's, which nation became the first to recognized same-sex marriages? ", "Which films claimed the title of highest grossing film series in the 2000's decade? ", "What year did Twitter launch? ", "What year did Barack Obama become the President of United States? "];
var answerArray = ["Tina","2005","2001","Italy","The Netherlands", "Harry Potter movies", "2006", "2009"];
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
var startScreen
var counter = 0;
var countDownSecs = 120;
var intervalId

    $('.btn btn-success').click( function(event){
        

        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
    
        function decrement(){
            countDownSecs--;
            $("#countDownTimer").html("<h2>" + countDownSecs + "</h2>");
            if (countDownSecs === 0) {
                stop();
            }
        }
        function stop(){
            clearInterval(intervalID);
        }
        
        run();
        })
    }) 



    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    function decrement(){
        countDownSecs--;
        $("#countDownTimer").html("<h2>" + countDownSecs + "</h2>");
        if (countDownSecs === 0) {
            stop();
        }
    }
    function stop(){
        clearInterval(intervalID);
    }
    
    run();
    })