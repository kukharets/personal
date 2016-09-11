// /*global $*/
// // var aboutOn,skillsOn,contactsOn,resumeOn = false;
$('#skillblock').hide();
// $('#contactsblock').hide();
$('.show1').hide();
$('.show2').hide();
$('.show3').hide();
$('.show0').hide();
$('.show4').hide();
var b = $('#infoblock').html();
var s = $('#skillblock').html();
var c = $('#contactsblock').html();
var r = $('#resumeIn').html();
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
    
    progressNow($('#jsbars td'), 4);
    progressNow($('#htmlbars td'), 3);
    progressNow($('#cssbars td'), 2);
    progressNow($('#javabars td'), 4);
    progressNow($('#linuxbars td'), 3);
    
    showOptions();
})
$('#contacts').on("click", function() {
    
    $('#infoblock').html(c);
    $('#infoblock').attr("text-align", "left");
    $('#contactsblock').attr("visibility", "visible");
})
$('#resume').on("click", function() {
    $('#infoblock').html(r);
    $('#resumeIn').attr("visibility", "visible");
})
function showOptions(){
    
        setTimeout(function(){
            console.log('set');
            $('.show0').show();
        },600)
        setTimeout(function(){
            console.log('set');
            $('.show1').show();
        },1200)
        setTimeout(function(){
            console.log('set');
            $('.show2').show();
        },1800)
        setTimeout(function(){
            console.log('set');
            $('.show3').show();
        },2400)
        setTimeout(function(){
            console.log('set');
            $('.show4').show();
        },3000)
    }













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
function blinkOne(bar) {
    for (var times = 400; times < 4000; times += 400) {
        var trigger = 2;
        setTimeout(function() {
            if (trigger % 2 != 0) {
                $(bar).css("background-color", "white")
             }
            else {
                $(bar).css("background-color", "black");
            }
            trigger++;
        }, times);
    }
}





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