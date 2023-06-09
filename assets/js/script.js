const questions = [
    {
        question: "What is the meaning of eager?",
        answers: [
              {text: "sea", correct: false},
              {text: "keen", correct: true},
              {text: "south", correct: false},
              {text: "response", correct: false},
            ]
    },
    {
        question: "What is the meaning of affect?",
        answers: [
              {text: "infuence", correct: true},
              {text: "quiet", correct: false},
              {text: "risk", correct: false},
              {text: "witch", correct: false},
            ]
    },
    {
        question: "What is the meaning of capital?",
        answers: [
              {text: "city", correct: true},
              {text: "object", correct: false},
              {text: "center", correct: false},
              {text: "explain", correct: false},
            ]
    },
    {
        question: "What is the meaning of silent?",
        answers: [
              {text: "way", correct: false},
              {text: "case", correct: false},
              {text: "quite", correct: true},
              {text: "idea", correct: false},
            ]
    },
    {
        question: "What is the meaning of Peace?",
        answers: [
              {text: "way", correct: false},
              {text: "hear", correct: true},
              {text: "build", correct: false},
              {text: "absence of war", correct: true},
            ]
    },
    {
        question: "What is the meaning of Except?",
        answers: [
              {text: "course", correct: false},
              {text: "leave out", correct: true},
              {text: "loud", correct: false},
              {text: "absence", correct: false},
            ]
    },
    {
        question: "What is the meaning of frigid?",
        answers: [
              {text: "start", correct: false},
              {text: "know", correct: false},
              {text: "play", correct: false},
              {text: "cool", correct: true},
            ]
    },
    {
        question: "What is the meaning of slice?",
        answers: [
              {text: "cut", correct: true},
              {text: "count", correct: false},
              {text: "destroy", correct: false},
              {text: "carry", correct: false},
            ]
    }
  
  
  ]
  
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answers");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
      nextButton.innerHTML = "Next";
      showQuestion();
  }
  function showQuestion() {
      // show question
      let currentQuestion = questions[currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  
      // show answers
      currentQuestion.answers.forEach(answer => {
          const button = document.createElement("button");
          button.innerHTML = answer.text;
          button.classList.add("btn");
          answerButtons.appendChild(button);
          if(answer.correct) {
              button.dataset.correct = answer.correct;
          }
          button.addEventListener("click", selectAnswer);
  
        
      });
  
  }
  startQuiz();