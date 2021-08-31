const questionEl = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const choicesEl = document.querySelectorAll('.choice-text')
const clickQuestion = document.querySelector('#game')


var clock = 60;
var timer;
const timerCountdown = document.getElementById("countdownTimer");


const questions = [
    {
        question: "What is NOT a variable type used in JavaScipt?",
        choices: ["string", "boolean", "triple", "object"],
        answer: "triple",

    },
    {
        question: "Which is an assignment operator?",
        choices: ["=", ">", "+", "===", "="],
        answer: "=",

    },
    {
        question: 'Evaluate the statement for z: var x = 5; var y = 10; var z = x + y;',
        choices: ["10", "15", "5", "20"],
        answer: "15"
    },
    {
        question: 'One line comments written in Javascript begin with?',
        choices: ["<!---", "/**", "/!", "//"],
        answer: "//"
    },
    {
        question: 'Variables declared within a JavaScript function, have a _______ scope.',
        choices: ["local", "global", "custom", "entire"],
        answer: "local"
    }
]



function startGame(questions)
{   
var questionIndex = 0;
var currentScore = 10;
   startTimer();
   displayQuestions(questionIndex, questions);
   addClickHandler(questionIndex, currentScore);
}

function startTimer(){
    timer = setInterval(() => {
        clock--;
        timerCountdown.innerText = clock;
        if (clock <= 0){
            clearInterval(timer)
            
        }
    }, 1000);
}



function displayQuestions(questionIndex, question) {
    questionEl.innerText = question[questionIndex].question
    // console.log(choicesEl.length)
    // console.log("choices" + questions[questionIndex].choices[questionIndex])
    // console.log(questions[questionIndex].choices[1])
    
    for (var i = 0; i < choicesEl.length; i++) {

        choicesEl[i].innerText = questions[questionIndex].choices[i];

    }
}

function showResults(currentScore) {
   
    localStorage.setItem('recentScore', currentScore)
    const recentScore = localStorage.getItem('recentStore')
    const highScore = localStorage.getItem('highScore')

    

    if(highScore === null) {
        localStorage.setItem('highScore', currentScore)
        console.log("It's null")

    }
    else if (recentScore < highScore) {
        localStorage.setItem('highScore', currentScore)
        console.log("Should change");
    }
    else {
        console.log("It's else")
    }

    containerEl = document.querySelector('.container');

   
    containerEl.innerHTML = " Your Score: " + currentScore; 
}
    

function checkIndex(questionIndex, questions, currentScore) {
    if(questionIndex < 5){
                       
        displayQuestions(questionIndex, questions);
        } else {
            console.log("Display results")
            timerCountdown.innerText = " ";
    
            showResults(currentScore);
        }

}


            
function addClickHandler(questionIndex) {

        var currentScore = 10;
    choices.forEach(choice => {
                    choice.addEventListener("click", function(e) {
                        console.log(questions[questionIndex].answer + " actual answer")
                        console.log(e.target.textContent + " text content - clicked " );
                        console.log(currentScore + "Current Score");
                     
                        if(e.target.textContent == questions[questionIndex].answer){
                           
                        console.log("Correct Answer!")
                        // console.log(e.target.textContent + " text content - correct " );
                        // console.log(questions[questionsIndex].answer + " actual answer")
                        // increaseScore(currentScore);
                        currentScore++;
                        console.log("increase score after return from function" + currentScore)
                        questionIndex++;
                        checkIndex(questionIndex, questions, currentScore);
                        }
                    
                        else {
                        console.log("Incorrect Answer!")
                        console.log()
                        //  decreaseScore(currentScore);
                        currentScore--;
                            clock = clock - 5;
                            timerCountdown.textContent = clock; 
                            questionIndex++;
                        checkIndex(questionIndex, questions, currentScore);
                            if (clock <= 0) {
                                showResults(currentScore);
                            }
                        }
                    })
                })
        }
    

 startGame(questions);