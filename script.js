// Quiz data for different topics
const quizData = {
    html: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "Hyperlinks and Text Markup Language",
                "Home Tool Markup Language",
                "Hyper Text Makeup Language"
            ],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Which HTML element is used for the largest heading?",
            options: [
                "<heading>",
                "<h6>",
                "<head>",
                "<h1>"
            ],
            answer: "<h1>"
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            options: [
                "class",
                "style",
                "font",
                "styles"
            ],
            answer: "style"
        },
        {
            question: "Which HTML element is used to specify a footer for a document or section?",
            options: [
                "<footer>",
                "<bottom>",
                "<section>",
                "<div>"
            ],
            answer: "<footer>"
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            options: [
                "<break>",
                "<lb>",
                "<br>",
                "<newline>"
            ],
            answer: "<br>"
        }
    ],
    css: [
        {
            question: "What does CSS stand for?",
            options: [
                "Colorful Style Sheets",
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Computer Style Sheets"
            ],
            answer: "Cascading Style Sheets"
        },
        {
            question: "Which CSS property is used to change the text color of an element?",
            options: [
                "text-color",
                "font-color",
                "color",
                "text-style"
            ],
            answer: "color"
        },
        {
            question: "Which CSS property controls the text size?",
            options: [
                "font-style",
                "text-size",
                "font-size",
                "text-style"
            ],
            answer: "font-size"
        },
        {
            question: "How do you select an element with id 'demo' in CSS?",
            options: [
                ".demo",
                "#demo",
                "*demo",
                "demo"
            ],
            answer: "#demo"
        },
        {
            question: "Which property is used to change the background color?",
            options: [
                "bgcolor",
                "background-color",
                "color",
                "bg-color"
            ],
            answer: "background-color"
        }
    ],
    js: [
        {
            question: "Which of the following is not a JavaScript data type?",
            options: [
                "Number",
                "String",
                "Boolean",
                "Float"
            ],
            answer: "Float"
        },
        {
            question: "What will 'typeof null' return in JavaScript?",
            options: [
                "null",
                "undefined",
                "object",
                "number"
            ],
            answer: "object"
        },
        {
            question: "Which keyword is used to declare a variable in JavaScript?",
            options: [
                "var",
                "let",
                "const",
                "All of the above"
            ],
            answer: "All of the above"
        },
        {
            question: "What is the correct way to write a JavaScript array?",
            options: [
                "var colors = (1:'red', 2:'green', 3:'blue')",
                "var colors = ['red', 'green', 'blue']",
                "var colors = 'red', 'green', 'blue'",
                "var colors = {1:'red', 2:'green', 3:'blue'}"
            ],
            answer: "var colors = ['red', 'green', 'blue']"
        },
        {
            question: "Which operator is used to assign a value to a variable?",
            options: [
                "*",
                "=",
                "-",
                "x"
            ],
            answer: "="
        }
    ],
    dbms: [
        {
            question: "What does DBMS stand for?",
            options: [
                "Digital Base Management System",
                "Data Bank Management System",
                "Database Management System",
                "Data Backup Management System"
            ],
            answer: "Database Management System"
        },
        {
            question: "Which of the following is not a type of database model?",
            options: [
                "Relational",
                "Hierarchical",
                "Network",
                "Circular"
            ],
            answer: "Circular"
        },
        {
            question: "What is the primary key in a database table?",
            options: [
                "A key that can be null",
                "A key that uniquely identifies each record",
                "A key that is used for encryption",
                "A key that links to another table"
            ],
            answer: "A key that uniquely identifies each record"
        },
        {
            question: "Which SQL command is used to retrieve data from a database?",
            options: [
                "GET",
                "SELECT",
                "RETRIEVE",
                "QUERY"
            ],
            answer: "SELECT"
        },
        {
            question: "What does SQL stand for?",
            options: [
                "Structured Query Language",
                "Sequential Query Language",
                "Simple Question Language",
                "Standard Query Language"
            ],
            answer: "Structured Query Language"
        }
    ],
    dsa: [
        {
            question: "Which data structure uses LIFO (Last In First Out) principle?",
            options: [
                "Queue",
                "Stack",
                "Array",
                "Linked List"
            ],
            answer: "Stack"
        },
        {
            question: "What is the time complexity of binary search in the worst case?",
            options: [
                "O(1)",
                "O(n)",
                "O(log n)",
                "O(n log n)"
            ],
            answer: "O(log n)"
        },
        {
            question: "Which sorting algorithm has the worst time complexity of O(n²)?",
            options: [
                "Merge Sort",
                "Quick Sort",
                "Bubble Sort",
                "Heap Sort"
            ],
            answer: "Bubble Sort"
        },
        {
            question: "Which of the following is not a linear data structure?",
            options: [
                "Array",
                "Linked List",
                "Queue",
                "Tree"
            ],
            answer: "Tree"
        },
        {
            question: "What is the space complexity of a recursive algorithm?",
            options: [
                "O(1)",
                "O(n)",
                "O(log n)",
                "Depends on the depth of recursion"
            ],
            answer: "Depends on the depth of recursion"
        }
    ],
    gk: [
        {
            question: "Which planet is known as the Red Planet?",
            options: [
                "Venus",
                "Mars",
                "Jupiter",
                "Saturn"
            ],
            answer: "Mars"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: [
                "Vincent van Gogh",
                "Pablo Picasso",
                "Leonardo da Vinci",
                "Michelangelo"
            ],
            answer: "Leonardo da Vinci"
        },
        {
            question: "What is the capital of Japan?",
            options: [
                "Beijing",
                "Seoul",
                "Tokyo",
                "Bangkok"
            ],
            answer: "Tokyo"
        },
        {
            question: "Which ocean is the largest?",
            options: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Arctic Ocean",
                "Pacific Ocean"
            ],
            answer: "Pacific Ocean"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: [
                "Charles Dickens",
                "William Shakespeare",
                "Jane Austen",
                "Mark Twain"
            ],
            answer: "William Shakespeare"
        }
    ],
    science: [
        {
            question: "What is the chemical symbol for gold?",
            options: [
                "Go",
                "Gd",
                "Au",
                "Ag"
            ],
            answer: "Au"
        },
        {
            question: "Which gas is most abundant in Earth's atmosphere?",
            options: [
                "Oxygen",
                "Carbon Dioxide",
                "Nitrogen",
                "Hydrogen"
            ],
            answer: "Nitrogen"
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: [
                "Gold",
                "Iron",
                "Diamond",
                "Quartz"
            ],
            answer: "Diamond"
        },
        {
            question: "Which planet is known as the Morning Star?",
            options: [
                "Mars",
                "Venus",
                "Jupiter",
                "Mercury"
            ],
            answer: "Venus"
        },
        {
            question: "What is the unit of electrical resistance?",
            options: [
                "Volt",
                "Ampere",
                "Ohm",
                "Watt"
            ],
            answer: "Ohm"
        }
    ],
    history: [
        {
            question: "In which year did World War II end?",
            options: [
                "1943",
                "1945",
                "1947",
                "1950"
            ],
            answer: "1945"
        },
        {
            question: "Who was the first President of the United States?",
            options: [
                "Thomas Jefferson",
                "George Washington",
                "Abraham Lincoln",
                "John Adams"
            ],
            answer: "George Washington"
        },
        {
            question: "Which ancient civilization built the pyramids?",
            options: [
                "Greeks",
                "Romans",
                "Egyptians",
                "Mayans"
            ],
            answer: "Egyptians"
        },
        {
            question: "When was the Declaration of Independence signed?",
            options: [
                "1776",
                "1789",
                "1801",
                "1812"
            ],
            answer: "1776"
        },
        {
            question: "Which empire was ruled by Julius Caesar?",
            options: [
                "Greek",
                "Roman",
                "Persian",
                "Ottoman"
            ],
            answer: "Roman"
        }
    ]
};

