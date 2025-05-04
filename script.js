const circleLinks = {
    'circle-yt': 'https://www.youtube.com/pechinkin',
    'circle-didj': 'didj/index.html',
    'circle-dev': 'resume_ru.pdf',
    'circle-mail': 'mailto:pomor44@gmail.com',
    'circle-tg': 'https://t.me/pe4inkin',
};

document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', () => {
        const circleClass = circle.classList[1]; // Получаем второй класс (circle-1, circle-2 и т.д.)
        const url = circleLinks[circleClass];
        if (url) {
            window.location.href = url;
        }
    });
});