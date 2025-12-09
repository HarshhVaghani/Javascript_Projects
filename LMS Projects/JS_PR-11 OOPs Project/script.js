// OOP concepts used: Encapsulation, Abstraction, Modularity, Single Responsibility, Reusability

const QUESTION_TIME_SECONDS = 25;
const STORAGE_KEY_BEST_SCORE = 'interactive_quiz_best';

// Generate short random IDs
function shortId() { return Math.random().toString(36).slice(2, 8).toUpperCase(); }
function nowMs() { return Date.now(); }
function formatDateTime(ms) { return new Date(ms).toLocaleString(); }
function showToast(message, type = 'info', duration = 2000) {
    let container = document.getElementById('toasts');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toasts';
        container.className = 'fixed right-4 top-4 flex flex-col gap-2 z-50';
        document.body.appendChild(container);
    }

    const el = document.createElement('div');
    el.className = 'px-4 py-2 rounded shadow text-white';
    el.style.minWidth = '160px';

    if (type === 'error') el.classList.add('bg-red-600');
    else if (type === 'success') el.classList.add('bg-green-600');
    else el.classList.add('bg-indigo-600');

    el.innerText = message;
    container.appendChild(el);

    // fade-out and remove
    setTimeout(() => el.style.opacity = '0', duration - 300);
    setTimeout(() => el.remove(), duration);
}

//  OOP CLASS: QUESTION 
class Question {
    // Holds one question, its options, and correct answer
    constructor({ id, text, options, correctIndex, explanation }) {
        this.id = id || shortId();
        this.text = text;
        this.options = options;
        this.correctIndex = correctIndex;
        this.explanation = explanation || '';
    }
    isCorrect(choiceIndex) {
        return choiceIndex === this.correctIndex;
    }
}

//  OOP CLASS: QUIZ 
class Quiz {
    constructor(questionData = []) {
        this.questions = questionData.map(q => new Question(q));
        this.currentIndex = 0;
        this.score = 0;
        this.userAnswers = Array(this.questions.length)
            .fill(null)
            .map(() => ({ choice: null, correct: false }));
    }

    get totalQuestions() { return this.questions.length; }
    get currentQuestion() { return this.questions[this.currentIndex]; }

    // Evaluate user answer
    answerCurrentQuestion(choiceIndex) {
        const question = this.currentQuestion;
        const alreadyAnswered = this.userAnswers[this.currentIndex].choice !== null;
        const isCorrectNow = question.isCorrect(choiceIndex);

        // Score adjustment logic
        if (!alreadyAnswered) {
            if (isCorrectNow) this.score++;
        } else {
            const previous = this.userAnswers[this.currentIndex];

            // If user changes answer, update score accordingly
            if (previous.correct && !isCorrectNow) this.score--;
            if (!previous.correct && isCorrectNow) this.score++;
        }

        // Save user's answer
        this.userAnswers[this.currentIndex] = { choice: choiceIndex, correct: isCorrectNow };
        return isCorrectNow;
    }

    // next question
    goNext() {
        if (this.currentIndex < this.totalQuestions - 1) this.currentIndex++;
        return this.currentQuestion;
    }

    // previous question
    goPrevious() {
        if (this.currentIndex > 0) this.currentIndex--;
        return this.currentQuestion;
    }

    // Jump to a question index
    goTo(index) {
        if (index >= 0 && index < this.totalQuestions) this.currentIndex = index;
        return this.currentQuestion;
    }

    // Finish the quiz and calculate %
    finish() {
        const percent = Math.round((this.score / this.totalQuestions) * 100);
        return { score: this.score, total: this.totalQuestions, percent };
    }

    // Reset quiz
    reset() {
        this.currentIndex = 0;
        this.score = 0;
        this.userAnswers = Array(this.questions.length)
            .fill(null)
            .map(() => ({ choice: null, correct: false }));
    }
}

