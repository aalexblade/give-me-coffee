// Отримуємо елементи
const openModalBtn = document.querySelector('.open-modal-btn');
const modalOverlay = document.getElementById('modal-overlay');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-btn');

// Функція для відкриття модального вікна
openModalBtn.addEventListener('click', function () {
    modalOverlay.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10); // Для плавної анімації
});

// Функція для закриття модального вікна
closeModalBtn.addEventListener('click', function () {
    modal.classList.remove('show');
    setTimeout(() => {
        modalOverlay.style.display = 'none';
    }, 300); // Затримка для завершення анімації
});

// Закриття вікна при кліку поза модальним вікном
window.addEventListener('click', function (event) {
    if (event.target === modalOverlay) {
        modal.classList.remove('show');
        setTimeout(() => {
            modalOverlay.style.display = 'none';
        }, 300);
    }
});