(function(w, d) {
  'use strict';

  var template = document.querySelector('template[is="auto-binding"]');
  template.pages = [
    {name: 'Single', hash: 'one'},
    {name: 'page', hash: 'two'},
    {name: 'app', hash: 'three'},
  ];
}(window, document));
