$(function() {
    var _$a   = $('h3.r').children('a').not('.l');
    var len_a = _$a.length;
    var idx   = -1;
    $(window).on('keydown', function(e) {
        // push tab key
        if (e.keyCode == 9) {
            e.preventDefault();
            if (idx < len_a-1) {
                ++idx;
            } else {
                idx = 0;
            }
            _$a.eq(idx).focus();
        }
    });
});