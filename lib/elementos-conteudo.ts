import type { Elemento } from './elementos'

export interface ConteudoElemento {
  essencia:            string
  estacao:             string
  orgaos:              string
  emocao:              string
  descricaoAmbiente:   string
  posicaoCiclo:        string
  avisoAmbiente:       string
  coresElemento:       string
  coresNutricao:       string
  formasFavoraveis:    string
  formasMenos:         string
  conclusao:           string
}

export const CONTEUDO: Record<Elemento, ConteudoElemento> = {
  terra: {
    essencia:   'O centro que sustenta tudo. A terra firme sob os pés de todos que ama.',
    estacao:    'Transição entre estações',
    orgaos:     'Baço/Pâncreas e Estômago',
    emocao:     'Preocupação → Concentração',

    descricaoAmbiente:
      'O elemento Terra está ligado à estabilidade, segurança e acolhimento.',

    posicaoCiclo:
      'Ele se posiciona no ciclo entre o Fogo (que o nutre) e o Metal (que recebe sua energia), o que faz com que a pessoa Terra tenha uma tendência natural ao cuidado, sustentação e equilíbrio.',

    avisoAmbiente:
      'Quando exposta por muito tempo a ambientes com predominância de cores, formas e materiais do elemento Metal — como branco, cinza, superfícies frias e formas muito rígidas ou circulares — pode sentir desconexão, frieza e perda de acolhimento.',

    coresElemento:  'Bege, amarelo e tons terrosos',
    coresNutricao:  'Vermelho e laranja (elemento Fogo, que nutre a Terra)',
    formasFavoraveis: 'Quadradas, baixas e estáveis',
    formasMenos:    'Circulares, metálicas e muito frias (em excesso)',

    conclusao:
      'Essas escolhas fortalecem a sensação de segurança, acolhimento e estabilidade.',
  },

  metal: {
    essencia:   'A clareza que corta como aço. A leveza de quem sabe soltar.',
    estacao:    'Outono',
    orgaos:     'Pulmão e Intestino Grosso',
    emocao:     'Tristeza → Clareza',

    descricaoAmbiente:
      'O elemento Metal está associado à clareza, organização e precisão.',

    posicaoCiclo:
      'Ele se posiciona no ciclo após a Terra (que o nutre) e antes da Água (que recebe sua energia), indicando uma natureza mais analítica, estruturada e refinada.',

    avisoAmbiente:
      'Quando exposto por longos períodos a ambientes com predominância de cores, formas e elementos da Água — como tons escuros, excesso de azul/preto e formas muito fluidas — pode sentir dispersão, indecisão e perda de foco.',

    coresElemento:  'Branco, cinza e tons metalizados',
    coresNutricao:  'Bege e tons terrosos (elemento Terra, que nutre o Metal)',
    formasFavoraveis: 'Circulares, arredondadas e simétricas',
    formasMenos:    'Sinuosas, irregulares e muito fluidas (em excesso)',

    conclusao:
      'Essas escolhas promovem clareza, organização e eficiência no dia a dia.',
  },

  fogo: {
    essencia:   'A luz que ilumina e aquece. A alegria que transforma tudo ao redor.',
    estacao:    'Verão',
    orgaos:     'Coração e Intestino Delgado',
    emocao:     'Euforia → Alegria',

    descricaoAmbiente:
      'O elemento Fogo está relacionado à expressão, vitalidade e presença.',

    posicaoCiclo:
      'Ele se posiciona no ciclo após a Madeira (que o nutre) e antes da Terra (que recebe sua energia). Isso significa que a pessoa Fogo tende a irradiar energia e intensidade, direcionando essa força para o ambiente ao seu redor.',

    avisoAmbiente:
      'Quando exposta por longos períodos a ambientes com predominância de cores, formas e elementos da Terra — como tons terrosos, bege, amarelados e formas quadradas — pode sentir estagnação, cansaço e perda de entusiasmo.',

    coresElemento:  'Vermelho, laranja e tons quentes',
    coresNutricao:  'Verde e tons amadeirados como o marrom (elemento Madeira, que nutre o Fogo)',
    formasFavoraveis: 'Triangulares, pontiagudas e ascendentes',
    formasMenos:    'Quadradas, pesadas e estáticas (em excesso)',

    conclusao:
      'Essas escolhas ajudam a manter sua energia em movimento, favorecendo entusiasmo, expressão e presença.',
  },

  agua: {
    essencia:   'A profundidade que sustenta toda vida. A força que flui sem resistência.',
    estacao:    'Inverno',
    orgaos:     'Rim e Bexiga',
    emocao:     'Medo → Sabedoria',

    descricaoAmbiente:
      'O elemento Água está posicionado no ciclo entre o Metal (que o nutre) e a Madeira (que recebe sua energia). Isso significa que a pessoa Água é naturalmente doadora de energia, especialmente para o elemento Madeira.',

    posicaoCiclo:
      'Por isso, quando exposta por longos períodos a ambientes com predominância de cores, formas e materiais do elemento Madeira — como verdes, tons amadeirados e o uso excessivo da própria madeira — pode sentir desgaste, cansaço e até uma sensação de energia drenada.',

    avisoAmbiente:
      'Para se manter equilibrada, nutrida e energizada, a pessoa de elemento Água se beneficia de ambientes que reforcem sua essência e sua fonte de nutrição.',

    coresElemento:  'Azul e preto',
    coresNutricao:  'Branco, cinza e tons metalizados (elemento Metal, que nutre a Água)',
    formasFavoraveis: 'Sinuosas, curvas, circulares e orgânicas',
    formasMenos:    'Retas, rígidas e muito estruturadas (em excesso)',

    conclusao:
      'Essas escolhas ajudam a restaurar sua energia, trazendo mais disposição, clareza e bem-estar no dia a dia.',
  },

  madeira: {
    essencia:   'A força que rompe a terra e alcança a luz. Crescimento que não pode ser contido.',
    estacao:    'Primavera',
    orgaos:     'Fígado e Vesícula Biliar',
    emocao:     'Raiva → Criatividade',

    descricaoAmbiente:
      'O elemento Madeira está posicionado no ciclo entre a Água (que o nutre) e o Fogo (que recebe sua energia). Isso significa que a pessoa Madeira é naturalmente direcionada ao crescimento, movimento e expansão, mas também tende a doar energia para o elemento Fogo.',

    posicaoCiclo:
      'Quando exposta por longos períodos a ambientes com predominância de cores, formas e estímulos do elemento Fogo — como vermelhos, laranjas, amarelos intensos e formas pontiagudas ou triangulares — pode sentir desgaste, irritação e uma sensação de esgotamento energético.',

    avisoAmbiente:
      'Para manter seu equilíbrio, vitalidade e clareza, a pessoa de elemento Madeira se beneficia de ambientes que reforcem sua base e sua nutrição.',

    coresElemento:  'Verde e tons amadeirados',
    coresNutricao:  'Azul e preto (elemento Água, que nutre a Madeira)',
    formasFavoraveis: 'Retangulares, verticais e alongadas',
    formasMenos:    'Triangulares, pontiagudas e muito quentes (em excesso)',

    conclusao:
      'Essas escolhas ajudam a sustentar sua energia, promovendo mais disposição, foco e sensação de fluidez no dia a dia.',
  },
}
