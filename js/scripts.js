$(document).ready(function() {
  $(".clickable-walrus").click(function() {
    $(".walrus-showing").fadeToggle();
    $(".walrus-hidden").fadeToggle();
  });
  $(".clickable-giraffe").click(function() {
    $(".wiki-page").slideToggle();
  });
  $(".click-cheetah").click(function() {
    $(".cheetah-hide").slideUp();
  });
  $(".open").click(function() {
    $(".cheetah-hide").slideDown();
  });
  $("#dark-button").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-mode");
  });
  $("#light-button").click(function() {
    $("body").removeClass();
    $("body").addClass("light-mode");
  });

});