(function ($) {
    $("<div id='commentsEverywhereWrapper'><p class='mainHeader'>Comments Everywhere</p></div>").appendTo("body");

    $.get(chrome.extension.getURL("html/widget.html"), function (data) {
        $("#commentsEverywhereWrapper").append(data);
    });
})(jQuery);