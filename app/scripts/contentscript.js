'use strict';

var hasOpenCases = false;
window.setInterval(function () {
    if ($('.tab_closer').length > 0 && !hasOpenCases){
        hasOpenCases = true;
        window.setTimeout(function(){
            hasOpenCases = false;
            $('.tab_closer').each(function(){ $(this).click() });
        }, 60*1000);
    }
}, 10*1000);