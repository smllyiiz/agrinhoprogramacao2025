function setup() {
  createCanvas(400, 400);
}
// script.js

let questions = [
    {
        question: "Qual é a principal vantagem de viver no campo?",
        options: ["Mais contato com a natureza", "Mais comodidades e serviços", "Melhores oportunidades de emprego", "Mais opções de lazer e cultura"],
        correctAnswer: 0
    },
    {
        question: "Qual é o maior desafio de viver na cidade?",
        options: ["Poder aquisitivo maior", "Poluição e trânsito", "Maior acesso à cultura", "Contatos mais rápidos com pessoas"],
        correctAnswer: 1
    },
    {
        question: "O que é mais comum nas áreas rurais?",
        options: ["Indústria e comércio", "Agricultura e pecuária", "Transporte público eficiente", "Opções de lazer diversificadas"],
        correctAnswer: 1
    },
    {
        question: "Qual fator mais atrai pessoas para as grandes cidades?",
        options: ["Qualidade de vida", "Oportunidades de emprego", "Contato com a natureza", "Maior tranquilidade"],
        correctAnswer: 1
    },
    {
        question: "Qual é uma vantagem de viver na cidade?",
        options: ["Acesso limitado a serviços de saúde", "Comodidade e acesso a serviços", "Mais áreas verdes", "Trânsito tranquilo"],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function setup() {
    noCanvas();
    showQuestion();
}

function showQuestion() {
    let questionElement = document.getElementById('question');
    let optionsElements = document.querySelectorAll('.option');
    
    // Exibir a pergunta
    questionElement.textContent = questions[currentQuestionIndex].question;
    
    // Exibir as opções
    for (let i = 0; i < optionsElements.length; i++) {
        optionsElements[i].textContent = questions[currentQuestionIndex].options[i];
    }

    // Ocultar o resultado
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer(answerIndex) {
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    let resultElement = document.getElementById('result');
    let nextBtn = document.getElementById('next-btn');

    if (answerIndex === correctAnswer) {
        resultElement.textContent = "Resposta correta!";
        score++;
    } else {
        resultElement.textContent = "Resposta errada. A resposta correta é: " + questions[currentQuestionIndex].options[correctAnswer];
    }

    document.getElementById('result-container').style.display = 'block';
    nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        let resultElement = document.getElementById('result');
        resultElement.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
        document.getElementById('next-btn').style.display = 'none';
    }
}

function draw() {
  background(220);
}