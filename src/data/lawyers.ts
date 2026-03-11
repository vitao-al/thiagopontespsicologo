export interface Lawyer {
  id: number;
  name: string;
  specialties: string[];
  image: string;
  crp: string;
}

export const lawyers: Lawyer[] = [
  {
    id: 1,
    name: 'Thiago Vinicius Pontes Paes',
    specialties: ['Psicólogo Clínico'],
    image: '/thiagopontes5.jpeg',
    crp: 'CRP 15/8063'
  }
];