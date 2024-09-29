document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.openbtn');
    const navUl = document.querySelector('nav ul');
    const cards = document.querySelectorAll('.card');
    let selectedCard = null;
    let selectedPrediction = null;

    menuIcon.addEventListener('click', function () {
        document.querySelector('.sidebar').classList.toggle('showing');
    });

    cards.forEach(card => {
        const yesButton = card.querySelector('.yes');
        const noButton = card.querySelector('.no');

        if (yesButton && noButton) {
            yesButton.addEventListener('click', () => selectPrediction(card, 'yes'));
            noButton.addEventListener('click', () => selectPrediction(card, 'no'));
        }
    });

    document.getElementById('confirmBet').addEventListener('click', function () {
        const betAmount = parseFloat(document.getElementById('betAmount').value);

        if (selectedCard && selectedPrediction && !isNaN(betAmount) && betAmount > 0) {
            const multiplier = parseFloat(selectedCard.dataset[selectedPrediction]);
            const potentialWinnings = betAmount * multiplier;
            alert(`Aposta confirmada! Se ganhar, você receberá e${potentialWinnings.toFixed(2)}.`);
            document.getElementById('betAmount').value = '';
            selectedCard = null;
            selectedPrediction = null;
        } else {
            alert('Por favor, selecione uma aposta e insira um valor válido.');
        }
    });

    function selectPrediction(card, prediction) {
        selectedCard = card;
        selectedPrediction = prediction;
        alert(`Você escolheu "${prediction === 'yes' ? 'sim' : 'não'}" para ${card.dataset.racer || card.dataset.team}.`);
    }
});
