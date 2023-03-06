const elements = document.getElementsByClassName('test2');
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', clickEventHandler);
}
function clickEventHandler() {
    const tmpElements = document.getElementsByClassName("test3");
    if (tmpElements.length === 0 && !this.classList.contains("test3")) {
        this.classList.add('test3');
        this.classList.remove('test2');
    }
    else {
        this.classList.remove('test3');
        this.classList.add('test2');
    }
}