(function(){
  'use strict';

  var imagesList: {
    'a': '',
    'b': ''
  };

  var app = {
    listOfAlphabets : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'],
    selected: {
      alphabet: 'a',
      image: imagesList.a
    }
  };


  function populateAplhabets() {
    var ele = document.getElementById('alphabetsListContainer');
    var list = app.listOfAlphabets;

    for(var i=0; i < list.length; i++){

    }
  }

  function populateRandomImages() {
    // body...
  }

  function init(){
    populateAplhabets();
  }

})();