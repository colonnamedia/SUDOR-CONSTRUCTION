// Vercel serverless function — routes a lead to the right Sudor and CCs the agency.
// INERT until RESEND_API_KEY is set: it will accept the lead and 200 without
// sending, so the front-end confirmation works before email is wired up.
import { Resend } from 'resend'

const RECIPIENTS = {
  doug: 'dougsudor@yahoo.com',
  braiden: 'braidensudor@gmail.com',
  default: 'sudorconstruction@gmail.com',
}
const AGENCY_CC = 'colonnamedia@gmail.com'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { name, phone, email, location, service, details, division } = req.body || {}
  if (!name || !phone || !service) return res.status(400).json({ error: 'Missing required fields' })

  const to = RECIPIENTS[division] || RECIPIENTS.default

  if (!process.env.RESEND_API_KEY) {
    console.log('[send-lead] RESEND_API_KEY not set — lead received but not emailed:', { name, phone, service, to })
    return res.status(200).json({ ok: true, emailed: false, note: 'Email not configured yet' })
  }

  const body = [
    `New lead from sudorconstruction.com`,
    ``,
    `Service:  ${service}`,
    `Routed to: ${to}`,
    ``,
    `Name:     ${name}`,
    `Phone:    ${phone}`,
    `Email:    ${email || '—'}`,
    `Location: ${location || '—'}`,
    ``,
    `Details:`,
    `${details || '—'}`,
  ].join('\n')

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: process.env.LEAD_FROM || 'Sudor Leads <leads@sudorconstruction.com>',
      to,
      cc: AGENCY_CC,
      replyTo: email || undefined,
      subject: `New ${service} lead — ${name}`,
      text: body,
    })
    return res.status(200).json({ ok: true, emailed: true })
  } catch (err) {
    console.error('[send-lead] send failed:', err)
    return res.status(500).json({ error: 'Send failed' })
  }
}
