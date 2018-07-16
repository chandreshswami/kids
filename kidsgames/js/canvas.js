(function(window){
  'use strict';

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // grab the canvas element, get the context for API access and 
  // preset some variables
  var canvas = document.querySelector( 'canvas' ),
      c = canvas.getContext( '2d' ),
      mouseX = 0,
      mouseY = 0,
      width = 55,
      height = 55,
      colour = 'hotpink',
      mousedown = false;

  // resize the canvas
  canvas.width = width;
  canvas.height = height;
  c.font = "70px Georgia";
  /*c.fillStyle = '#bf3030';
  c.fillText("A", 5, 50);*/


  var imagelink = document.createElement('a');
      imagelink.innerHTML = 'download image';
  imagelink.addEventListener('click', function(ev) {
      imagelink.href = canvas.toDataURL();
      //imagelink.download = "alphabets.png";
  }, false);
  document.body.appendChild(imagelink);


  function generateImages(){
    var alphabets = window.app.listOfAlphabets;

    for (var i = 0; i < alphabets.length; i++) {
      var txt = alphabets[i];
      console.log(txt);
      c.fillStyle = getRandomColor();
      c.fillText(txt.toUpperCase(), 5, 50);
      imagelink.download =  txt + '.png';
      imagelink.click();
      c.clearRect(0, 0, width, height);
    }

  }
  //generateImages();

  console.log(window.app.listOfAlphabets);

})(window);