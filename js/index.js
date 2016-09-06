/*global $*/
var click = false;
$('#steplang_1, #steplang_2').hide();
$('ul').on("mouseenter", function () {
    $('#steplang_1, #steplang_2').show();
})
$('ul').on("mouseleave", function () {
    $('#steplang_1, #steplang_2').hide();
})
$('#menu>a').on("mouseenter", function () {
    $(this).css("border-style", "dotted").css("border-width", "1px").css("border-color", "white");
})
$('#menu>a').on("mouseleave", function () {
    if (click == false) {
        $(this).css("border-style", "none");
    }
})
$('#menu>a').on("click", function () {
    $(this).css("border-style", "dotted").css("border-width", "1px").css("border-color", "white");
    click = true;
})
$('#skills').on("click", function () {
    $('#infoblock').html("<p>My skills are avesome<p/>")
})
$('#contacts').on("click", function () {
    $('#infoblock').html("<p>On earch<p/>")
})
$('#resume').on("click", function () {
    $('#infoblock').html("<p>Try to google it<p/>")
})
$('#about').on("click", function () {
    $('#infoblock').html('<img id ="me" src="img/myphotonorm.png">')
})
