const nav = document.querySelector('.sidenavbar0')
fetch('/Test/01navbar/side/sidegame.html')
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
  })