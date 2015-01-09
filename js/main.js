define(['jquery', './kenburns', './lightbox', './chart'], function ($) {
  window.App.book.on('render', function () {
    $('.progress .progress-bar').progressbar();
  });
});
