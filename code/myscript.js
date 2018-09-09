// Adam's Newspaper assignment script file

// Listen for hover on articles, move up a couple of pixels and add drop-shadow

// Listen for click on articles and make hero the clicked article

window.onload = function () {

var hero = document.getElementById('hero-image');

  function changeHero(e) {
    var target = e.target;
    for (var i = 1; i < 10; i++) {
      if (target.dataset.articleNr == i) {
        hero.src = "./images/" + i +".png";
      }
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
}
