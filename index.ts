const button: HTMLElement | null = document.getElementById('color-button');
const background: HTMLElement | null = document.getElementById('background-container');
const colorLabel: HTMLElement | null = document.getElementById('color-label');

function generateHex(): string {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

if (button && background && colorLabel) {
    button.addEventListener("click", function() {
        let color = generateHex().toUpperCase();
        background.style.backgroundColor = color;
        colorLabel.style.color = color;
        colorLabel.innerHTML = color;
    });
}
