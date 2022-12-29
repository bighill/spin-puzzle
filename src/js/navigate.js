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