//  SAMPLE QUESTIONS 
const SAMPLE_QUESTIONS = [
    { id: 'q1', text: 'What does HTML stand for?', options: ['Hyperlinks and Text Markup Language', 'HyperText Markup Language', 'Home Tool Markup Language', 'HyperText Making Language'], correctIndex: 1, explanation: 'HTML structures web pages.' },
    { id: 'q2', text: 'Which tag is used for the largest heading in HTML?', options: ['<h1>', '<head>', '<heading>', '<h6>'], correctIndex: 0, explanation: '<h1> is the highest level heading.' },
    { id: 'q3', text: 'Which is a JavaScript data type?', options: ['Number', 'Float32Array', 'IntegerArray', 'Character'], correctIndex: 0, explanation: 'Number is a JS primitive type.' },
    { id: 'q4', text: 'Which CSS property controls text size?', options: ['font-style', 'text-size', 'font-size', 'text-style'], correctIndex: 2, explanation: '`font-size` sets text size.' },
    { id: 'q5', text: 'What symbol selects an element by ID in CSS?', options: ['.', '#', '*', '$'], correctIndex: 1, explanation: '#myId selects an element with ID.' }
];

const quiz = new Quiz(SAMPLE_QUESTIONS);

//  DOM ELEMENTS 
const qIndexEl = document.getElementById('qIndex');
const qTotalEl = document.getElementById('qTotal');
const qTitleEl = document.getElementById('qTitle');
const optionsContainer = document.getElementById('options');
const scoreEl = document.getElementById('score');
const progressBarEl = document.getElementById('progressBar');
const timerDisplayEl = document.getElementById('timerDisplay');
const explanationEl = document.getElementById('explanation');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('submitBtn');

const bestScoreEl = document.getElementById('bestScore');
const resultArea = document.getElementById('resultArea');
const finalScoreEl = document.getElementById('finalScore');
const totalQuestionsEl = document.getElementById('totalQuestions');
const percentScoreEl = document.getElementById('percentScore');
const retryBtn = document.getElementById('retryBtn');

let questionTimerInterval = null;
let secondsRemaining = QUESTION_TIME_SECONDS;

// Enable/disable quiz buttons (for finish screen)
function setQuizControlsDisabled(disabled) {
    prevBtn.disabled = disabled;
    nextBtn.disabled = disabled;
    finishBtn.disabled = disabled;

    const toggle = (el, add) => {
        add ? el.classList.add('opacity-50', 'cursor-not-allowed')
            : el.classList.remove('opacity-50', 'cursor-not-allowed');
    };

    toggle(prevBtn, disabled);
    toggle(nextBtn, disabled);
    toggle(finishBtn, disabled);
}

//  TIMER HANDLING 
function startQuestionTimer() {
    if (QUESTION_TIME_SECONDS <= 0) { timerDisplayEl.innerText = '-- : --'; return; }

    secondsRemaining = QUESTION_TIME_SECONDS;
    updateTimerDisplay();

    clearInterval(questionTimerInterval);
    questionTimerInterval = setInterval(() => {
        secondsRemaining--;
        updateTimerDisplay();

        // Auto next when time ends
        if (secondsRemaining <= 0) {
            clearInterval(questionTimerInterval);
            handleNext(true);
        }
    }, 1000);
}

// Update timer UI and progress bar
function updateTimerDisplay() {
    const mm = String(Math.floor(secondsRemaining / 60)).padStart(2, '0');
    const ss = String(secondsRemaining % 60).padStart(2, '0');

    timerDisplayEl.innerText = `${mm} : ${ss}`;

    const pct = Math.round(((quiz.currentIndex + 1) / quiz.totalQuestions) * 100);
    progressBarEl.style.width = pct + '%';
}

