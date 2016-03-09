function SubmitJogo(dados) {
    var myEl = parent.angular.element(parent.document.querySelector('#uiViewMain'));
    var myScope = parent.angular.element(myEl).scope();
    //  parent.myScopio = myScope;
    myScope.$broadcast("postJogoResultados", dados);
}

$(document).ready(function () {
    // SubmitJogo("dados do jogo");
    $(".btMiew").click(function () {
        //  alert("Handler for .click() called.");
        var perguntas = [
            {
                pergunta: "Pergunta 01",
                id: 1,
                respostaCorreta: true,
                respostas: ["3ª tentativa"]
            },
            {
                pergunta: "Pergunta 02",
                id: 2,
                respostaCorreta: true,
                respostas: ["sim", "talvez", "ok"]
            },
            {
                pergunta: "Pergunta 03",
                id: 3,
                respostaCorreta: false,
                respostas: ["resposta", "errada"]
            }];
        SubmitJogo(perguntas);
    });
});