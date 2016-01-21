$(document).ready(function() {
  $("form").submit(function(event) {
    var messageInput =$("input#primeSifting").val();
    var result = pigLatinSentence(messageInput);
    $("#result").text(result);
    $("#result").show();
    event.preventDefault();
  });
});

p
