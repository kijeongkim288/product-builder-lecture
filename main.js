document.addEventListener('DOMContentLoaded', () => {
    const recommendBtn = document.getElementById('recommend-btn');
    const menuElement = document.getElementById('menu');

    const dinnerMenus = [
        "치킨", "피자", "삼겹살", "족발", "보쌈",
        "떡볶이", "라면", "김치찌개", "된장찌개", "부대찌개",
        "초밥", "파스타", "햄버거", "샌드위치", "카레"
    ];

    if (recommendBtn) {
        recommendBtn.addEventListener('click', recommendMenu);
    } else {
        console.error('ID "recommend-btn"을 가진 요소를 찾을 수 없습니다.');
    }

    function recommendMenu() {
        const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
        const recommendedMenu = dinnerMenus[randomIndex];
        menuElement.textContent = recommendedMenu;
    }
});