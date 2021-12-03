// Vincent Giles 2021
// An app to do some guided breathing, for Emily.
// Require: breathing sound, music, breathe in, breathe out, (x 40), hold (timer), deep breath in, hold (timer 15 seconds)
// Button 1: accumulate presses (1 start breathing to 40, if timer == 40 increment button, 2 to start hold, 3 for breath and hold, 4 to release, modulo 4 I guess)
// Button 2: finish

const c = document.getElementById('canvas');
var ctx = c.getContext("2d");

c.width  = window.innerWidth;
c.height = window.innerHeight;

function windowResize() {
    c.width  = window.innerWidth;
    c.height = window.innerHeight;
  };

window.addEventListener('load', drawCircle);
window.addEventListener('resize', windowResize);
window.addEventListener('resize', drawCircle);

function drawCircle() {
    var maxWidth = c.width/4;
    var maxHeight = c.height/4;
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    if (c.width > maxWidth) {
        ctx.arc(c.width/2, c.height/2, maxHeight, 0, 2 * Math.PI);
    } else if (c.height > maxHeight) {
        ctx.arc(c.width/2, c.height/2, maxWidth, 0, 2 * Math.PI);
    } else {
        ctx.arc(c.width/2, c.height/2, 50, 0, 2 * Math.PI);
    }
    ctx.stroke();
    ctx.fill();
}