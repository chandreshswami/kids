//(function(window){
  //'use strict';

  var imageExtension = {
    "png": ".png",
    "jpg": ".jpg",
    "jpeg": ".jpeg",
    "gif": ".gif"
  },
  listItem = {
    "learnAlphabet": "learnAlphabet",
    "matchAlphabet": "matchAlphabet"
  };
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
    listOfAlphabets : ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    selected: {
      alphabet: 'a',
      listItem: listItem.learnAlphabet
    }
  };

  window.app = app;

  // querySelector, jQuery style
  var $ = function (selector) {
    return document.querySelector(selector);
  };

  function selectAlphabet(selectedAlphabet) {
    var dataKey = this.getAttribute("data-key");
    var path = getImagePath() + dataKey + '.png';
    app.selected.alphabet = dataKey;

    $("#selectedAlphabetImage").innerHTML = getImage(path, 80, 80);

    // Clear images containers
    alphabetImagesContainer.innerHTML = "";
    randomImagesContainer.innerHTML = "";

    if(app.selected.listItem === listItem.learnAlphabet){
      var selectedAlphabetImages = getSelectedAlphabetImages();
      //console.log("selectedAlphabetImages ::", selectedAlphabetImages);
      alphabetImagesContainer.innerHTML = createUnorderedList('alphabetList', 'list-inline', selectedAlphabetImages.join(''));
    } else if(app.selected.listItem === listItem.matchAlphabet){
      var randomImagesArray = populateRandomImages();
      randomImagesContainer.innerHTML = createUnorderedList('alphabetList', 'list-inline', randomImagesArray.join(''));
    }
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
    var link = '<a href="javascript:void(0)" data-key="' + alphabet + '">' + getImage(path) + '</a>';
    //return '<li><a href="javascript:void(0)" data-key="' + alphabet + '">' + getImage(path) + '</a></li>';
    return createList("", link);
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

  function createUnorderedList(id, classes, list){
    return '<ul id="' + id + '" class="' + classes + '">' + list + '</ul>';
  }

  function createList(classes, txt){
    return '<li class="' + classes + '">' + txt + '</li>';
  }

  function getSelectedAlphabetImages(){
    var imagePath = getImagePath(),
    selectedAlphabet = app.selected.alphabet,
    selectedAlphabetImages = imagesList[selectedAlphabet],
    alphabetImages = [];

    for(var i = 0; i < selectedAlphabetImages.length; i++){
      var img = imagePath + selectedAlphabetImages[i];
      alphabetImages.push(createList('alphabetImage', getImage(img, 200, 200)));
    }

    return alphabetImages;
  }

  function getRandomImagesfromPool(){
    var listOfAlphabets = app.listOfAlphabets;
    var allImagesList = imagesList;
    var pool = [];

    for(var i=0; i < listOfAlphabets.length; i++){
      var alphabet = listOfAlphabets[i]; // 'a', 'b' and so on

      if(listOfAlphabets[i] !== app.selected.alphabet){ // Ignore selected alphabet images

        for(var j=0; j < allImagesList[alphabet].length; j++){
          var img = getImagePath() + allImagesList[alphabet][j];
          pool.push(createList('alphabetImage', getImage(img, 200, 200)));
        }
      }
    }

    return pool;
  }

  function getRandom(arr, n) {
    var result = new Array(n),
    len = arr.length,
    taken = new Array(len);

    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  /**
   * Shuffles array in place.
   * @param {Array} a items An array containing the items.
   */
  function shuffle(a) {
    var j, x, i;

    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  function populateRandomImages() {
    var allAlphabetImages = getRandomImagesfromPool(),
    selectedAlphabetImages = getSelectedAlphabetImages(),
    randomImages = getRandom(allAlphabetImages, 15),
    mergedImages = selectedAlphabetImages.concat(randomImages);

    return shuffle(mergedImages);
  }

  function selectedList(listItem){
    app.selected.listItem = listItem;
  }

  function init(){
    populateAlphabets();
    selectedList(listItem.learnAlphabet);
  }
  init();

//})(window);