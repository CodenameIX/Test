var elements = document.getElementsByClassName("art2");
var myFunction = function () {
    var elements = document.getElementsByClassName("art3");
    for (var i2 = 0; i2 < elements.length; i2++) {
        elements[i2].classList.add("art2");
        elements[i2].classList.remove("art3");
    };
    if (i2 < 1) {
        this.classList.add("art3");
        this.classList.remove("art2");
    };
};
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction);
};
