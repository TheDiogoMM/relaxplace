export type Elemento = 'metal' | 'agua' | 'madeira' | 'fogo' | 'terra'

export const CICLO: Record<Elemento, { anterior: Elemento; proximo: Elemento }> = {
  madeira: { anterior: 'agua',    proximo: 'fogo'    },
  fogo:    { anterior: 'madeira', proximo: 'terra'   },
  terra:   { anterior: 'fogo',    proximo: 'metal'   },
  metal:   { anterior: 'terra',   proximo: 'agua'    },
  agua:    { anterior: 'metal',   proximo: 'madeira' },
}

export const NOMES_ELEMENTO: Record<Elemento, string> = {
  madeira: 'Madeira',
  fogo:    'Fogo',
  terra:   'Terra',
  metal:   'Metal',
  agua:    'Água',
}

export const CORES_ELEMENTO: Record<Elemento, { c: string; bg: string; d: string }> = {
  madeira: { c: 'var(--wood-c)',  bg: 'var(--wood-bg)',  d: 'var(--wood-d)'  },
  fogo:    { c: 'var(--fire-c)',  bg: 'var(--fire-bg)',  d: 'var(--fire-d)'  },
  terra:   { c: 'var(--earth-c)', bg: 'var(--earth-bg)', d: 'var(--earth-d)' },
  metal:   { c: 'var(--metal-c)', bg: 'var(--metal-bg)', d: 'var(--metal-d)' },
  agua:    { c: 'var(--water-c)', bg: 'var(--water-bg)', d: 'var(--water-d)' },
}

interface Periodo {
  aI: number; mI: number; dI: number
  aF: number; mF: number; dF: number
  e: Elemento
}

