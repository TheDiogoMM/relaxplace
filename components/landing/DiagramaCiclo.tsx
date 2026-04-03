'use client'

// Posicionamento: pentágono com Fogo no topo, sentido horário
const R   = 140  // raio vértices
const CX  = 200  // centro x
const CY  = 208  // centro y

const ANGULOS: Record<string, number> = {
  fogo:    -90,
  terra:   -90 + 72,
  metal:   -90 + 144,
  agua:    -90 + 216,
  madeira: -90 + 288,
}

function pos(ang: number, raio: number) {
  const r = (ang * Math.PI) / 180
  return { x: CX + raio * Math.cos(r), y: CY + raio * Math.sin(r) }
}

const ELEMENTOS = [
  { id: 'fogo',    nome: 'Fogo',    cor: 'var(--fire-c)',  bg: 'var(--fire-bg)',  anim: 'anim-fogo'    },
  { id: 'terra',   nome: 'Terra',   cor: 'var(--earth-c)', bg: 'var(--earth-bg)', anim: 'anim-terra'   },
  { id: 'metal',   nome: 'Metal',   cor: 'var(--metal-c)', bg: 'var(--metal-bg)', anim: 'anim-metal'   },
  { id: 'agua',    nome: 'Água',    cor: 'var(--water-c)', bg: 'var(--water-bg)', anim: 'anim-agua'    },
  { id: 'madeira', nome: 'Madeira', cor: 'var(--wood-c)',  bg: 'var(--wood-bg)',  anim: 'anim-madeira' },
]

const CICLO = [
  ['madeira', 'fogo'],
  ['fogo',    'terra'],
  ['terra',   'metal'],
  ['metal',   'agua'],
  ['agua',    'madeira'],
]

const PONTOS = Object.values(ANGULOS)
  .map(a => pos(a, R))
  .map(p => `${p.x},${p.y}`)
  .join(' ')

interface Props { size?: number; interactive?: boolean }

export default function DiagramaCiclo({ size = 400, interactive = false }: Props) {
  return (
    <>
      {/* Keyframes de animação de cada elemento */}
      <style>{`
        /* MADEIRA — crescimento vertical pulsante */
        @keyframes madeira-pulse {
          0%, 100% { transform: scale(1) translateY(0); }
          50%       { transform: scale(1.08) translateY(-3px); }
        }
        .anim-madeira { animation: madeira-pulse 3s ease-in-out infinite; }

        /* FOGO — flickering / escala irregular */
        @keyframes fogo-flicker {
          0%   { transform: scale(1)    rotate(0deg); }
          20%  { transform: scale(1.06) rotate(1.5deg); }
          40%  { transform: scale(0.97) rotate(-1deg); }
          60%  { transform: scale(1.08) rotate(2deg); }
          80%  { transform: scale(0.98) rotate(-1.5deg); }
          100% { transform: scale(1)    rotate(0deg); }
        }
        .anim-fogo { animation: fogo-flicker 2.2s ease-in-out infinite; }

        /* TERRA — pulso lento, estável */
        @keyframes terra-breathe {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.05); opacity: 0.85; }
        }
        .anim-terra { animation: terra-breathe 4s ease-in-out infinite; }

        /* METAL — brilho/shimmer rotativo */
        @keyframes metal-shimmer {
          0%, 100% { transform: rotate(0deg)   scale(1); }
          25%       { transform: rotate(6deg)   scale(1.04); }
          75%       { transform: rotate(-6deg)  scale(1.04); }
        }
        .anim-metal { animation: metal-shimmer 3.5s ease-in-out infinite; }

        /* ÁGUA — ondulação fluida */
        @keyframes agua-wave {
          0%   { transform: translateY(0)   scale(1); }
          33%  { transform: translateY(-4px) scale(1.04); }
          66%  { transform: translateY(2px)  scale(0.97); }
          100% { transform: translateY(0)   scale(1); }
        }
        .anim-agua { animation: agua-wave 3.8s ease-in-out infinite; }

        /* Anel rotatório lento */
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .penta-ring   { animation: rotate-slow 40s linear infinite; }
        .penta-labels { animation: rotate-slow 40s linear infinite reverse; }

        @media (prefers-reduced-motion: reduce) {
          .anim-madeira, .anim-fogo, .anim-terra, .anim-metal, .anim-agua,
          .penta-ring, .penta-labels { animation: none !important; }
        }
      `}</style>

      <div
        style={{ width: size, height: size, maxWidth: '100%', flexShrink: 0 }}
        role="img"
        aria-label="Diagrama do ciclo dos cinco elementos — Medicina Tradicional Chinesa"
      >
        <svg viewBox="0 0 400 416" width={size} height={size} style={{ overflow: 'visible' }}>

          {/* Anel decorativo externo */}
          <g className="penta-ring" style={{ transformOrigin: `${CX}px ${CY}px` }}>
            <circle cx={CX} cy={CY} r={R + 42} fill="none" stroke="var(--sage-l)"
              strokeWidth="0.5" strokeDasharray="3 8" opacity={0.4} />
            <circle cx={CX} cy={CY} r={R + 55} fill="none" stroke="var(--sage-l)"
              strokeWidth="0.5" strokeDasharray="1 14" opacity={0.2} />
          </g>

          {/* Fundo do pentágono */}
          <polygon
            points={PONTOS}
            fill="var(--sage-xl)"
            fillOpacity={0.45}
            stroke="var(--sage-l)"
            strokeWidth="1"
          />

          {/* Setas do ciclo (markerEnd por cor) */}
          <defs>
            {CICLO.map(([de]) => {
              const cor = ELEMENTOS.find(e => e.id === de)!.cor
              return (
                <marker key={de} id={`arr-${de}`} markerWidth="6" markerHeight="6"
                  refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill={cor} opacity={0.55} />
                </marker>
              )
            })}
          </defs>

          {CICLO.map(([de, para]) => {
            const pDe   = pos(ANGULOS[de],   R * 0.7)
            const pPara = pos(ANGULOS[para],  R * 0.7)
            const cor   = ELEMENTOS.find(e => e.id === de)!.cor
            return (
              <line key={`${de}-${para}`}
                x1={pDe.x} y1={pDe.y} x2={pPara.x} y2={pPara.y}
                stroke={cor} strokeWidth="1.5" strokeDasharray="4 4"
                opacity={0.5} markerEnd={`url(#arr-${de})`}
              />
            )
          })}

          {/* Nós dos elementos com animação individual */}
          {ELEMENTOS.map(({ id, nome, cor, bg, anim }) => {
            const { x, y } = pos(ANGULOS[id], R)

            return (
              <g key={id} style={{ transformOrigin: `${x}px ${y}px` }}
                className={anim}>
                {/* Halo externo */}
                <circle cx={x} cy={y} r={34} fill={bg} fillOpacity={0.35} />

                {/* Círculo principal */}
                <circle cx={x} cy={y} r={27} fill={bg} stroke={cor} strokeWidth="1.5" />

                {/* Ícone do elemento */}
                <g transform={`translate(${x - 10}, ${y - 18})`}>
                  <ElementIcon id={id} cor={cor} />
                </g>

                {/* Nome */}
                <text x={x} y={y + 13}
                  textAnchor="middle"
                  style={{
                    fontFamily: 'var(--font-ui)',
                    fontSize: '7.5px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    fill: cor,
                    textTransform: 'uppercase',
                    userSelect: 'none',
                  }}>
                  {nome.toUpperCase()}
                </text>
              </g>
            )
          })}

          {/* Centro */}
          <circle cx={CX} cy={CY} r={20} fill="var(--sage-xl)" stroke="var(--sage-l)" strokeWidth="1" />
          <text x={CX} y={CY + 1}
            textAnchor="middle" dominantBaseline="middle"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '10px',
              fontStyle: 'italic',
              fill: 'var(--sage-d)',
              userSelect: 'none',
            }}>
            MTC
          </text>
        </svg>
      </div>
    </>
  )
}

