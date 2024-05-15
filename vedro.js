var thumbs = document.querySelectorAll('#thumbs > a');
var big = document.getElementById('big');

for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener('click', function(e) {
        e.preventDefault();
        big.src = this.href;
    });
}