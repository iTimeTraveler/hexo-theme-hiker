$(window).scroll(function() {
    $(window).scrollTop() > $(window).height()*0.5 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
});

$("#rocket").click(function() {
    $("#rocket").addClass("launch");
    $("html, body").animate({
        scrollTop: 0
    }, 1000, function() {
        $("#rocket").removeClass("show launch");
    });
    return false;
});

$("#homelogo").click(function() {
    $("html, body").animate({
        scrollTop: $(window).height()
    }, 1000, null);
    return false;
});

var articleW = $('#main>article').css("width");

$("#menu-switch").click(function() {
    if($("#toc-sidebar").hasClass("toc-hide")){
        setTimeout(function () { 
            $("#toc-sidebar").removeClass("toc-hide");
        }, 200);
        $('#main>article').css("width", articleW);
    }else{
        $("#toc-sidebar").addClass("toc-hide");
        setTimeout(function () { 
            $('#main>article').css("width", "100%");
        }, 200);
    }
});