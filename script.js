function changeTextColor(color) {
    document.getElementById("text").style.color = color
}

function changeBackgroundColor(color) {
   document.getElementById("text").style.backgroundImage = null
    document.getElementById("text").style.backgroundColor = color
}

function changeBackgroundImage(link) {
    document.getElementById("text").style.backgroundImage = `url(${link})`;
}