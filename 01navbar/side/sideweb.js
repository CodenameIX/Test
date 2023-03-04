const nav = document.querySelector('.sidenavbar0')
fetch('/Test/01navbar/side/sideweb.html')
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
  })