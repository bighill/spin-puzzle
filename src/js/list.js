/*
|
|
| List
|
|
*/
(function () { 'use strict';

  /*
  |
  | handle click
  |
  */
  const _handleClick = (ev) => {
    window.Navigate('puzzle', ev.target.alt);
    window.Puzzle.render(ev.target.alt);
  };

  // // //

  /*
  |
  | list
  |
  */
  const List = {};

  /*
  |
  | render list
  |
  */
  List.render = () => {
    const images = window.Config.images;

    for (let i in images) {
      const img = document.createElement('img');
      img.src   = images[i] + window.Config.crop;
      img.alt   = i;

      img.classList.add( 'clickable' )
      img.addEventListener( 'click', _handleClick );

      window.Config.el.list.append(img);
    }
  };

  window.List = List;
})();
