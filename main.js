document.addEventListener('DOMContentLoaded', () => {
    const rollBtn = document.getElementById('roll-btn');
    const diceElement = document.getElementById('dice');

    if (rollBtn) {
        rollBtn.addEventListener('click', rollDice);
    } else {
        console.error('ID "roll-btn"을 가진 요소를 찾을 수 없습니다.');
    }

    function rollDice() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        diceElement.textContent = randomNumber;
    }
});