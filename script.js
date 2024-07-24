const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você saí da escola se depara com a sociedade, sendo ela muito diferente da convivencia dentro de casa,oq você acha sobre?",
        alternativas: [
            {
                texto: "Isso é assustador",
                afirmacao: "afirmação"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "A sociedade nos permite conhecer pessoas e ideiais totalmente diferente da nossa , mas também nos faz refem do que eles defendem , vc gosta? ",
        alternativas: [
            {
                texto: "sim, a sociedade é criativa e",
                afirmacao: "afirmação"
            },
            {
                texto: "não, são ideias nada confirmadas.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "você acha que pode mudar a sociedade?",
        alternativas: [
            {
                texto: "sim,  tenho ideias revolucionária ",
                afirmacao: "afirmação"
            },
            {
                texto: "não, sou apenas um no meio da mutidão.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: " para o futuro da sociedade, o que você escolheria?",
        alternativas: [
            {
                texto: "uma sociedade com mais liberdade de expressão,e com atitude",
                afirmacao: "afirmação"
            },
            {
                texto: "uma sociedade mais regrada e conservando valores pessoais",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "sobre o futuro, como  vê a sociedade?",
        alternativas: [
            {
                texto: "igual as mesmas coisas",
                afirmacao: "afirmação"
            },
            {
                texto: "diferente porque muda com o tempo.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " De todas as maneiras a sociedade depende de você,cada escolha tem suas consequências";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();