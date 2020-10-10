
/* Background animation */
$(function() {

    var images = ['image/background1.jpg','image/background2.jpg','image/background3.jpg']
        i = 1;
        bgslider = $('#bgslider');



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

$(document).ready(function(){
    $("#navbar").sticky({topSpacing:0});
});

/*  Animation historique */

$(function() {

    if (typeof jQuery != 'undefined'){
        console.log(typeof jQuery);
    }

    function isScrolledIntoView(elem)
    {
        var docViewTop = $(window).scrollTop();

        var docViewBottom = docViewTop + $(window).height()/2;


        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

       return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $('.bloc').each(function() { $(this).hide() });

    $(window).scroll(function() {
        $('.ancre').each(function() {

            if ( isScrolledIntoView( $(this) ) ) {

                let el = $(this).children(" :first ");

                if ( el.hasClass('is-right') ) {
                    el.show('slide', {direction: 'left'}, 1000);
                }

                if ( el.hasClass('is-left') ) {
                    el.show('slide', {direction: 'right'}, 1000);
                }

            }
        })
    })
})
