const questionEl = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const choicesEl = document.querySelectorAll('.choice-text')
const clickQuestion = document.querySelector('#game')


var clock = 60;
var timer;
const timerCountdown = document.getElementById("countdownTimer");


// var questionIndex = 0;

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

// function increaseScore(currentScore) {
//     console.log(currentScore + "inc score")
//     currentScore = currentScore + 1;
//     console.log(currentScore + "inc score")
//     return currentScore;
// }

// function decreaseScore(currentScore) {
//     console.log(currentScore + "dec score")
//     currentScore = currentScore - 1;
//     return currentScore;
// }

function showResults(currentScore) {
   
    localStorage.setItem('recentScore', currentScore)
    containerEl = document.querySelector('.container');
    containerEl.innerHTML = "High Score: " + currentScore; 


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

function checkIndex(questionIndex, questions, currentScore) {
    if(questionIndex !== 4){
                       
        displayQuestions(questionIndex, questions);
        } else {
            console.log("Display results")
            showResults(currentScore);
        }

}


            
function addClickHandler(questionIndex) {
        var currentScore = 0;
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
                            // if (clock <= 0) {
                            //     showResults(currentScore);
                            // }
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