let elements = document.getElementsByClassName("test2");
let tiltMove = (x, y) => `perspective(500px) scale(1) rotateX(${x}deg) rotateY(${y}deg)`
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mousemove", tiltHandler);
    elements[i].addEventListener("mouseout", () => elements[i].style.transform = tiltMove(0, 0));
}
function tiltHandler(e) {
        let height = this.clientHeight
        let width = this.clientWidth
        let x = e.layerX
        let y = e.layerY
        let multiplier = 20
        let xRotate = multiplier * ((y - height / 2) / height)
        let yRotate = -multiplier * ((x - width / 2) / width)
        this.style.transform = tiltMove(xRotate, yRotate)
}