(function(window){
  'use strict';

  var imageExtension = {
    "png": ".png",
    "jpg": ".jpg",
    "jpeg": ".jpeg",
    "gif": ".gif"
  },
  alphabetsListContainer = document.getElementById('alphabetsListContainer'),
  alphabetImagesContainer = document.getElementById('alphabetImagesContainer'),
  randomImagesContainer = document.getElementById('randomImagesContainer'),
  imagesList = {
    'a': ['aForAeroplane.png', 'aForAligator.jpg', 'aForAnkel.png', 'aForAnt.jpg', 'aForApricot.jpg', 'aForApron.jpg', 'aForAxe.jpg'],
    'b': ['bForBalloons.jpg', 'bForBamboo.png', 'bForBarn.jpg', 'bForBat.jpg', 'bForBeach.jpg', 'bForBoy.jpg'],
    'c': ['cForCamel.jpg', 'cForCamera.jpg', 'cForCandel.jpg', 'cForCarrot.jpg', 'cForCaterpillar.jpg', 'cForClock.png', 'cForCorn.jpg'],
    'd': ['dForDig.jpg', 'dForDinosaur.jpg', 'dForDonkey.jpg'],
    'e': ['eForEgg.jpg', 'eForElephant.png', 'eForEngine.jpg', 'eForEnvelope.jpg'],
    'f': ['fForFire.jpg', 'fForFish.jpg', 'fForFlower.jpg', 'fForFox.jpg', 'fForFrog.jpg'],
    'g': ['gForGoat.jpg', 'gForGoose.jpg', 'gForGrapes.jpg', 'gForGrass.jpg', 'gForGuitar.jpg'],
    'h': ['hForHat.png', 'hForHen.jpg', 'hForHive.jpg', 'hForHome.jpg'],
    'i': ['iForIcecream.jpg', 'iForIgloo.jpg', 'iForInkpot.jpg', 'iForIron.jpg'],
    'j': ['jForJackal.jpg', 'jForJaguar.jpg', 'jForJelly.jpg', 'jForJug.jpg'],
    'k': [],
    'l': [],
    'm': [],
    'n': [],
    'o': [],
    'p': [],
    'q': [],
    'r': [],
    's': [],
    't': [],
    'u': [],
    'v': [],
    'w': [],
    'x': [],
    'y': [],
    'z': []
  },
  app = {
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
    selecteAlphabetImages();
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
    var listOfAlphabets = app.listOfAlphabets,
    list = [];

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

  function getImage(path, width, height){
    return '<img width="'+ width +'" height="'+ height +'" src="'+ path +'"></img>';
  }

  function selecteAlphabetImages(){
    var imagePath = getImagePath(),
    selectedAlphabet = app.selected.alphabet,
    selectedAlphabetImages = imagesList[selectedAlphabet],
    alphabetImages = [];

    for(var i = 0; i < selectedAlphabetImages.length; i++){
      var img = getImagePath() + selectedAlphabetImages[i];
      alphabetImages.push(getImage(img, 200, 200));
    }
    alphabetImagesContainer.innerHTML = alphabetImages.join('');
  }

  function populateRandomImages() {
    var imagePath = getImagePath(),
    listOfAlphabets = app.listOfAlphabets,
    images = [];

    for(var i = 0; i < listOfAlphabets.length; i++){
      var img = getImagePath() + listOfAlphabets[i] + imageExtension.png;
      images.push(getImage(img));
    }
    randomImagesContainer.innerHTML = images.join('');
  }

  function init(){
    populateAlphabets();
    //populateRandomImages();
  }
  init();

})(window);