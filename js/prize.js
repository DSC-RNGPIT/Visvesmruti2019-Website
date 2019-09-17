$(document).ready(function() {
$('#prizemoney').each(function () {
    $(this).prop('Counter',70000).animate({
        Counter: $(this).text()
    }, {
        duration: 2500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
})