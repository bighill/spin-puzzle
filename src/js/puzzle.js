(function(){ 'use strict';

  const Puzzle = {}

  Puzzle.render = (alt) => {
    const img = document.createElement( 'img' )
    const imgUrl = window.Config.images[alt] + window.Config.crop
    img.src = imgUrl
    window.Element.puzzle.append(img)
  }

  window.Puzzle = Puzzle
})();


