(function () {
  "use strict";

  const handleClick = (ev) => {
    window.Navigate("puzzle", ev.target.alt);
    window.Puzzle.render(ev.target.alt);
  };

  //

  const List = {};

  List.render = () => {
    const images = window.Config.images;

    for (let i in images) {
      const img = document.createElement("img");
      img.src = images[i] + window.Config.crop;
      img.alt = i;

      img.addEventListener("click", handleClick);

      window.Element.list.append(img);
    }
  };

  window.List = List;
})();
