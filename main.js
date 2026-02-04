document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('partnership-form');
    const formResponse = document.getElementById('form-response');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Here you would typically send the form data to a backend or a service like Formsfree
            // For demonstration, we'll just show a success message.

            formResponse.textContent = '문의가 성공적으로 접수되었습니다. 감사합니다!';
            formResponse.style.color = 'green';
            form.reset(); // Clear the form
        });
    } else {
        console.error('ID "partnership-form"을 가진 요소를 찾을 수 없습니다.');
    }
});