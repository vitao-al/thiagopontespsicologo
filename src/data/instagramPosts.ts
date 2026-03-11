

export interface InstagramPost {
  id: number;
  imageUrl: string;
  caption: string;
  date: string;
  link: string;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    imageUrl: "/p1.jpeg",
    caption: "Sou psicólogo clínico e trabalho com a Terapia Cognitivo-Comportamental e terapias contextuais no cuidado em saúde mental.\nAo longo da prática clínica, fui percebendo que falar de saúde mental exige mais do que pensar em diagnósticos ou sintomas isolados. Muitas vezes, o sofrimento humano aparece de formas complexas, atravessando histórias de vida, relações, expectativas e experiências que nem sempre cabem em categorias simples.\n Por isso, tenho me interessado cada vez mais por uma compreensão da saúde mental que considere a experiência humana em toda a sua complexidade.\nEste perfil nasce como um espaço para pensar essas questões a partir da clínica: refletindo sobre saúde mental, prática profissional e as diferentes formas de compreender o sofrimento humano.\n Seja bem vindo!\nUma nova fase se inicia.",
    date: "2025-03-06",
    link: "https://www.instagram.com/p/DVi_6VgDgic/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  }
];