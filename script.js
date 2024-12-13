function revealMessage() {
    const message = document.getElementById('message');
    message.classList.remove('hidden');
    message.style.opacity = 1;
}

function closeMessage() {
    const message = document.getElementById('message');
    message.style.opacity = 0;
    setTimeout(() => {
        message.classList.add('hidden');
    }, 500);
}
