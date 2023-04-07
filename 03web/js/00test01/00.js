
/*
let elements = document.getElementsByClassName("art4");
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", clickHandler);
}
function clickHandler() {
    let tmp1 = document.getElementsByClassName("art3");
    if (tmp1.length === 0 && !this.classList.contains("art3")) {
        this.classList.add("art3");
        this.classList.remove("art4");
    }
    else {
        this.classList.remove("art3");
        this.classList.add("art4");
    }
}
*/

/*
let elements2 = document.getElementsByClassName("ele");
let tiltMove = (x, y) => `perspective(500px) scale(1) rotateX(${x}deg) rotateY(${y}deg)`
for (let i2 = 0; i2 < elements2.length; i2++) {
    elements2[i2].addEventListener("mousemove", tiltHandler);
    if (!elements2[i2].classList.contains("mirror")) {
        elements2[i2].addEventListener("mouseout", () => elements2[i2].style.transform = tiltMove(0, 0));
    }
    function tiltHandler(e) {
        let tmp2 = document.getElementsByClassName("art3");
        if (tmp2.length === 0 && !this.classList.contains("art3") && !this.classList.contains("mirror")) {
            let height = this.clientHeight
            let width = this.clientWidth
            let x = e.eleX
            let y = e.eleY
            // let multiplier = 20
            let rotate = this.getAttribute("rotate")
            let xRotate = rotate * ((y - height / 2) / height)
            let yRotate = -rotate * ((x - width / 2) / width)
            this.style.transform = tiltMove(xRotate, yRotate)
        }
    }
}
*/


let MM = document.getElementsByClassName("art4")
let effects = document => {

    let eles = document.getElementsByClassName("ele")
    for (let ele of eles) {

        document.addEventListener("mousemove", MMHandler);

        function MMHandler(e) {

            let { width , height } =  document.getBoundingClientRect();
            let offX = e.layerX - (width / 2);
            let offY = e.layerY - (height / 2);

            if (!ele.classList.contains("mirror") || !ele.classList.contains("shadow")) {
                let speed = ele.getAttribute("speed")
                let x = (offX * -speed) / 100;
                let y = (offY * -speed) / 100;
                let rotate = ele.getAttribute("rotate")
                let x2 = rotate * (offY / 600);
                let y2 = -rotate * (offX / 600);
                ele.style.transform = `translateX(${x}px) translateY(${y}px) perspective(800px) rotateX(${x2}deg) rotateY(${y2}deg)`
            }

            if (ele.classList.contains("mirror") || ele.classList.contains("shadow")) {
                let speed = ele.getAttribute("speed")
                let x = (offX * -speed) / 100;
                let y = (offY * -speed) / 100;
                let rotate = ele.getAttribute("rotate")
                let x2 = -rotate * (offX / 600) - 45;
                let y2 = rotate * (offY / 600);
                updateProperies (x,y,x2,y2)
            }
        }

        let updateProperies = (x,y,x2,y2) => {
            ele.style.transform = `scaleY(-1) scale(1.1) translateX(${x}px) translateY(${y}px) perspective(400px) rotateX(${x2}deg) rotateY(${y2}deg)`
        }


        document.addEventListener("mouseout", e => {
            if (!ele.classList.contains("mirror") || !ele.classList.contains("shadow")) {
                ele.style.transform = `translateX(${0}px) translateY(${0}px) perspective(800px) rotateX(${0}deg) rotateY(${0}deg`
            }

            if (ele.classList.contains("mirror") || ele.classList.contains("shadow")) {
                ele.style.transform = `scaleY(-1) scale(1.1) translateX(${0}px) translateY(${0}px) perspective(400px) rotateX(${-45}deg) rotateY(${0}deg`
            }

        });

    }

}
for (let art4 of document.getElementsByClassName("art4")) {
    effects(art4);
}


/*
const card = document.querySelector('.card');
const reflection = document.querySelector('.reflection');
const reflectionCard = reflection.querySelector('.card');

const rotateClass = 'rotate'; // demo
const updateProperies = (ratioX,ratioY) => {
	card.style.setProperty('--ratio-x', ratioX);
	card.style.setProperty('--ratio-y', ratioY);
	reflection.style.setProperty('--ratio-x', ratioX);
	reflection.style.setProperty('--ratio-y', ratioY);
	reflectionCard.style.setProperty('--ratio-x', ratioX);
	reflectionCard.style.setProperty('--ratio-y', ratioY);
} 
const updatePointerPosition = ({ x, y }) => {
	card.classList.remove(rotateClass);
	reflectionCard.classList.remove(rotateClass)
	const rect = card.getBoundingClientRect();
	const hw = rect.width / 2;
	const hh = rect.height / 2;
	const ratioX = (x - (rect.x + hw)) / hw;
	const ratioY = (y - (rect.y + hh)) / hh;
	updateProperies(ratioX, ratioY);
};

card.addEventListener('pointermove', updatePointerPosition);

card.addEventListener('pointerleave', () => updateProperies(0,0));
*/

var testboxes = document.getElementsByClassName("art4");
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
repositionElement(600, 10, testboxes[0]);
repositionElement(1100, 10, testboxes[1]);
repositionElement(1600, 10, testboxes[2]);