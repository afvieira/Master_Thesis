fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
fabric.Object.prototype.transparentCorners = false;

//Variaveis globais
var canvasHeight,
    canvasWidth,
    canvas,
    verdeClaro = 'rgba(142, 163, 122, 1)',
    verdeEscuro = 'rgba(170, 190, 151, 1)',
    azulClaro = 'rgba(190, 163, 122, 1)',
    azulEscuro = 'rgba(240, 190, 150, 1)',
    roxoClaro = 'rgba(122, 130, 163, 1)',
    roxoEscuro = 'rgba(151, 158, 190, 1)',
    alturaTop = 200,
    topBar,
    micro = "images/mic128.png",
    nextLevel = 1;

var sequenciaCores = ["verde", "roxo", "azul"];

var audio = {
    "a": "audio/a.mp3",
    "abelha": "audio/abelha.mp3",
    "abracar": "audio/abracar.mp3",
    "acucar": "audio/acucar.mp3",
    "adamastor": "audio/adamastor.mp3",
    "afia": "audio/afia.mp3",
    "agulha": "audio/agulha.mp3",
    "al": "audio/al.mp3",
    "alce": "audio/alce.mp3",
    "algema": "audio/algema.mp3",
    "anel": "audio/anel.mp3",
    "anjo": "audio/anjo.mp3",
    "apito": "audio/apito.mp3",
    "ar": "audio/ar.mp3",
    "arara": "audio/arara.mp3",
    "arco": "audio/arco.mp3",
    "arco_iris": "audio/arco_iris.mp3",
    "arvore": "audio/arvore.mp3",
    "aspirador": "audio/aspirador.mp3",
    "avental": "audio/avental.mp3",
    "avestruz": "audio/avestruz.mp3",
    "bacalhau": "audio/bacalhau.mp3",
    "balanca": "audio/balanca.mp3",
    "bar": "audio/bar.mp3",
    "barrar": "audio/barrar.mp3",
    "beijo": "audio/beijo.mp3",
    "bengala": "audio/bengala.mp3",
    "boia": "audio/boia.mp3",
    "bola": "audio/bola.mp3",
    "bri": "audio/bri.mp3",
    "brinquedo": "audio/brinquedo.mp3",
    "bro": "audio/bro.mp3",
    "bu": "audio/bu.mp3",
    "cacada": "audio/cacada.mp3",
    "cacar": "audio/cacar.mp3",
    "caco": "audio/caco.mp3",
    "cagado": "audio/cagado.mp3",
    "camisa": "audio/camisa.mp3",
    "camelo": "audio/camelo.mp3",
    "cantar": "audio/cantar.mp3",
    "car": "audio/car.mp3",
    "carnaval": "audio/carnaval.mp3",
    "carro": "audio/carro.mp3",
    "cas": "audio/cas.mp3",
    "casa": "audio/casa.mp3",
    "casaco": "audio/casaco.mp3",
    "castor": "audio/castor.mp3",
    "centeio": "audio/centeio.mp3",
    "cereja": "audio/cereja.mp3",
    "cesto": "audio/cesto.mp3",
    "chegar": "audio/chegar.mp3",
    "chum": "audio/chum.mp3",
    "cinto": "audio/cinto.mp3",
    "cir": "audio/cir.mp3",
    "circo": "audio/circo.mp3",
    "circular": "audio/circular.mp3",
    "circulo": "audio/circulo.mp3",
    "comboio": "audio/comboio.mp3",
    "computador": "audio/computador.mp3",
    "con": "audio/con.mp3",
    "convidar": "audio/convidar.mp3",
    "copo": "audio/copo.mp3",
    "corrigir": "audio/corrigir.mp3",
    "do": "audio/do.mp3",
    "entro": "audio/entro.mp3",
    "erva": "audio/erva.mp3",
    "esqui": "audio/esqui.mp3",
    "faca": "audio/faca.mp3",
    "falar": "audio/falar.mp3",
    "fechar": "audio/fechar.mp3",
    "fila": "audio/fila.mp3",
    "fingir": "audio/fingir.mp3",
    "frio": "audio/frio.mp3",
    "fugir": "audio/fugir.mp3",
    "gaivota": "audio/gaivota.mp3",
    "gelado": "audio/gelado.mp3",
    "gir": "audio/gir.mp3",
    "grua": "audio/grua.mp3",
    "guitarra": "audio/guitarra.mp3",
    "harpa": "audio/harpa.mp3",
    "ir": "audio/ir.mp3",
    "ja": "audio/ja.mp3",
    "jarra": "audio/jarra.mp3",
    "la": "audio/la.mp3",
    "lado": "audio/lado.mp3",
    "lapis": "audio/lapis.mp3",
    "laranja": "audio/laranja.mp3",
    "lo": "audio/lo.mp3",
    "ma": "audio/ma.mp3",
    "maca": "audio/maca.mp3",
    "macaco": "audio/macaco.mp3",
    "mao": "audio/mao.mp3",
    "marmelo": "audio/marmelo.mp3",
    "martelo": "audio/martelo.mp3",
    "mascara": "audio/mascara.mp3",
    "mel": "audio/mel.mp3",
    "melado": "audio/melado.mp3",
    "melga": "audio/melga.mp3",
    "melgaco": "audio/melgaco.mp3",
    "melro": "audio/melro.mp3",
    "mesas": "audio/mesas.mp3",
    "mesmo": "audio/mesmo.mp3",
    "mochila": "audio/mochila.mp3",
    "nadar": "audio/nadar.mp3",
    "o": "audio/o.mp3",
    "o_u_jogo4": "audio/o_u_jogo4.mp3",
    "oculos": "audio/oculos.mp3",
    "olho": "audio/olho.mp3",
    "ombro": "audio/ombro.mp3",
    "osso": "audio/osso.mp3",
    "ovo": "audio/ovo.mp3",
    "painel": "audio/painel.mp3",
    "palavra": "audio/palavra.mp3",
    "papagaio": "audio/papagaio.mp3",
    "pao": "audio/pao.mp3",
    "parede": "audio/parede.mp3",
    "partir": "audio/partir.mp3",
    "pas": "audio/pas.mp3",
    "passa": "audio/passa.mp3",
    "passaro": "audio/passaro.mp3",
    "passaros": "audio/passaros.mp3",
    "pastelaria": "audio/pastelaria.mp3",
    "pastilha": "audio/pastilha.mp3",
    "pastor": "audio/pastor.mp3",
    "pentear": "audio/pentear.mp3",
    "perfumar": "audio/perfumar.mp3",
    "pessego": "audio/pessego.mp3",
    "piano": "audio/piano.mp3",
    "piar": "audio/piar.mp3",
    "pincel": "audio/pincel.mp3",
    "pinha": "audio/pinha.mp3",
    "pistola": "audio/pistola.mp3",
    "pul": "audio/pul.mp3",
    "recreio": "audio/recreio.mp3",
    "ro": "audio/ro.mp3",
    "rra": "audio/rra.mp3",
    "rras": "audio/rras.mp3",
    "saia": "audio/saia.mp3",
    "sair": "audio/sair.mp3",
    "sal": "audio/sal.mp3",
    "salgado": "audio/salgado.mp3",
    "sapato": "audio/sapato.mp3",
    "sapo": "audio/sapo.mp3",
    "secar": "audio/secar.mp3",
    "si": "audio/si.mp3",
    "silaba": "audio/silaba.mp3",
    "sobrepor": "audio/sobrepor.mp3",
    "suspiro": "audio/suspiro.mp3",
    "tan": "audio/tan.mp3",
    "tor": "audio/tor.mp3",
    "tos": "audio/tos.mp3",
    "trator": "audio/trator.mp3",
    "trocar": "audio/trocar.mp3",
    "tubarao": "audio/tubarao.mp3",
    "ul": "audio/ul.mp3",
    "uva": "audio/uva.mp3",
    "ve": "audio/ve.mp3",
    "vestido": "audio/vestido.mp3",
    "voar": "audio/voar.mp3"
};

var images = {
    "a": "images/a.png",
    "abelha": "images/abelha.png",
    "abracar": "images/abracar.png",
    "acucar": "images/acucar.png",
    "adamastor": "images/adamastor.png",
    "afia": "images/afia.png",
    "agulha": "images/agulha.png",
    "al": "images/al.png",
    "alce": "images/alce.png",
    "algema": "images/algema.png",
    "anel": "images/anel.png",
    "anjo": "images/anjo.png",
    "apito": "images/apito.png",
    "ar": "images/ar.png",
    "arara": "images/arara.png",
    "arco": "images/arco.png",
    "arco_iris": "images/arco_iris.png",
    "arvore": "images/arvore.png",
    "aspirador": "images/aspirador.png",
    "avental": "images/avental.png",
    "avestruz": "images/avestruz.png",
    "bacalhau": "images/bacalhau.png",
    "balanca": "images/balanca.png",
    "bar": "images/bar.png",
    "barrar": "images/barrar.png",
    "beijo": "images/beijo.png",
    "bengala": "images/bengala.png",
    "boia": "images/boia.png",
    "bola": "images/bola.png",
    "bri": "images/bri.png",
    "brinquedo": "images/brinquedo.png",
    "bro": "images/bro.png",
    "bu": "images/bu.png",
    "cacada": "images/cacada.png",
    "cacar": "images/cacar.png",
    "caco": "images/caco.png",
    "cagado": "images/cagado.png",
    "camisa": "images/camisa.png",
    "camelo": "images/camelo.png",
    "cantar": "images/cantar.png",
    "car": "images/car.png",
    "carnaval": "images/carnaval.png",
    "carro": "images/carro.png",
    "cas": "images/cas.png",
    "casa": "images/casa.png",
    "casaco": "images/casaco.png",
    "castor": "images/castor.png",
    "centeio": "images/centeio.png",
    "cereja": "images/cereja.png",
    "cesto": "images/cesto.png",
    "chegar": "images/chegar.png",
    "chum": "images/chum.png",
    "cinto": "images/cinto.png",
    "cir": "images/cir.png",
    "circo": "images/circo.png",
    "circular": "images/circular.png",
    "circulo": "images/circulo.png",
    "comboio": "images/comboio.png",
    "computador": "images/computador.png",
    "con": "images/con.png",
    "convidar": "images/convidar.png",
    "copo": "images/copo.png",
    "corrigir": "images/corrigir.png",
    "do": "images/do.png",
    "entro": "images/entro.png",
    "erva": "images/erva.png",
    "esqui": "images/esqui.png",
    "faca": "images/faca.png",
    "falar": "images/falar.png",
    "fechar": "images/fechar.png",
    "fila": "images/fila.png",
    "fingir": "images/fingir.png",
    "frio": "images/frio.png",
    "fugir": "images/fugir.png",
    "gaivota": "images/gaivota.png",
    "gelado": "images/gelado.png",
    "gir": "images/gir.png",
    "grua": "images/grua.png",
    "guitarra": "images/guitarra.png",
    "harpa": "images/harpa.png",
    "ir": "images/ir.png",
    "ja": "images/ja.png",
    "jarra": "images/jarra.png",
    "la": "images/la.png",
    "lado": "images/lado.png",
    "lapis": "images/lapis.png",
    "laranja": "images/laranja.png",
    "lo": "images/lo.png",
    "ma": "images/ma.png",
    "maca": "images/maca.png",
    "macaco": "images/macaco.png",
    "mao": "images/mao.png",
    "marmelo": "images/marmelo.png",
    "martelo": "images/martelo.png",
    "mascara": "images/mascara.png",
    "mel": "images/mel.png",
    "melado": "images/melado.png",
    "melga": "images/melga.png",
    "melro": "images/melro.png",
    "mesas": "images/mesas.png",
    "mesmo": "images/mesmo.png",
    "mochila": "images/mochila.png",
    "nadar": "images/nadar.png",
    "o": "images/o.png",
    "o_u_jogo4": "images/o_u_jogo4.png",
    "oculos": "images/oculos.png",
    "olho": "images/olho.png",
    "ombro": "images/ombro.png",
    "osso": "images/osso.png",
    "ovo": "images/ovo.png",
    "painel": "images/painel.png",
    "palavra": "images/palavra.png",
    "papagaio": "images/papagaio.png",
    "pao": "images/pao.png",
    "parede": "images/parede.png",
    "partir": "images/partir.png",
    "pas": "images/pas.png",
    "passa": "images/passa.png",
    "passaro": "images/passaro.png",
    "passaros": "images/passaros.png",
    "pastelaria": "images/pastelaria.png",
    "pastilha": "images/pastilha.png",
    "pastor": "images/pastor.png",
    "pentear": "images/pentear.png",
    "perfumar": "images/perfumar.png",
    "pessego": "images/pessego.png",
    "piano": "images/piano.png",
    "piar": "images/piar.png",
    "pincel": "images/pincel.png",
    "pinha": "images/pinha.png",
    "pistola": "images/pistola.png",
    "pul": "images/pul.png",
    "recreio": "images/recreio.png",
    "ro": "images/ro.png",
    "rra": "images/rra.png",
    "rras": "images/rras.png",
    "saia": "images/saia.png",
    "sair": "images/sair.png",
    "sal": "images/sal.png",
    "salgado": "images/salgado.png",
    "sapato": "images/sapato.png",
    "sapo": "images/sapo.png",
    "secar": "images/secar.png",
    "si": "images/si.png",
    "silaba": "images/silaba.png",
    "sobrepor": "images/sobrepor.png",
    "suspiro": "images/suspiro.png",
    "tan": "images/tan.png",
    "tor": "images/tor.png",
    "tos": "images/tos.png",
    "trator": "images/trator.png",
    "trocar": "images/trocar.png",
    "tubarao": "images/tubarao.png",
    "ul": "images/ul.png",
    "uva": "images/uva.png",
    "ve": "images/ve.png",
    "vestido": "images/vestido.png",
    "voar": "images/voar.png"
};

