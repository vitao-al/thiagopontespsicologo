export interface Lawyer {
  id: number;
  name: string;
  role: string;
  specialties: string[];
  image: string;
  crp: string;
}

export const lawyers: Lawyer[] = [
  {
    id: 1,
    name: 'Ps. Thiago Pontes',
    role: 'CEO',
    specialties: ['Psicólogo Clínico'],
    image: '/thiagopontesperfil.jpeg',
    crp: 'CRP 15/8063'
  }
];