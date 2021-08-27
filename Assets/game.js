const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));

var currentQuestion = 0;
var questionsRight = 0;
var score = 0;


var clock = 60;
var timer;
const timerCountdown = document.getElementById("countdownTimer");

var highscore
var questionCounter = 0;
var quizQuestions = []

const questions = [
    {
        question: 'What is NOT a variable type used in JavaScipt?',
        choice1: 'string',
        choice2: 'boolean',
        choice3: 'triple',
        choice4: 'object',
        answer: 3,

    },
    {
        question: 'Which is an assignment operator?',
        choice1: '=',
        choice2: '>',
        choice3: '+',
        choice4: '===',
        answer: 1,

    },
    {
        question: 'Evaluate the statement for z: var x = 5; var y = 10; var z = x + y;',
        choice1: '10',
        choice2: '15',
        choice3: '5',
        choice4: '20',
        answer: 2,

    },
    {
        question: 'One line comments written in Javascript begin with?',
        choice1: '<!---',
        choice2: '/**',
        choice3: '/!',
        choice4: '//',
        answer: 4,

    },
    {
        question: 'Variables declared within a JavaScript function, have a _______ scope.',
        choice1: 'local',
        choice2: 'global',
        choice3: 'custom',
        choice4: 'entire',
        answer: 1,

    }
]

const SCORE_POINT = 100;
const MAX_QUESTIONS = 5;

function startGame()
{   
   startTimer();
   //getQuestion()
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

// getNewQuestion()
// {
//     if (availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS){
//         localStorage.setItem('mostRecentScore', score)
//         return window.location.assign('/end.html')
//     }

//     questionCounter++
    
//     const questionsIndex = Math.floor(math.random() * quizQuestions.length)
//     currentQuestion = quizQuestions[questionsIndex]
//     question.innerText = currentQuestion.question

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