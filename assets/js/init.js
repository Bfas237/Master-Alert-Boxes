/**
 * WP Master Alert Boxes
 *
 * All blocks related JavaScript files should be imported here.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */
 

;(function($){
    var tt = $(".tip-title"), // register placeholder
        tp = tt.attr("placeholder"); // get placeholder value

    /* when focus is set to the element - placeholder disappears */
    tt.on("focus", function() {
        $(this).attr("placeholder", "")
    }),
    /* when element loses focus if there is no text - set placeholder again */
    tt.on("focusout", function() {
        $(this).text().trim().length || $(this).attr("placeholder", tp)
    })



    var tc = $(".tip-content"), // register placeholder
        tpc = tc.attr("placeholder"); // get placeholder value

    /* when focus is set to the element - placeholder disappears */
    tc.on("focus", function() {
        $(this).attr("placeholder", "")
    }),
    /* when element loses focus if there is no text - set placeholder again */
    tc.on("focusout", function() {
        $(this).text().trim().length || $(this).attr("placeholder", tpc)
    })





    var wt = $(".warning-title"), // register placeholder
        wpt = wt.attr("placeholder"); // get placeholder value

    /* when focus is set to the element - placeholder disappears */
    wt.on("focus", function() {
        $(this).attr("placeholder", "")
    }),
    /* when element loses focus if there is no text - set placeholder again */
    wt.on("focusout", function() {
        $(this).text().trim().length || $(this).attr("placeholder", wpt)
    })



    var wc = $(".warning-content"), // register placeholder
        wpc = wc.attr("placeholder"); // get placeholder value

    /* when focus is set to the element - placeholder disappears */
    wc.on("focus", function() {
        $(this).attr("placeholder", "")
    }),
    /* when element loses focus if there is no text - set placeholder again */
    wc.on("focusout", function() {
        $(this).text().trim().length || $(this).attr("placeholder", wpc)
    })

})(jQuery);
