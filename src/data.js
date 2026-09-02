/* Espaço Delas — Andreza Lima
   Todo o conteúdo abaixo é baseado no catálogo oficial
   ("Catálogo - Espaço Andreza Lima.pdf") e no Instagram @andrezalima.delas. */

export const CONTACT = {
  whatsappNumber: '5521995263231',
  whatsappHref:
    'https://wa.me/5521995263231?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20no%20Espa%C3%A7o%20Delas.',
  instagramHref: 'https://www.instagram.com/andrezalima.delas/',
}

/* Frase editorial — palavras e chips fotográficos são itens flex
   individuais, mantendo o mesmo sistema visual da referência. */
export const journeyWords = [
  { t: 'Cada' },
  { t: 'corpo' },
  { t: 'tem' },
  { t: 'sua' },
  { t: 'história.' },
  { t: 'Por' },
  { t: 'isso,' },
  { img: 'inline-detail-1.jpg', size: 38, mobileSize: 24, tabletSize: 32 },
  { t: 'cuidamos' },
  { t: 'com' },
  { t: 'técnica,' },
  { t: 'atenção' },
  { t: 'e' },
  { t: 'respeito' },
  { t: 'ao' },
  { t: 'que' },
  { t: 'você' },
  { t: 'deseja' },
  { img: 'inline-detail-2.jpg', size: 44, mobileSize: 30, tabletSize: 38 },
  { t: 'valorizar.' },
]

export const treatments = [
  {
    slug: 'delas-sculpt-touch',
    title: 'Método Delas Sculpt Touch',
    icon: 'icon-sculpt.svg',
    description:
      'Drenagem linfática com manta térmica, ultrassom e infravermelho. Avaliação personalizada para flacidez, gordura localizada e redução de medidas.',
    image: 'delas-sculpt-touch.jpg',
  },
  {
    slug: 'drenagem-linfatica',
    title: 'Drenagem Linfática',
    icon: 'icon-drenagem.svg',
    description:
      'Técnica manual suave que ajuda a desinchar, eliminar líquidos e melhorar a circulação, com sensação de leveza desde a primeira sessão.',
    image: 'drenagem-linfatica.jpg',
  },
  {
    slug: 'massagem-modeladora',
    title: 'Massagem Modeladora',
    icon: 'icon-modeladora.svg',
    description:
      'Movimentos firmes para reduzir medidas e melhorar o contorno corporal, com manta térmica e bambuterapia potencializando os resultados.',
    image: 'massagem-modeladora.jpg',
  },
  {
    slug: 'ventosaterapia',
    title: 'Ventosaterapia',
    icon: 'icon-ventosa.svg',
    description:
      'Estimula a circulação e alivia tensões musculares, auxiliando na eliminação de toxinas e na sensação de relaxamento profundo.',
    image: 'ventosaterapia.jpg',
  },
]

export const approachList = [
  { icon: 'icon-list-1.svg', text: 'Ambiente pensado para o seu conforto' },
  { icon: 'icon-list-2.svg', text: 'Protocolos adaptados ao seu corpo' },
  { icon: 'icon-list-3.svg', text: 'Atendimento próximo e humanizado' },
]

/* Galeria da seção editorial — usa a prova visual do Delas Sculpt Touch
   em posição de boa legibilidade, antes da seção de tratamentos. */
export const gallery = {
  a: 'gallery-a.jpg',
  b: 'gallery-b.jpg',
  c: 'gallery-c.jpg',
  d: 'gallery-d.jpg',
}
