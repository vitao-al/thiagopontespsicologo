export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "1", //"Quanto tempo demora um processo trabalhista?"
    answer: "A psicoterapia pode ser procurada em diferentes momentos da vida. Algumas pessoas buscam apoio diante de períodos de sofrimento emocional, enquanto outras procuram um espaço de reflexão sobre escolhas, relações ou fases de transição. Em muitos casos, iniciar psicoterapia também significa ampliar a compreensão sobre a própria experiência e desenvolver novas formas de lidar com os desafios da vida.",
    category: "Trabalhista"
  },
  {
    id: 2,
    question: "2",//"Como funciona a primeira consulta?",
    answer: "Não necessariamente. A psicoterapia também pode ser um espaço de reflexão sobre relações, escolhas e diferentes momentos da vida, favorecendo processos de autoconhecimento e desenvolvimento pessoal.",
    category: "Geral"
  },
  {
    id: 3,
    question: "3",//"Quais documentos preciso levar na primeira consulta?",
    answer: "Sim. Nem sempre é fácil nomear ou compreender aquilo que estamos vivendo. O processo terapêutico também se dedica a construir essa compreensão ao longo das sessões.",
    category: "Geral"
  },
  {
    id: 4,
     question: "4",//"Quanto custa para entrar com uma ação?",
    answer: "A psicoterapia não se baseia em aconselhamento ou respostas prontas. Trata-se de um processo de escuta, investigação e reflexão que busca compreender experiências, emoções e modos de lidar com a vida.",
    category: "Geral"
  },
    {
    id: 5,
    question: "5", //"Quanto tempo demora um processo trabalhista?"
    answer: "A duração do processo psicoterapêutico varia de acordo com a história, as demandas e os objetivos de cada pessoa. Em geral, trata-se de um trabalho gradual de compreensão e construção, respeitando o ritmo e as necessidades de cada trajetória.",
    category: "Trabalhista"
  },
  {
    id: 6,
    question: "6",//"Como funciona a primeira consulta?",
    answer: "As sessões têm duração média de 50 minutos e costumam ocorrer semanalmente, podendo ser ajustadas conforme as necessidades do processo terapêutico.",
    category: "Geral"
  },
  {
    id: 7,
    question: "7",//"Quais documentos preciso levar na primeira consulta?",
    answer: "Sim. Os atendimentos podem ser realizados de forma presencial ou online, seguindo os mesmos princípios éticos e técnicos que orientam a prática psicológica.",
    category: "Geral"
  },
  {
    id: 8,
     question: "8",//"Quanto custa para entrar com uma ação?",
    answer: "Os atendimentos são realizados no turno da tarde e da noite, mediante agendamento prévio.",
    category: "Geral"
  },
  {
    id: 9,
     question: "9",//"Quanto custa para entrar com uma ação?",
    answer: "Os atendimentos são realizados de forma particular. No momento, não trabalho com convênios ou planos de saúde.",
    category: "Geral"
  },
  {
    id: 10,
     question: "10",//"Quanto custa para entrar com uma ação?",
    answer: "De acordo com os princípios éticos que orientam a prática profissional em psicologia, informações sobre honorários não são publicizadas. Para obter informações sobre valores e disponibilidade, é necessário entrar em contato diretamente com o profissional.",
    category: "Geral"
  },
];