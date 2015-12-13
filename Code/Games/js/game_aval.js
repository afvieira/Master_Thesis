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
    "alho": "audio/alho.mp3",
    "ambulancia": "audio/ambulancia.mp3",
    "anel": "audio/anel.mp3",
    "anjo": "audio/anjo.mp3",
    "apito": "audio/apito.mp3",
    "ar": "audio/ar.mp3",
    "aranha": "audio/aranha.mp3",
    "arara": "audio/arara.mp3",
    "arco": "audio/arco.mp3",
    "arco_iris": "audio/arco_iris.mp3",
    "arvore": "audio/arvore.mp3",
    "aspirador": "audio/aspirador.mp3",
    "avental": "audio/avental.mp3",
    "avestruz": "audio/avestruz.mp3",
    "aviao": "audio/aviao.mp3",
    "bacalhau": "audio/bacalhau.mp3",
    "bala": "audio/bala.mp3",
    "balanca": "audio/balanca.mp3",
    "bar": "audio/bar.mp3",
    "barco": "audio/barco.mp3",
    "barrar": "audio/barrar.mp3",
    "bata": "audio/bata.mp3",
    "batata": "audio/batata.mp3",
    "bau": "audio/bau.mp3",
    "beijo": "audio/beijo.mp3",
    "bengala": "audio/bengala.mp3",
    "boia": "audio/boia.mp3",
    "bola": "audio/bola.mp3",
    "bolota": "audio/bolota.mp3",
    "bota": "audio/bota.mp3",
    "boneca": "audio/boneca.mp3",
    "borboleta": "audio/borboleta.mp3",
    "borracha": "audio/borracha.mp3",
    "botao": "audio/botao.mp3",
    "bri": "audio/bri.mp3",
    "brinquedo": "audio/brinquedo.mp3",
    "bro": "audio/bro.mp3",
    "bu": "audio/bu.mp3",
    "cacada": "audio/cacada.mp3",
    "cacar": "audio/cacar.mp3",
    "caco": "audio/caco.mp3",
    "cadeira": "audio/cadeira.mp3",
    "cagado": "audio/cagado.mp3",
    "camisa": "audio/camisa.mp3",
    "campo": "audio/campo.mp3",
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
    "concha": "audio/concha.mp3",
    "convidar": "audio/convidar.mp3",
    "copo": "audio/copo.mp3",
    "corrigir": "audio/corrigir.mp3",
    "do": "audio/do.mp3",
    "des": "audio/des.mp3",
    "entro": "audio/entro.mp3",
    "erva": "audio/erva.mp3",
    "esqui": "audio/esqui.mp3",
    "faca": "audio/faca.mp3",
    "farmacia": "audio/farmacia.mp3",
    "falar": "audio/falar.mp3",
    "fechar": "audio/fechar.mp3",
    "fila": "audio/fila.mp3",
    "fingir": "audio/fingir.mp3",
    "frio": "audio/frio.mp3",
    "fugir": "audio/fugir.mp3",
    "gaivota": "audio/gaivota.mp3",
    "gancho": "audio/gancho.mp3",
    "galinha": "audio/galinha.mp3",
    "gelado": "audio/gelado.mp3",
    "gir": "audio/gir.mp3",
    "grua": "audio/grua.mp3",
    "guitarra": "audio/guitarra.mp3",
    "harpa": "audio/harpa.mp3",
    "ir": "audio/ir.mp3",
    "intrincar": "audio/intrincar.mp3",
    "ja": "audio/ja.mp3",
    "jarra": "audio/jarra.mp3",
    "joelho": "audio/joelho.mp3",
    "la": "audio/la.mp3",
    "lado": "audio/lado.mp3",
    "lapis": "audio/lapis.mp3",
    "laranja": "audio/laranja.mp3",
    "livro": "audio/livro.mp3",
    "lo": "audio/lo.mp3",
    "ma": "audio/ma.mp3",
    "maca": "audio/maca.mp3",
    "macaco": "audio/macaco.mp3",
    "magico": "audio/magico.mp3",
    "mao": "audio/mao.mp3",
    "marmelo": "audio/marmelo.mp3",
    "martelo": "audio/martelo.mp3",
    "mascara": "audio/mascara.mp3",
    "mel": "audio/mel.mp3",
    "melado": "audio/melado.mp3",
    "melga": "audio/melga.mp3",
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
    "pato": "audio/pato.mp3",
    "pas": "audio/pas.mp3",
    "passa": "audio/passa.mp3",
    "passaro": "audio/passaro.mp3",
    "passaros": "audio/passaros.mp3",
    "pastelaria": "audio/pastelaria.mp3",
    "pastilha": "audio/pastilha.mp3",
    "pastor": "audio/pastor.mp3",
    "peluche": "audio/peluche.mp3",
    "pentear": "audio/pentear.mp3",
    "perfumar": "audio/perfumar.mp3",
    "pessego": "audio/pessego.mp3",
    "piano": "audio/piano.mp3",
    "piar": "audio/piar.mp3",
    "pincel": "audio/pincel.mp3",
    "pinha": "audio/pinha.mp3",
    "piolho": "audio/piolho.mp3",
    "pistola": "audio/pistola.mp3",
    "postal": "audio/postal.mp3",
    "pul": "audio/pul.mp3",
    "raquete": "audio/raquete.mp3",
    "recreio": "audio/recreio.mp3",
    "ro": "audio/ro.mp3",
    "re": "audio/re.mp3",
    "riacho": "audio/riacho.mp3",
    "rou": "audio/rou.mp3",
    "rra": "audio/rra.mp3",
    "rras": "audio/rras.mp3",
    "saco": "audio/saco.mp3",
    "saia": "audio/saia.mp3",
    "sair": "audio/sair.mp3",
    "sal": "audio/sal.mp3",
    "salgado": "audio/salgado.mp3",
    "salpico": "audio/salpico.mp3",
    "sapato": "audio/sapato.mp3",
    "sapo": "audio/sapo.mp3",
    "sardinha": "audio/sardinha.mp3",
    "saxofone": "audio/saxofone.mp3",
    "secar": "audio/secar.mp3",
    "si": "audio/si.mp3",
    "silaba": "audio/silaba.mp3",
    "sobrepor": "audio/sobrepor.mp3",
    "suspiro": "audio/suspiro.mp3",
    "tan": "audio/tan.mp3",
    "toalha": "audio/toalha.mp3",
    "tocha": "audio/tocha.mp3",
    "tor": "audio/tor.mp3",
    "tos": "audio/tos.mp3",
    "trator": "audio/trator.mp3",
    "trocar": "audio/trocar.mp3",
    "tubarao": "audio/tubarao.mp3",
    "tur": "audio/tur.mp3",
    "ul": "audio/ul.mp3",
    "uva": "audio/uva.mp3",
    "ve": "audio/ve.mp3",
    "vestido": "audio/vestido.mp3",
    "voar": "audio/voar.mp3",
    "sa": "audio/sa.mp3",
    "ba": "audio/ba.mp3",
    "cha": "audio/cha.mp3",
    "lho": "audio/lho.mp3",
    "ta": "audio/ta.mp3"
};

