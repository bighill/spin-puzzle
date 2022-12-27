(function(){ 'use strict';

  
  const handleClick = (ev) => 
  {
    navigateTo('puzzle', ev.target.alt)
    window.Puzzle.render(ev.target.alt)
  }

  const navigateTo = (page, alt = '') => 
  {
    switch( page ) {

      case 'list':
        window.Element.list.classList    = 'show'
        window.Element.puzzle.classList  = 'hide'
        break;

      case 'puzzle':
        window.Element.list.classList    = 'hide'
        window.Element.puzzle.classList  = 'show'
        break;
    }
  }

  //

  const List = {}

  List.render = () => 
  {
    const images = window.Config.images

    for (let i in images)
    {
      const img = document.createElement( 'img' )
      img.src   = images[i] + window.Config.crop
      img.alt   = i

      img.addEventListener( 'click', handleClick )

      window.Element.list.append(img)
    }
  }

  window.List = List
})();

