var wind = $(window);
// var sticky = $('.header-wrap');

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var footer_top = $("footer").offset().top;
    var div_height = $("#sidebar").height();
    if (window_top + div_height + 130 > footer_top) {
        // $('#sidebar').removeClass('stick');
        $('#sidebar').css({top: 130  + (window_top + div_height + 130 - footer_top) * -1})
    } 
    else {
        $('#sidebar').css({top:130});
        // $('#sidebar').addClass('stick');
    } 
}

$(function () {
    wind.on('scroll', function() {
        // var scroll = wind.scrollTop();
        // if (scroll < 100) {
        //     sticky.addClass('sticky');
        // } else {
        //     sticky.addClass('sticky');
        // }
        sticky_relocate();
    });
    $('select').niceSelect();
});