// RENDER QUESTION 
function renderCurrentQuestion() {
    const question = quiz.currentQuestion;
    if (!question) return;

    qIndexEl.innerText = quiz.currentIndex + 1;
    qTotalEl.innerText = quiz.totalQuestions;
    qTitleEl.innerText = question.text;
    scoreEl.innerText = quiz.score;

    // Clear previous options
    optionsContainer.innerHTML = '';

    const userAnswerForThis = quiz.userAnswers[quiz.currentIndex];

    // Create buttons for options
    question.options.forEach((optText, optIndex) => {
        let classes = 'w-full text-left p-3 rounded border hover:bg-gray-50 transition';

        // Selected option glow
        if (userAnswerForThis.choice === optIndex) classes += ' ring-4 ring-indigo-300 glow-ring';

        // If answered, color correct/incorrect
        if (userAnswerForThis.choice !== null) {
            if (optIndex === question.correctIndex) classes += ' bg-green-50 border-green-200';
            else if (optIndex === userAnswerForThis.choice && !userAnswerForThis.correct) classes += ' bg-red-50 border-red-200';
        }

        const btn = document.createElement('button');
        btn.className = classes;
        btn.innerHTML = `<span class="font-medium mr-2">${optIndex + 1}.</span>${optText}`;

        // When clicked
        btn.addEventListener('click', () => {
            const wasCorrect = quiz.answerCurrentQuestion(optIndex);
            displayFeedback(wasCorrect, question.explanation);
            renderCurrentQuestion();
        });

        optionsContainer.appendChild(btn);
    });

    // Show explanation only after user answers
    const userAns = quiz.userAnswers[quiz.currentIndex];

    if (userAns.choice !== null) {
        explanationEl.classList.remove('hidden');
        explanationEl.innerHTML = `<strong>${userAns.correct ? 'Correct!' : 'Incorrect'}</strong><div class="mt-1">${question.explanation}</div>`;
    } else {
        explanationEl.classList.add('hidden');
        explanationEl.innerHTML = '';
    }

    startQuestionTimer();
}

//  FEEDBACK 
function displayFeedback(isCorrect, explanationText) {
    explanationEl.classList.remove('hidden');
    explanationEl.innerHTML = `<strong>${isCorrect ? 'Correct!' : 'Incorrect'}</strong><div class="mt-1">${explanationText}</div>`;
    showToast(isCorrect ? 'Correct ✅' : 'Incorrect ❌', isCorrect ? 'success' : 'info', 900);
    scoreEl.innerText = quiz.score;
}

//  NAVIGATION 
function handleNext(auto = false) {
    if (quiz.currentIndex === quiz.totalQuestions - 1) {
        finishQuiz();
        return;
    }
    quiz.goNext();
    renderCurrentQuestion();
}

function handlePrevious() {
    quiz.goPrevious();
    renderCurrentQuestion();
}

//  FINISH QUIZ 
function finishQuiz() {
    clearInterval(questionTimerInterval);

    const result = quiz.finish();
    finalScoreEl.innerText = result.score;
    totalQuestionsEl.innerText = result.total;
    percentScoreEl.innerText = result.percent;

    resultArea.classList.remove('hidden');

    // Save best score
    const stored = Number(localStorage.getItem(STORAGE_KEY_BEST_SCORE));
    if (!stored || result.score > stored) {
        localStorage.setItem(STORAGE_KEY_BEST_SCORE, result.score);
        bestScoreEl.innerText = result.score;
        showToast('New best score 🎉', 'success');
    } else {
        bestScoreEl.innerText = stored;
    }

    setQuizControlsDisabled(true); // disable Next/Prev/Finish buttons
}

//  RESTART QUIZ
function retryQuiz() {
    quiz.reset();
    resultArea.classList.add('hidden');
    setQuizControlsDisabled(false); // re-enable buttons
    renderCurrentQuestion();
}

// KEYBOARD SHORTCUTS 
document.addEventListener('keydown', (e) => {
    if (e.key === 'n' || e.key === 'N') handleNext();
    if (e.key === 'p' || e.key === 'P') handlePrevious();

    // number keys choose answers
    if (e.key >= '1' && e.key <= '9') {
        const num = Number(e.key);
        const question = quiz.currentQuestion;

        if (num <= question.options.length) {
            quiz.answerCurrentQuestion(num - 1);
            displayFeedback(quiz.userAnswers[quiz.currentIndex].correct, question.explanation);
            renderCurrentQuestion();
        }
    }
});

//  BUTTON EVENTS 
prevBtn.addEventListener('click', handlePrevious);
nextBtn.addEventListener('click', () => handleNext(false));
finishBtn.addEventListener('click', finishQuiz);
retryBtn.addEventListener('click', retryQuiz);

//  INITIALIZATION 
function initializeApp() {
    const stored = localStorage.getItem(STORAGE_KEY_BEST_SCORE);
    bestScoreEl.innerText = stored ? stored : '—';
    renderCurrentQuestion();
    updateTimerDisplay();
}
initializeApp();
