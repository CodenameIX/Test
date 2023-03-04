const tiltEls = document.querySelectorAll(".test2")
const tiltMove = (x, y) => `perspective(500px) scale(1) rotateX(${x}deg) rotateY(${y}deg)`
tiltEls.forEach(tilt => {
    const height = tilt.clientHeight
    const width = tilt.clientWidth
    tilt.addEventListener("mousemove", (e) => {
        const x = e.layerX
        const y = e.layerY
        const multiplier = 20
        const xRotate = multiplier * ((y - height / 2) / height)
        const yRotate = -multiplier * ((x - width / 2) / width)
        tilt.style.transform = tiltMove(xRotate, yRotate)
    })
    tilt.addEventListener("mouseout", () => tilt.style.transform = tiltMove(0, 0))
})
