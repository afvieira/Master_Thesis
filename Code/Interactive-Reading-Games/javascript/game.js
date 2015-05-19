fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
fabric.Object.prototype.transparentCorners = false;

//Variaveis globais
var canvasHeight,
    canvasWidth,
    canvas,
    verdeClaro = 'rgba(142, 163, 122, 1)',
    verdeEscuro = 'rgba(170, 190, 151, 1)',
    alturaTop = 200,
    topBar;

//Variaveis globais level1
var level1_nextBtn,
    level1_animalIndex = 0;

//Variaveis globais level2
//Variaveis globais level3
//Variaveis globais level4
//Variaveis globais level5
//Variaveis globais level6

var audio = {
    "a": "../audio/a.mp3",
    "abelha": "../audio/abelha.mp3",
    "abracar": "../audio/abracar.mp3",
    "acucar": "../audio/acucar.mp3",
    "adamastor": "../audio/adamastor.mp3",
    "afia": "../audio/afia.mp3",
    "agulha": "../audio/agulha.mp3",
    "al": "../audio/al.mp3",
    "alce": "../audio/alce.mp3",
    "algema": "../audio/algema.mp3",
    "anel": "../audio/anel.mp3",
    "anjo": "../audio/anjo.mp3",
    "apito": "../audio/apito.mp3",
    "ar": "../audio/ar.mp3",
    "arara": "../audio/arara.mp3",
    "arco": "../audio/arco.mp3",
    "arco_iris": "../audio/arco_iris.mp3",
    "arvore": "../audio/arvore.mp3",
    "aspirador": "../audio/aspirador.mp3",
    "avental": "../audio/avental.mp3",
    "avestruz": "../audio/avestruz.mp3",
    "bacalhau": "../audio/bacalhau.mp3",
    "balanca": "../audio/balanca.mp3",
    "bar": "../audio/bar.mp3",
    "barrar": "../audio/barrar.mp3",
    "beijo": "../audio/beijo.mp3",
    "bengala": "../audio/bengala.mp3",
    "boia": "../audio/boia.mp3",
    "bola": "../audio/bola.mp3",
    "bri": "../audio/bri.mp3",
    "brinquedo": "../audio/brinquedo.mp3",
    "bro": "../audio/bro.mp3",
    "bu": "../audio/bu.mp3",
    "cacada": "../audio/cacada.mp3",
    "cacar": "../audio/cacar.mp3",
    "caco": "../audio/caco.mp3",
    "cagado": "../audio/cagado.mp3",
    "camisa": "../audio/camisa.mp3",
    "camelo": "../audio/camelo.mp3",
    "cantar": "../audio/cantar.mp3",
    "car": "../audio/car.mp3",
    "carnaval": "../audio/carnaval.mp3",
    "carro": "../audio/carro.mp3",
    "cas": "../audio/cas.mp3",
    "casa": "../audio/casa.mp3",
    "casaco": "../audio/casaco.mp3",
    "castor": "../audio/castor.mp3",
    "cereja": "../audio/cereja.mp3",
    "cesto": "../audio/cesto.mp3",
    "chegar": "../audio/chegar.mp3",
    "chum": "../audio/chum.mp3",
    "cinto": "../audio/cinto.mp3",
    "cir": "../audio/cir.mp3",
    "circo": "../audio/circo.mp3",
    "circular": "../audio/circular.mp3",
    "circulo": "../audio/circulo.mp3",
    "comboio": "../audio/comboio.mp3",
    "computador": "../audio/computador.mp3",
    "con": "../audio/con.mp3",
    "convidar": "../audio/convidar.mp3",
    "copo": "../audio/copo.mp3",
    "corrigir": "../audio/corrigir.mp3",
    "do": "../audio/do.mp3",
    "entro": "../audio/entro.mp3",
    "erva": "../audio/erva.mp3",
    "esqui": "../audio/esqui.mp3",
    "faca": "../audio/faca.mp3",
    "falar": "../audio/falar.mp3",
    "fechar": "../audio/fechar.mp3",
    "fila": "../audio/fila.mp3",
    "fingir": "../audio/fingir.mp3",
    "frio": "../audio/frio.mp3",
    "fugir": "../audio/fugir.mp3",
    "gaivota": "../audio/gaivota.mp3",
    "gelado": "../audio/gelado.mp3",
    "gir": "../audio/gir.mp3",
    "grua": "../audio/grua.mp3",
    "guitarra": "../audio/guitarra.mp3",
    "harpa": "../audio/harpa.mp3",
    "ir": "../audio/ir.mp3",
    "ja": "../audio/ja.mp3",
    "jarra": "../audio/jarra.mp3",
    "la": "../audio/la.mp3",
    "lado": "../audio/lado.mp3",
    "lapis": "../audio/lapis.mp3",
    "laranja": "../audio/laranja.mp3",
    "lo": "../audio/lo.mp3",
    "ma": "../audio/ma.mp3",
    "maca": "../audio/maca.mp3",
    "macaco": "../audio/macaco.mp3",
    "mao": "../audio/mao.mp3",
    "marmelo": "../audio/marmelo.mp3",
    "martelo": "../audio/martelo.mp3",
    "mascara": "../audio/mascara.mp3",
    "mel": "../audio/mel.mp3",
    "melado": "../audio/melado.mp3",
    "melga": "../audio/melga.mp3",
    "melro": "../audio/melro.mp3",
    "mesas": "../audio/mesas.mp3",
    "mesmo": "../audio/mesmo.mp3",
    "mochila": "../audio/mochila.mp3",
    "nadar": "../audio/nadar.mp3",
    "o": "../audio/o.mp3",
    "o_u_jogo4": "../audio/o_u_jogo4.mp3",
    "oculos": "../audio/oculos.mp3",
    "olho": "../audio/olho.mp3",
    "ombro": "../audio/ombro.mp3",
    "osso": "../audio/osso.mp3",
    "ovo": "../audio/ovo.mp3",
    "painel": "../audio/painel.mp3",
    "palavra": "../audio/palavra.mp3",
    "pao": "../audio/pao.mp3",
    "parede": "../audio/parede.mp3",
    "partir": "../audio/partir.mp3",
    "pas": "../audio/pas.mp3",
    "passa": "../audio/passa.mp3",
    "passaro": "../audio/passaro.mp3",
    "passaros": "../audio/passaros.mp3",
    "pastelaria": "../audio/pastelaria.mp3",
    "pastilha": "../audio/pastilha.mp3",
    "pastor": "../audio/pastor.mp3",
    "pentear": "../audio/pentear.mp3",
    "perfumar": "../audio/perfumar.mp3",
    "pessego": "../audio/pessego.mp3",
    "piano": "../audio/piano.mp3",
    "piar": "../audio/piar.mp3",
    "pincel": "../audio/pincel.mp3",
    "pinha": "../audio/pinha.mp3",
    "pistola": "../audio/pistola.mp3",
    "pul": "../audio/pul.mp3",
    "recreio": "../audio/recreio.mp3",
    "ro": "../audio/ro.mp3",
    "rra": "../audio/rra.mp3",
    "rras": "../audio/rras.mp3",
    "saia": "../audio/saia.mp3",
    "sair": "../audio/sair.mp3",
    "sal": "../audio/sal.mp3",
    "salgado": "../audio/salgado.mp3",
    "sapato": "../audio/sapato.mp3",
    "sapo": "../audio/sapo.mp3",
    "secar": "../audio/secar.mp3",
    "si": "../audio/si.mp3",
    "silaba": "../audio/silaba.mp3",
    "sobrepor": "../audio/sobrepor.mp3",
    "suspiro": "../audio/suspiro.mp3",
    "tan": "../audio/tan.mp3",
    "tor": "../audio/tor.mp3",
    "tos": "../audio/tos.mp3",
    "trator": "../audio/trator.mp3",
    "trocar": "../audio/trocar.mp3",
    "tubarao": "../audio/tubarao.mp3",
    "ul": "../audio/ul.mp3",
    "uva": "../audio/uva.mp3",
    "ve": "../audio/ve.mp3",
    "vestido": "../audio/vestido.mp3",
    "voar": "../audio/voar.mp3"
};

