$('#WishDescModal').on('show.bs.modal', function (e) {
    var btn = $(e.relatedTarget);
    var modal = $("#WishDescModal");
    var title = $("#WishDescModalTitle");
    title.html(btn.data('name'));

    var link_box = $(modal.find(".links"));
    var links = btn.data('links').split(';');
    var link_rows = "";
    for (var i in links){
        link_rows += "<a href='" + links[i] + "'><span class='mdi mdi-link-variant'></span> Открыть ссылку</a>"
    }
    link_box.html(link_rows);

    var desc_info = $(modal.find(".desc"));
    desc_info.html(btn.data("desc"));

    if (btn.data("cost")) {
        var cost_box = $(modal.find(".cost"));
        cost_box.html("<b>Бюджет:</b> " + btn.data("cost") + " ₽")
    }

});