var images = {
    "a": "images/a.jpg",
    "abelha": "images/abelha.jpg",
    "abracar": "images/abracar.jpg",
    "acucar": "images/acucar.jpg",
    "adamastor": "images/adamastor.jpg",
    "afia": "images/afia.jpg",
    "agulha": "images/agulha.jpg",
    "al": "images/al.jpg",
    "alce": "images/alce.jpg",
    "algema": "images/algema.jpg",
    "alho": "images/alho.jpg",
    "ambulancia": "images/ambulancia.jpg",
    "anel": "images/anel.jpg",
    "anjo": "images/anjo.jpg",
    "apito": "images/apito.jpg",
    "ar": "images/ar.jpg",
    "aranha": "images/aranha.jpg",
    "arara": "images/arara.jpg",
    "arco": "images/arco.jpg",
    "arco_iris": "images/arco_iris.jpg",
    "arvore": "images/arvore.jpg",
    "aspirador": "images/aspirador.jpg",
    "avental": "images/avental.jpg",
    "avestruz": "images/avestruz.jpg",
    "aviao": "images/aviao.jpg",
    "bacalhau": "images/bacalhau.jpg",
    "bala": "images/bala.jpg",
    "balanca": "images/balanca.jpg",
    "bar": "images/bar.jpg",
    "barco": "images/barco.jpg",
    "barrar": "images/barrar.jpg",
    "bata": "images/bata.jpg",
    "batata": "images/batata.jpg",
    "bau": "images/bau.jpg",
    "beijo": "images/beijo.jpg",
    "bengala": "images/bengala.jpg",
    "boia": "images/boia.jpg",
    "bola": "images/bola.jpg",
    "bolota": "images/bolota.jpg",
    "bota": "images/bota.jpg",
    "boneca": "images/boneca.jpg",
    "borboleta": "images/borboleta.jpg",
    "borracha": "images/borracha.jpg",
    "botao": "images/botao.jpg",
    "bri": "images/bri.jpg",
    "brinquedo": "images/brinquedo.jpg",
    "bro": "images/bro.jpg",
    "bu": "images/bu.jpg",
    "cacada": "images/cacada.jpg",
    "cacar": "images/cacar.jpg",
    "caco": "images/caco.jpg",
    "cadeira": "images/cadeira.jpg",
    "cagado": "images/cagado.jpg",
    "camisa": "images/camisa.jpg",
    "camelo": "images/camelo.jpg",
    "cantar": "images/cantar.jpg",
    "car": "images/car.jpg",
    "carnaval": "images/carnaval.jpg",
    "carro": "images/carro.jpg",
    "cas": "images/cas.jpg",
    "casa": "images/casa.jpg",
    "casaco": "images/casaco.jpg",
    "castor": "images/castor.jpg",
    "centeio": "images/centeio.jpg",
    "cereja": "images/cereja.jpg",
    "cesto": "images/cesto.jpg",
    "chegar": "images/chegar.jpg",
    "chum": "images/chum.jpg",
    "cinto": "images/cinto.jpg",
    "cir": "images/cir.jpg",
    "circo": "images/circo.jpg",
    "circular": "images/circular.jpg",
    "circulo": "images/circulo.jpg",
    "comboio": "images/comboio.jpg",
    "computador": "images/computador.jpg",
    "con": "images/con.jpg",
    "concha": "images/concha.jpg",
    "convidar": "images/convidar.jpg",
    "copo": "images/copo.jpg",
    "corrigir": "images/corrigir.jpg",
    "do": "images/do.jpg",
    "entro": "images/entro.jpg",
    "erva": "images/erva.jpg",
    "esqui": "images/esqui.jpg",
    "faca": "images/faca.jpg",
    "falar": "images/falar.jpg",
    "fechar": "images/fechar.jpg",
    "fila": "images/fila.jpg",
    "fingir": "images/fingir.jpg",
    "frio": "images/frio.jpg",
    "fugir": "images/fugir.jpg",
    "gaivota": "images/gaivota.jpg",
    "gancho": "images/gancho.jpg",
    "galinha": "images/galinha.jpg",
    "gelado": "images/gelado.jpg",
    "gir": "images/gir.jpg",
    "grua": "images/grua.jpg",
    "guitarra": "images/guitarra.jpg",
    "harpa": "images/harpa.jpg",
    "ir": "images/ir.jpg",
    "ja": "images/ja.jpg",
    "jarra": "images/jarra.jpg",
    "joelho": "images/joelho.jpg",
    "la": "images/la.jpg",
    "lado": "images/lado.jpg",
    "lapis": "images/lapis.jpg",
    "laranja": "images/laranja.jpg",
    "livro": "images/livro.jpg",
    "lo": "images/lo.jpg",
    "ma": "images/ma.jpg",
    "maca": "images/maca.jpg",
    "macaco": "images/macaco.jpg",
    "magico": "images/magico.jpg",
    "mao": "images/mao.jpg",
    "marmelo": "images/marmelo.jpg",
    "martelo": "images/martelo.jpg",
    "mascara": "images/mascara.jpg",
    "mel": "images/mel.jpg",
    "melado": "images/melado.jpg",
    "melga": "images/melga.jpg",
    "melro": "images/melro.jpg",
    "mesas": "images/mesas.jpg",
    "mesmo": "images/mesmo.jpg",
    "mochila": "images/mochila.jpg",
    "nadar": "images/nadar.jpg",
    "o": "images/o.jpg",
    "o_u_jogo4": "images/o_u_jogo4.jpg",
    "oculos": "images/oculos.jpg",
    "olho": "images/olho.jpg",
    "ombro": "images/ombro.jpg",
    "osso": "images/osso.jpg",
    "ovo": "images/ovo.jpg",
    "painel": "images/painel.jpg",
    "palavra": "images/palavra.jpg",
    "papagaio": "images/papagaio.jpg",
    "pao": "images/pao.jpg",
    "parede": "images/parede.jpg",
    "partir": "images/partir.jpg",
    "pato": "images/pato.jpg",
    "pas": "images/pas.jpg",
    "passa": "images/passa.jpg",
    "passaro": "images/passaro.jpg",
    "passaros": "images/passaros.jpg",
    "pastelaria": "images/pastelaria.jpg",
    "pastilha": "images/pastilha.jpg",
    "pastor": "images/pastor.jpg",
    "pentear": "images/pentear.jpg",
    "perfumar": "images/perfumar.jpg",
    "pessego": "images/pessego.jpg",
    "piano": "images/piano.jpg",
    "piar": "images/piar.jpg",
    "pincel": "images/pincel.jpg",
    "pinha": "images/pinha.jpg",
    "piolho": "images/piolho.jpg",
    "pistola": "images/pistola.jpg",
    "postal": "images/postal.jpg",
    "pul": "images/pul.jpg",
    "raquete": "images/raquete.jpg",
    "recreio": "images/recreio.jpg",
    "ro": "images/ro.jpg",
    "rra": "images/rra.jpg",
    "rras": "images/rras.jpg",
    "saco": "images/saco.jpg",
    "saia": "images/saia.jpg",
    "sair": "images/sair.jpg",
    "sal": "images/sal.jpg",
    "salgado": "images/salgado.jpg",
    "sapato": "images/sapato.jpg",
    "sapo": "images/sapo.jpg",
    "sardinha": "images/sardinha.jpg",
    "saxofone": "images/saxofone.jpg",
    "secar": "images/secar.jpg",
    "si": "images/si.jpg",
    "silaba": "images/silaba.jpg",
    "sobrepor": "images/sobrepor.jpg",
    "suspiro": "images/suspiro.jpg",
    "tan": "images/tan.jpg",
    "toalha": "images/toalha.jpg",
    "tocha": "images/tocha.jpg",
    "tor": "images/tor.jpg",
    "tos": "images/tos.jpg",
    "trator": "images/trator.jpg",
    "trocar": "images/trocar.jpg",
    "tubarao": "images/tubarao.jpg",
    "ul": "images/ul.jpg",
    "uva": "images/uva.jpg",
    "ve": "images/ve.jpg",
    "vestido": "images/vestido.jpg",
    "voar": "images/voar.jpg"
};

