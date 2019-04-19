function displayCursor(event) {
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById('cursor').style.left = (x - 17.5) + "px";
    document.getElementById('cursor').style.top = (y - 17.5) + "px";
}