document.getElementById("test1").onmousemove = e => {
    for (const topcard1 of document.getElementsByClassName("test2")) {
        const rect = topcard1.getBoundingClientRect();
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;

        topcard1.style.setProperty("--mouse-x", `${x}px`);
        topcard1.style.setProperty("--mouse-y", `${y}px`);
    };
}