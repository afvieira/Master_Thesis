fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
fabric.Object.prototype.transparentCorners = false;

//Variáveis globais
var canvasHeight,
  canvasWidth,
  canvas,
  nextBtn,
  MaxCorrectAnswers = 3,
  nCorrectAnswers = 0;

var imgBackground = {
  1: "../images/background/1.jpg",
  2: "../images/background/2.jpg",
  3: "../images/background/3.jpg",
  4: "../images/background/4.png",
  5: "../images/background/5.jpg",
  6: "../images/background/6.gif",
  7: "../images/background/7.jpg",
  8: "../images/background/8.png",
  9: "../images/background/9.png",
  10: "../images/background/10.jpg",
  11: "../images/background/11.png"
}

var images = {
  "ovelha": "../images/ovelha.png",
  "pato": "../images/pato.png",
  "abelha": "../images/abelha.png",
  "grua": "../images/grua.png",
  "vaca": "../images/vaca.png",
  "agulha": "../images/agulha.png"
};

var audioSource = {
  "ovelha": "../audio/ovelha.mp3",
  "pato": "../audio/pato.mp3",
  "abelha": "../audio/abelha.mp3",
  "grua": "../audio/grua.mp3",
  "vaca": "../audio/vaca.mp3",
  "agulha": "../audio/agulha.mp3",
  "lha": "../audio/lha.mp3"
}

var audioHelp = {
  "1": "../audio/instrucoes.mp3",
  "2_1A": "../audio/instrucoes.mp3",
  "2_1B": "../audio/instrucoes.mp3",
  "2_2A": "../audio/instrucoes.mp3",
  "2_2B": "../audio/instrucoes.mp3",
  "2_3A": "../audio/instrucoes.mp3",
  "2_3B": "../audio/instrucoes.mp3",
  "3_1": "../audio/instrucoes.mp3",
  "3_2": "../audio/instrucoes.mp3",
  "3_3": "../audio/instrucoes.mp3",
  "4_1": "../audio/instrucoes.mp3",
  "4_2": "../audio/instrucoes.mp3",
  "4_3": "../audio/instrucoes.mp3"
}

var solutions = {
  "ovelha": true,
  "pato": false,
  "grua": false,
  "abelha": true,
  "vaca": false,
  "agulha": true
};

function initialize() {
  canvas = new fabric.Canvas('canvas', {
    selection: false,
    hoverCursor: 'pointer'
  });

  canvasHeight = $('#container')[0].clientHeight;
  canvasWidth = $('#container')[0].clientWidth;

  canvas.setHeight(canvasHeight);
  canvas.setWidth(canvasWidth);

  var center = canvas.getCenter();
  // canvas.setBackgroundImage(imgBackground[Math.floor(Math.random() * 60) % 10 + 1],
  canvas.setBackgroundColor('rgba(100, 104, 190, 0.6)', canvas.renderAll.bind(canvas));
  canvas.setBackgroundImage(imgBackground[11],
    canvas.renderAll.bind(canvas), {
      top: center.top,
      left: center.left
    });
};

function loadHelpBtn() {
  var btnHelp, helpChar;

  btnHelp = $(document.createElement('span'));
  $(btnHelp).attr({
    id: 'btn-help',
    class: 'btn-help'
  });

  helpChar = $(document.createElement('i'));
  $(helpChar).attr({
    class: 'help-text'
  });

  $(helpChar).append('?');
  $(helpChar).appendTo(btnHelp);
  $(btnHelp).appendTo($('#container'));
  //Posiciona o botão de ajuda
  $(btnHelp)[0].style.position = "absolute";
  $(btnHelp)[0].style.left = canvasWidth - $(btnHelp)[0].offsetWidth - 10;
  $(btnHelp)[0].style.top = 5;
};

function loadAnswerButton(figureName, left, top) {
  var span, num;
  var colors = ['red'];
  // var colors = ['blue', 'red', 'green', 'yellow'];

  span = $(document.createElement('span'));
  num = $(document.createElement('i'));
  $(span).attr({
    id: 'btn-' + figureName,
    class: 'btn-' + colors[0] + ' btn',
    value: figureName
  });

  $(num).appendTo(span);
  $(span).appendTo($('#container'));
  //posiciona o botao
  $(span)[0].style.position = "absolute";
  $(span)[0].style.left = left;
  $(span)[0].style.top = top;
};

function loadAudio(animal) {
  var audio = $(document.createElement('audio')).attr({
    id: 'audio_' + animal,
    preload: 'auto'
  });
  var source = $(document.createElement('source')).attr({
    src: audioSource[animal]
  });

  $(source).appendTo($(audio));
  $(audio).appendTo($('#container'));
};

