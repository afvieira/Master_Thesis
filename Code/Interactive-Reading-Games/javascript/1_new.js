fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
fabric.Object.prototype.transparentCorners = false;

//Variáveis globais
var canvasHeight,
  canvasWidth,
  canvas,
  nextBtn,
  animalIndex = 0;

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
  "cao": "../images/1/cao.png",
  "camelo": "../images/1/camelo.png",
  "gato": "../images/1/gato.png",
  "urso": "../images/1/urso.png",
};

var audioSource = {
  "cao": "../audio/cao.mp3",
  "camelo": "../audio/camelo.mp3",
  "gato": "../audio/gato.mp3",
  "urso": "../audio/urso.mp3"
}

var audioHelp = {
  1: "../audio/instrucoes.mp3"
}

var answers = {
  "cao": 1,
  "camelo": 3,
  "gato": 2,
  "urso": 2
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
  canvas.setBackgroundColor('rgba(100, 140, 64, 0.6)', canvas.renderAll.bind(canvas));
  canvas.setBackgroundImage(imgBackground[11],
    canvas.renderAll.bind(canvas), {
      top: center.top,
      left: center.left
    });
};

function loadButtons() {
  var span, num, divBtns, btnHelp, helpChar;
  var colors = ['yellow'];
  // var colors = ['blue', 'red', 'green', 'yellow'];

  //cria o botao para ajuda
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

  //cria uma div para os 5 botoes
  divBtns = $(document.createElement('div'));
  $(divBtns).attr({
    id: 'buttons'
  });

  //cria os 5 botoes e anexa ao div criado anteriormente
  for (var i = 0; i < 5; i++) {
    span = $(document.createElement('span'));
    num = $(document.createElement('i'));
    $(span).attr({
      id: 'btn-' + (i + 1),
      class: 'btn-' + colors[i % colors.length] + ' btn',
      value: (i + 1)
    });

    $(num).append(i + 1);
    $(num).appendTo(span);
    $(span).appendTo(divBtns)
  };

  //anexa o div com os botoes ao container
  $(divBtns).appendTo($('#container'));

  //posiciona o div com os botoes
  $(divBtns)[0].style.position = "absolute";
  $(divBtns)[0].style.left = (canvasWidth / 2) - ($(divBtns)[0].offsetWidth / 2);
  $(divBtns)[0].style.top = canvasHeight / 1.6;

  //cria o botão para passar à imagem seguinte
  nextBtn = $(document.createElement('button'));
  $(nextBtn).attr({
    id: 'btn-next',
    class: 'button-next'
  });
  $(nextBtn).prop('disabled', true);
  $(nextBtn).append('Próximo');

  //anexa o botao ao container e posiciona-o
  $(nextBtn).appendTo($('#container'));
  $(nextBtn)[0].style.position = "absolute";
  $(nextBtn)[0].style.left = canvasWidth - ($(nextBtn)[0].offsetWidth) - 20;
  $(nextBtn)[0].style.top = canvasHeight - ($(nextBtn)[0].offsetHeight) - 20;
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

function loadImage(animal) {
  //clear canvas
  canvas.clear();

  //add audio to image
  loadAudio(animal);

  //add image to canvas
  fabric.Image.fromURL(images[animal], function(img) {
    canvas.add(img.set({
      left: canvasWidth / 2,
      top: canvasHeight / 2.7,
      hasControls: false,
      hasBorders: false,
      lockMovementX: true,
      lockMovementY: true,
      opacity: 0.9
    }).scale(0.5));

    img.on('mousedown', function() {
      var audio = $("#audio_" + animal)[0];
      audio.play();
    });
  });
};

function loadNextImage() {
  animalIndex += 1;
  loadImage(Object.keys(images)[animalIndex]);
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
  $('.btn').addClass('btn-disabled');
  //remove handler
  $('.btn').unbind('click');
  $('.btn').css("cursor", 'default');
  $(nextBtn).prop('disabled', false);
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
    var num = parseInt($(this).find('i').html());

    if (answers[Object.keys(images)[animalIndex]] === num) {
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

  $('#btn-next').click(function(btn) {
    resetButtons();
    loadNextImage();
  });

  $('.btn-help').click(function() {
    playHelp(1);
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
      loadButtons();
      loadEvents();
      loadImage(Object.keys(images)[animalIndex]);
    }
  };
}();
