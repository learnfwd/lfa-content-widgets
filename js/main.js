define(['jquery', './chart', './viewportSelectors'], function ($) {
  window.App.book.on('render', function () {
    var elements = $('.progress .progress-bar');

    function onScroll(event) {
      var inViewport = elements.filter(':in-viewport');
      if (!inViewport.length) {
        return;
      }
      elements = elements.not(inViewport);
      inViewport.progressbar();
      if (!elements.length) {
        $('#scrollview').off('scroll', onScroll);
      }
    }

    if (elements.length) {
      $('#scrollview').bind("scroll", onScroll);
      onScroll();
    }
  });
});
  WebFontConfig = {
    google: { families: [ 'Source+Sans+Pro::latin,latin-ext', 'Exo:400,700:latin,latin-ext' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
