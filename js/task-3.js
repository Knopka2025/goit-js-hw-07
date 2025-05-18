const input = document.querySelector('input#name-input');
const out = document.querySelector('span#name-output');

input.addEventListener('input', (event) => {
    const value = event.target.value.trim(); // Завжди обрізаємо пробіли спочатку
    out.textContent = value === '' ? 'Anonymous' : value;
});
