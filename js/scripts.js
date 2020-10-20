$(document).ready(function() {
  $(".clickable-walrus").click(function() {
    $(".walrus-showing").fadeToggle();
    $(".walrus-hidden").fadeToggle();
  });
  $(".clickable-giraffe").click(function() {
    $(".wiki-page").slideToggle();
  });
  $(".click-cheetah").click(function() {
    $(".cheetah-hide").slideToggle();
  });
});