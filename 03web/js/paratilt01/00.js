let applyParallax = section => {

  section.addEventListener('mousemove', e => {

    let { width, height } = section.getBoundingClientRect();
    let offX = e.pageX - (width / 2);
    let offY = e.pageY - (height / 2);

    for (let layer of document.querySelectorAll('.img')) {
      let speed = layer.getAttribute('speed')
      let x = (offX * -speed) / 100;
      let y = (offY * -speed) / 100;
      let rotate = layer.getAttribute('rotate')
      let x2 = -rotate * (offY / 600);
      let y2 = rotate * (offX / 600);
      layer.style.transform = `translateX(${x}px) translateY(${y}px) perspective(800px) rotateX(${x2}deg) rotateY(${y2}deg)`
    }

  });
};
applyParallax(document.querySelector('section'));
