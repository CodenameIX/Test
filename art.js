var elements = document.getElementsByClassName("art2");
var myFunction = function () {
    var elements = document.getElementsByClassName("art3");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("art2")
        elements[i].classList.remove("art3")("art3") //wtf?
    }
    this.classList.add("art3")
    this.classList.remove("art2")
};
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction);
}

const tiltEls = document.querySelectorAll('.art2')
const tiltMove = (x, y) => `perspective(500px) scale(1) rotateX(${x}deg) rotateY(${y}deg)`
tiltEls.forEach(tilt => {
    const height = tilt.clientHeight
    const width = tilt.clientWidth
    tilt.addEventListener('mousemove', (e) => {
        const x = e.layerX
        const y = e.layerY
        const multiplier = 20
        const xRotate = multiplier * ((y - height / 2) / height)
        const yRotate = -multiplier * ((x - width / 2) / width)
        tilt.style.transform = tiltMove(xRotate, yRotate)
    })
    tilt.addEventListener('mouseout', () => tilt.style.transform = tiltMove(0, 0))
})