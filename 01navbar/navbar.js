const navbar = document.getElementById("topnavbar0");
fetch("/Test/01navbar/navbar.html")
    .then(res => res.text())
    .then(data => {
        navbar.innerHTML = data;
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
    }).then(() => {
        document.getElementById("topnavbar1").onmousemove = e => {
            for (const topcard1 of document.getElementsByClassName("topcard1")) {
                const rect = topcard1.getBoundingClientRect();
                x = e.clientX - rect.left;
                y = e.clientY - rect.top;

                topcard1.style.setProperty("--mouse-x", `${x}px`);
                topcard1.style.setProperty("--mouse-y", `${y}px`);
            };
        } 
        let TBactivePage = window.location.pathname;
        let TBcards = document.getElementsByClassName("topnavbarlink");
        let TBlength = 12
        for (let i = 0; i < TBcards.length; i++) {
          if (TBcards[i].attributes.href.value.substring(0, TBlength) == TBactivePage.substring(0, TBlength)) {
            TBcards[i].classList.add("TBactive");
          }
        }
    });


