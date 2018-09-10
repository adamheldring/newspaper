// Adam's Newspaper assignment script file

// Changes hero image to hovered articles image
// for the sake of touch screens it does the same for clicked images,
// also console-logs what images was clicked.

// Changes opacity of hero in relation to how far the page is scrolled

window.onload = function () {

var hero = document.getElementById('hero-image');
var heroHeight = hero.height;
var scrollPosition;

  function changeHero(e) {
    var target = e.target;
    for (var i = 1; i < 10; i++) {
      if (target.dataset.articleNr == i) {
        hero.src = "./images/" + i +".png";

        // Console logs what image was clicked
        if (e.type == "click") {
          console.log("You clicked article nr " + i);
        }
      }
    }
  }

    function transformHero(e) {
      scrollPosition = document.documentElement.scrollTop;
      if (scrollPosition < heroHeight) {
        hero.style.opacity = 1 - (scrollPosition / heroHeight) * 2;
      }
    }

  document.getElementById('article1').addEventListener('click', changeHero);
  document.getElementById('article2').addEventListener('click', changeHero);
  document.getElementById('article3').addEventListener('click', changeHero);
  document.getElementById('article4').addEventListener('click', changeHero);
  document.getElementById('article5').addEventListener('click', changeHero);
  document.getElementById('article6').addEventListener('click', changeHero);
  document.getElementById('article7').addEventListener('click', changeHero);
  document.getElementById('article8').addEventListener('click', changeHero);
  document.getElementById('article9').addEventListener('click', changeHero);

  document.getElementById('article1').addEventListener('mouseover', changeHero);
  document.getElementById('article2').addEventListener('mouseover', changeHero);
  document.getElementById('article3').addEventListener('mouseover', changeHero);
  document.getElementById('article4').addEventListener('mouseover', changeHero);
  document.getElementById('article5').addEventListener('mouseover', changeHero);
  document.getElementById('article6').addEventListener('mouseover', changeHero);
  document.getElementById('article7').addEventListener('mouseover', changeHero);
  document.getElementById('article8').addEventListener('mouseover', changeHero);
  document.getElementById('article9').addEventListener('mouseover', changeHero);

  document.addEventListener('scroll', transformHero)
}
