$(function() {
    var images = ['image/background1.jpg','image/background2.jpg','image/background3.jpg']
        i = 1;
        bgslider = $('#bgslider');

    /* Background animation */

    bgslider.css('background-image','url(' + images[0] + ')');
    setInterval(function (){

        bgslider.fadeOut(200,function() {
            
            $(this).css('background-image', 'url(' + images[i] + ')');
        }).fadeIn(200);
        i++;
        if(i == images.length){
            i = 0;
        }
    },5000);

})