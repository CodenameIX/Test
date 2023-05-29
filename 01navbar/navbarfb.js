const navbar = document.getElementById("topnavbar0");
fetch("/Test/01navbar/navbar.html")
    .then(res => res.text())
    .then(data => {
        navbar.innerHTML = data;
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
    }).then(() => {
        let TBactivePage = window.location.pathname;
        let TBcards = document.getElementsByClassName("topnavbarlink");
        let TBlength = 12
        for (let i = 0; i < TBcards.length; i++) {
          if (TBcards[i].attributes.href.value.substring(0, TBlength) == TBactivePage.substring(0, TBlength)) {
            TBcards[i].classList.add("TBactive");
          }
        }
    });


