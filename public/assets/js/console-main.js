var wind = $(window);
var sticky = $('.header-wrap');

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var footer_top = $("footer").offset().top;
    var div_height = $("#sidebar").height();

    if (window_top + div_height > footer_top) {
    
        $('#sidebar').removeClass('stick');   
        $('#sidebar').addClass('absolute');
    } 
    else {
        $('#sidebar').removeClass('absolute');
        $('#sidebar').addClass('stick');
    } 
}

$(function () {
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.addClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
        sticky_relocate();
    });
    $('select').niceSelect();
    sticky_relocate();
});


