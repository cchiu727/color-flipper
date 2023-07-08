function generateHex() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

const button = document.getElementById('color-button');
const background = document.getElementById('background-container');
const colorLabel = document.getElementById('color-label');


button.addEventListener("click", function() {
    let color = generateHex().toUpperCase();
    background.style.backgroundColor = color;
    colorLabel.style.color = color;
    colorLabel.innerHTML = color;
});