var audioHelp = {
    1: "audio/instrucoes/instrucoes1.mp3",
    2: "audio/instrucoes/instrucoes2.mp3",
    3: "audio/instrucoes/instrucoes3.mp3",
    4: "audio/instrucoes/instrucoes4.mp3",
    5: "audio/instrucoes/instrucoes5.mp3",
    6: "audio/instrucoes/instrucoes6.mp3",
    7: "audio/instrucoes/instrucoes7.mp3",
    8: "audio/instrucoes/instrucoes8.mp3",
    9: "audio/instrucoes/instrucoes9.mp3",
    10: "audio/instrucoes/instrucoes10.mp3",
    11: "audio/instrucoes/instrucoes11.mp3",
    12: "audio/instrucoes/instrucoes12.mp3",
    13: "audio/instrucoes/instrucoes13.mp3"
};

var solutions = {
    1: {
        "bacalhau": 3,
        "erva": 2,
        "brinquedo": 3,
        "mascara": 3,
        "lapis": 2,
        "mao": 1
    },
    2: {
        0: {
            "abelha": true,
            "harpa": false,
            "anjo": false,
            "alce": false,
            "agulha": true,
            "anel": true
        },
        1: {
            "bola": false,
            "ombro": false,
            "osso": true,
            "ovo": true,
            "oculos": false,
            "olho": true
        },
        2: {
            "algema": false,
            "arvore": true,
            "afia": false,
            "arco_iris": true,
            "arco": true,
            "aspirador": false
        }
    },
    3: {
        0: {
            "melga": true,
            "mesmo": false,
            "melgaco": true,
            "melro": true,
            "melado": false,
            "marmelo": false
        },
        1: {
            "pastilha": true,
            "passaro": false,
            "pao": false,
            "partir": false,
            "pastelaria": true,
            "pastor": true
        },
        2: {
            "circo": true,
            "cinto": false,
            "circular": true,
            "suspiro": false,
            "cesto": false,
            "circulo": true
        }
    },
    4: {
        0: {
            "copo": false,
            "aspirador": false,
            "comboio": true,
            "avestruz": false,
            "papagaio": true,
            "centeio": true
        },
        1: {
            "saia": true,
            "mesas": false,
            "boia": true,
            "uva": false,
            "grua": true,
            "avental": false
        },
        2: {
            "barrar": false,
            "pentear": true,
            "cantar": false,
            "voar": true,
            "piar": true,
            "abracar": false
        }
    },
    5: {
        0: {
            "fugir": true,
            "chegar": false,
            "fingir": true,
            "partir": false,
            "corrigir": true,
            "sair": false
        },
        1: {
            "sobrepor": false,
            "trator": true,
            "adamastor": true,
            "apito": false,
            "castor": true,
            "computador": false
        },
        2: {
            "convidar": false,
            "fechar": false,
            "secar": true,
            "acucar": true,
            "trocar": true,
            "cacar": false
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

//====== RESULTS =====================================
function ResultGameNSilabas(aluno, imagem, tentativas) {
    this.aluno = aluno;
    this.imagem = imagem;
    this.tentativas = tentativas;
};

function ResultGameCorrectSilaba(aluno, game, silaba, wrongAnswers) {
    this.aluno = aluno;
    this.game = game;
    this.silaba = silaba;
    this.wrongAnswers = wrongAnswers;
};

function ResultGameCorrectPar(aluno, game, tentativas) {
    this.aluno = aluno;
    this.game = game;
    this.tentativas = tentativas;
};

ResultsGame1ByStudent = {};
ResultsGame2ByStudent = [];
ResultsGame3ByStudent = [];
ResultsGame4ByStudent = [];
ResultsGame5ByStudent = [];
ResultsGame6ByStudent = [];
ResultsGame7ByStudent = [];

function sendResultsGame1() {
    $.ajax({
        type: 'POST',
        url: 'http://rest.learncode.academy/api/johnbob/friends',
        data: ResultsGame1ByStudent,
        success: function(data) {
            console.log("SUCESSO", data);
        }
    });
};

//====== RESULTS =====================================

function load() {
    canvas = new fabric.Canvas('canvas', {
        selection: false,
        hoverCursor: 'pointer'
    });

    canvasHeight = $('#container')[0].clientHeight;
    canvasWidth = $('#container')[0].clientWidth;

    canvas.setHeight(canvasHeight);
    canvas.setWidth(canvasWidth);
    clearCanvasAndBtns();
    // canvas.setBackgroundColor(roxoClaro, canvas.renderAll.bind(canvas));
};

function createBigButton(text) {
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

    $(num).append(text);
    $(num).appendTo(span);
    $(span).appendTo($('#container'));
    //posiciona o botao
    $(span)[0].style.position = "absolute";
    $(span)[0].style.left = canvasWidth / 2 - 100;
    $(span)[0].style.top = canvasHeight / 2 - 100;

    $("#btn-start").click(function() {
        if (nextLevel <= 13) {
            $("#btn-start").remove();
            goToNextLevel();
        };
    });
};

function loadTop() {
    if (!topBar) {
        topBar = new fabric.Rect({
            width: canvasWidth,
            height: alturaTop,
            fill: roxoEscuro,
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

function clearCanvasAndBtns() {
    clearCanvas(false);
    var indice = Math.floor(Math.random() * 3);
    changeBackgroundColor(sequenciaCores[indice])
    $('.canvas-container').siblings().remove();
};

function playSoundAnswer(correct) {
    var audioElement = document.createElement('audio');
    if (correct) {
        audioElement.setAttribute('src', 'audio/correct_answer.mp3');
    } else {
        audioElement.setAttribute('src', 'audio/wrong_answer.mp3');
    };
    audioElement.play();
};

function changeBackgroundColor(color) {
    switch (color) {
        case 'verde':
            if (topBar) {
                topBar.setFill(verdeEscuro);
            };
            canvas.setBackgroundColor(verdeClaro, canvas.renderAll.bind(canvas));
            break;
        case 'azul':
            if (topBar) {
                topBar.setFill(azulEscuro);
            };
            canvas.setBackgroundColor(azulClaro, canvas.renderAll.bind(canvas));
            break;
        case 'roxo':
            if (topBar) {
                topBar.setFill(roxoEscuro);
            };
            canvas.setBackgroundColor(roxoClaro, canvas.renderAll.bind(canvas));
            break;
    }
};

//====== LEVEL 1 =====================================

//Variaveis globais level1
var level1_nextBtn,
    level1_objetoIndex = 0,
    tentativasPorImagem;

var level1_images = {
    "bacalhau": images["bacalhau"],
    "erva": images["erva"],
    "brinquedo": images["brinquedo"],
    "mascara": images["mascara"],
    "lapis": images["lapis"],
    "mao": images["mao"]
};

function level1_load() {
    clearCanvas(false);
    loadHelpBtn('blue', 1);
    level1_loadButtons();
    level1_loadEvents();
    level1_loadImage(Object.keys(level1_images)[level1_objetoIndex]);
    changeBackgroundColor(sequenciaCores[0]);
    tentativasPorImagem = 1;
};

function level1_loadButtons() {
    var span, num, divBtns;
    var colors = ['yellow'];

    //cria uma div para os 5 botoes
    divBtns = $(document.createElement('div'));
    $(divBtns).attr({
        id: 'level1_buttons'
    });

    //cria os 5 botoes e anexa ao div criado anteriormente
    for (var i = 0; i < 5; i++) {
        span = $(document.createElement('span'));
        num = $(document.createElement('i'));
        $(span).attr({
            id: 'btn-' + (i + 1),
            class: 'btn-' + colors[i % colors.length] + ' btn btn-75',
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
        var solution = solutions[1][Object.keys(level1_images)[level1_objetoIndex]];

        if (solution === num) {
            $(this).addClass('btn-valid btn-valid-55');
            playSoundAnswer(true);
            level1_correctAnswer();

            var image = Object.keys(level1_images)[level1_objetoIndex];
            var result = new ResultGameNSilabas('aluno', image, tentativasPorImagem);
            ResultsGame1ByStudent.push(result);
        } else {
            $(this).addClass('btn-error btn-error-55');
            playSoundAnswer(false);
            tentativasPorImagem += 1;
        };
    });
};

function level1_loadEvents() {
    level1_btnAnswer();
    var sizeOfImages = Object.keys(level1_images).length;

    $('#btn-next').click(function(btn) {
        if (level1_objetoIndex == sizeOfImages - 1) {
            clearCanvasAndBtns();
            sendResultsGame1();
            createBigButton('Jogo 2');
        } else {
            level1_resetButtons();
            level1_loadNextImage();
        };
    });
};

function level1_resetButtons() {
    $('.btn').removeClass('btn-disabled');
    $('.btn').removeClass('btn-valid btn-valid-55');
    $('.btn').removeClass('btn-error btn-error-55');
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

    var sizeOfImages = Object.keys(level1_images).length;
    if (level1_objetoIndex == sizeOfImages - 1) {
        $(level1_nextBtn).text('Fim');
    };
};

function level1_loadNextImage() {
    tentativasPorImagem = 1;
    level1_objetoIndex += 1;
    level1_loadImage(Object.keys(level1_images)[level1_objetoIndex]);
};

function level1_loadImage(objeto) {
    //clear canvas
    clearCanvas(false);

    //add image to canvas
    fabric.Image.fromURL(level1_images[objeto], function(img) {
        canvas.add(img.set({
            left: canvasWidth / 2,
            top: canvasHeight / 3,
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true
        }).scale(0.7));

        img.on('mousedown', function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', audio[objeto]);
            audioElement.play();
        });
    });
};

//====== LEVEL 2 =====================================

//Variaveis globais level2
var level2_nextBtn,
    level2_roundNumber = 1,
    level2_numCorrectAnswers = 0,
    level2_maxCorrectAnswers = 3,
    level2_wrongAnswers;

var level2_silabas = {
    "a": audio["a"],
    "o": images["o"],
    "ar": images["ar"]
};

var level2_imagesByRound = {
    1: {
        "abelha": images["abelha"],
        "harpa": images["harpa"],
        "anjo": images["anjo"],
        "alce": images["alce"],
        "agulha": images["agulha"],
        "anel": images["anel"]
    },
    2: {
        "bola": images["bola"],
        "ombro": images["ombro"],
        "osso": images["osso"],
        "ovo": images["ovo"],
        "oculos": images["oculos"],
        "olho": images["olho"]
    },
    3: {
        "algema": images["algema"],
        "arvore": images["arvore"],
        "afia": images["afia"],
        "arco_iris": images["arco_iris"],
        "arco": images["arco"],
        "aspirador": images["aspirador"]
    }
};

function level2_load() {
    clearCanvas(true);
    loadHelpBtn('green', 2);
    level2_loadSilaba(Object.keys(level2_silabas)[level2_roundNumber - 1]);
    level2_loadImagesAndSounds(level2_roundNumber);
    level2_loadNextButton();
    level2_loadEvents();
    changeBackgroundColor(sequenciaCores[level2_roundNumber - 1]);
    level2_wrongAnswers = 0;
};

function level2_loadSilaba(silaba) {
    fabric.Image.fromURL('images/speaker.png', function(img) {
        canvas.add(img.set({
            left: canvasWidth / 2,
            top: 50,
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true
        }).scale(0.45));

        img.on('mousedown', function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', audio[silaba]);
            audioElement.play();
        });
    });
};

function level2_loadImagesAndSounds(round) {
    clearCanvas(true);

    var img = level2_imagesByRound[round];

    level2_loadImage(Object.keys(img)[0], canvasWidth * 0.20, canvasHeight * 0.30);
    level2_loadImage(Object.keys(img)[1], canvasWidth * 0.45, canvasHeight * 0.30);
    level2_loadImage(Object.keys(img)[2], canvasWidth * 0.70, canvasHeight * 0.30);
    level2_loadImage(Object.keys(img)[3], canvasWidth * 0.20, canvasHeight * 0.70);
    level2_loadImage(Object.keys(img)[4], canvasWidth * 0.45, canvasHeight * 0.70);
    level2_loadImage(Object.keys(img)[5], canvasWidth * 0.70, canvasHeight * 0.70);

    $(".btn").remove();

    level2_loadAnswerButton(Object.keys(img)[0], canvasWidth * 0.20, canvasHeight * 0.42);
    level2_loadAnswerButton(Object.keys(img)[1], canvasWidth * 0.45, canvasHeight * 0.42);
    level2_loadAnswerButton(Object.keys(img)[2], canvasWidth * 0.70, canvasHeight * 0.42);
    level2_loadAnswerButton(Object.keys(img)[3], canvasWidth * 0.20, canvasHeight * 0.82);
    level2_loadAnswerButton(Object.keys(img)[4], canvasWidth * 0.45, canvasHeight * 0.82);
    level2_loadAnswerButton(Object.keys(img)[5], canvasWidth * 0.70, canvasHeight * 0.82);
};

function level2_loadImage(objeto, _left, _top) {
    fabric.Image.fromURL(images[objeto], function(img) {
        canvas.add(img.set({
            left: _left + 30,
            top: _top,
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true
        }).scale(0.32));

        img.on('mousedown', function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', audio[objeto]);
            audioElement.play();
        });
    });
};

function level2_loadAnswerButton(figureName, left, top) {
    var span, num;
    var colors = ['blue'];

    span = $(document.createElement('span'));
    num = $(document.createElement('i'));
    $(span).attr({
        id: 'btn-' + figureName,
        class: 'btn-' + colors[0] + ' btn btn-40',
        value: figureName
    });

    $(num).appendTo(span);
    $(span).appendTo($('#container'));
    //posiciona o botao
    $(span)[0].style.position = "absolute";
    $(span)[0].style.left = left;
    $(span)[0].style.top = top;
};

function level2_loadEvents() {
    level2_btnAnswer();
    var numberOfRounds = Object.keys(level2_silabas).length;

    $('#btn-next').click(function(btn) {
        if (level2_roundNumber == numberOfRounds) {
            clearCanvasAndBtns();
            createBigButton('Jogo 3');
        } else {
            level2_loadNextRound();
            level2_resetButtons();
        };
    });
};

function level2_loadNextRound() {
    level2_roundNumber += 1;
    level2_wrongAnswers = 0;
    level2_loadSilaba(Object.keys(level2_silabas)[level2_roundNumber - 1]);
    level2_loadImagesAndSounds(level2_roundNumber);
    changeBackgroundColor(sequenciaCores[level2_roundNumber - 1]);
};

function level2_btnAnswer() {
    $('.btn').click(function() {
        var valor = $(this).attr("value");
        var solution = solutions[2][level2_roundNumber - 1][valor];

        if (solution == true) {
            $(this).addClass('btn-valid btn-valid-25');
            playSoundAnswer(true);
            level2_correctAnswer();
        } else {
            $(this).addClass('btn-error btn-error-25');
            playSoundAnswer(false);
            level2_wrongAnswers += 1;
        };
        $(this).addClass('btn-disabled');
        $(this).unbind('click');
        $(this).css("cursor", 'default');
    });
};

function level2_resetButtons() {
    $('.btn').removeClass('btn-disabled');
    $('.btn').removeClass('btn-valid btn-valid-25');
    $('.btn').removeClass('btn-error btn-error-25');
    //add handler
    level2_btnAnswer();
    $('.btn').css("cursor", 'pointer');
    $('.btn').prop('disabled', false);
    $(level2_nextBtn).prop('disabled', true);
};

function level2_correctAnswer() {
    level2_numCorrectAnswers++;

    if (level2_numCorrectAnswers == level2_maxCorrectAnswers) {
        $('.btn').addClass('btn-disabled');
        //remove handler
        $('.btn').unbind('click');
        $('.btn').css("cursor", 'default');
        $(level2_nextBtn).prop('disabled', false);
        level2_numCorrectAnswers = 0;

        var silaba = Object.keys(level2_silabas)[level2_roundNumber - 1];
        var result = new ResultGameCorrectSilaba('aluno', 2, silaba, level2_wrongAnswers);
        ResultsGame2ByStudent.push(result);

        var numberOfRounds = Object.keys(level2_silabas).length;
        if (level2_roundNumber == numberOfRounds) {
            $(level2_nextBtn).text('Fim');
        };
    };
};

function level2_loadNextButton() {
    //cria o botão para passar à imagem seguinte
    level2_nextBtn = $(document.createElement('button'));
    $(level2_nextBtn).attr({
        id: 'btn-next',
        class: 'button-next'
    });
    $(level2_nextBtn).prop('disabled', true);
    $(level2_nextBtn).append('Próximo');

    //anexa o botao ao container e posiciona-o
    $(level2_nextBtn).appendTo($('#container'));
    $(level2_nextBtn)[0].style.position = "absolute";
    $(level2_nextBtn)[0].style.left = canvasWidth - ($(level2_nextBtn)[0].offsetWidth) - 20;
    $(level2_nextBtn)[0].style.top = canvasHeight - ($(level2_nextBtn)[0].offsetHeight) - 20;
};

//====== LEVEL 3 =====================================

//Variaveis globais level3
var level3_nextBtn,
    level3_roundNumber = 1,
    level3_numCorrectAnswers = 0,
    level3_maxCorrectAnswers = 3,
    level3_wrongAnswers;

var level3_silabas = {
    "mel": audio["mel"],
    "pas": images["pas"],
    "cir": images["cir"]
};

var level3_imagesByRound = {
    1: {
        "melga": images["melga"],
        "mesmo": images["mesmo"],
        "melgaco": images["melgaco"],
        "melro": images["melro"],
        "melado": images["melado"],
        "marmelo": images["marmelo"]
    },
    2: {
        "pastilha": images["pastilha"],
        "passaro": images["passaro"],
        "pao": images["pao"],
        "partir": images["partir"],
        "pastelaria": images["pastelaria"],
        "pastor": images["pastor"]
    },
    3: {
        "circo": images["circo"],
        "cinto": images["cinto"],
        "circular": images["circular"],
        "suspiro": images["suspiro"],
        "cesto": images["cesto"],
        "circulo": images["circulo"]
    }
};

function level3_load() {
    clearCanvas(true);
    loadHelpBtn('yellow', 3);
    level3_loadSilaba(Object.keys(level3_silabas)[level3_roundNumber - 1]);
    level3_loadBuzzerBtnAndSounds(level3_roundNumber);
    level3_loadNextButton();
    level3_loadEvents();
    changeBackgroundColor(sequenciaCores[level3_roundNumber - 1]);
    level3_wrongAnswers = 0;
};

function level3_loadSilaba(silaba) {
    fabric.Image.fromURL('images/speaker.png', function(img) {
        canvas.add(img.set({
            left: canvasWidth / 2,
            top: 50,
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true
        }).scale(0.45));

        img.on('mousedown', function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', audio[silaba]);
            audioElement.play();
        });
    });
};

function level3_loadBuzzerBtnAndSounds(round) {
    clearCanvas(true);
    $(".buzzerBtn").remove();

    var img = level3_imagesByRound[round];

    level3_loadBuzzerBtn(Object.keys(img)[0], canvasWidth * 0.20 - 35, canvasHeight * 0.24);
    level3_loadBuzzerBtn(Object.keys(img)[1], canvasWidth * 0.45 - 35, canvasHeight * 0.24);
    level3_loadBuzzerBtn(Object.keys(img)[2], canvasWidth * 0.70 - 35, canvasHeight * 0.24);
    level3_loadBuzzerBtn(Object.keys(img)[3], canvasWidth * 0.20 - 35, canvasHeight * 0.64);
    level3_loadBuzzerBtn(Object.keys(img)[4], canvasWidth * 0.45 - 35, canvasHeight * 0.64);
    level3_loadBuzzerBtn(Object.keys(img)[5], canvasWidth * 0.70 - 35, canvasHeight * 0.64);

    $(".btn").remove();

    level3_loadAnswerButton(Object.keys(img)[0], canvasWidth * 0.20, canvasHeight * 0.44);
    level3_loadAnswerButton(Object.keys(img)[1], canvasWidth * 0.45, canvasHeight * 0.44);
    level3_loadAnswerButton(Object.keys(img)[2], canvasWidth * 0.70, canvasHeight * 0.44);
    level3_loadAnswerButton(Object.keys(img)[3], canvasWidth * 0.20, canvasHeight * 0.84);
    level3_loadAnswerButton(Object.keys(img)[4], canvasWidth * 0.45, canvasHeight * 0.84);
    level3_loadAnswerButton(Object.keys(img)[5], canvasWidth * 0.70, canvasHeight * 0.84);
};

function level3_loadBuzzerBtn(objeto, _left, _top) {
    var btn;

    btn = $(document.createElement('button'));
    $(btn).attr({
        id: 'button-' + objeto,
        class: 'buzzerBtn',
        value: objeto
    });

    $(btn).appendTo($('#container'));
    //posiciona o botao
    $(btn)[0].style.position = "absolute";
    $(btn)[0].style.left = _left;
    $(btn)[0].style.top = _top;
};

function level3_loadAnswerButton(figureName, left, top) {
    var span, num;
    var colors = ['green'];

    span = $(document.createElement('span'));
    num = $(document.createElement('i'));
    $(span).attr({
        id: 'btn-' + figureName,
        class: 'btn-' + colors[0] + ' btn btn-40',
        value: figureName
    });

    $(num).appendTo(span);
    $(span).appendTo($('#container'));
    //posiciona o botao
    $(span)[0].style.position = "absolute";
    $(span)[0].style.left = left;
    $(span)[0].style.top = top;
};

function level3_loadEvents() {
    level3_btnAnswer();
    level3_btnButton();
    var numberOfRounds = Object.keys(level3_silabas).length;

    $('#btn-next').click(function(btn) {
        if (level3_roundNumber == numberOfRounds) {
            clearCanvasAndBtns();
            createBigButton('Jogo 4');
        } else {
            level3_loadNextRound();
            level3_resetButtons();
        };
    });
};

function level3_btnButton() {
    $('button').click(function() {
        var valor = $(this).attr("value");
        var audioElement = document.createElement('audio');

        audioElement.setAttribute('src', audio[valor]);
        audioElement.play();
    });
}

function level3_loadNextRound() {
    level3_roundNumber += 1;
    level3_wrongAnswers = 0;
    level3_loadSilaba(Object.keys(level3_silabas)[level3_roundNumber - 1]);
    level3_loadBuzzerBtnAndSounds(level3_roundNumber);
    changeBackgroundColor(sequenciaCores[level3_roundNumber - 1]);
};

function level3_btnAnswer() {
    $('.btn').click(function() {
        var valor = $(this).attr("value");
        var solution = solutions[3][level3_roundNumber - 1][valor];

        if (solution == true) {
            $(this).addClass('btn-valid btn-valid-25');
            playSoundAnswer(true);
            level3_correctAnswer();
        } else {
            $(this).addClass('btn-error btn-error-25');
            playSoundAnswer(false);
            level3_wrongAnswers += 1;
        };
        $(this).addClass('btn-disabled');
        $(this).unbind('click');
        $(this).css("cursor", 'default');
    });
};

function level3_resetButtons() {
    $('.btn').removeClass('btn-disabled');
    $('.btn').removeClass('btn-valid btn-valid-25');
    $('.btn').removeClass('btn-error btn-error-25');
    //add handler
    level3_btnAnswer();
    level3_btnButton();
    $('.btn').css("cursor", 'pointer');
    $('.btn').prop('disabled', false);
    $(level3_nextBtn).prop('disabled', true);
};

function level3_correctAnswer() {
    level3_numCorrectAnswers++;

    if (level3_numCorrectAnswers == level3_maxCorrectAnswers) {
        $('.btn').addClass('btn-disabled');
        //remove handler
        $('.btn').unbind('click');
        $('.btn').css("cursor", 'default');
        $(level3_nextBtn).prop('disabled', false);
        level3_numCorrectAnswers = 0;

        var silaba = Object.keys(level3_silabas)[level3_roundNumber - 1];
        var result = new ResultGameCorrectSilaba('aluno', 3, silaba, level3_wrongAnswers);
        ResultsGame3ByStudent.push(result);

        var numberOfRounds = Object.keys(level3_silabas).length;
        if (level3_roundNumber == numberOfRounds) {
            $(level3_nextBtn).text('Fim');
        };
    };
};

function level3_loadNextButton() {
    //cria o botão para passar à imagem seguinte
    level3_nextBtn = $(document.createElement('button'));
    $(level3_nextBtn).attr({
        id: 'btn-next',
        class: 'button-next'
    });
    $(level3_nextBtn).prop('disabled', true);
    $(level3_nextBtn).append('Próximo');

    //anexa o botao ao container e posiciona-o
    $(level3_nextBtn).appendTo($('#container'));
    $(level3_nextBtn)[0].style.position = "absolute";
    $(level3_nextBtn)[0].style.left = canvasWidth - ($(level3_nextBtn)[0].offsetWidth) - 20;
    $(level3_nextBtn)[0].style.top = canvasHeight - ($(level3_nextBtn)[0].offsetHeight) - 20;
};

//====== LEVEL 4 =====================================


//Variaveis globais level3
var level4_nextBtn,
    level4_roundNumber = 1,
    level4_numCorrectAnswers = 0,
    level4_maxCorrectAnswers = 3,
    level4_wrongAnswers;

var level4_silabas = {
    "o_u_jogo4": audio["o_u_jogo4"],
    "a": images["a"],
    "ar": images["ar"]
};

var level4_imagesByRound = {
    1: {
        "copo": images["copo"],
        "aspirador": images["aspirador"],
        "comboio": images["comboio"],
        "avestruz": images["avestruz"],
        "papagaio": images["papagaio"],
        "centeio": images["centeio"]
    },
    2: {
        "saia": images["saia"],
        "mesas": images["mesas"],
        "boia": images["boia"],
        "uva": images["uva"],
        "grua": images["grua"],
        "avental": images["avental"]
    },
    3: {
        "barrar": images["barrar"],
        "pentear": images["pentear"],
        "cantar": images["cantar"],
        "voar": images["voar"],
        "piar": images["piar"],
        "abracar": images["abracar"]
    }
};

function level4_load() {
    clearCanvas(true);
    loadHelpBtn('blue', 4);
    level4_loadSilaba(Object.keys(level4_silabas)[level4_roundNumber - 1]);
    level4_loadImagesAndSounds(level4_roundNumber);
    level4_loadNextButton();
    level4_loadEvents();
    changeBackgroundColor(sequenciaCores[level4_roundNumber - 1]);
    level4_wrongAnswers = 0;
};

function level4_loadSilaba(silaba) {
    fabric.Image.fromURL('images/speaker.png', function(img) {
        canvas.add(img.set({
            left: canvasWidth / 2,
            top: 50,
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true
        }).scale(0.45));

        img.on('mousedown', function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', audio[silaba]);
            audioElement.play();
        });
    });
};

function level4_loadImagesAndSounds(round) {
    clearCanvas(true);

    var img = level4_imagesByRound[round];

    level4_loadImage(Object.keys(img)[0], canvasWidth * 0.20, canvasHeight * 0.30);
    level4_loadImage(Object.keys(img)[1], canvasWidth * 0.45, canvasHeight * 0.30);
    level4_loadImage(Object.keys(img)[2], canvasWidth * 0.70, canvasHeight * 0.30);
    level4_loadImage(Object.keys(img)[3], canvasWidth * 0.20, canvasHeight * 0.70);
    level4_loadImage(Object.keys(img)[4], canvasWidth * 0.45, canvasHeight * 0.70);
    level4_loadImage(Object.keys(img)[5], canvasWidth * 0.70, canvasHeight * 0.70);

    $(".btn").remove();

    level4_loadAnswerButton(Object.keys(img)[0], canvasWidth * 0.20, canvasHeight * 0.42);
    level4_loadAnswerButton(Object.keys(img)[1], canvasWidth * 0.45, canvasHeight * 0.42);
    level4_loadAnswerButton(Object.keys(img)[2], canvasWidth * 0.70, canvasHeight * 0.42);
    level4_loadAnswerButton(Object.keys(img)[3], canvasWidth * 0.20, canvasHeight * 0.82);
    level4_loadAnswerButton(Object.keys(img)[4], canvasWidth * 0.45, canvasHeight * 0.82);
    level4_loadAnswerButton(Object.keys(img)[5], canvasWidth * 0.70, canvasHeight * 0.82);
};

function level4_loadImage(objeto, _left, _top) {
    fabric.Image.fromURL(images[objeto], function(img) {
        canvas.add(img.set({
            left: _left + 30,
            top: _top,
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true
        }).scale(0.25));

        img.on('mousedown', function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', audio[objeto]);
            audioElement.play();
        });
    });
};

function level4_loadAnswerButton(figureName, left, top) {
    var span, num;
    var colors = ['yellow'];

    span = $(document.createElement('span'));
    num = $(document.createElement('i'));
    $(span).attr({
        id: 'btn-' + figureName,
        class: 'btn-' + colors[0] + ' btn btn-40',
        value: figureName
    });

    $(num).appendTo(span);
    $(span).appendTo($('#container'));
    //posiciona o botao
    $(span)[0].style.position = "absolute";
    $(span)[0].style.left = left;
    $(span)[0].style.top = top;
};

function level4_loadEvents() {
    level4_btnAnswer();
    var numberOfRounds = Object.keys(level4_silabas).length;

    $('#btn-next').click(function(btn) {
        if (level4_roundNumber == numberOfRounds) {
            clearCanvasAndBtns();
            createBigButton('Jogo 5');
        } else {
            level4_loadNextRound();
            level4_resetButtons();
        };
    });
};

function level4_loadNextRound() {
    level4_roundNumber += 1;
    level4_wrongAnswers = 0;
    level4_loadSilaba(Object.keys(level4_silabas)[level4_roundNumber - 1]);
    level4_loadImagesAndSounds(level4_roundNumber);
    changeBackgroundColor(sequenciaCores[level4_roundNumber - 1]);
};

function level4_btnAnswer() {
    $('.btn').click(function() {
        var valor = $(this).attr("value");
        var solution = solutions[4][level4_roundNumber - 1][valor];

        if (solution == true) {
            $(this).addClass('btn-valid btn-valid-25');
            playSoundAnswer(true);
            level4_correctAnswer();
        } else {
            $(this).addClass('btn-error btn-error-25');
            playSoundAnswer(false);
            level4_wrongAnswers += 1;
        };
        $(this).addClass('btn-disabled');
        $(this).unbind('click');
        $(this).css("cursor", 'default');
    });
};

function level4_resetButtons() {
    $('.btn').removeClass('btn-disabled');
    $('.btn').removeClass('btn-valid btn-valid-25');
    $('.btn').removeClass('btn-error btn-error-25');
    //add handler
    level4_btnAnswer();
    $('.btn').css("cursor", 'pointer');
    $('.btn').prop('disabled', false);
    $(level4_nextBtn).prop('disabled', true);
};

function level4_correctAnswer() {
    level4_numCorrectAnswers++;

    if (level4_numCorrectAnswers == level4_maxCorrectAnswers) {
        $('.btn').addClass('btn-disabled');
        //remove handler
        $('.btn').unbind('click');
        $('.btn').css("cursor", 'default');
        $(level4_nextBtn).prop('disabled', false);
        level4_numCorrectAnswers = 0;

        var silaba = Object.keys(level4_silabas)[level4_roundNumber - 1];
        var result = new ResultGameCorrectSilaba('aluno', 4, silaba, level4_wrongAnswers);
        ResultsGame4ByStudent.push(result);

        var numberOfRounds = Object.keys(level4_silabas).length;
        if (level4_roundNumber == numberOfRounds) {
            $(level4_nextBtn).text('Fim');
        };
    };
};

function level4_loadNextButton() {
    //cria o botão para passar à imagem seguinte
    level4_nextBtn = $(document.createElement('button'));
    $(level4_nextBtn).attr({
        id: 'btn-next',
        class: 'button-next'
    });
    $(level4_nextBtn).prop('disabled', true);
    $(level4_nextBtn).append('Próximo');

    //anexa o botao ao container e posiciona-o
    $(level4_nextBtn).appendTo($('#container'));
    $(level4_nextBtn)[0].style.position = "absolute";
    $(level4_nextBtn)[0].style.left = canvasWidth - ($(level4_nextBtn)[0].offsetWidth) - 20;
    $(level4_nextBtn)[0].style.top = canvasHeight - ($(level4_nextBtn)[0].offsetHeight) - 20;
};

//====== LEVEL 5 =====================================

//Variaveis globais level5
var level5_nextBtn,
    level5_roundNumber = 1,
    level5_numCorrectAnswers = 0,
    level5_maxCorrectAnswers = 3,
    level5_wrongAnswers;

var level5_silabas = {
    "gir": audio["gir"],
    "tor": images["tor"],
    "car": images["car"]
};

var level5_imagesByRound = {
    1: {
        "fugir": images["fugir"],
        "chegar": images["chegar"],
        "fingir": images["fingir"],
        "partir": images["partir"],
        "corrigir": images["corrigir"],
        "sair": images["sair"]
    },
    2: {
        "sobrepor": images["sobrepor"],
        "trator": images["trator"],
        "adamastor": images["adamastor"],
        "apito": images["apito"],
        "castor": images["castor"],
        "computador": images["computador"]
    },
    3: {
        "convidar": images["convidar"],
        "fechar": images["fechar"],
        "secar": images["secar"],
        "acucar": images["acucar"],
        "trocar": images["trocar"],
        "cacar": images["cacar"]
    }
};

function level5_load() {
    clearCanvas(true);
    loadHelpBtn('green', 5);
    level5_loadSilaba(Object.keys(level5_silabas)[level5_roundNumber - 1]);
    level5_loadBuzzerBtnAndSounds(level5_roundNumber);
    level5_loadNextButton();
    level5_loadEvents();
    changeBackgroundColor(sequenciaCores[level5_roundNumber - 1]);
    level5_wrongAnswers = 0;
};

function level5_loadSilaba(silaba) {
    fabric.Image.fromURL('images/speaker.png', function(img) {
        canvas.add(img.set({
            left: canvasWidth / 2,
            top: 50,
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true
        }).scale(0.45));

        img.on('mousedown', function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', audio[silaba]);
            audioElement.play();
        });
    });
};

function level5_loadBuzzerBtnAndSounds(round) {
    clearCanvas(true);
    $(".buzzerBtn").remove();

    var img = level5_imagesByRound[round];

    level5_loadBuzzerBtn(Object.keys(img)[0], canvasWidth * 0.20 - 35, canvasHeight * 0.24);
    level5_loadBuzzerBtn(Object.keys(img)[1], canvasWidth * 0.45 - 35, canvasHeight * 0.24);
    level5_loadBuzzerBtn(Object.keys(img)[2], canvasWidth * 0.70 - 35, canvasHeight * 0.24);
    level5_loadBuzzerBtn(Object.keys(img)[3], canvasWidth * 0.20 - 35, canvasHeight * 0.64);
    level5_loadBuzzerBtn(Object.keys(img)[4], canvasWidth * 0.45 - 35, canvasHeight * 0.64);
    level5_loadBuzzerBtn(Object.keys(img)[5], canvasWidth * 0.70 - 35, canvasHeight * 0.64);

    $(".btn").remove();

    level5_loadAnswerButton(Object.keys(img)[0], canvasWidth * 0.20, canvasHeight * 0.44);
    level5_loadAnswerButton(Object.keys(img)[1], canvasWidth * 0.45, canvasHeight * 0.44);
    level5_loadAnswerButton(Object.keys(img)[2], canvasWidth * 0.70, canvasHeight * 0.44);
    level5_loadAnswerButton(Object.keys(img)[3], canvasWidth * 0.20, canvasHeight * 0.84);
    level5_loadAnswerButton(Object.keys(img)[4], canvasWidth * 0.45, canvasHeight * 0.84);
    level5_loadAnswerButton(Object.keys(img)[5], canvasWidth * 0.70, canvasHeight * 0.84);
};

function level5_loadBuzzerBtn(objeto, _left, _top) {
    var btn;

    btn = $(document.createElement('button'));
    $(btn).attr({
        id: 'button-' + objeto,
        class: 'buzzerBtn',
        value: objeto
    });

    $(btn).appendTo($('#container'));
    //posiciona o botao
    $(btn)[0].style.position = "absolute";
    $(btn)[0].style.left = _left;
    $(btn)[0].style.top = _top;
};

function level5_loadAnswerButton(figureName, left, top) {
    var span, num;
    var colors = ['blue'];

    span = $(document.createElement('span'));
    num = $(document.createElement('i'));
    $(span).attr({
        id: 'btn-' + figureName,
        class: 'btn-' + colors[0] + ' btn btn-40',
        value: figureName
    });

    $(num).appendTo(span);
    $(span).appendTo($('#container'));
    //posiciona o botao
    $(span)[0].style.position = "absolute";
    $(span)[0].style.left = left;
    $(span)[0].style.top = top;
};

function level5_loadEvents() {
    level5_btnAnswer();
    level5_btnButton();
    var numberOfRounds = Object.keys(level5_silabas).length;

    $('#btn-next').click(function(btn) {
        if (level5_roundNumber == numberOfRounds) {
            clearCanvasAndBtns();
            createBigButton('Jogo 6');
        } else {
            level5_loadNextRound();
            level5_resetButtons();
        };
    });
};

function level5_btnButton() {
    $('button').click(function() {
        var valor = $(this).attr("value");
        var audioElement = document.createElement('audio');

        audioElement.setAttribute('src', audio[valor]);
        audioElement.play();
    });
}

function level5_loadNextRound() {
    level5_roundNumber += 1;
    level5_wrongAnswers = 0;
    level5_loadSilaba(Object.keys(level5_silabas)[level5_roundNumber - 1]);
    level5_loadBuzzerBtnAndSounds(level5_roundNumber);
    changeBackgroundColor(sequenciaCores[level5_roundNumber - 1]);
};

function level5_btnAnswer() {
    $('.btn').click(function() {
        var valor = $(this).attr("value");
        var solution = solutions[5][level5_roundNumber - 1][valor];

        if (solution == true) {
            $(this).addClass('btn-valid btn-valid-25');
            playSoundAnswer(true);
            level5_correctAnswer();
        } else {
            $(this).addClass('btn-error btn-error-25');
            playSoundAnswer(false);
            level5_wrongAnswers += 1;
        };
        $(this).addClass('btn-disabled');
        $(this).unbind('click');
        $(this).css("cursor", 'default');
    });
};

function level5_resetButtons() {
    $('.btn').removeClass('btn-disabled');
    $('.btn').removeClass('btn-valid btn-valid-25');
    $('.btn').removeClass('btn-error btn-error-25');
    //add handler
    level5_btnAnswer();
    level5_btnButton();
    $('.btn').css("cursor", 'pointer');
    $('.btn').prop('disabled', false);
    $(level5_nextBtn).prop('disabled', true);
};

function level5_correctAnswer() {
    level5_numCorrectAnswers++;

    if (level5_numCorrectAnswers == level5_maxCorrectAnswers) {
        $('.btn').addClass('btn-disabled');
        //remove handler
        $('.btn').unbind('click');
        $('.btn').css("cursor", 'default');
        $(level5_nextBtn).prop('disabled', false);
        level5_numCorrectAnswers = 0;

        var silaba = Object.keys(level5_silabas)[level5_roundNumber - 1];
        var result = new ResultGameCorrectSilaba('aluno', 5, silaba, level5_wrongAnswers);
        ResultsGame5ByStudent.push(result);

        var numberOfRounds = Object.keys(level5_silabas).length;
        if (level5_roundNumber == numberOfRounds) {
            $(level5_nextBtn).text('Fim');
        };
    };
};

function level5_loadNextButton() {
    //cria o botão para passar à imagem seguinte
    level5_nextBtn = $(document.createElement('button'));
    $(level5_nextBtn).attr({
        id: 'btn-next',
        class: 'button-next'
    });
    $(level5_nextBtn).prop('disabled', true);
    $(level5_nextBtn).append('Próximo');

    //anexa o botao ao container e posiciona-o
    $(level5_nextBtn).appendTo($('#container'));
    $(level5_nextBtn)[0].style.position = "absolute";
    $(level5_nextBtn)[0].style.left = canvasWidth - ($(level5_nextBtn)[0].offsetWidth) - 20;
    $(level5_nextBtn)[0].style.top = canvasHeight - ($(level5_nextBtn)[0].offsetHeight) - 20;
};

//====== LEVEL 6 =====================================

//Variaveis globais level6
var level6_nextBtn,
    level6_roundNumber = 1,
    level6_imgClicked = [];

var level6_imagesByRound = {
    1: {
        "macaco": images["macaco"],
        "martelo": images["martelo"],
        "maca": images["maca"],
        "mochila": images["mochila"]
    },
    2: {
        "camelo": images["camelo"],
        "casa": images["casa"],
        "cagado": images["cagado"],
        "camisa": images["camisa"]
    },
    3: {
        "pistola": images["pistola"],
        "pincel": images["pincel"],
        "piano": images["piano"],
        "pinha": images["pinha"]
    }
};

function level6_load() {
    clearCanvas(false);
    loadHelpBtn('yellow', 6);
    level6_loadImagesAndSounds(level6_roundNumber);
    level6_loadNextButton();
    level6_loadEvents();
    changeBackgroundColor(sequenciaCores[level6_roundNumber - 1]);
};

function level6_loadImagesAndSounds(round) {
    clearCanvas(false);
    $(".btn").remove();

    var img = level6_imagesByRound[round];
    level6_loadImage(Object.keys(img)[0], canvasWidth * 0.30 - 30, canvasHeight * 0.30);
    level6_loadImage(Object.keys(img)[1], canvasWidth * 0.60 - 30, canvasHeight * 0.30);
    level6_loadImage(Object.keys(img)[2], canvasWidth * 0.30 - 30, canvasHeight * 0.70);
    level6_loadImage(Object.keys(img)[3], canvasWidth * 0.60 - 30, canvasHeight * 0.70);

    level6_loadAnswerButton(Object.keys(img)[0], canvasWidth * 0.30, canvasHeight * 0.42);
    level6_loadAnswerButton(Object.keys(img)[1], canvasWidth * 0.60, canvasHeight * 0.42);
    level6_loadAnswerButton(Object.keys(img)[2], canvasWidth * 0.30, canvasHeight * 0.82);
    level6_loadAnswerButton(Object.keys(img)[3], canvasWidth * 0.60, canvasHeight * 0.82);
};

function level6_loadImage(objeto, _left, _top) {
    fabric.Image.fromURL(images[objeto], function(img) {
        canvas.add(img.set({
            left: _left + 30,
            top: _top,
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true
        }).scale(0.32));

        img.on('mousedown', function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', audio[objeto]);
            audioElement.play();
        });
    });
};

