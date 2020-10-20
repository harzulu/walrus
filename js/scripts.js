$(document).ready(function() {
  $(".clickable-walrus").click(function() {
    $(".walrus-showing").fadeToggle();
    $(".walrus-hidden").fadeToggle();
    $(".wiki-page").slideToggle();
  });
});