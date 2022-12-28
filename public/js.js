/*
|
|
| Config
|
|
*/
(function(){ 'use strict';

  const Config = {}

  Config.images = {
    mountain  : 'https://images.unsplash.com/photo-1605460516895-bc095b6b66a7',
    desert    : 'https://images.unsplash.com/photo-1671961878559-4a8975418640',
    building  : 'https://images.unsplash.com/photo-1671705449511-06c390d6417f',
    jungle    : 'https://images.unsplash.com/photo-1669166717463-38a78c93412b',
    sunrise   : 'https://images.unsplash.com/photo-1671227498016-93aa927686f8',
  }

  Config.crop = '?fit=crop&w=600&h=600'

  Config.el = {
    list    : document.getElementById( 'list' ),
    puzzle  : document.getElementById( 'puzzle' ),
  }

  Config.rotation = ['0deg', '90deg', '180deg', '270deg']

  window.Config = Config
})();

/*
|
|
| Init
|
|
*/
(function () { 'use strict';

  const Init = () => {
    window.List.render()
    document.removeEventListener( 'DOMContentLoaded', Init )
  }

  document.addEventListener( 'DOMContentLoaded', Init )
})();

/*
|
|
| List
|
|
*/
(function () { 'use strict';

  const _handleClick = (ev) => {
    window.Navigate('puzzle', ev.target.alt);
    window.Puzzle.render(ev.target.alt);
  };

  //

  const List = {};

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

/*
|
|
| Navigate
|
|
*/
(function () { "use strict";

  const Navigate = ( page ) => {

    switch ( page ) {

      case "list":
        window.Config.el.list   .classList = "show";
        window.Config.el.puzzle .classList = "hide";
        break;

      case "puzzle":
        window.Config.el.list   .classList = "hide";
        window.Config.el.puzzle .classList = "show";
        break;
    }
  };

  window.Navigate = Navigate;
})();

/*
|
|
| Puzzle
|
|
*/
(function () { "use strict";

  const ROTATION  = window.Config.rotation
  const PUZZEL_EL = window.Config.el.puzzle

  const _randRotation  = () => Math.floor( Math.random() * ROTATION.length )

  const blockData = [
    { x : 0, y : 0, r : _randRotation() },
    { x : 0, y : 1, r : _randRotation() },
    { x : 0, y : 2, r : _randRotation() },
    { x : 0, y : 3, r : _randRotation() },
    { x : 0, y : 4, r : _randRotation() },
    { x : 0, y : 5, r : _randRotation() },
    { x : 1, y : 0, r : _randRotation() },
    { x : 1, y : 1, r : _randRotation() },
    { x : 1, y : 2, r : _randRotation() },
    { x : 1, y : 3, r : _randRotation() },
    { x : 1, y : 4, r : _randRotation() },
    { x : 1, y : 5, r : _randRotation() },
    { x : 2, y : 0, r : _randRotation() },
    { x : 2, y : 1, r : _randRotation() },
    { x : 2, y : 2, r : _randRotation() },
    { x : 2, y : 3, r : _randRotation() },
    { x : 2, y : 4, r : _randRotation() },
    { x : 2, y : 5, r : _randRotation() },
    { x : 3, y : 0, r : _randRotation() },
    { x : 3, y : 1, r : _randRotation() },
    { x : 3, y : 2, r : _randRotation() },
    { x : 3, y : 3, r : _randRotation() },
    { x : 3, y : 4, r : _randRotation() },
    { x : 3, y : 5, r : _randRotation() },
    { x : 4, y : 0, r : _randRotation() },
    { x : 4, y : 1, r : _randRotation() },
    { x : 4, y : 2, r : _randRotation() },
    { x : 4, y : 3, r : _randRotation() },
    { x : 4, y : 4, r : _randRotation() },
    { x : 4, y : 5, r : _randRotation() },
    { x : 5, y : 0, r : _randRotation() },
    { x : 5, y : 1, r : _randRotation() },
    { x : 5, y : 2, r : _randRotation() },
    { x : 5, y : 3, r : _randRotation() },
    { x : 5, y : 4, r : _randRotation() },
    { x : 5, y : 5, r : _randRotation() },
  ]

  const _makeBlocks = ( data, img ) => data.map( b => {
    const block = document.createElement( 'div' )

    block.classList.add( 'block' )
    block.dataset.r = b.r
    block.dataset.x = b.x
    block.dataset.y = b.y

    block.style['top']                  = `${b.y * 100}px`
    block.style['left']                 = `${b.x * 100}px`
    block.style['transform']            = `rotate( ${ROTATION[b.r]} )`
    block.style['background']           = `url( ${img} )`
    block.style['background-position']  = `top ${b.y * -100}px left ${b.x * -100}px`

    return block
  })

  //

  const Puzzle = {}

  Puzzle.render = alt => {
    const imgUrl  = window.Config.images[alt] + window.Config.crop
    const blocks  = _makeBlocks( blockData, imgUrl )

    blocks.forEach( b => PUZZEL_EL.append( b ) )
  };

  window.Puzzle = Puzzle
})();