var images = {
    "a": "../images/a.png",
    "abelha": "../images/abelha.png",
    "abracar": "../images/abracar.png",
    "acucar": "../images/acucar.png",
    "adamastor": "../images/adamastor.png",
    "afia": "../images/afia.png",
    "agulha": "../images/agulha.png",
    "al": "../images/al.png",
    "alce": "../images/alce.png",
    "algema": "../images/algema.png",
    "anel": "../images/anel.png",
    "anjo": "../images/anjo.png",
    "apito": "../images/apito.png",
    "ar": "../images/ar.png",
    "arara": "../images/arara.png",
    "arco": "../images/arco.png",
    "arco_iris": "../images/arco_iris.png",
    "arvore": "../images/arvore.png",
    "aspirador": "../images/aspirador.png",
    "avental": "../images/avental.png",
    "avestruz": "../images/avestruz.png",
    "bacalhau": "../images/bacalhau.png",
    "balanca": "../images/balanca.png",
    "bar": "../images/bar.png",
    "barrar": "../images/barrar.png",
    "beijo": "../images/beijo.png",
    "bengala": "../images/bengala.png",
    "boia": "../images/boia.png",
    "bola": "../images/bola.png",
    "bri": "../images/bri.png",
    "brinquedo": "../images/brinquedo.png",
    "bro": "../images/bro.png",
    "bu": "../images/bu.png",
    "cacada": "../images/cacada.png",
    "cacar": "../images/cacar.png",
    "caco": "../images/caco.png",
    "cagado": "../images/cagado.png",
    "camisa": "../images/camisa.png",
    "camelo": "../images/camelo.png",
    "cantar": "../images/cantar.png",
    "car": "../images/car.png",
    "carnaval": "../images/carnaval.png",
    "carro": "../images/carro.png",
    "cas": "../images/cas.png",
    "casa": "../images/casa.png",
    "casaco": "../images/casaco.png",
    "castor": "../images/castor.png",
    "cereja": "../images/cereja.png",
    "cesto": "../images/cesto.png",
    "chegar": "../images/chegar.png",
    "chum": "../images/chum.png",
    "cinto": "../images/cinto.png",
    "cir": "../images/cir.png",
    "circo": "../images/circo.png",
    "circular": "../images/circular.png",
    "circulo": "../images/circulo.png",
    "comboio": "../images/comboio.png",
    "computador": "../images/computador.png",
    "con": "../images/con.png",
    "convidar": "../images/convidar.png",
    "copo": "../images/copo.png",
    "corrigir": "../images/corrigir.png",
    "do": "../images/do.png",
    "entro": "../images/entro.png",
    "erva": "../images/erva.png",
    "esqui": "../images/esqui.png",
    "faca": "../images/faca.png",
    "falar": "../images/falar.png",
    "fechar": "../images/fechar.png",
    "fila": "../images/fila.png",
    "fingir": "../images/fingir.png",
    "frio": "../images/frio.png",
    "fugir": "../images/fugir.png",
    "gaivota": "../images/gaivota.png",
    "gelado": "../images/gelado.png",
    "gir": "../images/gir.png",
    "grua": "../images/grua.png",
    "guitarra": "../images/guitarra.png",
    "harpa": "../images/harpa.png",
    "ir": "../images/ir.png",
    "ja": "../images/ja.png",
    "jarra": "../images/jarra.png",
    "la": "../images/la.png",
    "lado": "../images/lado.png",
    "lapis": "../images/lapis.png",
    "laranja": "../images/laranja.png",
    "lo": "../images/lo.png",
    "ma": "../images/ma.png",
    "maca": "../images/maca.png",
    "macaco": "../images/macaco.png",
    "mao": "../images/mao.png",
    "marmelo": "../images/marmelo.png",
    "martelo": "../images/martelo.png",
    "mascara": "../images/mascara.png",
    "mel": "../images/mel.png",
    "melado": "../images/melado.png",
    "melga": "../images/melga.png",
    "melro": "../images/melro.png",
    "mesas": "../images/mesas.png",
    "mesmo": "../images/mesmo.png",
    "mochila": "../images/mochila.png",
    "nadar": "../images/nadar.png",
    "o": "../images/o.png",
    "o_u_jogo4": "../images/o_u_jogo4.png",
    "oculos": "../images/oculos.png",
    "olho": "../images/olho.png",
    "ombro": "../images/ombro.png",
    "osso": "../images/osso.png",
    "ovo": "../images/ovo.png",
    "painel": "../images/painel.png",
    "palavra": "../images/palavra.png",
    "pao": "../images/pao.png",
    "parede": "../images/parede.png",
    "partir": "../images/partir.png",
    "pas": "../images/pas.png",
    "passa": "../images/passa.png",
    "passaro": "../images/passaro.png",
    "passaros": "../images/passaros.png",
    "pastelaria": "../images/pastelaria.png",
    "pastilha": "../images/pastilha.png",
    "pastor": "../images/pastor.png",
    "pentear": "../images/pentear.png",
    "perfumar": "../images/perfumar.png",
    "pessego": "../images/pessego.png",
    "piano": "../images/piano.png",
    "piar": "../images/piar.png",
    "pincel": "../images/pincel.png",
    "pinha": "../images/pinha.png",
    "pistola": "../images/pistola.png",
    "pul": "../images/pul.png",
    "recreio": "../images/recreio.png",
    "ro": "../images/ro.png",
    "rra": "../images/rra.png",
    "rras": "../images/rras.png",
    "saia": "../images/saia.png",
    "sair": "../images/sair.png",
    "sal": "../images/sal.png",
    "salgado": "../images/salgado.png",
    "sapato": "../images/sapato.png",
    "sapo": "../images/sapo.png",
    "secar": "../images/secar.png",
    "si": "../images/si.png",
    "silaba": "../images/silaba.png",
    "sobrepor": "../images/sobrepor.png",
    "suspiro": "../images/suspiro.png",
    "tan": "../images/tan.png",
    "tor": "../images/tor.png",
    "tos": "../images/tos.png",
    "trator": "../images/trator.png",
    "trocar": "../images/trocar.png",
    "tubarao": "../images/tubarao.png",
    "ul": "../images/ul.png",
    "uva": "../images/uva.png",
    "ve": "../images/ve.png",
    "vestido": "../images/vestido.png",
    "voar": "../images/voar.png"
};

