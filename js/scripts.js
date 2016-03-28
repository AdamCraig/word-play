$(document).ready(function() {
  $("#word-play form").submit(function(event) {

    var sentenceInput = $("#sentence").val().split(" ");
    var fragments = [];

        sentenceInput.forEach(function(fragment){
      if (fragment.length >= 3) {
        fragments.push(fragment);
      }
    });

    console.log(fragments);

    $("#output").text(fragments.reverse().join(" "));

    event.preventDefault();
  });
});
