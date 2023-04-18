let questions = [
    {
        question: "What is the meaning of eager?",
        answers: [
            {reply: "exact", correct: false},
            {reply: "aggressive", correct: false},
            {reply: "right", correct: false},
            {reply: "keen", correct: true},
        ]
    },
    {
        question: "What is the meaning of eager?",
        answers: [
            {reply: "", correct: false},
            {reply: "", correct: false},
            {reply: "", correct: false},
            {reply: "keen", correct: true},
        ]
    },
    {
        question: "What is the meaning of eager?",
        answers: [
            {reply: "", correct: false},
            {reply: "", correct: false},
            {reply: "", correct: false},
            {reply: "keen", correct: true},
        ]
    },
    {
        question: "What is the meaning of eager?",
        answers: [
            {reply: "", correct: false},
            {reply: "", correct: false},
            {reply: "", correct: false},
            {reply: "keen", correct: true},
        ]
    },
    {
        question: "What is the meaning of eager?",
        answers: [
            {reply: "", correct: false},
            {reply: "", correct: false},
            {reply: "", correct: false},
            {reply: "keen", correct: true},
        ]
    },
    {
        question: "What is the meaning of eager?",
        answers: [
            {reply: "", correct: false},
            {reply: "", correct: false},
            {reply: "", correct: false},
            {reply: "keen", correct: true},
        ]
    },
    {
        question: "What is the meaning of eager?",
        answers: [
            {reply: "", correct: false},
            {reply: "", correct: false},
            {reply: "", correct: false},
            {reply: "keen", correct: true},
        ]
    },
    {
        question: "What is the meaning of eager?",
        answers: [
            {reply: "", correct: false},
            {reply: "", correct: false},
            {reply: "", correct: false},
            {reply: "keen", correct: true},
        ]
    },


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function testBegin(){
    let currentQuestionIndex = 0;
    let score = 0;
    nextButton.innerHTML = "Next";
    questionReveal();
    
}
function questionReveal(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = qcurrentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + '. ', currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.reply;
        button.classList.add('btn');
        answers.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild)
    answerButtons.removeChild(answerButtons.firstChild);
    
}
testBegin();
