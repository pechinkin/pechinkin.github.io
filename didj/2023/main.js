const light = document.querySelector("#light")
const dark =  document.querySelector(`#dark`)
const button = document.querySelector(`button`)
const styleMode = localStorage.getItem(`styleMode`)
const paths = document.querySelectorAll("svg > path")
const test = document.querySelector(".didj__logo > a")
button.addEventListener("click", darkAge)
function darkAge() {
    document.body.classList.toggle(`darkBody`)
    if (document.body.className === `darkBody`){
        for (let i = 0; i < paths.length; i++ ){
            paths[i].setAttribute('fill','white')
        }
        light.classList.remove('mama')
        dark.classList.add('mama')
        localStorage.setItem(`styleMode`,`dark`)
    }
    else{
        for (let i = 0; i < paths.length; i++ ){
            paths[i].setAttribute('fill','black')
        }
        dark.classList.remove('mama')
        light.classList.add('mama')
        localStorage.setItem(`styleMode`,null)
    }
}

if (styleMode === `dark`){
    darkAge()
}

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




