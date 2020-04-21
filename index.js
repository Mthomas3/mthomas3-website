var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Thomas Martins')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Tech lead iOS ')
    .pauseFor(2000)
    .deleteAll()
    .typeString('(Swift) -> lover, <br/> developer and supporter.')
    .start();