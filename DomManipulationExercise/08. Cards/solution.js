function solve() {
    let history = [];
    let currentDeck = [];
    let resultDeck = document.getElementById('result');

    function changeStyle(target) {
        target.src = 'images/whiteCard.jpg';
    }

    let revealCard = (e) => {
        let firstPlayerResult = resultDeck.getElementsByTagName('span')[0];
        let secondPlayerResult = resultDeck.getElementsByTagName('span')[2];

        if (currentDeck.length > 1) {
            currentDeck = [];
            firstPlayerResult.textContent = '';
            secondPlayerResult.textContent = '';
        } else {
            if (currentDeck.length === 0) {
                changeStyle(e.target);
                currentDeck.push(e.target);
                firstPlayerResult.textContent = e.target.name;
            } else {
                changeStyle(e.target);
                secondPlayerResult.textContent = e.target.name;
                let firstCardValue = Number(currentDeck[0].name);
                let secondCardValue = Number(e.target.name);

                if (firstCardValue > secondCardValue) {
                    currentDeck[0].style.border = '2px solid green';
                    e.target.style.border = '2px solid red';
                } else {
                    currentDeck[0].style.border = '2px solid red';
                    e.target.style.border = '2px solid green';
                }

                history.push(`[${currentDeck[0].name} VS ${e.target.name}]`);
                document.getElementById('history').innerHTML = history.join(' ');
                currentDeck.push(e.target);
            }
        }
    }

    let firstPlayerCards = document.getElementById('player1Div');
    let secondPlayerCards = document.getElementById('player2Div');

    firstPlayerCards.addEventListener('click', revealCard);
    secondPlayerCards.addEventListener('click', revealCard);
}