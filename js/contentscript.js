(function ($) {
    window.fbWidgetVisible = false;
    $("<div id='commentsEverywhereWidget'><p class='widgetHeader'>Comments Everywhere</p></div>").appendTo("body");

    $("#commentsEverywhereWidget .widgetHeader").click(function () {
        if (window.fbWidgetVisible === false) {
            if ($("#commentsEverywhereWrapper .fb_iframe_widget").length === 0) {
                $.get(chrome.extension.getURL("html/widget.html"), function (data) {
                    $("<div id='commentsEverywhereWrapper'><p class='mainHeader'>Comments Everywhere</p></div>").appendTo("body");
                    $("#commentsEverywhereWrapper").append(data).find(".commentsFbTag").attr("href", document.location.href);
                    $("<script type='text/javascript' src='" + chrome.extension.getURL("js/facebookCode.js") + "'></script>").appendTo("body");
                    $("#commentsEverywhereWrapper").show();
                });
            } else {
                $("#commentsEverywhereWrapper").show();
            }
            window.fbWidgetVisible = true;
        } else {
            window.fbWidgetVisible = false;
            $("#commentsEverywhereWrapper").hide();
        }
    });
})(jQuery);