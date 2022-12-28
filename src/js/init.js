(function () { 'use strict';

  const init = () => {
    window.List.render()
    document.removeEventListener( 'DOMContentLoaded', init )
  }

  document.addEventListener( 'DOMContentLoaded', init )
})();
