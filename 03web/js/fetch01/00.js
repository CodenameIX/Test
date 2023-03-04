const nav = document.querySelector('.content0')
fetch('01.html')
  .then(res => res.text())
  .then(data => {
    nav.innerHTML = data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
  })