var audioHelp = {
    1: "../audio/instrucoes/instrucoes1.mp3",
    2: "../audio/instrucoes/instrucoes2.mp3",
    3: "../audio/instrucoes/instrucoes3.mp3",
    4: "../audio/instrucoes/instrucoes4.mp3",
    5: "../audio/instrucoes/instrucoes5.mp3",
    6: "../audio/instrucoes/instrucoes6.mp3",
    7: "../audio/instrucoes/instrucoes7.mp3",
    8: "../audio/instrucoes/instrucoes8.mp3",
    9: "../audio/instrucoes/instrucoes9.mp3",
    10: "../audio/instrucoes/instrucoes10.mp3",
    11: "../audio/instrucoes/instrucoes11.mp3",
    12: "../audio/instrucoes/instrucoes12.mp3",
    13: "../audio/instrucoes/instrucoes13.mp3"
};

var solutions = {
    1: {
        "bacalhau": 3,
        "brinquedo": 3,
        "erva": 2,
        "lapis": 2,
        "mao": 1,
        "mascara": 3
    },
    2: {
        0: {
            "abelha": true,
            "agulha": true,
            "alce": false,
            "anel": true,
            "anjo": false,
            "harpa": false
        },
        1: {
            "bola": false,
            "oculos": false,
            "olho": true,
            "ombro": false,
            "osso": true,
            "ovo": true
        },
        2: {
            "afia": false,
            "algema": false,
            "arco_iris": true,
            "arco": true,
            "arvore": true,
            "aspirador": false
        }
    },
    3: {
        0: {
            "marmelo": false,
            "mel": true,
            "melado": false,
            "melga": true,
            "melro": true,
            "mesmo": false
        },
        1: {
            "pao": false,
            "partir": false,
            "passaro": false,
            "pastelaria": true,
            "pastilha": true,
            "pastor": true
        },
        2: {
            "cesto": false,
            "cinto": false,
            "circo": true,
            "circular": true,
            "circulo": true,
            "suspiro": false
        }
    },
    4: {
        0: {
            "aspirador": false,
            "avestruz": false,
            "comboio": true,
            "copo": false,
            "frio": true,
            "recreio": true
        },
        1: {
            "avental": false,
            "boia": true,
            "grua": true,
            "mesas": false,
            "saia": true,
            "uva": false
        },
        2: {
            "abracar": false,
            "barrar": false,
            "cantar": false,
            "pentear": true,
            "piar": true,
            "voar": true
        }
    },
    5: {
        0: {
            "chegar": false,
            "corrigir": true,
            "fingir": true,
            "fugir": true,
            "partir": false,
            "sair": false
        },
        1: {
            "adamastor": true,
            "apito": false,
            "castor": true,
            "computador": false,
            "sobrepor": false,
            "trator": true
        },
        2: {
            "acucar": true,
            "cacar": false,
            "convidar": false,
            "fechar": false,
            "secar": true,
            "trocar": true
        }
    },
    6: {
        0: {
            "macaco": "maca",
            "maca": "macaco"
        },
        1: {
            "camelo": "camisa",
            "camisa": "camelo"
        },
        2: {
            "piano": "pinha",
            "pinha": "piano"
        }
    },
    7: {
        0: {
            "guitarra": "jarra",
            "jarra": "guitarra"
        },
        1: {
            "laranja": "cereja",
            "cereja": "laranja"
        },
        2: {
            "vestido": "gelado",
            "gelado": "vestido"
        }
    }
};

