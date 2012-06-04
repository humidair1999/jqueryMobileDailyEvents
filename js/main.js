// $(".carousel").kinetic();

$("#deleteBookmark, #addCategory").live("vclick", function(evt) {
    evt.preventDefault();

    $(this).parent("li").fadeOut(700, function() {
        $(this).remove();
    });
});