const nav = document.getElementById("sidenavbar0")
fetch("/Test/01navbar/side/sideweb.html")
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, "text/html")
  }).then(() => {
    let burger0 = document.getElementById("burger0");
    burger0.addEventListener("click", clickHandler);
    function clickHandler() {
      let sidenavbar0 = document.getElementById("sidenavbar0");
      let content0 = document.getElementById("content0");
      let x = document.getElementById("sidenavbar0").offsetWidth;
      let sidenavbar1 = document.getElementById("sidenavbar1");
      if (x==0) {
        sidenavbar0.style = "";
        content0.style = "";
        sidenavbar1.style = "";
      }
      else {
        sidenavbar0.style = "width: 0; min-width: 0;";
        content0.style = "width: 100%; max-width: 100%;";
        sidenavbar1.style = "opacity: 0;";
      }
    }
  });
