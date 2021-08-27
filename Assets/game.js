const questionEl = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const clickQuestion = document.querySelector('#game')
const choicesOne = document.querySelector('#choice-one')
const choicesTwo = document.querySelector('#choice-two')
const choicesThree = document.querySelector('#choice-three')
const choicesFour = document.querySelector('#choice-four')

console.log(choices);

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
        question: 'What is NOT a variable type used in JavaScipt?',
        choice1: 'string',
        choice2: 'boolean',
        choice3: 'triple',
        choice4: 'object',
        answer: 'triple',

    },
    {
        question: 'Which is an assignment operator?',
        choice1: '=',
        choice2: '>',
        choice3: '+',
        choice4: '===',
        answer: '=',

    },
    {
        question: 'Evaluate the statement for z: var x = 5; var y = 10; var z = x + y;',
        choice1: '10',
        choice2: '15',
        choice3: '5',
        choice4: '20',
        answer: '15',

    },
    {
        question: 'One line comments written in Javascript begin with?',
        choice1: '<!---',
        choice2: '/**',
        choice3: '/!',
        choice4: '//',
        answer: '//'

    },
    {
        question: 'Variables declared within a JavaScript function, have a _______ scope.',
        choice1: 'local',
        choice2: 'global',
        choice3: 'custom',
        choice4: 'entire',
        answer: 'local',

    }
]

const SCORE_POINT = 100;
const MAX_QUESTIONS = 5;

function startGame()
{   
   startTimer();
   displayQuestions(questionIndex, ...questions);
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
            showResults()
        }
    }, 1000);
}



function displayQuestions(questionIndex, ...questions) {
    questionEl.innerText = questions[questionIndex].question
    

    choicesOne.innerText = questions[questionIndex].choice1;
    choicesTwo.innerText = questions[questionIndex].choice2;
    choicesThree.innerText = questions[questionIndex].choice3;
    choicesFour.innerText = questions[questionIndex].choice4;


clickQuestion.addEventListener("click", function(e) {
    if(e.target.classList.contains("choice-text")) {
        if(e.target.value === questions[questionIndex].answer)
            {
                score++; 
            }
        else {
            clock--; 
            timerCountdown.textContent = clock;
            score--;
        }
    }
})
}
//     addClickHandler();


// function addClickHandler() {
// choices.forEach(choice => {
//                 choice.addEventListener("click", function(e) {
//                     if(e.target.value === questions[questionsIndex].answer)
//                     questionIndex++; 
//                     else {
//                         clock = clock - 5;
//                         timerCountdown.textContent = clock; 
//                     }
//                 })
            

                
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


startGame();