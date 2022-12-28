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

  window.Config = Config
})();

(function () { 'use strict';

  const init = () => {
    window.List.render()
    document.removeEventListener( 'DOMContentLoaded', init )
  }

  document.addEventListener( 'DOMContentLoaded', init )
})();

(function () {
  'use strict';

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
      img.src = images[i] + window.Config.crop;
      img.alt = i;
      img.classList.add( 'clickable' )

      img.addEventListener( 'click', _handleClick );

      window.Config.el.list.append(img);
    }
  };

  window.List = List;
})();

(function () { "use strict";

  const Navigate = ( page, alt = "" ) => {
    switch ( page ) {
      case "list":
        window.Config.el.list.classList = "show";
        window.Config.el.puzzle.classList = "hide";
        break;

      case "puzzle":
        window.Config.el.list.classList = "hide";
        window.Config.el.puzzle.classList = "show";
        break;
    }
  };

  window.Navigate = Navigate;
})();

(function () { "use strict";

  const Puzzle = {}

  Puzzle.render = alt => {
    const img     = document.createElement( 'img' )
    const imgUrl  = window.Config.images[alt] + window.Config.crop
    img.src       = imgUrl

    window.Config.el.puzzle.innerHTML = ''
    window.Config.el.puzzle.append( img )
  };

  window.Puzzle = Puzzle
})();
