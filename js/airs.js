document.addEventListener('DOMContentLoaded', function () {
    Typed.new('#box', {
        'stringsElement': document.getElementById('typed-strings'),
        'typeSpeed': 0x6e,
        'backDelay': 0x3e8,
        'loop': false,
        'contentType': 'html',
        'loopCount': null,
        'callback': function () {
            foo();
        },
        'resetCallback': function () {
            newTyped();
        }
    });
    var _0x13222d = document.querySelector('.reset');
    if (_0x13222d) {
        _0x13222d.addEventListener('click', function () {
            document.getElementById('typed')._typed.reset();
        });
    }
});

function newTyped() {}

function foo() {
    console.log('Callback');
}

function audioAutoPlay(_0xec3496) {
    var _0xa8bc3a = document.getElementById(_0xec3496),
        _0x1ae1f4 = function () {
            _0xa8bc3a.play();
            document.removeEventListener('touchstart', _0x1ae1f4, false);
        };
    _0xa8bc3a.play();
    document.addEventListener('WeixinJSBridgeReady', function () {
        _0x1ae1f4();
    }, false);
    document.addEventListener('YixinJSBridgeReady', function () {
        _0x1ae1f4();
    }, false);
    document.addEventListener('touchstart', _0x1ae1f4, false);
}
document.writeln('<style>');
document.writeln('.div_btn a{color:#fff;text-decoration:none;}');
document.writeln('.div_btn {');
document.writeln('	position: fixed;');
document.writeln('	cursor: pointer;');
document.writeln('	width: 40px;');
document.writeln('	height: 40px;');
document.writeln('\x09border: 1.5px solid #fff;');
document.writeln('	border-radius: 50%;');
document.writeln('	font-size: 1.05em;');
document.writeln('	line-height: 40px;');
document.writeln('	text-align: center;');
document.writeln('\x09z-index: 999');
document.writeln('}');
document.writeln('#btn-make {');
document.writeln('	bottom: 185px;');
document.writeln('	right: 33px;');
document.writeln('	background-color: rgba(0,0,0,.3)');
document.writeln('}');
document.writeln('#div_support {');
document.writeln('	bottom: 110px;');
document.writeln('\x09right: 33px;');
document.writeln('	background-color: rgba(0,0,0,.3)');
document.writeln('}');
document.writeln('</style>');
document.writeln('</div>');