function level6_loadAnswerButton(figureName, left, top) {
    var span, num;
    var colors = ['yellow'];

    span = $(document.createElement('span'));
    num = $(document.createElement('i'));
    $(span).attr({
        id: 'btn-' + figureName,
        class: 'btn-' + colors[0] + ' btn btn-40',
        value: figureName
    });

    $(num).appendTo(span);
    $(span).appendTo($('#container'));
    //posiciona o botao
    $(span)[0].style.position = "absolute";
    $(span)[0].style.left = left;
    $(span)[0].style.top = top;

    $(span).on("click", function() {
        $(this).removeClass('btn-yellow');
        $(this).addClass('btn-green');
        level6_verificaResposta(figureName);
    })
};

function level6_verificaResposta(figureName) {
    if (level6_imgClicked.length > 0 && level6_imgClicked[0] == figureName) {
        return;
    };

    level6_imgClicked.push(figureName);

    if (level6_imgClicked.length > 1) {
        var imagemPar = solutions[6][level6_roundNumber - 1][figureName];
        if (imagemPar != undefined && imagemPar == level6_imgClicked[0]) {
            playSoundAnswer(true);
            $('.btn').addClass('btn-yellow');
            $('.btn').removeClass('btn-green');
            $('#btn-' + level6_imgClicked[0]).addClass('btn-valid btn-valid-25');
            $('#btn-' + level6_imgClicked[1]).addClass('btn-valid btn-valid-25');
            level6_correctAnswer();
        } else {
            playSoundAnswer(false);
            $('#btn-' + level6_imgClicked[0]).addClass('btn-error btn-error-25');
            $('#btn-' + level6_imgClicked[1]).addClass('btn-error btn-error-25');
            setTimeout(function() {
                $('.btn').addClass('btn-yellow');
                $('.btn').removeClass('btn-green');
                $('.btn').removeClass('btn-error btn-error-25');
            }, 1000);
        };
        level6_imgClicked = [];
    };
}

