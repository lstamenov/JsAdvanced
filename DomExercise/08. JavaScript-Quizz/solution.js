function solve() {
    let rightAnswersCount = 0;
    let questionNumber = 0;

    let rightAnswers = [
        'onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'
    ];

    let quizElement = document.getElementById('quizzie');

    quizElement.addEventListener('click', function (e) {
        console.log(questionNumber);

        let currentQuestionElement = document.getElementsByTagName('section')[questionNumber];

        console.log(currentQuestionElement);

        console.log(rightAnswers[questionNumber]);

        let correctAnswer = rightAnswers[questionNumber];
        questionNumber++;
        console.log(rightAnswers.length);
        if (e.target.innerHTML === correctAnswer){
            rightAnswersCount++;
        }
        currentQuestionElement.style.display = 'none';
        if (currentQuestionElement.nextElementSibling.nextElementSibling){
            currentQuestionElement.nextElementSibling.style.display = 'block';
        }else {
            let result = document.getElementById('results');
            console.log(rightAnswersCount);
            if (rightAnswersCount === 3){
                result.firstElementChild.firstElementChild.innerHTML = 'You are recognized top JS fan!';
            }else {
                result.firstElementChild.firstElementChild.innerHTML = `You have ${rightAnswersCount} right answers.`;
            }
            result.style.display = 'block';
        }
    });
}
