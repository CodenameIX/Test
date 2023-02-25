const navbar = document.querySelector('.topnavbar0')
fetch('navbar/navbar.html')
    .then(res => res.text())
    .then(data => {
        navbar.innerHTML = data
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
    })

setTimeout(() => {
    document.getElementById("topnavbar1").onmousemove = e => {
        for (const topcard1 of document.getElementsByClassName("topcard1")) {
            const rect = topcard1.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

            topcard1.style.setProperty("--mouse-x", `${x}px`);
            topcard1.style.setProperty("--mouse-y", `${y}px`);
        };
    }
}, 200);
