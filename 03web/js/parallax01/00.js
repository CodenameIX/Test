document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".parallax-wrap span").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 40;
    const y = (window.innerHeight - event.pageY * position + 400) / 40 + 200;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}