var audioHelp = {
    1: "audio/instrucoes/instrucoes1.mp3",
    2: "audio/instrucoes/instrucoes2.mp3",
    3: "audio/instrucoes/instrucoes3.mp3",
    4: "audio/instrucoes/instrucoes4.mp3",
    5: "audio/instrucoes/instrucoes5.mp3",
};

var solutions = {
    1: {
        "livro": 2,
        "laranja": 3,
        "oculos": 3
    },
    2: {
        0: {
            "afia": false,
            "saco": true,
            "galinha": false,
            "sapo": true,
            "saxofone": true,
            "sardinha": false
        },
        1: {
            "bata": true,
            "barco": false,
            "bala": true,
            "botao": false,
            "bau": true,
            "batata": false
        },
        2: {
            "pato": false,
            "aviao": true,
            "aranha": true,
            "ambulancia": false,
            "agulha": true,
            "arvore": false
        }
    },
    3: {
        0: {
            "boneca": false,
            "magico": false,
            "tocha": true,
            "gancho": false,
            "borracha": true,
            "concha": true
        },
        1: {
            "sapato": false,
            "alho": true,
            "piolho": true,
            "toalha": false,
            "joelho": true,
            "gelado": false
        },
        2: {
            "raquete": false,
            "postal": false,
            "bota": true,
            "borboleta": true,
            "cadeira": false,
            "bolota": true
        }
    }
};

