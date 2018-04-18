$(document).ready(function() {
 
  //this makes the wording fade in on       load.
  $(".caption").fadeIn(2500);

  //on click this will make image flip between gray and color
  $(".bgimg-1").click(function() {
    colorChange();
  });
});

//this changes the images
  $(".PressForNew").click(function() {
    newNova();
  });

//turns grayscale off
function colorChange() {
  var done = 0;

  if ($(".bgimg-1").css("filter") == "grayscale(1)") {
    var filterVal = "grayscale(0)";
    $(".bgimg-1").css("filter", filterVal);
    $(".bgimg-1").css("webkitFilter", filterVal);
    done = 1;
  }

  if ($(".bgimg-1").css("filter") == "grayscale(0)") {
    if (done == 0) {
      var filterVal = "grayscale(1)";
      $(".bgimg-1").css("filter", filterVal);
      $(".bgimg-1").css("webkitFilter", filterVal);
    }
  }
}

//Loads image based off current image
function newNova() {
  var image = $(".bgimg-1").css("background-image");
  if (
    image ==
    'url("http://www.gofands.com/images/hero-gray-truck.jpg")'
  ) {
    $(".bgimg-1").css(
      "background-image",
      'url("http://www.gofands.com/images/hero-white-truck-lightson.jpg")'
    );
  }
  if (image == 'url("http://www.gofands.com/images/hero-white-truck-lightson.jpg")') {
    $(".bgimg-1").css(
      "background-image",
      'url("http://www.gofands.com/images/hero-gray-truck.jpg")'
    );
  }
}