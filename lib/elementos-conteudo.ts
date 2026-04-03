import type { Elemento } from './elementos'

export interface ConteudoElemento {
  essencia:      string
  estacao:       string
  orgaos:        string
  emocao:        string
  personalidade: string
  pontos:        string[]
  desafios:      string[]
  praticas:      string[]
  alimentacao:   string
  cores:         string
}

export const CONTEUDO: Record<Elemento, ConteudoElemento> = {
  madeira: {
    essencia:      'A força que rompe a terra e alcança a luz. Crescimento que não pode ser contido.',
    estacao:       'Primavera',
    orgaos:        'Fígado e Vesícula Biliar',
    emocao:        'Raiva → Criatividade',
    personalidade: 'A Madeira representa impulso vital e expansão. Pessoas deste elemento são visionárias, líderes naturais, pioneiras — precisam avançar, crescer, construir. Assertivas e diretas, com capacidade natural de planejamento e execução. A frustração é seu sinal de desequilíbrio.',
    pontos:   ['Visão estratégica', 'Liderança natural', 'Criatividade e inovação', 'Determinação e foco', 'Capacidade de inspirar'],
    desafios: ['Impaciência e irritabilidade', 'Dificuldade com autoridade', 'Tensão muscular e tendões', 'Perfeccionismo competitivo'],
    praticas: ['Acupuntura (fígado/VB)', 'Shiatsu', 'Yoga dinâmico', 'Artes marciais', 'Journaling criativo', 'Caminhadas em florestas'],
    alimentacao: 'Alimentos verdes e levemente azedos: limão, folhas verdes, broto, vinagre de maçã. Reduzir álcool.',
    cores: 'Verde em todas as nuances · Teal · Esmeralda',
  },

  fogo: {
    essencia:      'A luz que ilumina e aquece. A alegria que transforma tudo ao redor.',
    estacao:       'Verão',
    orgaos:        'Coração e Intestino Delgado',
    emocao:        'Euforia → Alegria',
    personalidade: 'O Fogo representa expansão, conexão e alegria de viver. Pessoas deste elemento são carismáticas, expressivas, comunicadoras natas. Falam com o coração e inspiram com presença. Criam ambientes de calor e entusiasmo. O excesso leva à ansiedade e dispersão.',
    pontos:   ['Carisma e presença magnética', 'Comunicação apaixonada', 'Criação de conexões profundas', 'Entusiasmo contagiante', 'Inteligência emocional elevada'],
    desafios: ['Ansiedade e palpitações', 'Insônia', 'Dispersão e falta de foco', 'Ciclos de euforia/tristeza'],
    praticas: ['Acupuntura (coração/ID)', 'Musicoterapia', 'Arteterapia', 'Dança', 'Yoga suave', 'Meditação Metta'],
    alimentacao: 'Amargos em moderação: chocolate amargo, verduras amargas. Evitar excesso de estimulantes.',
    cores: 'Vermelho suave · Laranja · Rosa · Coral',
  },

  terra: {
    essencia:      'O centro que sustenta tudo. A terra firme sob os pés de todos que ama.',
    estacao:       'Transição entre estações',
    orgaos:        'Baço/Pâncreas e Estômago',
    emocao:        'Preocupação → Concentração',
    personalidade: 'A Terra representa nutrição, estabilidade e cuidado. Pessoas deste elemento são naturalmente cuidadoras — encontram propósito em nutrir e apoiar. Confiáveis, práticas, mediadoras natas. Profundamente empáticas, precisam aprender a cuidar de si tanto quanto cuidam dos outros.',
    pontos:   ['Empatia profunda', 'Estabilidade emocional', 'Capacidade de criar harmonia', 'Senso prático', 'Lealdade e confiabilidade'],
    desafios: ['Preocupação excessiva', 'Dificuldade em dizer não', 'Problemas digestivos', 'Tendência ao acúmulo'],
    praticas: ['Acupuntura (baço/estômago)', 'Massagem ayurvédica', 'Jardinagem', 'Cozinhar com presença', 'Grounding', 'Yoga restaurativo'],
    alimentacao: 'Alimentos amarelos e levemente doces: abóbora, batata-doce, milho, mel, cúrcuma. Refeições regulares.',
    cores: 'Amarelo · Ocre · Laranja terroso · Bege quente',
  },

  metal: {
    essencia:      'A clareza que corta como aço. A leveza de quem sabe soltar.',
    estacao:       'Outono',
    orgaos:        'Pulmão e Intestino Grosso',
    emocao:        'Tristeza → Clareza',
    personalidade: 'O Metal representa o poder de definir limites e buscar excelência. Pessoas deste elemento são organizadas, detalhistas, com senso estético apurado. Valorizam qualidade sobre quantidade e carregam ética profunda — às vezes lida como rigidez, mas nascida de integridade genuína.',
    pontos:   ['Pensamento analítico e preciso', 'Senso estético elevado', 'Comprometimento e responsabilidade', 'Capacidade de criar ordem', 'Discernimento e síntese'],
    desafios: ['Perfeccionismo excessivo', 'Dificuldade em se desapegar', 'Vulnerabilidade à melancolia', 'Rigidez e inflexibilidade'],
    praticas: ['Acupuntura (pulmão/IG)', 'Qi Gong respiratório', 'Meditação vipassana', 'Journaling', 'Organização de espaços'],
    alimentacao: 'Alimentos brancos e levemente picantes: pera, nabo, alho, raiz-forte. Evitar laticínios em excesso.',
    cores: 'Branco · Cinza suave · Tons neutros frios',
  },

  agua: {
    essencia:      'A profundidade que sustenta toda vida. A força que flui sem resistência.',
    estacao:       'Inverno',
    orgaos:        'Rim e Bexiga',
    emocao:        'Medo → Sabedoria',
    personalidade: 'A Água representa profundidade, reserva e sabedoria. Pessoas deste elemento são introspectivas, filosóficas, com memória extraordinária e dom para estratégia. Resilientes — contornam obstáculos em vez de confrontar. Leais quando confiam, misteriosas para quem não conhecem.',
    pontos:   ['Profundidade intelectual', 'Intuição aguçada', 'Perseverança e resiliência', 'Visão de longo prazo', 'Memória extraordinária'],
    desafios: ['Tendência ao isolamento', 'Medo paralisante', 'Cansaço crônico', 'Análise excessiva'],
    praticas: ['Acupuntura (rim/bexiga)', 'Reiki', 'Hidroterapia', 'Banhos terapêuticos', 'Meditação próxima à água', 'Tai Chi Chuan'],
    alimentacao: 'Alimentos escuros: feijão preto, nozes, alga marinha, peixe. Hidratação constante.',
    cores: 'Azul profundo · Índigo · Azul-marinho',
  },
}
