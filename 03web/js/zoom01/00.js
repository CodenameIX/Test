var elements = document.getElementsByClassName("test2");
var myFunction = function () {
    var elements = document.getElementsByClassName("test3");
    for (var i2 = 0; i2 < elements.length; i2++) {
        elements[i2].classList.add("test2");
        elements[i2].classList.remove("test3");
    };
    if (i2 < 1) {
        this.classList.add("test3");
        this.classList.remove("test2");
    };
};
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction);
};
