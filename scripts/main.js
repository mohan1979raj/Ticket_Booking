document.getElementById("colorButton").addEventListener("click", changeColor);

function changeColor() {
    const body = document.body;
    const currentColor = body.style.backgroundColor || getComputedStyle(body).backgroundColor;

    // Generate a random color
    const newColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    body.style.backgroundColor = newColor;
}