function level6_loadEvents() {
    var numberOfRounds = Object.keys(level6_imagesByRound).length;

    $('#btn-next').click(function(btn) {
        if (level6_roundNumber == numberOfRounds) {
            clearCanvasAndBtns();
            createBigButton('Jogo 7');
        } else {
            level6_loadNextRound();
            level6_resetButtons();
        };
    });
};

function level6_resetButtons() {
    $(level6_nextBtn).prop('disabled', true);
};

function level6_loadNextRound() {
    level6_roundNumber += 1;
    level6_loadImagesAndSounds(level6_roundNumber);
    changeBackgroundColor(sequenciaCores[level6_roundNumber - 1]);
};

function level6_correctAnswer() {
    $('.btn').addClass('btn-disabled');
    //remove handler
    $('.btn').unbind('click');
    $('.btn').css("cursor", 'default');
    $(level6_nextBtn).prop('disabled', false);

    var numberOfRounds = Object.keys(level6_imagesByRound).length;
    if (level6_roundNumber == numberOfRounds) {
        $(level6_nextBtn).text('Fim');
    };
};

function level6_loadNextButton() {
    //cria o botão para passar à imagem seguinte
    level6_nextBtn = $(document.createElement('button'));
    $(level6_nextBtn).attr({
        id: 'btn-next',
        class: 'button-next'
    });
    $(level6_nextBtn).prop('disabled', true);
    $(level6_nextBtn).append('Próximo');

    //anexa o botao ao container e posiciona-o
    $(level6_nextBtn).appendTo($('#container'));
    $(level6_nextBtn)[0].style.position = "absolute";
    $(level6_nextBtn)[0].style.left = canvasWidth - ($(level6_nextBtn)[0].offsetWidth) - 20;
    $(level6_nextBtn)[0].style.top = canvasHeight - ($(level6_nextBtn)[0].offsetHeight) - 20;
};

