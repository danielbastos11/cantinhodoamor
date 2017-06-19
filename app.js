(function () {
'use strict';

$(document).ready(function () {
  let $heart = $('.animation.stage .heart');

  $heart.each((i, elm) => assignTo(elm));
  $heart.on('animationend', function () {
    assignTo($(this));
  });
});

let assignTo = elm => {
  let anim = 'heart' + Math.floor(Math.random() * 5);
  let dur = 2 + Math.ceil(Math.random() * 5);

  let $heart = $(elm);
  let lastAnim = $heart.css('animation-name');

  while (anim == lastAnim) {
    anim = 'heart' + Math.floor(Math.random() * 5);
  }

  $heart.css('animation-name', anim);
  $heart.css('animation-duration', dur + 's');
};

}());
