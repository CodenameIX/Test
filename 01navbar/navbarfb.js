const navbar = document.querySelector('.topnavbar0');
fetch('/Test/01navbar/navbar.html')
    .then(res => res.text())
    .then(data => {
        navbar.innerHTML = data;
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
    });

