let applyParallax = section => {
  
  section.addEventListener('mousemove', e => {

    let { width, height } = section.getBoundingClientRect();
    let offX = e.pageX - (width / 2);
    let offY = e.pageY - (height / 2);

    for (let layer of document.querySelectorAll('.img')) {
      const speed = layer.getAttribute('data-speed')
      const x = (offX * speed) / 160;
      const y = (offY * speed) / 160;
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    }

  });
  
};
applyParallax(document.querySelector('section'));