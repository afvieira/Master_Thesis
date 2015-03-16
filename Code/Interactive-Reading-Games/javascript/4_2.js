fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
fabric.Object.prototype.transparentCorners = false;

//Variáveis globais
var canvasHeight,
  canvasWidth,
  canvas,
  answer1_correct = false,
  answer2_correct = false;

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

var firstTryByAnswer = {
  1: true,
  2: true
};

var audioSource = {
  "lado": "../audio/lado.mp3",
  "perfurmar": "../audio/perfurmar.mp3"
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
  canvas.setBackgroundColor('rgba(190, 104, 100, 0.6)', canvas.renderAll.bind(canvas));
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

function loadAnswerButton(_numResp, _tentativas, left, top) {
  var span, num;
  var colors = ['blue'];
  // var colors = ['blue', 'red', 'green', 'yellow'];

  span = $(document.createElement('span'));
  num = $(document.createElement('i'));
  $(span).attr({
    id: 'btn-' + _numResp,
    class: 'btn-' + colors[0] + ' btn',
    value: _numResp
  });
  $(num).append(_tentativas);
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

function loadButton(respNum, left, top) {
  var btn;

  btn = $(document.createElement('button'));
  $(btn).attr({
    id: 'button-' + respNum,
    value: respNum
  });

  $(btn).appendTo($('#container'));
  //posiciona o botao
  $(btn)[0].style.position = "absolute";
  $(btn)[0].style.left = left;
  $(btn)[0].style.top = top;
};

function loadImagesAndSounds() {
  loadAudio(Object.keys(audioSource)[0]);
  loadAudio(Object.keys(audioSource)[1]);

  loadButton('1', (217 / 2) + 30, 160);
  loadButton('2', (217 / 2) + 270, 160);

  loadAnswerButton('1', 3, 168, 270);
  loadAnswerButton('2', 3, 123 + 290, 270);
};

function decreaseAnswer(answer_num) {
  var res;
  if (firstTryByAnswer[answer_num]) {
    firstTryByAnswer[answer_num] = false;
    return;
  };

  var num = parseInt($('#btn-' + answer_num).find('i').html());
  if (num === 0) {
    return;
  };

  res = num - 1;
  if (res === 0) {
    $('#btn-' + answer_num).addClass('btn-error');
    playSoundAnswer('wrong');
    lockbutton(answer_num);
  };
  $('#btn-' + answer_num).find('i').html(res);
};

function lockbutton(answer_num) {        
  $('#btn-' + answer_num).addClass('btn-disabled');
  //remove handler
  $('#btn-' + answer_num).unbind('click');
  $('#btn-' + answer_num).css("cursor", 'default');
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
    var num = parseInt($(this).find('i').html());
    var answer = $(this).attr("value");

    if (num !== 0) {
      $(this).addClass('btn-valid');
      playSoundAnswer('correct');
      lockbutton(answer);
      switch (answer) {
        case "1":
          answer1_correct = true
          break;
        case "2":
          answer2_correct = true
          break;
      }
    };
  });
};

function loadEvents() {
  //add handler
  btnAnswer();

  $('.btn-help').click(function() {
    playHelp("2_2A");
  });

  $('button').click(function() {
    var valor = $(this).attr("value");
    var audioElement = document.createElement('audio');
    var num = parseInt($('#btn-' + valor).find('i').html());
    switch (valor) {
      case "1":
        if (num === 0 || answer1_correct) {
          return;
        };
        break;
      case "2":
        if (num === 0 || answer2_correct) {
          return;
        };
        break;
    }

    audioElement.setAttribute('src', audioSource[Object.keys(audioSource)[valor - 1]]);
    audioElement.play();
    decreaseAnswer(valor);
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
      loadImagesAndSounds();
      loadEvents();
    }
  };
}();