export const PERIODOS: Periodo[] = [
  // TIGRE
  { aI:1902,mI:2,dI:4, aF:1903,mF:2,dF:4, e:'agua'    },
  { aI:1914,mI:2,dI:4, aF:1915,mF:2,dF:4, e:'madeira' },
  { aI:1926,mI:2,dI:4, aF:1927,mF:2,dF:4, e:'fogo'    },
  { aI:1938,mI:2,dI:4, aF:1939,mF:2,dF:4, e:'terra'   },
  { aI:1950,mI:2,dI:4, aF:1951,mF:2,dF:4, e:'metal'   },
  { aI:1962,mI:2,dI:4, aF:1963,mF:2,dF:4, e:'agua'    },
  { aI:1974,mI:2,dI:4, aF:1975,mF:2,dF:4, e:'madeira' },
  { aI:1986,mI:2,dI:4, aF:1987,mF:2,dF:4, e:'fogo'    },
  { aI:1998,mI:2,dI:4, aF:1999,mF:2,dF:15,e:'terra'   },
  { aI:2010,mI:2,dI:3, aF:2011,mF:2,dF:4, e:'metal'   },
  { aI:2022,mI:2,dI:3, aF:2023,mF:2,dF:3, e:'agua'    },
  // COELHO
  { aI:1903,mI:2,dI:4, aF:1904,mF:2,dF:4, e:'agua'    },
  { aI:1915,mI:2,dI:4, aF:1916,mF:2,dF:4, e:'madeira' },
  { aI:1927,mI:2,dI:4, aF:1928,mF:2,dF:4, e:'fogo'    },
  { aI:1939,mI:2,dI:4, aF:1940,mF:2,dF:4, e:'terra'   },
  { aI:1951,mI:2,dI:4, aF:1952,mF:2,dF:4, e:'metal'   },
  { aI:1963,mI:2,dI:4, aF:1964,mF:2,dF:4, e:'agua'    },
  { aI:1975,mI:2,dI:4, aF:1976,mF:2,dF:4, e:'madeira' },
  { aI:1987,mI:2,dI:4, aF:1988,mF:2,dF:4, e:'fogo'    },
  { aI:1999,mI:2,dI:4, aF:2000,mF:2,dF:4, e:'terra'   },
  { aI:2011,mI:2,dI:4, aF:2012,mF:2,dF:4, e:'metal'   },
  { aI:2023,mI:2,dI:3, aF:2024,mF:2,dF:4, e:'agua'    },
  // DRAGÃO
  { aI:1904,mI:2,dI:4, aF:1905,mF:2,dF:3, e:'madeira' },
  { aI:1916,mI:2,dI:4, aF:1917,mF:2,dF:4, e:'fogo'    },
  { aI:1928,mI:2,dI:4, aF:1929,mF:2,dF:4, e:'terra'   },
  { aI:1940,mI:2,dI:4, aF:1941,mF:2,dF:4, e:'metal'   },
  { aI:1952,mI:2,dI:4, aF:1953,mF:2,dF:3, e:'agua'    },
  { aI:1964,mI:2,dI:4, aF:1965,mF:2,dF:3, e:'madeira' },
  { aI:1976,mI:2,dI:4, aF:1977,mF:2,dF:3, e:'fogo'    },
  { aI:1988,mI:2,dI:4, aF:1989,mF:2,dF:4, e:'terra'   },
  { aI:2000,mI:2,dI:4, aF:2001,mF:2,dF:3, e:'metal'   },
  { aI:2012,mI:3,dI:4, aF:2013,mF:2,dF:3, e:'agua'    },
  { aI:2024,mI:2,dI:4, aF:2025,mF:2,dF:3, e:'madeira' },
  // SERPENTE
  { aI:1905,mI:2,dI:3, aF:1906,mF:2,dF:4, e:'madeira' },
  { aI:1917,mI:2,dI:4, aF:1918,mF:2,dF:4, e:'fogo'    },
  { aI:1929,mI:2,dI:4, aF:1930,mF:2,dF:4, e:'terra'   },
  { aI:1941,mI:2,dI:4, aF:1942,mF:2,dF:4, e:'metal'   },
  { aI:1953,mI:2,dI:3, aF:1954,mF:2,dF:4, e:'agua'    },
  { aI:1965,mI:2,dI:3, aF:1966,mF:2,dF:4, e:'madeira' },
  { aI:1977,mI:2,dI:3, aF:1978,mF:2,dF:4, e:'fogo'    },
  { aI:1989,mI:2,dI:4, aF:1990,mF:2,dF:3, e:'terra'   },
  { aI:2001,mI:1,dI:3, aF:2002,mF:2,dF:3, e:'metal'   },
  { aI:2013,mI:2,dI:3, aF:2014,mF:2,dF:3, e:'agua'    },
  { aI:2025,mI:3,dI:3, aF:2026,mF:2,dF:3, e:'fogo'    },
  // CAVALO
  { aI:1906,mI:2,dI:4, aF:1907,mF:2,dF:4, e:'fogo'    },
  { aI:1918,mI:2,dI:4, aF:1919,mF:2,dF:4, e:'terra'   },
  { aI:1930,mI:2,dI:4, aF:1931,mF:2,dF:4, e:'metal'   },
  { aI:1942,mI:2,dI:4, aF:1943,mF:2,dF:4, e:'agua'    },
  { aI:1954,mI:2,dI:4, aF:1955,mF:2,dF:4, e:'madeira' },
  { aI:1966,mI:2,dI:4, aF:1967,mF:2,dF:4, e:'fogo'    },
  { aI:1978,mI:2,dI:4, aF:1979,mF:2,dF:4, e:'terra'   },
  { aI:1990,mI:2,dI:3, aF:1991,mF:2,dF:4, e:'metal'   },
  { aI:2002,mI:2,dI:3, aF:2003,mF:2,dF:4, e:'agua'    },
  { aI:2014,mI:2,dI:3, aF:2015,mF:2,dF:4, e:'madeira' },
  { aI:2026,mI:2,dI:3, aF:2027,mF:2,dF:3, e:'fogo'    },
  // CABRA
  { aI:1907,mI:2,dI:4, aF:1908,mF:2,dF:4, e:'fogo'    },
  { aI:1919,mI:2,dI:4, aF:1920,mF:2,dF:4, e:'terra'   },
  { aI:1931,mI:2,dI:4, aF:1932,mF:2,dF:4, e:'metal'   },
  { aI:1943,mI:2,dI:4, aF:1944,mF:2,dF:4, e:'agua'    },
  { aI:1955,mI:2,dI:4, aF:1956,mF:2,dF:4, e:'madeira' },
  { aI:1967,mI:2,dI:4, aF:1968,mF:2,dF:4, e:'fogo'    },
  { aI:1979,mI:2,dI:4, aF:1980,mF:2,dF:4, e:'terra'   },
  { aI:1991,mI:2,dI:4, aF:1992,mF:2,dF:4, e:'metal'   },
  { aI:2003,mI:2,dI:4, aF:2004,mF:2,dF:4, e:'agua'    },
  { aI:2015,mI:2,dI:4, aF:2016,mF:2,dF:4, e:'madeira' },
  { aI:2027,mI:2,dI:3, aF:2028,mF:2,dF:4, e:'fogo'    },
  // MACACO
  { aI:1908,mI:2,dI:4, aF:1909,mF:2,dF:3, e:'terra'   },
  { aI:1920,mI:2,dI:4, aF:1921,mF:2,dF:4, e:'metal'   },
  { aI:1932,mI:2,dI:4, aF:1933,mF:2,dF:4, e:'agua'    },
  { aI:1944,mI:2,dI:4, aF:1945,mF:2,dF:4, e:'madeira' },
  { aI:1956,mI:2,dI:4, aF:1957,mF:2,dF:3, e:'fogo'    },
  { aI:1968,mI:2,dI:4, aF:1969,mF:2,dF:3, e:'terra'   },
  { aI:1980,mI:2,dI:4, aF:1981,mF:2,dF:3, e:'metal'   },
  { aI:1992,mI:2,dI:4, aF:1993,mF:2,dF:3, e:'agua'    },
  { aI:2004,mI:2,dI:4, aF:2005,mF:2,dF:3, e:'madeira' },
  { aI:2016,mI:2,dI:4, aF:2017,mF:2,dF:3, e:'fogo'    },
  { aI:2028,mI:2,dI:4, aF:2029,mF:2,dF:3, e:'terra'   },
  // GALO
  { aI:1909,mI:2,dI:3, aF:1910,mF:2,dF:4, e:'terra'   },
  { aI:1921,mI:2,dI:4, aF:1922,mF:2,dF:4, e:'metal'   },
  { aI:1933,mI:2,dI:4, aF:1934,mF:2,dF:4, e:'agua'    },
  { aI:1945,mI:2,dI:4, aF:1946,mF:2,dF:4, e:'madeira' },
  { aI:1957,mI:2,dI:3, aF:1958,mF:2,dF:4, e:'fogo'    },
  { aI:1969,mI:2,dI:3, aF:1970,mF:2,dF:4, e:'terra'   },
  { aI:1981,mI:2,dI:3, aF:1982,mF:2,dF:4, e:'metal'   },
  { aI:1993,mI:2,dI:3, aF:1994,mF:2,dF:3, e:'agua'    },
  { aI:2005,mI:2,dI:3, aF:2006,mF:2,dF:3, e:'madeira' },
  { aI:2017,mI:2,dI:3, aF:2018,mF:2,dF:3, e:'fogo'    },
  { aI:2029,mI:2,dI:3, aF:2030,mF:2,dF:3, e:'terra'   },
  // CÃO
  { aI:1910,mI:2,dI:4, aF:1911,mF:2,dF:4, e:'metal'   },
  { aI:1922,mI:2,dI:4, aF:1923,mF:2,dF:4, e:'agua'    },
  { aI:1934,mI:2,dI:4, aF:1935,mF:2,dF:4, e:'madeira' },
  { aI:1946,mI:2,dI:4, aF:1947,mF:2,dF:4, e:'fogo'    },
  { aI:1958,mI:2,dI:4, aF:1959,mF:2,dF:4, e:'terra'   },
  { aI:1970,mI:2,dI:4, aF:1971,mF:2,dF:4, e:'metal'   },
  { aI:1982,mI:2,dI:4, aF:1983,mF:2,dF:4, e:'agua'    },
  { aI:1994,mI:2,dI:3, aF:1995,mF:2,dF:4, e:'madeira' },
  { aI:2006,mI:2,dI:3, aF:2007,mF:2,dF:4, e:'fogo'    },
  { aI:2018,mI:2,dI:3, aF:2019,mF:2,dF:4, e:'terra'   },
  { aI:2030,mI:2,dI:3, aF:2031,mF:2,dF:3, e:'metal'   },
  // PORCO
  { aI:1911,mI:2,dI:4, aF:1912,mF:2,dF:4, e:'metal'   },
  { aI:1923,mI:2,dI:4, aF:1924,mF:2,dF:4, e:'agua'    },
  { aI:1935,mI:2,dI:4, aF:1936,mF:2,dF:4, e:'madeira' },
  { aI:1947,mI:2,dI:4, aF:1948,mF:2,dF:4, e:'fogo'    },
  { aI:1959,mI:2,dI:4, aF:1960,mF:2,dF:4, e:'terra'   },
  { aI:1971,mI:2,dI:4, aF:1972,mF:2,dF:4, e:'metal'   },
  { aI:1983,mI:2,dI:4, aF:1984,mF:2,dF:4, e:'agua'    },
  { aI:1995,mI:2,dI:4, aF:1996,mF:2,dF:4, e:'madeira' },
  { aI:2007,mI:2,dI:4, aF:2008,mF:2,dF:4, e:'fogo'    },
  { aI:2019,mI:2,dI:4, aF:2020,mF:2,dF:4, e:'terra'   },
  // RATO
  { aI:1912,mI:2,dI:4, aF:1913,mF:2,dF:4, e:'agua'    },
  { aI:1924,mI:2,dI:4, aF:1925,mF:2,dF:4, e:'madeira' },
  { aI:1936,mI:2,dI:4, aF:1937,mF:2,dF:4, e:'fogo'    },
  { aI:1948,mI:2,dI:4, aF:1949,mF:2,dF:4, e:'terra'   },
  { aI:1960,mI:2,dI:4, aF:1961,mF:2,dF:3, e:'metal'   },
  { aI:1972,mI:2,dI:4, aF:1973,mF:2,dF:3, e:'agua'    },
  { aI:1984,mI:2,dI:4, aF:1985,mF:2,dF:4, e:'madeira' },
  { aI:1996,mI:2,dI:4, aF:1997,mF:2,dF:3, e:'fogo'    },
  { aI:2008,mI:2,dI:4, aF:2009,mF:2,dF:3, e:'terra'   },
  { aI:2020,mI:2,dI:4, aF:2021,mF:2,dF:3, e:'metal'   },
  { aI:2032,mI:2,dI:4, aF:2033,mF:2,dF:3, e:'agua'    },
  // BÚFALO
  { aI:1913,mI:2,dI:4, aF:1914,mF:2,dF:4, e:'agua'    },
  { aI:1925,mI:2,dI:4, aF:1926,mF:2,dF:4, e:'madeira' },
  { aI:1937,mI:2,dI:4, aF:1938,mF:2,dF:4, e:'fogo'    },
  { aI:1949,mI:2,dI:4, aF:1950,mF:2,dF:4, e:'terra'   },
  { aI:1961,mI:2,dI:3, aF:1962,mF:2,dF:4, e:'metal'   },
  { aI:1973,mI:2,dI:3, aF:1974,mF:2,dF:4, e:'agua'    },
  { aI:1985,mI:2,dI:4, aF:1986,mF:2,dF:4, e:'madeira' },
  { aI:1997,mI:2,dI:3, aF:1998,mF:2,dF:3, e:'fogo'    },
  { aI:2009,mI:2,dI:3, aF:2010,mF:2,dF:3, e:'terra'   },
  { aI:2021,mI:2,dI:3, aF:2022,mF:2,dF:3, e:'metal'   },
  { aI:2033,mI:2,dI:3, aF:2034,mF:2,dF:3, e:'agua'    },
]

export function calcularElemento(data: Date): Elemento {
  const ts = data.getTime()
  for (const p of PERIODOS) {
    const inicio = new Date(p.aI, p.mI - 1, p.dI).getTime()
    const fim    = new Date(p.aF, p.mF - 1, p.dF).getTime()
    if (ts >= inicio && ts < fim) return p.e
  }
  // Fallback por ano (datas fora da tabela)
  const seq: Elemento[] = ['metal','metal','agua','agua','madeira','madeira','fogo','fogo','terra','terra']
  return seq[((data.getFullYear() - 1960) % 10 + 10) % 10]
}
