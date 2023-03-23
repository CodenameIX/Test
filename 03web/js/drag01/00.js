var testboxes = document.getElementsByClassName("testbox");
function repositionElement(x, y, e) {
  e.style.left = x + "px";
  e.style.top = y + "px";
}
for (const testbox of testboxes) {
var X, Y, PressX, PressY;
testbox.addEventListener('mousedown', function (e2) {
    X = this.offsetLeft;
    Y = this.offsetTop;
    PressX = e2.clientX;
    PressY = e2.clientY;
    function MoveHandler(e3) {
        repositionElement(X + (e3.clientX - PressX),
            Y + (e3.clientY - PressY), (testbox));
    }
    testbox.addEventListener('mousemove', MoveHandler);
    window.addEventListener('mouseup', function EndHandler() {
      testbox.removeEventListener('mousemove', MoveHandler);
        window.removeEventListener('mouseup', EndHandler);
    });
});
}
repositionElement(500, 200, testboxes[0]);
repositionElement(200, 200, testboxes[1]);
repositionElement(500, 500, testboxes[2]);
repositionElement(200, 500, testboxes[3]);