//====== RESULTS =====================================
function ResultGameNSilabas(aluno, imagem, tentativas, data) {
    this.aluno = aluno;
    this.imagem = imagem;
    this.tentativas = tentativas;
    this.data = data;
};

function ResultGameCorrectSilaba(aluno, game, silaba, wrongAnswers, data) {
    this.aluno = aluno;
    this.game = game;
    this.silaba = silaba;
    this.wrongAnswers = wrongAnswers;
    this.data = data;
};

function ResultGameCorrectPar(aluno, game, tentativas, data) {
    this.aluno = aluno;
    this.game = game;
    this.tentativas = tentativas;
    this.data = data;
};

ResultsGame1ByStudent = [];
ResultsGame2ByStudent = [];
ResultsGame3ByStudent = [];

function sendResultsGame1() {
    // $.ajax({
    //     type: 'POST',
    //     url: 'http://rest.learncode.academy/api/johnbob/friends',
    //     data: ResultsGame1ByStudent,
    //     success: function(data) {
    //         console.log("SUCESSO", data);
    //     }
    // });
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
        if (nextLevel <= 5) {
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
    changeBackgroundColor(sequenciaCores[0])
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
    tentativasPorImagem,
    level1_SilabaClicked = undefined;

var level1_images = {
    "livro": images["livro"],
    "laranja": images["laranja"],
    "oculos": images["oculos"]
};

function level1_load() {
    level1_objetoIndex = 0;
    ResultsGame1ByStudent = [];
    level1_SilabaClicked = undefined;
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
        var silabasClicked = parseInt($(this).find('i').html());

        if (level1_SilabaClicked && level1_SilabaClicked == silabasClicked) {
            $(this).removeClass('btn-green');
            $(this).addClass('btn-yellow');

            level1_SilabaClicked = undefined;
            $(level1_nextBtn).prop('disabled', true);

            return;
        };

        $('.btn').removeClass('btn-green');
        $('.btn').addClass('btn-yellow');
        $(this).removeClass('btn-yellow');
        $(this).addClass('btn-green');

        level1_SilabaClicked = silabasClicked;

        $(level1_nextBtn).prop('disabled', false);

        // var num = parseInt($(this).find('i').html());
        // var solution = solutions[1][Object.keys(level1_images)[level1_objetoIndex]];

        // if (solution === num) {
        //     $(this).addClass('btn-valid btn-valid-55');
        //     playSoundAnswer(true);
        //     level1_correctAnswer();

        //     var image = Object.keys(level1_images)[level1_objetoIndex];
        //     var result = new ResultGameNSilabas('aluno', image, tentativasPorImagem, new Date());
        //     ResultsGame1ByStudent.push(result);
        // } else {
        //     $(this).addClass('btn-error btn-error-55');
        //     playSoundAnswer(false);
        //     tentativasPorImagem += 1;
        // };
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
    //level1_btnAnswer();
    $('.btn').css("cursor", 'pointer');
    $('.btn').prop('disabled', false);

    $('.btn').removeClass('btn-green');
    $('.btn').addClass('btn-yellow');

    level1_SilabaClicked = undefined;
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
        }).scale(0.6));

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
    level2_wrongAnswers,
    level2_SilabasClicked = [];

