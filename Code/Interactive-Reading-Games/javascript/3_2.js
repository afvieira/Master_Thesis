fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
fabric.Object.prototype.transparentCorners = false;

//Variáveis globais
var canvasHeight,
  canvasWidth,
  canvas,
  group_s1,
  group_s2,
  group_s3,
  answer1_correct = false,
  answer2_correct = false,
  answer3_correct = false;

var firstTryByAnswer = {
  1: true,
  2: true,
  3: true
};

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

var audioSource = {
  "ja": "../audio/ja.mp3",
  "rra": "../audio/rra.mp3",
  "tos": "../audio/tos.mp3",
  "ul": "../audio/ul.mp3"
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

function loadButton(_numResp, _silaba, _left, _top) {
  var span, silaba;
  var colors = ['yellow'];
  // var colors = ['blue', 'red', 'green', 'yellow'];

  //cria os 5 botoes e anexa ao div criado anteriormente
  span = $(document.createElement('span'));
  silaba = $(document.createElement('i'));
  $(span).attr({
    id: 'btn-' + _numResp,
    class: 'btn-' + colors[0] + ' btn',
    value: _numResp
  });

  $(silaba).append(_silaba);
  $(silaba).appendTo(span);
  $(span).appendTo($('#container'))

  //posiciona o div com os botoes
  $(span)[0].style.position = "absolute";
  $(span)[0].style.left = _left; /*(canvasWidth / 2) - ($(divBtns)[0].offsetWidth / 2);*/
  $(span)[0].style.top = _top; /*canvasHeight / 1.6;*/
};

function loadSilabas() {
  var circle1 = new fabric.Circle({
    radius: 70,
    fill: 'rgba(20, 120, 180, 0.9)',
    opacity: 0.8
  });
  var circle2 = new fabric.Circle({
    radius: 70,
    fill: 'rgba(20, 120, 180, 0.9)',
    opacity: 0.8
  });
  var circle3 = new fabric.Circle({
    radius: 70,
    fill: 'rgba(20, 120, 180, 0.9)',
    opacity: 0.8
  });

  var s1 = new fabric.Text('rra', {
    fontSize: 70,
    fontWeight: 'bold',
    shadow: 'rgba(0,0,0,0.2) 5px 5px 5px'
  });
  var s2 = new fabric.Text('tos', {
    fontSize: 70,
    fontWeight: 'bold',
    shadow: 'rgba(0,0,0,0.2) 5px 5px 5px'
  });
  var s3 = new fabric.Text('ul', {
    fontSize: 70,
    fontWeight: 'bold',
    shadow: 'rgba(0,0,0,0.2) 5px 5px 5px',
  });

  group_s1 = new fabric.Group([circle1, s1], {
    left: (canvasWidth / 3) * 1 - 300 / 3,
    top: 200,
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true
  });
  group_s2 = new fabric.Group([circle2, s2], {
    left: (canvasWidth / 3) * 2 - 300 / 3,
    top: 200,
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true
  });
  group_s3 = new fabric.Group([circle3, s3], {
    left: (canvasWidth / 3) * 3 - 300 / 3,
    top: 200,
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true
  });

  group_s1.on('mousedown', function() {
    var num1 = parseInt($('#btn-1').find('i').html());
    if (num1 === 0 || answer1_correct) {
      return;
    };
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', audioSource['rra']);
    audioElement.play();
    decreaseAnswer(1);
  });

  group_s2.on('mousedown', function() {
    var num2 = parseInt($('#btn-2').find('i').html());
    if (num2 === 0 || answer2_correct) {
      return;
    };
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', audioSource['tos']);
    audioElement.play();
    decreaseAnswer(2);
  });

  group_s3.on('mousedown', function() {
    var num3 = parseInt($('#btn-3').find('i').html());
    if (num3 === 0 || answer3_correct) {
      return;
    };
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', audioSource['ul']);
    audioElement.play();
    decreaseAnswer(3);
  });

  canvas.add(group_s1, group_s2, group_s3);
};

function lockbutton(answer_num) {        
  $('#btn-' + answer_num).addClass('btn-disabled');
  //remove handler
  $('#btn-' + answer_num).unbind('click');
  $('#btn-' + answer_num).css("cursor", 'default');
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

function loadButtons() {
  loadButton('1', '3', (canvasWidth / 3) * 1 - 300 / 2, 300);
  loadButton('2', '3', (canvasWidth / 3) * 2 - 300 / 2, 300);
  loadButton('3', '3', (canvasWidth / 3) * 3 - 300 / 2, 300);
}

function loadWord() {
  fabric.Image.fromURL('../images/speaker.png', function(img) {
    canvas.add(img.set({
      left: 50,
      top: 50,
      hasControls: false,
      hasBorders: false,
      lockMovementX: true,
      lockMovementY: true
    }).scale(0.25));

    img.on('mousedown', function() {
      var audioElement = document.createElement('audio');
      audioElement.setAttribute('src', audioSource['ja']);
      audioElement.play();
    });
  });

  var text = new fabric.Text('Já', {
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

function playHelp(gameNumber) {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', audioHelp[gameNumber]);
  audioElement.play();
};

function loadEvents() {
  $('.btn-help').click(function() {
    playHelp("2_1A");
  });

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
        case "3":
          answer3_correct = true
          break;
      }
    };
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
      loadButtons();
      loadSilabas();
      loadEvents();
    }
  };
}();
