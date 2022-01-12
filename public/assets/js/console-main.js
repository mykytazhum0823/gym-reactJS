var wind = $(window);
var sticky = $('.header-wrap');

var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

function setSidebarHeight(){
    var div_height = $("footer").height();
    $("#sidebar").height($(document).height() - div_height - 130);
}
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var footer_top = $("footer").offset().top;
    var div_top = $('#sticky-anchor').offset().top;
    var div_height = $("#sidebar").height();
    console.log("scroll" + window_top);
    console.log("footer" +footer_top);
    console.log("div" + div_height);
    console.log("sticky" +div_top);
    
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
    setSidebarHeight();
    sticky_relocate();
});


