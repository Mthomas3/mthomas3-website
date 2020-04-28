var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Thomas Martins')
    .pauseFor(2000)
    .typeString('<br/> Tech lead iOS ')
    .pauseFor(2000)
    .start();


$(function () {
    $(document).scroll(function () {
        var $nav = $(".navigation");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});