var level2_silabas = {
    "sa": audio["sa"],
    "ba": audio["ba"],
    "a": audio["a"]
};

var level2_imagesByRound = {
    1: {
        "afia": images["afia"],
        "saco": images["saco"],
        "galinha": images["galinha"],
        "sapo": images["sapo"],
        "saxofone": images["saxofone"],
        "sardinha": images["sardinha"]
    },
    2: {
        "bata": images["bata"],
        "barco": images["barco"],
        "bala": images["bala"],
        "botao": images["botao"],
        "bau": images["bau"],
        "batata": images["batata"]
    },
    3: {
        "pato": images["pato"],
        "aviao": images["aviao"],
        "aranha": images["aranha"],
        "ambulancia": images["ambulancia"],
        "agulha": images["agulha"],
        "arvore": images["arvore"]
    }
};

function level2_load() {
    level2_roundNumber = 1;
    level2_numCorrectAnswers = 0;
    ResultsGame2ByStudent = [];
    level2_SilabasClicked = [];
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
        }).scale(0.30));

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
        debugger
        var valor = $(this).attr("value");

        if ($.inArray(valor, level2_SilabasClicked) != -1) {
            $(this).removeClass('btn-green');
            $(this).addClass('btn-blue');

            level2_SilabasClicked.splice($.inArray(valor, level2_SilabasClicked), 1);
            $(level2_nextBtn).prop('disabled', true);
            return;
        };

        if (level2_SilabasClicked.length == 3) {
            return;
        };

        $(this).removeClass('btn-blue');
        $(this).addClass('btn-green');

        level2_SilabasClicked.push(valor);

        if (level2_SilabasClicked.length == 3) {
            $(level2_nextBtn).prop('disabled', false);
        };

        // var solution = solutions[2][level2_roundNumber - 1][valor];

        // if (solution == true) {
        //     $(this).addClass('btn-valid btn-valid-25');
        //     playSoundAnswer(true);
        //     level2_correctAnswer();
        // } else {
        //     $(this).addClass('btn-error btn-error-25');
        //     playSoundAnswer(false);
        //     level2_wrongAnswers += 1;
        // };
        // $(this).addClass('btn-disabled');
        // $(this).unbind('click');
        // $(this).css("cursor", 'default');
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

    $('.btn').removeClass('btn-green');
    $('.btn').addClass('btn-blue');

    $(level2_nextBtn).prop('disabled', true);
    level2_SilabasClicked = [];
};