//====== LEVEL 7 =====================================

//Variaveis globais level7
var level7_nextBtn,
    level7_roundNumber = 1,
    level7_imgClicked = [];

var level7_imagesByRound = {
    1: {
        "arara": images["arara"],
        "carro": images["carro"],
        "guitarra": images["guitarra"],
        "jarra": images["jarra"]
    },
    2: {
        "laranja": images["laranja"],
        "bengala": images["bengala"],
        "cereja": images["cereja"],
        "pessego": images["pessego"]
    },
    3: {
        "vestido": images["vestido"],
        "gelado": images["gelado"],
        "sapo": images["sapo"],
        "sapato": images["sapato"]
    }
};

function level7_load() {
    clearCanvas(false);
    loadHelpBtn('blue', 7);
    level7_loadImagesAndSounds(level7_roundNumber);
    level7_loadNextButton();
    level7_loadEvents();
    changeBackgroundColor(sequenciaCores[level7_roundNumber - 1]);
};

function level7_loadImagesAndSounds(round) {
    clearCanvas(false);
    $(".btn").remove();

    var img = level7_imagesByRound[round];
    level7_loadImage(Object.keys(img)[0], canvasWidth * 0.30 - 30, canvasHeight * 0.30);
    level7_loadImage(Object.keys(img)[1], canvasWidth * 0.60 - 30, canvasHeight * 0.30);
    level7_loadImage(Object.keys(img)[2], canvasWidth * 0.30 - 30, canvasHeight * 0.70);
    level7_loadImage(Object.keys(img)[3], canvasWidth * 0.60 - 30, canvasHeight * 0.70);

    level7_loadAnswerButton(Object.keys(img)[0], canvasWidth * 0.30, canvasHeight * 0.42);
    level7_loadAnswerButton(Object.keys(img)[1], canvasWidth * 0.60, canvasHeight * 0.42);
    level7_loadAnswerButton(Object.keys(img)[2], canvasWidth * 0.30, canvasHeight * 0.82);
    level7_loadAnswerButton(Object.keys(img)[3], canvasWidth * 0.60, canvasHeight * 0.82);
};

