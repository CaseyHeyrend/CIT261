$(document).ready(function() {
  $("#winter_controls").on('click', 'span', function() {
    $("#winter img").removeClass("opaque");

    var newImage = $(this).index();

    $("#winter img").eq(newImage).addClass("opaque");

    $("#winter_controls span").removeClass("selected");
    $(this).addClass("selected");
  });
});
