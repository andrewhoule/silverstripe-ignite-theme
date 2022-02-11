const HandleSSImg = () => {
  const captionClass = "captionImage";
  const colClass = "template-content";
  const centerClass = "centered";
  const imgBuffer = 250;

  const col = document.querySelector(`.${colClass}`);

  function styleImg(el) {
    if (el) {
      let elWidth = el.offsetWidth;
      let imgs = col.querySelectorAll("img");

      if (imgs) {
        imgs.forEach(function(img) {
          if (img.offsetWidth + imgBuffer >= elWidth) {
            img.classList.add(`${centerClass}`);
            if (img.parentNode.classList.contains(`${captionClass}`)) {
              img.parentNode.classList.add(`${centerClass}`);
            }
          } else {
            img.classList.remove(`${centerClass}`);
            if (img.parentNode.classList.contains(`${captionClass}`)) {
              img.parentNode.classList.remove(`${centerClass}`);
            }
          }
        });
      }
    }
  }

  styleImg(col);
  window.onresize = function() {
    styleImg(col);
  };
};

export { HandleSSImg };