function level7_loadImage(objeto, _left, _top) {
    fabric.Image.fromURL(images[objeto], function(img) {
        canvas.add(img.set({
            left: _left + 30,
            top: _top,
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true
        }).scale(0.32));

        img.on('mousedown', function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', audio[objeto]);
            audioElement.play();
        });
    });
};

function level7_loadAnswerButton(figureName, left, top) {
    var span, num;
    var colors = ['yellow'];

    span = $(document.createElement('span'));
    num = $(document.createElement('i'));
    $(span).attr({
        id: 'btn-' + figureName,
        class: 'btn-' + colors[0] + ' btn btn-40',
        value: figureName
    });

    $(num).appendTo(span);
    $(span).appendTo($('#container'));
    //posiciona o botao
    $(span)[0].style.position = "absolute";
    $(span)[0].style.left = left;
    $(span)[0].style.top = top;

    $(span).on("click", function() {
        $(this).removeClass('btn-yellow');
        $(this).addClass('btn-green');
        level7_verificaResposta(figureName);
    })
};

function level7_verificaResposta(figureName) {
    level7_imgClicked.push(figureName);

    if (level7_imgClicked.length > 1) {
        var imagemPar = solutions[7][level7_roundNumber - 1][figureName];
        if (imagemPar != undefined && imagemPar == level7_imgClicked[0]) {
            playSoundAnswer(true);
            $('.btn').addClass('btn-yellow');
            $('.btn').removeClass('btn-green');
            $('#btn-' + level7_imgClicked[0]).addClass('btn-valid btn-valid-25');
            $('#btn-' + level7_imgClicked[1]).addClass('btn-valid btn-valid-25');
            level7_correctAnswer();
        } else {
            playSoundAnswer(false);
            $('#btn-' + level7_imgClicked[0]).addClass('btn-error btn-error-25');
            $('#btn-' + level7_imgClicked[1]).addClass('btn-error btn-error-25');
            setTimeout(function() {
                $('.btn').addClass('btn-yellow');
                $('.btn').removeClass('btn-green');
                $('.btn').removeClass('btn-error btn-error-25');
            }, 1000);
        };
        level7_imgClicked = [];
    };
}

function level7_loadEvents() {
    var numberOfRounds = Object.keys(level7_imagesByRound).length;

    $('#btn-next').click(function(btn) {
        if (level7_roundNumber == numberOfRounds) {
            clearCanvasAndBtns();
            createBigButton('Jogo 8');
        } else {
            level7_loadNextRound();
            level7_resetButtons();
        };
    });
};

function level7_resetButtons() {
    $(level7_nextBtn).prop('disabled', true);
};

function level7_loadNextRound() {
    level7_roundNumber += 1;
    level7_loadImagesAndSounds(level7_roundNumber);
    changeBackgroundColor(sequenciaCores[level7_roundNumber - 1]);
};

function level7_correctAnswer() {
    $('.btn').addClass('btn-disabled');
    //remove handler
    $('.btn').unbind('click');
    $('.btn').css("cursor", 'default');
    $(level7_nextBtn).prop('disabled', false);

    var numberOfRounds = Object.keys(level7_imagesByRound).length;
    if (level7_roundNumber == numberOfRounds) {
        $(level7_nextBtn).text('Fim');
    };
};

function level7_loadNextButton() {
    //cria o botão para passar à imagem seguinte
    level7_nextBtn = $(document.createElement('button'));
    $(level7_nextBtn).attr({
        id: 'btn-next',
        class: 'button-next'
    });
    $(level7_nextBtn).prop('disabled', true);
    $(level7_nextBtn).append('Próximo');

    //anexa o botao ao container e posiciona-o
    $(level7_nextBtn).appendTo($('#container'));
    $(level7_nextBtn)[0].style.position = "absolute";
    $(level7_nextBtn)[0].style.left = canvasWidth - ($(level7_nextBtn)[0].offsetWidth) - 20;
    $(level7_nextBtn)[0].style.top = canvasHeight - ($(level7_nextBtn)[0].offsetHeight) - 20;
};

//====== LEVEL 8 =====================================

//Variaveis globais level8
var level8_nextBtn,
    level8_roundNumber = 1,
    level8_microClicked = [];

var level8_palavras = {
    "mao": audio["mao"],
    "bar": images["bar"],
    "caco": images["caco"]
};

var level8_imagesByRound = {
    1: {
        "si": images["si"],
        "al": images["al"],
        "pul": images["pul"]
    },
    2: {
        "chum": images["chum"],
        "do": images["do"],
        "ir": images["ir"]
    },
    3: {
        "ma": images["ma"],
        "sal": images["sal"],
        "ir": images["ir"]
    }
};

function level8_load() {
    clearCanvas(true);
    loadHelpBtn('green', 8);
    level8_loadPalavra(Object.keys(level8_palavras)[level8_roundNumber - 1]);
    level8_loadBuzzerBtnAndSounds(level8_roundNumber);
    level8_loadNextButton();
    level8_loadEvents();
    changeBackgroundColor(sequenciaCores[level8_roundNumber - 1]);
};

function level8_loadPalavra(palavra) {
    fabric.Image.fromURL('images/speaker.png', function(img) {
        canvas.add(img.set({
            left: canvasWidth / 2,
            top: 50,
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true
        }).scale(0.45));

        img.on('mousedown', function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', audio[palavra]);
            audioElement.play();
        });
    });
};

function level8_loadmicro(silaba, _left, _top) {
    var micro;

    micro = $(document.createElement('img'));
    $(micro).attr({
        id: 'rec-' + silaba,
        class: 'record',
        src: 'images/mic128.png',
        value: silaba
    });

    $(micro).appendTo($('#container'));
    //posiciona o botao
    $(micro)[0].style.position = "absolute";
    $(micro)[0].style.left = _left;
    $(micro)[0].style.top = _top;
    $(micro)[0].style.height = '80';

    $(micro).on("click", function() {
        var _palavra = Object.keys(level8_palavras)[level8_roundNumber - 1];
        var _silaba = silaba;
        toggleRecording(this, _silaba + _palavra);

        var id = $(this).prop('id');
        if ($.inArray(id, level8_microClicked) < 0) {
            level8_microClicked.push(id);

            var numSilabas = Object.keys(level8_imagesByRound[level8_roundNumber]).length;
            if (level8_microClicked.length == numSilabas) {
                $(level8_nextBtn).prop('disabled', false);
            };
        };
    });
};

function level8_loadBuzzerBtnAndSounds() {
    $(".buzzerBtn").remove();
    $(".record").remove();

    var silabas = level8_imagesByRound[level8_roundNumber];

    level8_loadBuzzerBtn(Object.keys(silabas)[0], canvasWidth * 0.20 - 30, canvasHeight * 0.40);
    level8_loadBuzzerBtn(Object.keys(silabas)[1], canvasWidth * 0.45 - 30, canvasHeight * 0.40);
    level8_loadBuzzerBtn(Object.keys(silabas)[2], canvasWidth * 0.70 - 30, canvasHeight * 0.40);

    level8_loadmicro(Object.keys(silabas)[0], canvasWidth * 0.20, canvasHeight * 0.62);
    level8_loadmicro(Object.keys(silabas)[1], canvasWidth * 0.45, canvasHeight * 0.62);
    level8_loadmicro(Object.keys(silabas)[2], canvasWidth * 0.70, canvasHeight * 0.62);
};

function level8_loadBuzzerBtn(objeto, _left, _top) {
    var btn;

    btn = $(document.createElement('button'));
    $(btn).attr({
        id: 'button-' + objeto,
        class: 'buzzerBtn',
        value: objeto
    });

    $(btn).appendTo($('#container'));
    //posiciona o botao
    $(btn)[0].style.position = "absolute";
    $(btn)[0].style.left = _left;
    $(btn)[0].style.top = _top;

    $(btn).on("click", function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', audio[objeto]);
        audioElement.play();
    });
};

function level8_loadEvents() {
    var numberOfRounds = Object.keys(level8_imagesByRound).length;

    $('#btn-next').click(function(btn) {
        if (level8_roundNumber == numberOfRounds) {
            clearCanvasAndBtns();
            createBigButton('Jogo 9');
        } else {
            if (level8_roundNumber == numberOfRounds - 1) {
                $(level8_nextBtn).text('Fim');
            };
            level8_loadNextRound();
            $(level8_nextBtn).prop('disabled', true);
        };
    });
};

function level8_loadNextRound() {
    clearCanvas(true);
    level8_roundNumber += 1;
    level8_loadPalavra(Object.keys(level8_palavras)[level8_roundNumber - 1]);
    level8_loadBuzzerBtnAndSounds();
    level8_microClicked = [];
    changeBackgroundColor(sequenciaCores[level8_roundNumber - 1]);
};

function level8_loadNextButton() {
    //cria o botão para passar à imagem seguinte
    level8_nextBtn = $(document.createElement('button'));
    $(level8_nextBtn).attr({
        id: 'btn-next',
        class: 'button-next'
    });
    $(level8_nextBtn).prop('disabled', true);
    $(level8_nextBtn).append('Próximo');

    //anexa o botao ao container e posiciona-o
    $(level8_nextBtn).appendTo($('#container'));
    $(level8_nextBtn)[0].style.position = "absolute";
    $(level8_nextBtn)[0].style.left = canvasWidth - ($(level8_nextBtn)[0].offsetWidth) - 20;
    $(level8_nextBtn)[0].style.top = canvasHeight - ($(level8_nextBtn)[0].offsetHeight) - 20;
};

//====== LEVEL 9 =====================================

//Variaveis globais level9
var level9_nextBtn,
    level9_roundNumber = 1,
    level9_microClicked = [];

var level9_palavras = {
    "ja": audio["ja"],
    "esqui": images["esqui"],
    "passa": images["passa"]
};

var level9_imagesByRound = {
    1: {
        "rra": images["rra"],
        "tos": images["tos"],
        "ul": images["ul"]
    },
    2: {
        "lo": images["lo"],
        "ro": images["ro"],
        "ar": images["ar"]
    },
    3: {
        "lo": images["lo"],
        "ro": images["ro"],
        "ar": images["ar"]
    }
};

function level9_load() {
    clearCanvas(true);
    loadHelpBtn('yellow', 9);
    level9_loadPalavra(Object.keys(level9_palavras)[level9_roundNumber - 1]);
    level9_loadBuzzerBtnAndSounds(level9_roundNumber);
    level9_loadNextButton();
    level9_loadEvents();
    changeBackgroundColor(sequenciaCores[level9_roundNumber - 1]);
};

function level9_loadPalavra(palavra) {
    fabric.Image.fromURL('images/speaker.png', function(img) {
        canvas.add(img.set({
            left: canvasWidth / 2,
            top: 50,
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true
        }).scale(0.45));

        img.on('mousedown', function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', audio[palavra]);
            audioElement.play();
        });
    });
};

