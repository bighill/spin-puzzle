(function () {
  "use strict";

  const Navigate = (page, alt = "") => {
    switch (page) {
      case "list":
        window.Element.list.classList = "show";
        window.Element.puzzle.classList = "hide";
        break;

      case "puzzle":
        window.Element.list.classList = "hide";
        window.Element.puzzle.classList = "show";
        break;
    }
  };

  window.Navigate = Navigate;
})();