function load() {
    canvas = new fabric.Canvas('canvas', {
        selection: false,
        hoverCursor: 'pointer'
    });

    canvasHeight = $('#container')[0].clientHeight;
    canvasWidth = $('#container')[0].clientWidth;

    canvas.setHeight(canvasHeight);
    canvas.setWidth(canvasWidth);
    canvas.setBackgroundColor(verdeClaro, canvas.renderAll.bind(canvas));
};

function loadBtnStart() {
    var span, num;
    var colors = ['blue'];
    span = $(document.createElement('span'));
    num = $(document.createElement('i'));
    $(num).attr({
        class: 'txt-btnStart'
    });
    $(span).attr({
        id: 'btn-start',
        class: 'btn-blue btn-start'
    });

    $(num).append('Iniciar');
    $(num).appendTo(span);
    $(span).appendTo($('#container'));
    //posiciona o botao
    $(span)[0].style.position = "absolute";
    $(span)[0].style.left = canvasWidth / 2 - 100;
    $(span)[0].style.top = canvasHeight / 2 - 100;
};

function loadTop() {
    if (!topBar) {
        topBar = new fabric.Rect({
            width: canvasWidth,
            height: alturaTop,
            fill: verdeEscuro,
            left: canvasWidth / 2,
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true
        });
    };

    canvas.add(topBar);
};

