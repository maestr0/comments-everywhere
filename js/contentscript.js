(function ($) {
    $("<div id='commentsEverywhereWrapper'><p class='mainHeader'>Comments Everywhere</p></div>").appendTo("body");

    $.get(chrome.extension.getURL("html/widget.html"), function (data) {
        $("#commentsEverywhereWrapper").append(data).find(".commentsFbTag").attr("href",document.location.href);
        $("<script type='text/javascript' src='" + chrome.extension.getURL("js/facebookCode.js") + "'></script>").appendTo("body");
    });


})(jQuery);