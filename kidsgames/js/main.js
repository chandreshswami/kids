(function(window){
  'use strict';

  var imageExtension = {
    "png": ".png"
  };
  var alphabetsListContainer = document.getElementById('alphabetsListContainer');
  var randomImagesContainer = document.getElementById('randomImagesContainer');

  var imagesList = {
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

  window.app = app;

  // querySelector, jQuery style
  var $ = function (selector) {
    return document.querySelector(selector);
  };

  function selectAlphabet(selectedAlphabet) {
    var dataKey = this.getAttribute("data-key");
    app.selected.alphabet = dataKey;
    $("#selectedAlphabet").innerHTML = app.selected.alphabet;
  }

  function attachClickHandlersOnListAnchors(){

    // Iterate over #links <a>
    // Use querySelector to target #links and then get tag names <a>
    var links = $('#alphabetsListContainer').getElementsByTagName('a');

    // For each <a> inside #links
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      // <a> onclick, runAlert function
      link.onclick = selectAlphabet;
    }
  }

  function getAlphabetLink(alphabet){
    var path = getImagePath() + alphabet + '.png';
    return '<li><a href="javascript:void(0)" data-key="' + alphabet + '">' + getImage(path) + '</a></li>';
  }

  function populateAlphabets() {
    var listOfAlphabets = app.listOfAlphabets;
    var list = [];

    if(listOfAlphabets !== undefined && listOfAlphabets.length > 0) {
      for(var i=0; i < listOfAlphabets.length; i++){
        list.push(getAlphabetLink(listOfAlphabets[i]));
      }
      alphabetsListContainer.innerHTML = list.join('');
      attachClickHandlersOnListAnchors();
    }
  }

  function getImagePath(){
    return 'images/';
  }

  function getImage(path){
    return '<img src="'+ path +'"></img>';
  }

  function populateRandomImages() {
    var imagePath = getImagePath();
    var listOfAlphabets = app.listOfAlphabets;
    var images = [];

    for(var i = 0; i < listOfAlphabets.length; i++){
      var img = getImagePath() + listOfAlphabets[i] + imageExtension.png;
      images.push(getImage(img));
    }
    randomImagesContainer.innerHTML = images.join('');
  }

  function init(){
    populateAlphabets();
    populateRandomImages();
  }
  init();

})(window);