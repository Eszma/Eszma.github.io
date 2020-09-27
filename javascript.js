const scrollTime = 500; //millisecundum (ms)
const scrollOffset = 20; //ennyi pixellel följebb megáll a görgetés

function closeMenuOnMobile() {
    let menu = $("nav ul");
    if ( menu.hasClass("active") ) {
        menu.removeClass("active");
        menu.slideUp();
    }
}

$("#nav-intro").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#intro").offset().top - scrollOffset
    }, scrollTime);
    closeMenuOnMobile();
});

$("#nav-about").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top - scrollOffset
    }, scrollTime);
    closeMenuOnMobile();
});

$("#burger").click(function() {
    let menu = $("nav ul");
    if ( menu.hasClass("active") ) {
        menu.removeClass("active");
        menu.slideUp();
    } else {
        menu.addClass("active");
        menu.slideDown();
    }
});

/*$("#burger").click(function() {
    $("nav ul").toggle();
});*/