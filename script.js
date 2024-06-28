const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
      enunciado:
        "Com as constantes inovações no cenário tecnológico e o agravamento dos impactos climáticos, você considera a inteligência articial uma aliada ou inimiga do meio ambiente?",
      alternativas: [
        {
          texto: "É uma forte aliada",
          afirmacao: "afirmação",
        },
        {
          texto: "Inimiga do meio ambiente",
          afirmacao: "afirmação",
        },
      ],
    },
    {
      enunciado:
        "À medida que o anos passam, as empresas criadoras de dispositivos eletrônicos diminuem seu prazo de validade. Logo, fica o seguinte questionamento, a obsolescência programada de dispositivos de IA tem grandes impactos na geração de resíduos eletrônicos, o que, consequentemente, poderia afetar o meio ambiente?",
      alternativas: [
        {
          texto:
            "Tal fato não causam graves impactos ambientais, visto que os novos dispositivos criados não geram um grande número de resíduos, uma vez que na fabricação do produto já há um planejamento de recursos utilizados",
          afirmacao: "afirmação",
        },
        {
          texto:
            "A obsolescência tecnológica contribui para um volume crescente de resíduos eletrônicos que nem sempre são adequadamente reciclados, gerando graves impactos ambientais, em razão do seu logo tempo de decomposição",
          afirmacao: "afirmação",
        },
      ],
    },
    {
      enunciado:
        "Seria possível que os sistemas de IA possam colaborar para a construção de cidades inteligentes e sustentáveis de maneira acessível a todos?",
      alternativas: [
        {
          texto:
            "Não seria acessível e poderia gerar altos custos no consumo de energia, ou seja, a experiência só se sairia bem sucedida em pouquíssimos lugares que fornecem recursos para a construção e também, se criaria uma dependência tecnológica",
          afirmacao: "afirmação",
        },
        {
          texto:
            "Poderia ser um ótimo investimento em várias cidades, tanto em cidades pequenas que ajudaria a alavancar o crescimento, quanto para grandes cidades que enfrentam problemas ambientais urbanos, tais como poluição, ilhas de calor, inversão térmica.",
          afirmacao: "afirmação",
        },
      ],
    },
    {
      enunciado:
        "É viável realizar a proteção de espécies ameaçadas com IA que superem os impactos ambientais da infraestrutura tecnológica necessária?",
      alternativas: [
        {
          texto:
            "Seria viável, pois a proteção de espécies ameaçadas é crucial para a biodiversidade e a saúde dos ecossistemas.",
          afirmacao: "afirmação",
        },
        {
          texto: 
            "Não, a infraestrutura tecnológica necessária pode ter impactos ambientais que prejudicam outros aspectos do meio ambiente.",
          afirmacao: "afirmação",
        },
      ],
    },
    {
      enunciado:
        "É possível, a partir da IA, diminuir as emissões de carbono e reverter o quadro de aquecimento global do planeta? ",
      alternativas: [
        {
          texto:
            "Não, uma vez que a situação está em estado crítico, na qual as chances de reverter o cenário catastrófico são baixíssimas e as IA podem até mesmo intensificar o processo.",
          afirmacao: "afirmação",
        },
        {
          texto:
            "Sim, ainda há esperança que as IA possam reverter o contexto exposto, propondo soluções e analisando dados, por exemplo mapear o impacto do desmatamento e calcular o derretimento de geleiras.",
          afirmacao: "afirmação",
        },
      ],
    },
  ];
  

let atual = 0;
let perguntaAtual;
let historiaFinal= "";

function mostraPergunta() {
  if(atual >= perguntas.length){
    mostraResultado();
    return; 
  }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();  
}

function mostraResultado(){
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = " ";
}

mostraPergunta();
