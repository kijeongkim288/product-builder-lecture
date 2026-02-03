document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersContainer = document.getElementById('numbers');
    const themeToggle = document.getElementById('theme-toggle');

    // 테마 설정
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
        localStorage.setItem('theme', theme);
    });

    if (generateBtn) {
        generateBtn.addEventListener('click', generateLottoNumbers);
    } else {
        console.error('ID "generate-btn"을 가진 요소를 찾을 수 없습니다.');
    }

    function generateLottoNumbers() {
        numbersContainer.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const numbers = new Set();
            while (numbers.size < 6) {
                const randomNumber = Math.floor(Math.random() * 45) + 1;
                numbers.add(randomNumber);
            }
            const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
            console.log(`Set ${i + 1}:`, sortedNumbers); // 디버깅을 위한 로그
            const lottoSet = document.createElement('div');
            lottoSet.classList.add('lotto-set');
            sortedNumbers.forEach((number) => {
                const numberElement = document.createElement('div');
                numberElement.classList.add('number');
                numberElement.textContent = number;
                numberElement.style.backgroundColor = getNumberColor(number);
                lottoSet.appendChild(numberElement);
            });
            numbersContainer.appendChild(lottoSet);
        }
    }

    function getNumberColor(number) {
        const colors = ['#fbc400', '#69c8f2', '#ff7272', '#aaa', '#b0d840'];
        return colors[Math.floor((number - 1) / 10)];
    }

    generateLottoNumbers();
});