// DOM Elements
const startPage = document.getElementById('start-page');
const topicPage = document.getElementById('topic-page');
const quizPage = document.getElementById('quiz-page');
const resultsPage = document.getElementById('results-page');

const startBtn = document.getElementById('start-btn');
const backToStartBtn = document.getElementById('back-to-start');
const topicCards = document.querySelectorAll('.topic-card');
const quizTopicTitle = document.getElementById('quiz-topic');

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const submitButton = document.getElementById('submit-btn');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');

const scorePercentage = document.getElementById('score-percentage');
const topicName = document.getElementById('topic-name');
const correctAnswers = document.getElementById('correct-answers');
const resultMessage = document.getElementById('result-message');
const restartQuizBtn = document.getElementById('restart-quiz');
const chooseTopicBtn = document.getElementById('choose-topic');

// Quiz variables
let currentTopic = '';
let currentQuizData = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// Event Listeners
startBtn.addEventListener('click', () => {
    startPage.classList.remove('active');
    topicPage.classList.add('active');
});

backToStartBtn.addEventListener('click', () => {
    topicPage.classList.remove('active');
    startPage.classList.add('active');
});

topicCards.forEach(card => {
    card.addEventListener('click', () => {
        currentTopic = card.getAttribute('data-topic');
        currentQuizData = quizData[currentTopic];
        userAnswers = Array(currentQuizData.length).fill(null);
        
        // Set quiz topic title with proper capitalization
        const topicName = card.querySelector('h3').textContent;
        quizTopicTitle.textContent = `${topicName} Quiz`;
        
        // Reset quiz state
        currentQuestionIndex = 0;
        score = 0;
        
        // Show quiz page
        topicPage.classList.remove('active');
        quizPage.classList.add('active');
        
        // Start the quiz
        showQuestion();
        updateProgress();
    });
});

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
    updateProgress();
});

