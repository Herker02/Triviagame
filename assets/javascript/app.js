// have a start screen in which user clicks start to initiate game.
// have the counter be the clock and starts ticking down when game starts.
// once the counter ends, scores will be TALLIED.
// or once user clicks done, scores will be TALLIED.
// have question array be in ROWS.
// have multiple choices be under questions, in ROWS
// user can only provide one answer per question.
// have a reset button to reset game.
// create a theme for the game.



$(document).ready(function(){

// creating an array of questions that will have the question, multiple choices, name, and correct answer listed in its object
var questionArray = [
    {
    question: "In the movie Napolean Dynamite- What's the name of Napolean's llama?",
    a: "Tina",
    b: "Gina",
    c: "Anna",
    d: "Hannah",
    name: "q1",
    correct: "a",

    question: "In what year did Hurrican Katrina hit New Orleans?",
    a: "2006",
    b: "2004",
    c: "2007",
    d: "2005",
    name: "q2",
    correct: "d",

    question: "Which films claimed the title of highest grossing film series in the 2000's decade?",
    a: "Lord of the Rings",
    b: "Batman",
    c: "Harry Potter",
    d: "Star Wars",
    name: "q3",
    correct: "c",

    question: "What year did Barack Obama become the President of United States?",
    a: "2010",
    b: "2009",
    c: "2007",
    d: "2008",
    name: "q4",
    correct: "b",

    question: "What year did Twitter launch?",
    a: "2002",
    b: "2008",
    c: "2010",
    d: "2006",
    name: "q5",
    correct: "d",

    question: "What country won the 2006 World Cup after defeating France?",
    a: "Germany",
    b: "Italy",
    c: "China",
    d: "US",
    name: "q6",
    correct: "b",
    }];



// creating a method for how the questions should be formatted, how they can be appended to the divs created for them, and if else statements to set conditions for them

var getQuestions = function(obj) {

    // creating 'form' layout with the question as 'h2' and multiple choice as 'divs'
        var form = $("<form></form>");
		var question = $("<h2></h2>").text(obj.questionArray);
		var aDiv = $("<div></div>");
		var bDiv = $("<div></div>");
		var cDiv = $("<div></div>");
        var dDiv = $("<div></div>");
        
    //  creating the multiple choices as 'input type=radio' with 'attr' to attach its value--'name' and calling the element--'obj.name' and appending it to their choice divs
		var a = $('<input type="radio" name="choice" value="a">').attr('name', obj.name);
		aDiv.append(a);
        aDiv.append(obj.a);
        
		var b = $('<input type="radio" name="choice" value="b">').attr('name', obj.name);
		bDiv.append(b);
        bDiv.append(obj.b);
        
		var c = $('<input type="radio" name="choice" value="c">').attr('name', obj.name);
		cDiv.append(c);
        cDiv.append(obj.c);
        
		var d = $('<input type="radio" name="choice" value="d">').attr('name', obj.name);
		dDiv.append(d);
        dDiv.append(obj.d);
        
    // creating 'if else' statements to show that if the user chooses a,b,c or d--that the letter will look for the var its associated with and will call the 'correct' value and determine that its 'true'.
        if(obj.correct === "a") {
            a.attr('correct', "true");
        } else if (obj.correct === "b" ){
            b.attr('correct',"true");
        } else if (obj.correct === "c"){
            c.attr('correct', "true");
        } else if (obj.correct === "d") {
            d.attr('correct', "true");
        };
    
    // making the 'form' append to the divs
        form.append(question);
        form.append(aDiv,bDiv,cDiv,dDiv);

        $('#questions').append(form);
        
    };


var countDownSecs = 60;
var intervalId

    // $('.btn btn-success').click( function(event){
        

    //     function run() {
    //         clearInterval(intervalId);
    //         intervalId = setInterval(decrement, 1000);
    //     }
    
    //     function decrement(){
    //         countDownSecs--;
    //         $("#countDownTimer").html("<h2>" + countDownSecs + "</h2>");
    //         if (countDownSecs === 0) {
    //             stop();
    //         }
    //     }
    //     function stop(){
    //         clearInterval(intervalID);
    //     }
        
    //     run();
    //     })
    // }) 



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
    
    getQuestions();
    run();
    })