// Ícones SVG inline por elemento (20×20 viewBox)
function ElementIcon({ id, cor }: { id: string; cor: string }) {
  switch (id) {
    case 'madeira':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <line x1="10" y1="18" x2="10" y2="6" stroke={cor} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 6 C10 6 6 9 4 6" stroke={cor} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
          <path d="M10 6 C10 6 14 9 16 6" stroke={cor} strokeWidth="1.2" strokeLinecap="round" fill="none"/>
          <path d="M10 10 C10 10 7 12 5 10" stroke={cor} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6"/>
          <path d="M10 10 C10 10 13 12 15 10" stroke={cor} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6"/>
          <path d="M9 4 Q10 2 11 4" stroke={cor} strokeWidth="1" strokeLinecap="round" fill={cor} fillOpacity="0.3"/>
        </svg>
      )
    case 'fogo':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 18 C10 18 4 13 4 9 C4 6 6.5 4 10 5 C10 5 8 8 10 9 C12 8 12 5 13.5 4 C15.5 6 16 8.5 16 9 C16 13 10 18 10 18Z"
            fill={cor} fillOpacity="0.25" stroke={cor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 16 C10 16 7.5 13.5 7.5 11.5 C7.5 10 8.8 9.5 10 10.5 C11.2 9.5 12.5 10 12.5 11.5 C12.5 13.5 10 16 10 16Z"
            fill={cor} fillOpacity="0.5"/>
        </svg>
      )
    case 'terra':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <ellipse cx="10" cy="13" rx="7" ry="4" fill={cor} fillOpacity="0.2" stroke={cor} strokeWidth="1.2"/>
          <ellipse cx="10" cy="13" rx="3.5" ry="2" fill={cor} fillOpacity="0.4"/>
          <line x1="10" y1="9" x2="10" y2="5" stroke={cor} strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="10" cy="4" r="1.5" fill={cor} fillOpacity="0.6"/>
        </svg>
      )
    case 'metal':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <polygon points="10,2 17,8 14.5,17 5.5,17 3,8"
            fill={cor} fillOpacity="0.12" stroke={cor} strokeWidth="1.2" strokeLinejoin="round"/>
          <polygon points="10,5.5 14,9 12,15 8,15 6,9"
            fill={cor} fillOpacity="0.3"/>
          <line x1="10" y1="2" x2="10" y2="5.5" stroke={cor} strokeWidth="0.8" opacity="0.5"/>
        </svg>
      )
    case 'agua':
      return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 2 C10 2 4 8 4 13 C4 16.3 6.7 18 10 18 C13.3 18 16 16.3 16 13 C16 8 10 2 10 2Z"
            fill={cor} fillOpacity="0.18" stroke={cor} strokeWidth="1.2" strokeLinecap="round"/>
          <path d="M7 14 C7.5 16 8.8 17 10 17" stroke={cor} strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
        </svg>
      )
    default:
      return null
  }
}
