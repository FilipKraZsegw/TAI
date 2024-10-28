$(document).ready(function() {
    $(".obraz").on({
        "mouseover": function() {
            $(this).css({
                'transform': 'scale(1.5)',
                'z-index': 2
            });
            $(this).next(".opis").fadeIn(300);
        },
        "mouseout": function() {
            $(this).css({
                'transform': 'scale(1)',
                'z-index': 1 
            });
            $(this).next(".opis").fadeOut(300);
        }
    });
});