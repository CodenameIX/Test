let applyParallax = section => {

    section.addEventListener('mousemove', e => {
  
      let { width, height } = section.getBoundingClientRect();
      let offX = e.pageX - (width / 2);
      let offY = e.pageY - (height / 2);
  
      for (let layer of document.querySelectorAll('.test2')) {
        let x = -2 * (offY / 100);
        let y = 2 * (offX / 100);
        layer.style.transform = `perspective(800px) rotateX(${x}deg) rotateY(${y}deg)`
      }
  
    });
  };
  applyParallax(document.querySelector('section'));