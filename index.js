var button = document.getElementById('color-button');
var background = document.getElementById('background-container');
var colorLabel = document.getElementById('color-label');
function generateHex() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}
if (button && background && colorLabel) {
    button.addEventListener("click", function () {
        var color = generateHex().toUpperCase();
        background.style.backgroundColor = color;
        colorLabel.style.color = color;
        colorLabel.innerHTML = color;
    });
}
