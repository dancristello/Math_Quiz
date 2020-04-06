(function(){
    function buildQuiz(){

    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){

            answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
        }
    );

    quizContainer.innerHTML = output.join('');
    }

    function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;

        answerContainers[questionNumber].style.color = 'lightgreen';
        }

        else{

        answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "1) 2 + 2",
            answers: {
                a: "4",
                b: "5",
                c: "3",
                d: "7"
            },
            correctAnswer: "a"
        },
        {
            question: "2) 7 - 2 + 3",
            answers: {
                a: "12",
                b: "8",
                c: "6",
                d: "10"
            },
            correctAnswer: "b"
        },
        {
            question: "3) 7 + 2 - 3",
            answers: {
                a: "7",
                b: "12",
                c: "6",
                d: "5"
            },
            correctAnswer: "c"
        },
        {
            question: "4) 3 × 2 + 2(7 - 5)",
            answers: {
                a: "12",
                b: "16",
                c: "18",
                d: "10"
            },
            correctAnswer: "d"
        },
        {
            question: "5) 82 - 9 × (27 ÷ 3)",
            answers: {
                a: "1",
                b: "9",
                c: "73",
                d: "8"
            },
            correctAnswer: "a"
        },
        {
            question: "6) 25x = 50",
            answers: {
                a: "x = 1",
                b: "x = 2",
                c: "x = 3",
                d: "x = 4"
            },
            correctAnswer: "b"
        },
        {
            question: "7) 5 × 7 + 40 - 2(3 × 6)",
            answers: {
                a: "91",
                b: "4",
                c: "3",
                d: "92"
            },
            correctAnswer: "c"
        },
        {
            question: "8) 10x + (3 × 3 - 9) = 40",
            answers: {
                a: "x = 3",
                b: "x = 5",
                c: "x = 6",
                d: "x = 4"
            },
            correctAnswer: "d"
        },
        {
            question: "9) 3 + 3 - 2 + (6 - 5)",
            answers: {
                a: "5",
                b: "6",
                c: "15",
                d: "4"
            },
            correctAnswer: "a"
        },
        {
            question: "10) 100 - 99 + 4 + (7 - 6)",
            answers: {
                a: "7",
                b: "6",
                c: "12",
                d: "5"
            },
            correctAnswer: "b"
        },
    ];

    buildQuiz();

    submitButton.addEventListener('click', showResults);
})();