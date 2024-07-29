$(document).ready(function () {
    var maxCharacters = 50;

    $("#input").on("input", function () {
        var count = $(this).val().length;
        var remaining = maxCharacters - count;

        if (count >= maxCharacters) {
            alert("You reached the maximum character count");
        } else {
            $("#count").text("Text In Input: " + count);
            $("#remaining").text("Remaining count: " + remaining);
        }
    });
});
