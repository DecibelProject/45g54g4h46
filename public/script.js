document.getElementById('saveButton').addEventListener('click', async () => {
    const text = document.getElementById('textInput').value;
    if (text) {
        await fetch('/.netlify/functions/saveText', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });
        document.getElementById('textInput').value = '';
        loadTexts();
    }
});

async function loadTexts() {
    const response = await fetch('/.netlify/functions/loadText');
    const texts = await response.json();
    const display = document.getElementById('textDisplay');
    display.innerHTML = texts.map(t => `<p>${t}</p>`).join('');
}

window.onload = loadTexts;