function loadImage(animal, _left, _top) {
  //add image to canvas
  fabric.Image.fromURL(images[animal], function(img) {
    canvas.add(img.set({
      left: _left,
      top: _top,
      hasControls: false,
      hasBorders: false,
      lockMovementX: true,
      lockMovementY: true,
      opacity: 0.9
    }).scale(0.35));

    img.on('mousedown', function() {
      var audio = $("#audio_" + animal)[0];
      audio.play();
    });
  });
};

function loadSilabas() {
  var s1 = new fabric.Text('Si', {
    fontSize: 90,
    fontWeight: 'bold',
    shadow: 'rgba(0,0,0,0.2) 5px 5px 5px',
    textBackgroundColor: 'rgb(0,200,0)',
    left: (canvasWidth / 3) * 1 - 300 / 3,
    top: 200,
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true
  });
  var s2 = new fabric.Text('Al', {
    fontSize: 90,
    fontWeight: 'bold',
    shadow: 'rgba(0,0,0,0.2) 5px 5px 5px',
    textBackgroundColor: 'rgb(0,200,0)',
    left: (canvasWidth / 3) * 2 - 300 / 3,
    top: 200,
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true
  });
  var s3 = new fabric.Text('Pul', {
    fontSize: 90,
    fontWeight: 'bold',
    shadow: 'rgba(0,0,0,0.2) 5px 5px 5px',
    textBackgroundColor: 'rgb(0,200,0)',
    left: (canvasWidth / 3) * 3 - 300 / 3,
    top: 200,
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true
  });
  canvas.add(s1);
  canvas.add(s2);
  canvas.add(s3);
};

function loadWord() {
  fabric.Image.fromURL('../images/speaker.png', function(img) {
    canvas.add(img.set({
      left: 50,
      top: 50,
      hasControls: false,
      hasBorders: false,
      lockMovementX: true,
      lockMovementY: true,
      opacity: 0.9
    }).scale(0.25));

    img.on('mousedown', function() {
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', audioSource['lha']);
      audioElement.play();
    });
  });

  var text = new fabric.Text('Mão', {
    fontSize: 60,
    fontWeight: 'bold',
    shadow: 'rgba(0,0,0,0.2) 5px 5px 5px',
    // textBackgroundColor: 'rgb(0,200,0)',
    left: canvasWidth / 2,
    top: 50,
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true
  });
  canvas.add(text);
};

function resetButtons() {
  $('.btn').removeClass('btn-disabled');
  $('.btn').removeClass('btn-valid');
  $('.btn').removeClass('btn-error');
  //add handler
  btnAnswer();
  $('.btn').css("cursor", 'pointer');
  $('.btn').prop('disabled', false);
  $(nextBtn).prop('disabled', true);
};

function correctAnswer() {
  nCorrectAnswers++;

  if (nCorrectAnswers == MaxCorrectAnswers) {
    $('.btn').addClass('btn-disabled');
    //remove handler
    $('.btn').unbind('click');
    $('.btn').css("cursor", 'default');
  };
};

function playSoundAnswer(answer) {
  var audioElement = document.createElement('audio');
  if (answer == 'correct') {
    audioElement.setAttribute('src', '../audio/correct_answer.mp3');
  } else {
    audioElement.setAttribute('src', '../audio/wrong_answer.mp3');
  };
  audioElement.play();
};

function playHelp(gameNumber) {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', audioHelp[gameNumber]);
  audioElement.play();
};

function btnAnswer() {
  $('.btn').click(function() {
    var valor = $(this).attr("value");

    if (solutions[valor] == true) {
      $(this).addClass('btn-valid');
      playSoundAnswer('correct');
      correctAnswer();
    } else {
      $(this).addClass('btn-error');
      playSoundAnswer('wrong');
    };
  });
};

function loadEvents() {
  //add handler
  btnAnswer();

  $('.btn-help').click(function() {
    playHelp("2_1A");
  });

  /* Events on canvas
  ------------------------------------------------ */
  canvas.on({
    'mouse:over': function(evt) {
      evt.target.setOpacity(1);
      canvas.renderAll();
    },
    'mouse:out': function(evt) {
      evt.target.setOpacity(0.9);
      canvas.renderAll();
    },
    'mouse:down': function(evt) {
      console.log("position: X:" + evt.e.offsetX + " Y:" + evt.e.offsetY);
    }
  });
};

/* Application Controller
------------------------------------------------ */
var App = function() {
  "use strict";

  return {
    //main function
    init: function() {
      initialize();
      loadHelpBtn();
      loadWord();
      loadSilabas();
      loadEvents();
    }
  };
}();