function loadHelpBtn(color, level) {
    var btnHelp,
        helpChar,
        btnID = 'btn-help',
        btnClass = 'btn-help btn-' + color,
        txtClass = 'help-text';

    btnHelp = $('#' + btnID);

    if (!btnHelp.length) {
        btnHelp = $(document.createElement('span'));
        $(btnHelp).attr({
            id: btnID
        });
        helpChar = $(document.createElement('i'));
        $(helpChar).attr({
            class: txtClass
        });

        $(btnHelp).attr({
            class: btnClass
        });

        $(helpChar).append('?');
        $(helpChar).appendTo(btnHelp);
        $(btnHelp).appendTo($('#container'));
        //Posiciona o botão de ajuda
        $(btnHelp)[0].style.position = "absolute";
        $(btnHelp)[0].style.left = canvasWidth - $(btnHelp)[0].offsetWidth - 10;
        $(btnHelp)[0].style.top = 5;
    } else {
        $(btnHelp).attr({
            class: btnClass
        });
    };

    $('#' + btnID).unbind('click');
    $('#' + btnID).click(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', audioHelp[level]);
        audioElement.play();
    });
};

function clearCanvas(renderTop) {
    canvas.clear();
    if (renderTop)
        loadTop();
};

function playSoundAnswer(correct) {
    var audioElement = document.createElement('audio');
    if (correct) {
        audioElement.setAttribute('src', '../audio/correct_answer.mp3');
    } else {
        audioElement.setAttribute('src', '../audio/wrong_answer.mp3');
    };
    audioElement.play();
};

// LEVEL 1

var images_level1 = {
  "bacalhau": images["bacalhau"],
  "brinquedo": images["brinquedo"],
  "erva": images["erva"],
  "lapis": images["lapis"],
  "mao": images["mao"],
  "mascara": images["mascara"]
};

function level1_load() {
    clearCanvas();
    loadHelpBtn('blue', 1);
    level1_loadButtons();
    level1_loadEvents();
    level1_loadImage(Object.keys(images_level1)[level1_animalIndex]);
};