function level9_loadmicro(silaba, _left, _top) {
    var micro;

    micro = $(document.createElement('img'));
    $(micro).attr({
        id: 'rec-' + silaba,
        class: 'record',
        src: 'images/mic128.png',
        value: silaba
    });

    $(micro).appendTo($('#container'));
    //posiciona o botao
    $(micro)[0].style.position = "absolute";
    $(micro)[0].style.left = _left;
    $(micro)[0].style.top = _top;
    $(micro)[0].style.height = '80';

    $(micro).on("click", function() {
        var _palavra = Object.keys(level9_palavras)[level9_roundNumber - 1];
        var _silaba = silaba;
        toggleRecording(this, _palavra + _silaba);

        var id = $(this).prop('id');
        if ($.inArray(id, level9_microClicked) < 0) {
            level9_microClicked.push(id);

            var numSilabas = Object.keys(level9_imagesByRound[level9_roundNumber]).length;
            if (level9_microClicked.length == numSilabas) {
                $(level9_nextBtn).prop('disabled', false);
            };
        };
    });
};

function level9_loadBuzzerBtnAndSounds() {
    $(".buzzerBtn").remove();
    $(".record").remove();

    var silabas = level9_imagesByRound[level9_roundNumber];

    level9_loadBuzzerBtn(Object.keys(silabas)[0], canvasWidth * 0.20 - 30, canvasHeight * 0.40);
    level9_loadBuzzerBtn(Object.keys(silabas)[1], canvasWidth * 0.45 - 30, canvasHeight * 0.40);
    level9_loadBuzzerBtn(Object.keys(silabas)[2], canvasWidth * 0.70 - 30, canvasHeight * 0.40);

    level9_loadmicro(Object.keys(silabas)[0], canvasWidth * 0.20, canvasHeight * 0.62);
    level9_loadmicro(Object.keys(silabas)[1], canvasWidth * 0.45, canvasHeight * 0.62);
    level9_loadmicro(Object.keys(silabas)[2], canvasWidth * 0.70, canvasHeight * 0.62);
};

function level9_loadBuzzerBtn(objeto, _left, _top) {
    var btn;

    btn = $(document.createElement('button'));
    $(btn).attr({
        id: 'button-' + objeto,
        class: 'buzzerBtn',
        value: objeto
    });

    $(btn).appendTo($('#container'));
    //posiciona o botao
    $(btn)[0].style.position = "absolute";
    $(btn)[0].style.left = _left;
    $(btn)[0].style.top = _top;

    $(btn).on("click", function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', audio[objeto]);
        audioElement.play();
    });
};

function level9_loadEvents() {
    var numberOfRounds = Object.keys(level9_imagesByRound).length;

    $('#btn-next').click(function(btn) {
        if (level9_roundNumber == numberOfRounds) {
            clearCanvasAndBtns();
            createBigButton('Jogo 10');
        } else {
            if (level9_roundNumber == numberOfRounds - 1) {
                $(level9_nextBtn).text('Fim');
            };
            level9_loadNextRound();
            $(level9_nextBtn).prop('disabled', true);
        };
    });
};

function level9_loadNextRound() {
    clearCanvas(true);
    level9_roundNumber += 1;
    level9_loadPalavra(Object.keys(level9_palavras)[level9_roundNumber - 1]);
    level9_loadBuzzerBtnAndSounds();
    level9_microClicked = [];
    changeBackgroundColor(sequenciaCores[level9_roundNumber - 1]);
};

function level9_loadNextButton() {
    //cria o botão para passar à imagem seguinte
    level9_nextBtn = $(document.createElement('button'));
    $(level9_nextBtn).attr({
        id: 'btn-next',
        class: 'button-next'
    });
    $(level9_nextBtn).prop('disabled', true);
    $(level9_nextBtn).append('Próximo');

    //anexa o botao ao container e posiciona-o
    $(level9_nextBtn).appendTo($('#container'));
    $(level9_nextBtn)[0].style.position = "absolute";
    $(level9_nextBtn)[0].style.left = canvasWidth - ($(level9_nextBtn)[0].offsetWidth) - 20;
    $(level9_nextBtn)[0].style.top = canvasHeight - ($(level9_nextBtn)[0].offsetHeight) - 20;
};

//====== LEVEL 10 =====================================

//Variaveis globais level10
var level10_nextBtn,
    level10_roundNumber = 1,
    level10_microClicked = [];

var level10_palavras = {
    "fila": audio["fila"],
    "faca": images["faca"],
    "entro": images["entro"]
};

var level10_imagesByRound = {
    1: {
        "ve": images["ve"],
        "bro": images["bro"],
        "tan": images["tan"]
    },
    2: {
        "bri": images["bri"],
        "rras": images["rras"],
        "la": images["la"]
    },
    3: {
        "con": images["con"],
        "bu": images["bu"],
        "cas": images["cas"]
    }
};

function level10_load() {
    clearCanvas(true);
    loadHelpBtn('blue', 10);
    level10_loadPalavra(Object.keys(level10_palavras)[level10_roundNumber - 1]);
    level10_loadBuzzerBtnAndSounds(level10_roundNumber);
    level10_loadNextButton();
    level10_loadEvents();
    changeBackgroundColor(sequenciaCores[level10_roundNumber - 1]);
};

function level10_loadPalavra(palavra) {
    fabric.Image.fromURL('images/speaker.png', function(img) {
        canvas.add(img.set({
            left: canvasWidth / 2,
            top: 50,
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true
        }).scale(0.45));

        img.on('mousedown', function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', audio[palavra]);
            audioElement.play();
        });
    });
};

function level10_loadmicro(silaba, _left, _top) {
    var micro;

    micro = $(document.createElement('img'));
    $(micro).attr({
        id: 'rec-' + silaba,
        class: 'record',
        src: 'images/mic128.png',
        value: silaba
    });

    $(micro).appendTo($('#container'));
    //posiciona o botao
    $(micro)[0].style.position = "absolute";
    $(micro)[0].style.left = _left;
    $(micro)[0].style.top = _top;
    $(micro)[0].style.height = '80';

    $(micro).on("click", function() {
        var _palavra = Object.keys(level10_palavras)[level10_roundNumber - 1];
        var _silaba = silaba;
        toggleRecording(this, _palavra + '_' + _silaba);

        var id = $(this).prop('id');
        if ($.inArray(id, level10_microClicked) < 0) {
            level10_microClicked.push(id);

            var numSilabas = Object.keys(level10_imagesByRound[level10_roundNumber]).length;
            if (level10_microClicked.length == numSilabas) {
                $(level10_nextBtn).prop('disabled', false);
            };
        };
    });
};

function level10_loadBuzzerBtnAndSounds() {
    $(".buzzerBtn").remove();
    $(".record").remove();

    var silabas = level10_imagesByRound[level10_roundNumber];

    level10_loadBuzzerBtn(Object.keys(silabas)[0], canvasWidth * 0.20 - 30, canvasHeight * 0.40);
    level10_loadBuzzerBtn(Object.keys(silabas)[1], canvasWidth * 0.45 - 30, canvasHeight * 0.40);
    level10_loadBuzzerBtn(Object.keys(silabas)[2], canvasWidth * 0.70 - 30, canvasHeight * 0.40);

    level10_loadmicro(Object.keys(silabas)[0], canvasWidth * 0.20, canvasHeight * 0.62);
    level10_loadmicro(Object.keys(silabas)[1], canvasWidth * 0.45, canvasHeight * 0.62);
    level10_loadmicro(Object.keys(silabas)[2], canvasWidth * 0.70, canvasHeight * 0.62);
};

function level10_loadBuzzerBtn(objeto, _left, _top) {
    var btn;

    btn = $(document.createElement('button'));
    $(btn).attr({
        id: 'button-' + objeto,
        class: 'buzzerBtn',
        value: objeto
    });

    $(btn).appendTo($('#container'));
    //posiciona o botao
    $(btn)[0].style.position = "absolute";
    $(btn)[0].style.left = _left;
    $(btn)[0].style.top = _top;

    $(btn).on("click", function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', audio[objeto]);
        audioElement.play();
    });
};

function level10_loadEvents() {
    var numberOfRounds = Object.keys(level10_imagesByRound).length;

    $('#btn-next').click(function(btn) {
        if (level10_roundNumber == numberOfRounds) {
            clearCanvasAndBtns();
            createBigButton('Jogo 11');
        } else {
            if (level10_roundNumber == numberOfRounds - 1) {
                $(level10_nextBtn).text('Fim');
            };
            level10_loadNextRound();
            $(level10_nextBtn).prop('disabled', true);
        };
    });
};

function level10_loadNextRound() {
    clearCanvas(true);
    level10_roundNumber += 1;
    level10_loadPalavra(Object.keys(level10_palavras)[level10_roundNumber - 1]);
    level10_loadBuzzerBtnAndSounds();
    level10_microClicked = [];
    changeBackgroundColor(sequenciaCores[level10_roundNumber - 1]);
};

function level10_loadNextButton() {
    //cria o botão para passar à imagem seguinte
    level10_nextBtn = $(document.createElement('button'));
    $(level10_nextBtn).attr({
        id: 'btn-next',
        class: 'button-next'
    });
    $(level10_nextBtn).prop('disabled', true);
    $(level10_nextBtn).append('Próximo');

    //anexa o botao ao container e posiciona-o
    $(level10_nextBtn).appendTo($('#container'));
    $(level10_nextBtn)[0].style.position = "absolute";
    $(level10_nextBtn)[0].style.left = canvasWidth - ($(level10_nextBtn)[0].offsetWidth) - 20;
    $(level10_nextBtn)[0].style.top = canvasHeight - ($(level10_nextBtn)[0].offsetHeight) - 20;
};

//====== LEVEL 11 =====================================

//Variaveis globais level11
var level11_nextBtn,
    level11_roundNumber = 1,
    level11_microClicked = [];

var level11_imagesByRound = {
    1: {
        "nadar": images["nadar"],
        "beijo": images["beijo"]
    },
    2: {
        "balanca": images["balanca"],
        "gaivota": images["gaivota"]
    },
    3: {
        "casaco": images["casaco"],
        "painel": images["painel"]
    }
};

function level11_load() {
    clearCanvas(false);
    loadHelpBtn('green', 11);
    level11_loadBuzzerBtnAndSounds(level11_roundNumber);
    level11_loadNextButton();
    level11_loadEvents();
    changeBackgroundColor(sequenciaCores[level11_roundNumber - 1]);
};

function level11_loadmicro(palavra, _left, _top) {
    var micro;

    micro = $(document.createElement('img'));
    $(micro).attr({
        id: 'rec-' + palavra,
        class: 'record',
        src: 'images/mic128.png',
        value: palavra
    });

    $(micro).appendTo($('#container'));
    //posiciona o botao
    $(micro)[0].style.position = "absolute";
    $(micro)[0].style.left = _left;
    $(micro)[0].style.top = _top;
    $(micro)[0].style.height = '80';

    $(micro).on("click", function() {
        toggleRecording(this, palavra);

        var id = $(this).prop('id');
        if ($.inArray(id, level11_microClicked) < 0) {
            level11_microClicked.push(id);

            var numSilabas = Object.keys(level11_imagesByRound[level11_roundNumber]).length;
            if (level11_microClicked.length == numSilabas) {
                $(level11_nextBtn).prop('disabled', false);
            };
        };
    });
};

function level11_loadBuzzerBtnAndSounds() {
    $(".buzzerBtn").remove();
    $(".record").remove();

    var palavras = level11_imagesByRound[level11_roundNumber];

    level11_loadBuzzerBtn(Object.keys(palavras)[0], canvasWidth * 0.30 - 30, canvasHeight * 0.40);
    level11_loadBuzzerBtn(Object.keys(palavras)[1], canvasWidth * 0.60 - 30, canvasHeight * 0.40);

    level11_loadmicro(Object.keys(palavras)[0], canvasWidth * 0.30, canvasHeight * 0.62);
    level11_loadmicro(Object.keys(palavras)[1], canvasWidth * 0.60, canvasHeight * 0.62);
};

function level11_loadBuzzerBtn(objeto, _left, _top) {
    var btn;

    btn = $(document.createElement('button'));
    $(btn).attr({
        id: 'button-' + objeto,
        class: 'buzzerBtn',
        value: objeto
    });

    $(btn).appendTo($('#container'));
    //posiciona o botao
    $(btn)[0].style.position = "absolute";
    $(btn)[0].style.left = _left;
    $(btn)[0].style.top = _top;

    $(btn).on("click", function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', audio[objeto]);
        audioElement.play();
    });
};

