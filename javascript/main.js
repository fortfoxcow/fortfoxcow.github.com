$(document).ready(function () {
  //setTimeout(function() {$('#birthday-video').fadeIn();}, 2000); 
  var $dog = $('#dog'),
      xs = [-$dog.width(), // offscreen left
            $(document).width()/2 - $dog.width()/2 - 50, // ~ centered
            $(document).width()], // offscreen right
      frames = ['images/dog1.png', 'images/dog2.png', 'images/dog3.png'],
      i = 0,
      left,
      timer = setInterval(function () {
          left = $dog.offset().left + 15;
          $dog.attr('src', frames[++i % 2]).offset({left: left});
          if (left > xs[1]) {
            clearInterval(timer);
            $dog.attr('src', frames[2]);
          }
        }, 250);

  $dog.offset({top: 100, left: xs[0]});
});
