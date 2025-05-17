const input = document.querySelector('input#name-input')
const out = document.querySelector('span#name-output')

input.addEventListener('input', (event) => {
    const value = event.target.value
    value.trim() === '' || value === '' ? out.textContent = 'Anonymous' : out.textContent = value.trim()
})