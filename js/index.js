// /*global $*/
// // var aboutOn,skillsOn,contactsOn,resumeOn = false;
$('#skillblock').hide();
var b = $('#infoblock').html();
var s = $('#skillblock').html();
$('#steplang_1, #steplang_2').hide();
$('ul').on("mouseenter", function () {
    $('#steplang_1, #steplang_2').show();
})




$('ul').on("mouseleave", function () {
    $('#steplang_1, #steplang_2').hide();
})
$('#menu>a').on("mouseenter", function () {
    if ($(this).attr("clicked") !='true') {
    $(this).css("border-color", "white");}
})
$('#menu>a').on("mouseleave", function () {
    if ($(this).attr("clicked") !='true') {
        $(this).css("border-color", "transparent");
    }
})
$('#menu>a').on("click", function () {
    $('#menu>a').css("border-color", "transparent").attr("clicked","false");
    $(this).attr("clicked",'true');
    $(this).css("border-color", "darksalmon");
    
})
$('#skills').on("click", function () {
    // $('#infoblock').html("<p>My skills are avesome<p/>")
     $('#infoblock').html(s)
})
$('#contacts').on("click", function () {
    $('#infoblock').html("<p>тут будуть контакти<p/>")
})
$('#resume').on("click", function () {
    $('#infoblock').html("<p>Тут буде реюзме<p/>")
})
$('#about').on("click", function () {
    $('#infoblock').html(b)
})
