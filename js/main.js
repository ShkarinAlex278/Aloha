document.addEventListener("DOMContentLoaded", function() {
  var elem = document.querySelector(".figure-div");
  var flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    contain: true
  });

  // element argument can be a selector string
  //   for an individual element
  var flkty = new Flickity(".figure-div", {
    // options
  });
});
