import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nome, sobrenome, nascimento, telefone, email, elemento } = body

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key:  process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const dataHora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range:         'Cadastros!A:H',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[dataHora, nome, sobrenome, nascimento, telefone, email || '', elemento]],
      },
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[cadastro] erro ao salvar na planilha:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
