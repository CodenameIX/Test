let elements = document.getElementsByClassName("art2");
let tiltMove = (x, y) => `perspective(500px) scale(1) rotateX(${x}deg) rotateY(${y}deg)`
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", clickHandler);
    elements[i].addEventListener("mousemove", tiltHandler);
    elements[i].addEventListener("mouseout", () => elements[i].style.transform = tiltMove(0, 0));
}
function clickHandler() {
    let tmp1 = document.getElementsByClassName("art3");
    if (tmp1.length === 0 && !this.classList.contains("art3")) {
        this.classList.add("art3");
        this.classList.remove("art2");
        this.style.transform = tiltMove(0, 0)
    }
    else {
        this.classList.remove("art3");
        this.classList.add("art2");
    }
}
function tiltHandler(e) {
    let tmp2 = document.getElementsByClassName("art3");
    if (tmp2.length === 0 && !this.classList.contains("art3")) {
        let height = this.clientHeight
        let width = this.clientWidth
        let x = e.layerX
        let y = e.layerY
        let multiplier = 20
        let xRotate = multiplier * ((y - height / 2) / height)
        let yRotate = -multiplier * ((x - width / 2) / width)
        this.style.transform = tiltMove(xRotate, yRotate)
    }
}
