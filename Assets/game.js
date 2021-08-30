const questionEl = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const choicesEl = document.querySelectorAll('.choice-text')
const clickQuestion = document.querySelector('#game')

// console.log(choices);

var questionsRight = 0;
var score = 0;


var clock = 60;
var timer;
const timerCountdown = document.getElementById("countdownTimer");

var highscore
var questionIndex = 0;
var quizQuestions = []

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

const SCORE_POINT = 100;
const MAX_QUESTIONS = 6;

function startGame(questions)
{   
    var questionIndex = 0;
   startTimer();
   displayQuestions(questionIndex, questions);
   addClickHandler(questionIndex);

   //questionCounter = 1
    // score = 0
    // quizQuestions = [...questions]
    // getNewQuestion()
}

function startTimer(){
    timer = setInterval(() => {
        clock--;
        timerCountdown.innerText = clock;
        if (clock <= 0){
            clearInterval(timer)
            // showResults() -- for high score
        }
    }, 1000);
}



function displayQuestions(questionIndex, question) {
    questionEl.innerText = question[questionIndex].question
    console.log(choicesEl.length)
    console.log("choices" + questions[questionIndex].choices[questionIndex])
    console.log(questions[questionIndex].choices[1])
    
    for (var i = 0; i < choicesEl.length; i++) {

        choicesEl[i].innerText = questions[questionIndex].choices[i];

    }
}

function increaseScore(currentScore) {
    return currentScore++;
}

function decreaseScore(currentScore) {
    return currentScore--;
}

function showResults() {
    window.location.assign('/end.html');


}
    


// clickQuestion.addEventListener("click", function(e) {
//     if(e.target.classList.contains("choice-text")) {
//         console.log(questions[questionIndex].answer)
//         if(e.target.value === questions[questionIndex].answer)
//             {
//                 score++; 
//             }
//         else {
//             clock--; 
//             timerCountdown.textContent = clock;
//             score--;
//         }
//     }
// questionIndex++; 
// })
// }
//     addClickHandler();


            
function addClickHandler(questionsIndex) {
    choices.forEach(choice => {
                    choice.addEventListener("click", function(e) {
                     
                        if(e.target.textContent = questions[questionsIndex].answer){
                           
                        console.log("Correct Answer!")
                        console.log("Question Index " + questionsIndex )
                        // increase score
                        questionsIndex++;
                        if(questionsIndex !== 4){
                       
                        displayQuestions(questionsIndex, questions);
                        }
                        else {
                            console.log("Display results")
                        }
                    }
                    
                        else {
                             console.log("Incorrect Answer!")
                            clock = clock - 5;
                            timerCountdown.textContent = clock; 
                        }
                    })
                })
        }
                
// })}
// }
        //    var number = 1;  
        //   const answerChoice = choice.dataset['number']
        //   console.log(answerChoice);


    // choices.forEach(choice => {
    //        var number = 1;  
    //       const answerChoice = choice.dataset['number']
    //       console.log(answerChoice);
    
    //     for (var i = 2; i < 6; i++){
          
    //         // console.log(obj.answers)
    //         // console.log(questions[questionIndex].questions[i]);
    //         // choice.innerText = questions[i]
    //     }
          
    // })
    


// {
//     if (availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS){
//         localStorage.setItem('mostRecentScore', score)
//         return window.location.assign('/end.html')
//     }

//     questionCounter++
    
    
//     questionEl.innerText = currentQuestion.question

//     choices.ForEach(choice =>{
//         const number = choice.dataset['number']
//         choice.innerText = currentQuestion['choice' + number]
//     })

//     quizQuestions.splice(questionsIndex, 1)

//     userInput = true

// }

// choices.forEach(choice =>{
//     choice.addEventListener('click', e => {
//         if(!userInput) return

//         userInput = false
//         const selectedAnswer = selectedChoice.dataset['number']

//         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
//             if(classToApply === 'correct')
//             {
//                 incrementScore(SCORE_POINTS)
//             }

//         selectedChoice.parentElement.classList.add(classToApply)
//     })  
// })

// incrementScore = num => {
//     score +=num
// }



 startGame(questions);