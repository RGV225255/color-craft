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
function downloadImage() {
    const image = document.getElementById("text-editor");
    html2canvas(image).then(function(canvas) {
        const link = document.createElement("a");
        link.download = "color_craft.png";
        link.href = canvas.toDataURL();
        link.click();
    })
    .catch(function(error) {
        console.error("Error downloading image:", error);
    });
}