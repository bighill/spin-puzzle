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