function level11_loadEvents() {
    var numberOfRounds = Object.keys(level11_imagesByRound).length;

    $('#btn-next').click(function(btn) {
        if (level11_roundNumber == numberOfRounds) {
            clearCanvasAndBtns();
            createBigButton('Jogo 12');
        } else {
            if (level11_roundNumber == numberOfRounds - 1) {
                $(level11_nextBtn).text('Fim');
            };
            level11_loadNextRound();
            $(level11_nextBtn).prop('disabled', true);
        };
    });
};

function level11_loadNextRound() {
    clearCanvas(false);
    level11_roundNumber += 1;
    level11_loadBuzzerBtnAndSounds();
    level11_microClicked = [];
    changeBackgroundColor(sequenciaCores[level11_roundNumber - 1]);
};

function level11_loadNextButton() {
    //cria o botão para passar à imagem seguinte
    level11_nextBtn = $(document.createElement('button'));
    $(level11_nextBtn).attr({
        id: 'btn-next',
        class: 'button-next'
    });
    $(level11_nextBtn).prop('disabled', true);
    $(level11_nextBtn).append('Próximo');

    //anexa o botao ao container e posiciona-o
    $(level11_nextBtn).appendTo($('#container'));
    $(level11_nextBtn)[0].style.position = "absolute";
    $(level11_nextBtn)[0].style.left = canvasWidth - ($(level11_nextBtn)[0].offsetWidth) - 20;
    $(level11_nextBtn)[0].style.top = canvasHeight - ($(level11_nextBtn)[0].offsetHeight) - 20;
};

//====== LEVEL 12 =====================================

//Variaveis globais level12
var level12_nextBtn,
    level12_roundNumber = 1,
    level12_microClicked = [];

var level12_imagesByRound = {
    1: {
        "lado": images["lado"],
        "perfumar": images["perfumar"]
    },
    2: {
        "falar": images["falar"],
        "passaros": images["passaros"]
    },
    3: {
        "carnaval": images["carnaval"],
        "parede": images["parede"]
    }
};

function level12_load() {
    clearCanvas(false);
    loadHelpBtn('yellow', 12);
    level12_loadBuzzerBtnAndSounds(level12_roundNumber);
    level12_loadNextButton();
    level12_loadEvents();
    changeBackgroundColor(sequenciaCores[level12_roundNumber - 1]);
};

function level12_loadmicro(palavra, _left, _top) {
    var micro;

    micro = $(document.createElement('img'));
    $(micro).attr({
        id: 'rec-' + palavra,
        class: 'record',
        src: 'images/mic128.png',
        value: palavra
    });

    $(micro).appendTo($('#container'));
    //posiciona o botao
    $(micro)[0].style.position = "absolute";
    $(micro)[0].style.left = _left;
    $(micro)[0].style.top = _top;
    $(micro)[0].style.height = '80';

    $(micro).on("click", function() {
        toggleRecording(this, palavra);

        var id = $(this).prop('id');
        if ($.inArray(id, level12_microClicked) < 0) {
            level12_microClicked.push(id);

            var numSilabas = Object.keys(level12_imagesByRound[level12_roundNumber]).length;
            if (level12_microClicked.length == numSilabas) {
                $(level12_nextBtn).prop('disabled', false);
            };
        };
    });
};

function level12_loadBuzzerBtnAndSounds() {
    $(".buzzerBtn").remove();
    $(".record").remove();

    var palavras = level12_imagesByRound[level12_roundNumber];

    level12_loadBuzzerBtn(Object.keys(palavras)[0], canvasWidth * 0.30 - 30, canvasHeight * 0.40);
    level12_loadBuzzerBtn(Object.keys(palavras)[1], canvasWidth * 0.60 - 30, canvasHeight * 0.40);

    level12_loadmicro(Object.keys(palavras)[0], canvasWidth * 0.30, canvasHeight * 0.62);
    level12_loadmicro(Object.keys(palavras)[1], canvasWidth * 0.60, canvasHeight * 0.62);
};

function level12_loadBuzzerBtn(objeto, _left, _top) {
    var btn;

    btn = $(document.createElement('button'));
    $(btn).attr({
        id: 'button-' + objeto,
        class: 'buzzerBtn',
        value: objeto
    });

    $(btn).appendTo($('#container'));
    //posiciona o botao
    $(btn)[0].style.position = "absolute";
    $(btn)[0].style.left = _left;
    $(btn)[0].style.top = _top;

    $(btn).on("click", function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', audio[objeto]);
        audioElement.play();
    });
};

function level12_loadEvents() {
    var numberOfRounds = Object.keys(level12_imagesByRound).length;

    $('#btn-next').click(function(btn) {
        if (level12_roundNumber == numberOfRounds) {
            clearCanvasAndBtns();
            createBigButton('Jogo 13');
        } else {
            if (level12_roundNumber == numberOfRounds - 1) {
                $(level12_nextBtn).text('Fim');
            };
            level12_loadNextRound();
            $(level12_nextBtn).prop('disabled', true);
        };
    });
};

function level12_loadNextRound() {
    clearCanvas(false);
    level12_roundNumber += 1;
    level12_loadBuzzerBtnAndSounds();
    level12_microClicked = [];
    changeBackgroundColor(sequenciaCores[level12_roundNumber - 1]);
};

function level12_loadNextButton() {
    //cria o botão para passar à imagem seguinte
    level12_nextBtn = $(document.createElement('button'));
    $(level12_nextBtn).attr({
        id: 'btn-next',
        class: 'button-next'
    });
    $(level12_nextBtn).prop('disabled', true);
    $(level12_nextBtn).append('Próximo');

    //anexa o botao ao container e posiciona-o
    $(level12_nextBtn).appendTo($('#container'));
    $(level12_nextBtn)[0].style.position = "absolute";
    $(level12_nextBtn)[0].style.left = canvasWidth - ($(level12_nextBtn)[0].offsetWidth) - 20;
    $(level12_nextBtn)[0].style.top = canvasHeight - ($(level12_nextBtn)[0].offsetHeight) - 20;
};

//====== LEVEL 13 =====================================

//Variaveis globais level13
var level13_nextBtn,
    level13_roundNumber = 1,
    level13_microClicked = [];

var level13_imagesByRound = {
    1: {
        "salgado": images["salgado"],
        "silaba": images["silaba"]
    },
    2: {
        "passaro": images["passaro"],
        "cacada": images["cacada"]
    },
    3: {
        "palavra": images["palavra"],
        "tubarao": images["tubarao"]
    }
};

function level13_load() {
    clearCanvas(false);
    loadHelpBtn('blue', 13);
    level13_loadBuzzerBtnAndSounds(level13_roundNumber);
    level13_loadNextButton();
    level13_loadEvents();
    changeBackgroundColor(sequenciaCores[level13_roundNumber - 1]);
};

function level13_loadmicro(palavra, _left, _top) {
    var micro;

    micro = $(document.createElement('img'));
    $(micro).attr({
        id: 'rec-' + palavra,
        class: 'record',
        src: 'images/mic128.png',
        value: palavra
    });

    $(micro).appendTo($('#container'));
    //posiciona o botao
    $(micro)[0].style.position = "absolute";
    $(micro)[0].style.left = _left;
    $(micro)[0].style.top = _top;
    $(micro)[0].style.height = '80';

    $(micro).on("click", function() {
        toggleRecording(this, palavra);

        var id = $(this).prop('id');
        if ($.inArray(id, level13_microClicked) < 0) {
            level13_microClicked.push(id);

            var numSilabas = Object.keys(level13_imagesByRound[level13_roundNumber]).length;
            if (level13_microClicked.length == numSilabas) {
                $(level13_nextBtn).prop('disabled', false);
            };
        };
    });
};

function level13_loadBuzzerBtnAndSounds() {
    $(".buzzerBtn").remove();
    $(".record").remove();

    var palavras = level13_imagesByRound[level13_roundNumber];

    level13_loadBuzzerBtn(Object.keys(palavras)[0], canvasWidth * 0.30 - 30, canvasHeight * 0.40);
    level13_loadBuzzerBtn(Object.keys(palavras)[1], canvasWidth * 0.60 - 30, canvasHeight * 0.40);

    level13_loadmicro(Object.keys(palavras)[0], canvasWidth * 0.30, canvasHeight * 0.62);
    level13_loadmicro(Object.keys(palavras)[1], canvasWidth * 0.60, canvasHeight * 0.62);
};

function level13_loadBuzzerBtn(objeto, _left, _top) {
    var btn;

    btn = $(document.createElement('button'));
    $(btn).attr({
        id: 'button-' + objeto,
        class: 'buzzerBtn',
        value: objeto
    });

    $(btn).appendTo($('#container'));
    //posiciona o botao
    $(btn)[0].style.position = "absolute";
    $(btn)[0].style.left = _left;
    $(btn)[0].style.top = _top;

    $(btn).on("click", function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', audio[objeto]);
        audioElement.play();
    });
};

function level13_loadEvents() {
    var numberOfRounds = Object.keys(level13_imagesByRound).length;

    $('#btn-next').click(function(btn) {
        if (level13_roundNumber == numberOfRounds) {
            clearCanvasAndBtns();
            createBigButton('Fim');
        } else {
            if (level13_roundNumber == numberOfRounds - 1) {
                $(level13_nextBtn).text('Fim');
            };
            level13_loadNextRound();
            $(level13_nextBtn).prop('disabled', true);
        };
    });
};

function level13_loadNextRound() {
    clearCanvas(false);
    level13_roundNumber += 1;
    level13_loadBuzzerBtnAndSounds();
    level13_microClicked = [];
    changeBackgroundColor(sequenciaCores[level13_roundNumber - 1]);
};

function level13_loadNextButton() {
    //cria o botão para passar à imagem seguinte
    level13_nextBtn = $(document.createElement('button'));
    $(level13_nextBtn).attr({
        id: 'btn-next',
        class: 'button-next'
    });
    $(level13_nextBtn).prop('disabled', true);
    $(level13_nextBtn).append('Próximo');

    //anexa o botao ao container e posiciona-o
    $(level13_nextBtn).appendTo($('#container'));
    $(level13_nextBtn)[0].style.position = "absolute";
    $(level13_nextBtn)[0].style.left = canvasWidth - ($(level13_nextBtn)[0].offsetWidth) - 20;
    $(level13_nextBtn)[0].style.top = canvasHeight - ($(level13_nextBtn)[0].offsetHeight) - 20;
};

// EVENTOS
function goToNextLevel() {
    switch (nextLevel) {
        case 1:
            level1_load();
            break;
        case 2:
            level2_load();
            break;
        case 3:
            level3_load();
            break;
        case 4:
            level4_load();
            break;
        case 5:
            level5_load();
            break;
        case 6:
            level6_load();
            break;
        case 7:
            level7_load();
            break;
        case 8:
            level8_load();
            break;
        case 9:
            level9_load();
            break;
        case 10:
            level10_load();
            break;
        case 11:
            level11_load();
            break;
        case 12:
            level12_load();
            break;
        case 13:
            level13_load();
            break;
        default:
            alert('Error on load level ' + nextLevel);
    };
    nextLevel += 1;
};

function linkToLevel() {
    $('.lv').click(function() {
        clearCanvasAndBtns();
        var num = parseInt($(this).html());
        switch (num) {
            case 1:
                nextLevel = 2;
                level1_load();
                break;
            case 2:
                nextLevel = 3;
                level2_load();
                break;
            case 3:
                nextLevel = 4;
                level3_load();
                break;
            case 4:
                nextLevel = 5;
                level4_load();
                break;
            case 5:
                nextLevel = 6;
                level5_load();
                break;
            case 6:
                nextLevel = 7;
                level6_load();
                break;
            case 7:
                nextLevel = 8;
                level7_load();
                break;
            case 8:
                nextLevel = 9;
                level8_load();
                break;
            case 9:
                nextLevel = 10;
                level9_load();
                break;
            case 10:
                nextLevel = 11;
                level10_load();
                break;
            case 11:
                nextLevel = 12;
                level11_load();
                break;
            case 12:
                nextLevel = 13;
                level12_load();
                break;
            case 13:
                nextLevel = 14;
                level13_load();
                break;
            default:
                alert('Erro level->' + num);
        };
    });
};

/* Application Controller
------------------------------------------------ */
var App = function() {
    "use strict";

    return {
        //main function
        init: function() {
            load();
            createBigButton('Início');
            linkToLevel();
        }
    };
}();

$(document).ready(function() {
    App.init();
});