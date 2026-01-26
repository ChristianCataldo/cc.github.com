// quiz.js
// JavaScript logic for the interactive quiz website

document.addEventListener('DOMContentLoaded', function () {
            // Shuffle answers for each question
            function shuffleArray(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
            quizData.forEach(q => shuffleArray(q.answers));
        const questionDropdown = document.getElementById('questionDropdown');
    // DOM elements
    const startScreen = document.getElementById('startScreen');
    const quizScreen = document.getElementById('quizScreen');
    const resultsScreen = document.getElementById('resultsScreen');
    const questionNumber = document.getElementById('questionNumber');
    const questionText = document.getElementById('questionText');
    const answersContainer = document.getElementById('answersContainer');
    const rationale = document.getElementById('rationale');
    const rationaleText = document.getElementById('rationaleText');
    const progressFill = document.getElementById('progressFill');
    const currentQ = document.getElementById('currentQ');
    const totalQ = document.getElementById('totalQ');
    const correctCount = document.getElementById('correctCount');
    const incorrectCount = document.getElementById('incorrectCount');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const scoreCircle = document.getElementById('scoreCircle');
    const resultTotal = document.getElementById('resultTotal');
    const resultCorrect = document.getElementById('resultCorrect');
    const resultIncorrect = document.getElementById('resultIncorrect');
    const resultScore = document.getElementById('resultScore');
    const answeredCount = document.getElementById('answeredCount');

    // Quiz state
    let currentQuestion = 0;
    let userAnswers = [];
    let correct = 0;
    let incorrect = 0;
    const totalQuestions = quizData.length;
    totalQ.textContent = totalQuestions;

    function showScreen(screen) {
        quizScreen.classList.add('hidden');
        resultsScreen.classList.remove('show');
        if (screen === 'quiz') quizScreen.classList.remove('hidden');
        if (screen === 'results') resultsScreen.classList.add('show');
    }

    // Start directly in quiz mode
    function startQuizDirect() {
        currentQuestion = 0;
        userAnswers = Array(totalQuestions).fill(null);
        correct = 0;
        incorrect = 0;
        correctCount.textContent = 0;
        incorrectCount.textContent = 0;
        showScreen('quiz');
        renderQuestion();
        updateProgress();
    }

    function renderQuestion() {
                    // Update answered count
                    if (answeredCount) {
                        const numAnswered = userAnswers.filter(a => a !== null).length;
                        answeredCount.textContent = numAnswered;
                    }
            renderQuestionDropdown();
            function renderQuestionDropdown() {
                if (!questionDropdown) return;
                questionDropdown.innerHTML = '';
                for (let i = 0; i < totalQuestions; i++) {
                    const opt = document.createElement('option');
                    opt.value = i;
                    opt.textContent = `Question ${i + 1}`;
                    if (i === currentQuestion) opt.selected = true;
                    questionDropdown.appendChild(opt);
                }
            }

            if (questionDropdown) {
                questionDropdown.addEventListener('change', function () {
                    currentQuestion = parseInt(this.value, 10);
                    renderQuestion();
                    updateProgress();
                });
            }
        const q = quizData[currentQuestion];
        questionNumber.textContent = `Question ${currentQuestion + 1}`;
        questionText.textContent = q.question;
        answersContainer.innerHTML = '';
        currentQ.textContent = currentQuestion + 1;
        // Render answers
        q.answers.forEach((ans, idx) => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn';
            btn.textContent = ans.text;
            btn.disabled = false;
            if (userAnswers[currentQuestion] !== null) {
                if (idx === userAnswers[currentQuestion]) {
                    btn.classList.add(ans.correct ? 'correct' : 'incorrect', 'selected');
                }
                if (ans.correct) {
                    btn.classList.add('correct');
                }
            }
            btn.onclick = () => selectAnswer(idx);
            answersContainer.appendChild(btn);
        });
        // Show rationale if answered
        if (userAnswers[currentQuestion] !== null) {
            const selectedIdx = userAnswers[currentQuestion];
            const selectedRationale = q.answers[selectedIdx].rationale;
            const correctIdx = q.answers.findIndex(a => a.correct);
            const correctRationale = q.answers[correctIdx].rationale;
            let rationaleHtml = '';
            rationaleHtml += `<strong>Your answer:</strong> ${selectedRationale}`;
            if (selectedIdx !== correctIdx) {
                rationaleHtml += `<br><strong>Correct answer:</strong> ${correctRationale}`;
            }
            rationaleText.innerHTML = rationaleHtml;
            rationale.classList.add('show');
        } else {
            rationale.classList.remove('show');
            rationaleText.textContent = '';
        }
        // Button states
        prevBtn.disabled = currentQuestion === 0;
        nextBtn.textContent = currentQuestion === totalQuestions - 1 ? 'Finish' : 'Next';
        nextBtn.disabled = false;
    }

    function selectAnswer(idx) {
        // Allow changing answer before moving to next question
        const prevIdx = userAnswers[currentQuestion];
        const q = quizData[currentQuestion];
        if (prevIdx !== null && prevIdx !== undefined) {
            // Remove previous count
            if (q.answers[prevIdx].correct) {
                correct--;
                correctCount.textContent = correct;
            } else {
                incorrect--;
                incorrectCount.textContent = incorrect;
            }
        }
        userAnswers[currentQuestion] = idx;
        const ans = q.answers[idx];
        if (ans.correct) {
            correct++;
            correctCount.textContent = correct;
        } else {
            incorrect++;
            incorrectCount.textContent = incorrect;
        }
        renderQuestion();
        updateProgress();
    }

    window.nextQuestion = function () {
        if (currentQuestion < totalQuestions - 1) {
            currentQuestion++;
            renderQuestion();
            updateProgress();
        } else {
            showResults();
        }
    };

    window.prevQuestion = function () {
        if (currentQuestion > 0) {
            currentQuestion--;
            renderQuestion();
            updateProgress();
        }
    };

    function updateProgress() {
        progressFill.style.width = `${((currentQuestion + 1) / totalQuestions) * 100}%`;
    }

    function showResults() {
        showScreen('results');
        resultTotal.textContent = totalQuestions;
        resultCorrect.textContent = correct;
        resultIncorrect.textContent = incorrect;
        const score = Math.round((correct / totalQuestions) * 100);
        resultScore.textContent = score + '%';
        scoreCircle.textContent = score + '%';
    }

    // If user reloads, start directly in quiz mode
    startQuizDirect();
});
