// /*global $*/
// // var aboutOn,skillsOn,contactsOn,resumeOn = false;
$('#skillblock').hide();
var b = $('#infoblock').html();
var s = $('#skillblock').html();
$('#steplang_1, #steplang_2').hide();
$('ul').on("mouseenter", function() {
    $('#steplang_1, #steplang_2').show();
})




$('ul').on("mouseleave", function() {
    $('#steplang_1, #steplang_2').hide();
})
$('#menu>a').on("mouseenter", function() {
    if ($(this).attr("clicked") != 'true') {
        $(this).css("border-color", "white");
    }
})
$('#menu>a').on("mouseleave", function() {
    if ($(this).attr("clicked") != 'true') {
        $(this).css("border-color", "transparent");
    }
})
$('#menu>a').on("click", function() {
    $('#menu>a').css("border-color", "transparent").attr("clicked", "false");
    $(this).attr("clicked", 'true');
    $(this).css("border-color", "darksalmon");

})


$('#skills').on("click", function() {
    $('#infoblock').html(s);
    function progressNow(bar, currentSkill) {
        var time = 100;
        bar.each(function(i, e) {
            var self = this;
            setTimeout(function() {
                $(self).css("background-color", "black");
            }, time);
            currentSkill--;
            time += 100;
            if (currentSkill == 0) {
                blinkOne(self);
                return false;
            }
        })
    }
    progressNow($('#pbars td'), 4);
})



function blinkOne(bar) {
    for (var times = 400; times < 4000; times += 400) {
        var trigger = 2;
        setTimeout(function() {
            if (trigger % 2 != 0) {
                $(bar).css("background-color", "white")
                console.log("timer");
            }
            else {
                console.log("else");
                $(bar).css("background-color", "black");
            }
            trigger++;
        }, times);
    }
}



$('#contacts').on("click", function() {
    $('#infoblock').html("<p>тут будуть контакти<p/>")
})
$('#resume').on("click", function() {
    $('#infoblock').html("<p>Тут буде реюзме<p/>")
})
$('#about').on("click", function() {
    $('#infoblock').html(b)
})




var bars = $('#pbars td');

function aF() {
    bars.each(function(i, e) {
        console.log('sd')
        $(this).css("background-color", "black");
        currentSkill--;
        if (currentSkill == 0) {
            return false;
        }
    })
}