prevButton.addEventListener('click', () => {
    currentQuestionIndex--;
    showQuestion();
    updateProgress();
});

submitButton.addEventListener('click', showResults);

restartQuizBtn.addEventListener('click', () => {
    // Reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = Array(currentQuizData.length).fill(null);
    
    // Show first question
    showQuestion();
    updateProgress();
    
    // Go back to quiz page
    resultsPage.classList.remove('active');
    quizPage.classList.add('active');
});

chooseTopicBtn.addEventListener('click', () => {
    resultsPage.classList.remove('active');
    topicPage.classList.add('active');
});

// Functions
function showQuestion() {
    resetState();
    
    const currentQuestion = currentQuizData[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.textContent = `${questionNo}. ${currentQuestion.question}`;
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(option, button));
        
        // Highlight the user's selected answer if they've already answered this question
        if (userAnswers[currentQuestionIndex] === option) {
            button.classList.add('selected');
            if (option === currentQuestion.answer) {
                button.classList.add('correct');
            } else {
                button.classList.add('incorrect');
                // Also highlight the correct answer
                const correctButton = [...answerButtons.children].find(
                    btn => btn.textContent === currentQuestion.answer
                );
                if (correctButton) correctButton.classList.add('correct');
            }
        }
        
        answerButtons.appendChild(button);
    });
    
    // Update navigation buttons
    prevButton.style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    nextButton.style.display = currentQuestionIndex === currentQuizData.length - 1 ? 'none' : 'block';
    submitButton.style.display = currentQuestionIndex === currentQuizData.length - 1 ? 'block' : 'none';
}

function resetState() {
    nextButton.style.display = 'none';
    submitButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(selectedOption, button) {
    // Save the user's answer
    userAnswers[currentQuestionIndex] = selectedOption;
    
    // Disable all buttons to prevent changing answers
    const buttons = answerButtons.querySelectorAll('.answer-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
    });
    
    // Get the current question
    const currentQuestion = currentQuizData[currentQuestionIndex];
    
    // Check if the answer is correct
    const isCorrect = selectedOption === currentQuestion.answer;
    if (isCorrect) {
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
        // Also highlight the correct answer
        const correctButton = [...buttons].find(
            btn => btn.textContent === currentQuestion.answer
        );
        if (correctButton) correctButton.classList.add('correct');
    }
    
    // Update score if this is the first time answering this question
    if (isCorrect && !button.classList.contains('selected')) {
        score++;
    }
    
    // Mark this button as selected
    button.classList.add('selected');
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuizData.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${currentQuestionIndex + 1}/${currentQuizData.length}`;
}

function showResults() {
    // Calculate score percentage
    const percentage = (score / currentQuizData.length) * 100;
    
    // Update results page
    topicName.textContent = `Topic: ${quizTopicTitle.textContent}`;
    correctAnswers.textContent = `Correct: ${score}/${currentQuizData.length}`;
    scorePercentage.textContent = `${Math.round(percentage)}%`;
    
    // Set result message based on score
    if (percentage >= 80) {
        resultMessage.textContent = "Excellent! You're a master!";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Good job! You know your stuff!";
    } else if (percentage >= 40) {
        resultMessage.textContent = "Not bad! Keep practicing!";
    } else {
        resultMessage.textContent = "Keep learning! You'll get better!";
    }
    
    // Animate the circular progress bar
    const circle = document.querySelector('.progress-circle-fill');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    
    // Show results page
    quizPage.classList.remove('active');
    resultsPage.classList.add('active');
}