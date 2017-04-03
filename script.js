(function() {
  var cards = document.querySelectorAll('#todos-2');

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function(event) {
      event.preventDefault();

      var target = event.target.getAttribute('data-target');
      var content = document.getElementById(target);

      content.classList.add('is-active');

      var front = content.querySelector('.ball-min');
      var back = content.querySelector('.ball-max');

      setTimeout(function() {
        front.classList.add('ball-min-flipped');
        back.classList.add('ball-max-flipped');
      }, 500)

      var button = content.querySelector('button');
      button.addEventListener('click', function(event) {
        event.preventDefault();

        content.classList.remove('is-active');
        front.classList.remove('ball-min-flipped');
        back.classList.remove('ball-max-flipped');
      });
    });
  }
})()
