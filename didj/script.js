function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateGlowColor() {
    const root = document.documentElement;
    root.style.setProperty('--glow-color', getRandomColor());
}

setInterval(updateGlowColor, 1000);
