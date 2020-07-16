$(document).ready(function() {
    var button = $(".nav-icon");
    var navList = $(".list");
    var link = $(".list-item");

    button.click(function() {
        
        navList.toggleClass("nav-active");
        link.each( function(index, element) {
            $(element).fadeIn().animate({
                opacity: 1
            }, 1);
        });
    });


    
});