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
