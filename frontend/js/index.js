var App = require('lfa-core').App;
var $ = require('bootstrap');
require('chart');
require('viewport-selectors');
require('kenburns');

App.book.on('render', function () {
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

  $('.tooltip-wrapper .tooltip-trigger').popover();

  var ken = $('.gallery-kenburns');
  ken.each(function (idx, el) {
    var $el = $(el);
    var imageLinks = $el.data('imagelinks');
    var titles = $el.data('titlelinks');

    $el.find('.kenburns-slideshow').Kenburns({
      images: imageLinks,
      scale: 1,
      duration:8000,
      fadeSpeed:1200,
      ease3d:'cubic-bezier(0.445, 0.050, 0.550, 0.950)',
      onSlideComplete: function(){
        $el.find('.slide-title').html(titles[this.getSlideIndex()]);
      }
    });  
  });
});

// This should be replaced with static font assets
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
