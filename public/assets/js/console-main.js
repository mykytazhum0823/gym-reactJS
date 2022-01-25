var wind = $(window);
// var sticky = $('.header-wrap');
let topH = 130;
if( wind.innerWidth() < 992)
{
    topH = 75;
}
else{
    topH = 130;
}
sticky_relocate();

function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var footer_top = $("footer").offset().top;
    var div_height = $("#sidebar").height();
   
    if (window_top + div_height + topH > footer_top) {
        // $('#sidebar').removeClass('stick');
        $('#sidebar').css({top: topH  + (window_top + div_height + topH - footer_top) * -1})
    } 
    else {
        $('#sidebar').css({top:topH});
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
    wind.on('resize', ()=>{
        
        sticky_relocate();
    });
    $('select').niceSelect();
    
});


