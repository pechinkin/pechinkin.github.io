function getRandomHSLColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 30) + 70; 
    const lightness = Math.floor(Math.random() * 20) + 40; 
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function updateGlowColor() {
    const root = document.documentElement;
    root.style.setProperty('--glow-color', getRandomHSLColor());
}

setInterval(updateGlowColor, 1000);