function level2_correctAnswer() {
    level2_numCorrectAnswers++;

    if (level2_numCorrectAnswers == level2_maxCorrectAnswers) {
        $('.btn').addClass('btn-disabled');
        //remove handler
        $('.btn').unbind('click');
        $('.btn').css("cursor", 'default');
        //$(level2_nextBtn).prop('disabled', false);
        level2_numCorrectAnswers = 0;

        var silaba = Object.keys(level2_silabas)[level2_roundNumber - 1];
        var result = new ResultGameCorrectSilaba('aluno', 2, silaba, level2_wrongAnswers, new Date());
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
    level3_wrongAnswers,
    level3_SilabasClicked = [];

var level3_silabas = {
    "cha": audio["cha"],
    "lho": audio["lho"],
    "ta": audio["ta"]
};

var level3_imagesByRound = {
    1: {
        "boneca": images["boneca"],
        "magico": images["magico"],
        "tocha": images["tocha"],
        "gancho": images["gancho"],
        "borracha": images["borracha"],
        "concha": images["concha"]
    },
    2: {
        "sapato": images["sapato"],
        "alho": images["alho"],
        "piolho": images["piolho"],
        "toalha": images["toalha"],
        "joelho": images["joelho"],
        "gelado": images["gelado"]
    },
    3: {
        "raquete": images["raquete"],
        "postal": images["postal"],
        "bota": images["bota"],
        "borboleta": images["borboleta"],
        "cadeira": images["cadeira"],
        "bolota": images["bolota"]
    }
};

function level3_load() {
    level3_roundNumber = 1;
    level3_numCorrectAnswers = 0;
    ResultsGame3ByStudent = [];
    level3_SilabasClicked = [];
    clearCanvas(true);
    loadHelpBtn('blue', 3);
    level3_loadSilaba(Object.keys(level3_silabas)[level3_roundNumber - 1]);
    level3_loadImagesAndSounds(level3_roundNumber);
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

function level3_loadImagesAndSounds(round) {
    clearCanvas(true);

    var img = level3_imagesByRound[round];

    level3_loadImage(Object.keys(img)[0], canvasWidth * 0.20, canvasHeight * 0.30);
    level3_loadImage(Object.keys(img)[1], canvasWidth * 0.45, canvasHeight * 0.30);
    level3_loadImage(Object.keys(img)[2], canvasWidth * 0.70, canvasHeight * 0.30);
    level3_loadImage(Object.keys(img)[3], canvasWidth * 0.20, canvasHeight * 0.70);
    level3_loadImage(Object.keys(img)[4], canvasWidth * 0.45, canvasHeight * 0.70);
    level3_loadImage(Object.keys(img)[5], canvasWidth * 0.70, canvasHeight * 0.70);

    $(".btn").remove();

    level3_loadAnswerButton(Object.keys(img)[0], canvasWidth * 0.20, canvasHeight * 0.42);
    level3_loadAnswerButton(Object.keys(img)[1], canvasWidth * 0.45, canvasHeight * 0.42);
    level3_loadAnswerButton(Object.keys(img)[2], canvasWidth * 0.70, canvasHeight * 0.42);
    level3_loadAnswerButton(Object.keys(img)[3], canvasWidth * 0.20, canvasHeight * 0.82);
    level3_loadAnswerButton(Object.keys(img)[4], canvasWidth * 0.45, canvasHeight * 0.82);
    level3_loadAnswerButton(Object.keys(img)[5], canvasWidth * 0.70, canvasHeight * 0.82);
};

function level3_loadImage(objeto, _left, _top) {
    fabric.Image.fromURL(images[objeto], function(img) {
        canvas.add(img.set({
            left: _left + 30,
            top: _top,
            hasControls: false,
            hasBorders: false,
            lockMovementX: true,
            lockMovementY: true
        }).scale(0.30));

        img.on('mousedown', function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', audio[objeto]);
            audioElement.play();
        });
    });
};

function level3_loadAnswerButton(figureName, left, top) {
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

function level3_loadEvents() {
    level3_btnAnswer();
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

function level3_loadNextRound() {
    level3_roundNumber += 1;
    level3_wrongAnswers = 0;
    level3_loadSilaba(Object.keys(level3_silabas)[level3_roundNumber - 1]);
    level3_loadImagesAndSounds(level3_roundNumber);
    changeBackgroundColor(sequenciaCores[level3_roundNumber - 1]);
};

function level3_btnAnswer() {
    $('.btn').click(function() {
        var valor = $(this).attr("value");

        if ($.inArray(valor, level3_SilabasClicked) != -1) {
            $(this).removeClass('btn-green');
            $(this).addClass('btn-yellow');

            level3_SilabasClicked.splice($.inArray(valor, level3_SilabasClicked), 1);
            $(level3_nextBtn).prop('disabled', true);
            return;
        };

        if (level3_SilabasClicked.length == 3) {
            return;
        };

        $(this).removeClass('btn-yellow');
        $(this).addClass('btn-green');

        level3_SilabasClicked.push(valor);

        if (level3_SilabasClicked.length == 3) {
            $(level3_nextBtn).prop('disabled', false);
        };

        // var solution = solutions[2][level2_roundNumber - 1][valor];

        // if (solution == true) {
        //     $(this).addClass('btn-valid btn-valid-25');
        //     playSoundAnswer(true);
        //     level2_correctAnswer();
        // } else {
        //     $(this).addClass('btn-error btn-error-25');
        //     playSoundAnswer(false);
        //     level2_wrongAnswers += 1;
        // };
        // $(this).addClass('btn-disabled');
        // $(this).unbind('click');
        // $(this).css("cursor", 'default');
    });
};

function level3_resetButtons() {
    $('.btn').removeClass('btn-disabled');
    $('.btn').removeClass('btn-valid btn-valid-25');
    $('.btn').removeClass('btn-error btn-error-25');
    //add handler
    level3_btnAnswer();
    $('.btn').css("cursor", 'pointer');
    $('.btn').prop('disabled', false);

    $('.btn').removeClass('btn-green');
    $('.btn').addClass('btn-yellow');

    $(level3_nextBtn).prop('disabled', true);
    level3_SilabasClicked = [];
};

function level3_correctAnswer() {
    level3_numCorrectAnswers++;

    if (level3_numCorrectAnswers == level3_maxCorrectAnswers) {
        $('.btn').addClass('btn-disabled');
        //remove handler
        $('.btn').unbind('click');
        $('.btn').css("cursor", 'default');
        //$(level3_nextBtn).prop('disabled', false);
        level3_numCorrectAnswers = 0;

        var silaba = Object.keys(level3_silabas)[level3_roundNumber - 1];
        var result = new ResultGameCorrectSilaba('aluno', 3, silaba, level3_wrongAnswers, new Date());
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

//Variaveis globais level4
var level4_nextBtn,
    level4_roundNumber = 1,
    level4_microClicked = [];

var level4_palavras = {
    "mao": audio["mao"],
    "bar": images["bar"],
    "campo": images["campo"]
};

var level4_imagesByRound = {
    1: {
        "ma": images["ma"],
        "sal": images["sal"],
        "ir": images["ir"]
    },
    2: {
        "tur": images["tur"],
        "rou": images["rou"],
        "ta": images["ta"]
    },
    3: {
        "des": images["des"],
        "a": images["a"],
        "re": images["re"]
    }
};

function level4_load() {
    level4_roundNumber = 1;
    level4_microClicked = [];
    clearCanvas(true);
    loadHelpBtn('green', 4);
    level4_loadPalavra(Object.keys(level4_palavras)[level4_roundNumber - 1]);
    level4_loadBuzzerBtnAndSounds(level4_roundNumber);
    level4_loadNextButton();
    level4_loadEvents();
    changeBackgroundColor(sequenciaCores[level4_roundNumber - 1]);
};

function level4_loadPalavra(palavra) {
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

function level4_loadmicro(silaba, _left, _top) {
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
        var _palavra = Object.keys(level4_palavras)[level4_roundNumber - 1];
        var _silaba = silaba;
        toggleRecording(this, _silaba + _palavra);

        var id = $(this).prop('id');
        if ($.inArray(id, level4_microClicked) < 0) {
            level4_microClicked.push(id);

            var numSilabas = Object.keys(level4_imagesByRound[level4_roundNumber]).length;
            if (level4_microClicked.length == numSilabas) {
                $(level4_nextBtn).prop('disabled', false);
            };
        };
    });
};

function level4_loadBuzzerBtnAndSounds() {
    $(".buzzerBtn").remove();
    $(".record").remove();

    var silabas = level4_imagesByRound[level4_roundNumber];

    level4_loadBuzzerBtn(Object.keys(silabas)[0], canvasWidth * 0.20 - 30, canvasHeight * 0.40);
    level4_loadBuzzerBtn(Object.keys(silabas)[1], canvasWidth * 0.45 - 30, canvasHeight * 0.40);
    level4_loadBuzzerBtn(Object.keys(silabas)[2], canvasWidth * 0.70 - 30, canvasHeight * 0.40);

    level4_loadmicro(Object.keys(silabas)[0], canvasWidth * 0.20, canvasHeight * 0.62);
    level4_loadmicro(Object.keys(silabas)[1], canvasWidth * 0.45, canvasHeight * 0.62);
    level4_loadmicro(Object.keys(silabas)[2], canvasWidth * 0.70, canvasHeight * 0.62);
};

function level4_loadBuzzerBtn(objeto, _left, _top) {
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

function level4_loadEvents() {
    var numberOfRounds = Object.keys(level4_imagesByRound).length;

    $('#btn-next').click(function(btn) {
        if (level4_roundNumber == numberOfRounds) {
            clearCanvasAndBtns();
            createBigButton('Jogo 5');
        } else {
            if (level4_roundNumber == numberOfRounds - 1) {
                $(level4_nextBtn).text('Fim');
            };
            level4_loadNextRound();
            $(level4_nextBtn).prop('disabled', true);
        };
    });
};

function level4_loadNextRound() {
    clearCanvas(true);
    level4_roundNumber += 1;
    level4_loadPalavra(Object.keys(level4_palavras)[level4_roundNumber - 1]);
    level4_loadBuzzerBtnAndSounds();
    level4_microClicked = [];
    changeBackgroundColor(sequenciaCores[level4_roundNumber - 1]);
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
    level5_microClicked = [];

var level5_imagesByRound = {
    1: {
        "intrincar": images["intrincar"],
        "peluche": images["peluche"]
    },
    2: {
        "riacho": images["riacho"],
        "farmacia": images["farmacia"]
    },
    3: {
        "salpico": images["salpico"],
        "magico": images["magico"]
    }
};

function level5_load() {
    level5_roundNumber = 1;
    level5_microClicked = [];
    clearCanvas(false);
    loadHelpBtn('green', 5);
    level5_loadBuzzerBtnAndSounds(level5_roundNumber);
    level5_loadNextButton();
    level5_loadEvents();
    changeBackgroundColor(sequenciaCores[level5_roundNumber - 1]);
};

function level5_loadmicro(palavra, _left, _top) {
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
        if ($.inArray(id, level5_microClicked) < 0) {
            level5_microClicked.push(id);

            var numSilabas = Object.keys(level5_imagesByRound[level5_roundNumber]).length;
            if (level5_microClicked.length == numSilabas) {
                $(level5_nextBtn).prop('disabled', false);
            };
        };
    });
};

function level5_loadBuzzerBtnAndSounds() {
    $(".buzzerBtn").remove();
    $(".record").remove();

    var palavras = level5_imagesByRound[level5_roundNumber];

    level5_loadBuzzerBtn(Object.keys(palavras)[0], canvasWidth * 0.30 - 30, canvasHeight * 0.40);
    level5_loadBuzzerBtn(Object.keys(palavras)[1], canvasWidth * 0.60 - 30, canvasHeight * 0.40);

    level5_loadmicro(Object.keys(palavras)[0], canvasWidth * 0.30, canvasHeight * 0.62);
    level5_loadmicro(Object.keys(palavras)[1], canvasWidth * 0.60, canvasHeight * 0.62);
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

    $(btn).on("click", function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', audio[objeto]);
        audioElement.play();
    });
};

function level5_loadEvents() {
    var numberOfRounds = Object.keys(level5_imagesByRound).length;

    $('#btn-next').click(function(btn) {
        if (level5_roundNumber == numberOfRounds) {
            clearCanvasAndBtns();
            createBigButton('Fim');
        } else {
            if (level5_roundNumber == numberOfRounds - 1) {
                $(level5_nextBtn).text('Fim');
            };
            level5_loadNextRound();
            $(level5_nextBtn).prop('disabled', true);
        };
    });
};

function level5_loadNextRound() {
    clearCanvas(false);
    level5_roundNumber += 1;
    level5_loadBuzzerBtnAndSounds();
    level5_microClicked = [];
    changeBackgroundColor(sequenciaCores[level5_roundNumber - 1]);
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
