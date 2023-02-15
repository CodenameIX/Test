console.log("page1");

document.getElementById("cards").onmousemove = e => {
  for(const card1 of document.getElementsByClassName("card1")) {
    const rect = card1.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card1.style.setProperty("--mouse-x", `${x}px`);
    card1.style.setProperty("--mouse-y", `${y}px`);
  };
}