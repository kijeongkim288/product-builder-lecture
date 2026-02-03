document.addEventListener('DOMContentLoaded', () => {
    // DOM이 완전히 로드된 후, 필요한 HTML 요소를 찾습니다.
    const generateBtn = document.getElementById('generate-btn');
    const numbersContainer = document.getElementById('numbers');

    // 버튼이 존재하는지 확인하고, 존재한다면 클릭 이벤트를 연결합니다.
    if (generateBtn) {
        generateBtn.addEventListener('click', generateLottoNumbers);
    } else {
        console.error('ID "generate-btn"을 가진 요소를 찾을 수 없습니다.');
    }

    // 로또 번호를 생성하고 화면에 표시하는 함수
    function generateLottoNumbers() {
        // 이전 번호들을 지웁니다.
        numbersContainer.innerHTML = '';

        // 중복되지 않는 6개의 번호를 생성합니다.
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        // 번호를 오름차순으로 정렬합니다.
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        // 각 번호를 애니메이션 효과와 함께 순차적으로 표시합니다.
        sortedNumbers.forEach((number, index) => {
            setTimeout(() => {
                const numberElement = document.createElement('div');
                numberElement.classList.add('number');
                numberElement.textContent = number;
                numberElement.style.backgroundColor = getNumberColor(number);
                numbersContainer.appendChild(numberElement);
            }, index * 200); // 0.2초 간격으로 표시
        });
    }

    // 번호의 값에 따라 다른 배경색을 반환하는 함수
    function getNumberColor(number) {
        if (number <= 10) return '#fbc400'; // 노란색
        if (number <= 20) return '#69c8f2'; // 파란색
        if (number <= 30) return '#ff7272'; // 빨간색
        if (number <= 40) return '#aaa';    // 회색
        return '#b0d840';                   // 녹색
    }

    // 페이지가 처음 로드될 때 바로 번호를 생성하여 보여줍니다.
    generateLottoNumbers();
});