function level1_dispose() {

};

function level1_loadButtons() {
    var span, num, divBtns;
    var colors = ['yellow'];

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
    level1_nextBtn = $(document.createElement('button'));
    $(level1_nextBtn).attr({
        id: 'btn-next',
        class: 'button-next'
    });
    $(level1_nextBtn).prop('disabled', true);
    $(level1_nextBtn).append('Próximo');

    //anexa o botao ao container e posiciona-o
    $(level1_nextBtn).appendTo($('#container'));
    $(level1_nextBtn)[0].style.position = "absolute";
    $(level1_nextBtn)[0].style.left = canvasWidth - ($(level1_nextBtn)[0].offsetWidth) - 20;
    $(level1_nextBtn)[0].style.top = canvasHeight - ($(level1_nextBtn)[0].offsetHeight) - 20;
};

function level1_btnAnswer() {
    $('.btn').click(function() {
        var num = parseInt($(this).find('i').html());
        var solution = solutions[1][Object.keys(images_level1)[level1_animalIndex]];

        if ( solution === num) {
            $(this).addClass('btn-valid');
            playSoundAnswer(true);
            level1_correctAnswer();
        } else {
            $(this).addClass('btn-error');
            playSoundAnswer(false);
        };
    });
};

function level1_loadEvents() {
    level1_btnAnswer();

    $('#btn-next').click(function(btn) {
        level1_resetButtons();
        level1_loadNextImage();
    });
};

function level1_resetButtons() {
    $('.btn').removeClass('btn-disabled');
    $('.btn').removeClass('btn-valid');
    $('.btn').removeClass('btn-error');
    //add handler
    level1_btnAnswer();
    $('.btn').css("cursor", 'pointer');
    $('.btn').prop('disabled', false);
    $(level1_nextBtn).prop('disabled', true);
};

function level1_correctAnswer() {        
  $('.btn').addClass('btn-disabled');
  //remove handler
  $('.btn').unbind('click');
  $('.btn').css("cursor", 'default');
  $(level1_nextBtn).prop('disabled', false);
};

function level1_loadNextImage() {
    level1_animalIndex += 1;
    level1_loadImage(Object.keys(images_level1)[level1_animalIndex]);
};

function level1_loadAudio(animal) {
    var audioElement = $(document.createElement('audio')).attr({
        id: 'audio_' + animal,
        preload: 'auto'
    });
    var source = $(document.createElement('source')).attr({
        src: audio[animal]
    });

    $(source).appendTo($(audioElement));
    $(audioElement).appendTo($('#container'));
};

function level1_loadImage(animal) {
    //clear canvas
    canvas.clear();

    //add audio to image
    level1_loadAudio(animal);

    //add image to canvas
    fabric.Image.fromURL(images_level1[animal], function(img) {
        canvas.add(img.set({
            left: canvasWidth / 2,
            top: canvasHeight / 3,
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true
        }).scale(0.7));

        img.on('mousedown', function() {
            var audio = $("#audio_" + animal)[0];
            audio.play();
        });
    });
};

// LEVEL 2


// LEVEL 3
// LEVEL 4
// LEVEL 5
// LEVEL 6
// LEVEL 7
// LEVEL 8
// LEVEL 9
// LEVEL 10
// LEVEL 11
// LEVEL 12
// LEVEL 13

// EVENTOS
function loadEvents() {
    $("#btn-start").click(function() {
        $("#btn-start").remove();
        // level1_load();
        level2_load();
        // level3_load();
        // level4_load();
        // level5_load();
        // level6_load();
        // level7_load();
        // level8_load();
        // level9_load();
        // level10_load();
        // level11_load();
        // level12_load();
        // level13_load();
    });
};

$(window).resize(function() {
    canvasHeight = $('#container')[0].clientHeight;
    canvasWidth = $('#container')[0].clientWidth;
    canvas.setHeight(canvasHeight);
    canvas.setWidth(canvasWidth);
    if (topBar) {
        topBar.setWidth(canvasWidth);
        topBar.setLeft(canvasWidth / 2);
    };
});

/* Application Controller
------------------------------------------------ */
var App = function() {
    "use strict";

    return {
        //main function
        init: function() {
            load();
            loadBtnStart();
            loadEvents();
        }
    };
}();

$(document).ready(function() {
    App.init();
});
