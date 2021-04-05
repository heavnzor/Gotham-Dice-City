(function() {
   


window.jQuery = window.$ = require("./lib/jquery.js");
const animation = $('#animation');
const img = $('#img');
console.log(img);

animation.on('click', function() {
    img.animate({opacity: 0.5}, 2000 )
})

})