var box = document.getElementById("box");
var boxWrapper = document.getElementById("box-wrapper");
const minWidth = 40;
const minHeight = 40;

var initX, initY, mousePressX, mousePressY, initW, initH;

function repositionElement(x, y) {
    boxWrapper.style.left = x + 'px';
    boxWrapper.style.top = y + 'px';
}

function resize(w, h) {
    box.style.width = w + 'px';
    box.style.height = h + 'px';
}

var rightMid = document.getElementById("right-mid");
var leftMid = document.getElementById("left-mid");
var topMid = document.getElementById("top-mid");
var bottomMid = document.getElementById("bottom-mid");

var leftTop = document.getElementById("left-top");
var rightTop = document.getElementById("right-top");
var rightBottom = document.getElementById("right-bottom");
var leftBottom = document.getElementById("left-bottom");

function resizeHandler(event, left = false, top = false, xResize = false, yResize = false) {
    initX = boxWrapper.offsetLeft;
    initY = boxWrapper.offsetTop;
    mousePressX = event.clientX;
    mousePressY = event.clientY;

    initW = box.offsetWidth;
    initH = box.offsetHeight;

    function eventMoveHandler(event) {
        var wDiff = (event.clientX - mousePressX);
        var hDiff = (event.clientY - mousePressY);

        var newW = initW, newH = initH, newX = initX, newY = initY;

        if (xResize) {
            if (left) {
                newW = initW - wDiff;
            } else {
                newW = initW + wDiff;
            }
            newX += 0.5 * wDiff;
        }
        if (yResize) {
            if (top) {
                newH = initH - hDiff;
            } else {
                newH = initH + hDiff;
            }
            newY += 0.5 * hDiff;
        }

        resize(newW, newH);
        repositionElement(newX, newY);
    }

    window.addEventListener('mousemove', eventMoveHandler);
    window.addEventListener('mouseup', function eventEndHandler() {
        window.removeEventListener('mousemove', eventMoveHandler);
        window.removeEventListener('mouseup', eventEndHandler);
    });
}

rightMid.addEventListener('mousedown', e => resizeHandler(e, false, false, true, false));
leftMid.addEventListener('mousedown', e => resizeHandler(e, true, false, true, false));
topMid.addEventListener('mousedown', e => resizeHandler(e, false, true, false, true));
bottomMid.addEventListener('mousedown', e => resizeHandler(e, false, false, false, true));

leftTop.addEventListener('mousedown', e => resizeHandler(e, true, true, true, true));
rightTop.addEventListener('mousedown', e => resizeHandler(e, false, true, true, true));
rightBottom.addEventListener('mousedown', e => resizeHandler(e, false, false, true, true));
leftBottom.addEventListener('mousedown', e => resizeHandler(e, true, false, true, true));

resize(300, 200);
repositionElement(400, 200);