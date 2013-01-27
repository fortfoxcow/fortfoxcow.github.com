$(document).ready(function () {
  var dogWidth = $('#dog').width(),
      xs = [-dogWidth, // offscreen left
            $(document).width()/2 - dogWidth/2 - 50, // ~ centered
            $(document).width()], // offscreen right
      frames = ['images/dog1.png', 'images/dog2.png', 'images/dog3.png'];

  // Yes, I wrote a DSL for this.
  start({'at': [100, xs[0]], 'then': function () {
    walk({'to': xs[1], 'then': function () {
      sit({'for': 3000, 'then': function() {
        walk({'to': xs[2]});
      }});
    }});
  }});

  function start (o) {
    $('#dog').offset({top: o.at[0], left: o.at[1]});
    o.then();
  }

  function walk (o) {
    var i = 0, left, timer;
    timer = setInterval(function () {
      left = $('#dog').offset().left + 15;
      $('#dog').attr('src', frames[++i % 2]).offset({left: left});
      if (left > o.to) {
        clearInterval(timer);
        if (o.then) o.then();
      }
    }, 250);
  }

  function sit (o) {
    $('#dog').attr('src', frames[2]);
    setTimeout(function () {
      o.then();
    }, o['for']);
  }
});
