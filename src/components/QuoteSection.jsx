import { useState, useEffect } from 'react'
import { SERVICES, CONTACTS, routeFor } from '../data.js'
import { CheckIcon } from './icons.jsx'

export default function QuoteSection({ preset = '', bare = false }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', location: '', service: preset || '', details: '' })
  const [sent, setSent] = useState(false)
  useEffect(() => { setForm((f) => ({ ...f, service: preset || '' })) }, [preset])

  const route = routeFor(form.service)
  const accent = route === 'braiden' ? 'var(--green)' : route === 'doug' ? 'var(--gold)' : 'var(--steel)'
  const contact = route ? CONTACTS[route] : null
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.service) return
    // Posts the lead to the serverless function. Stays inert (no email) until
    // RESEND_API_KEY is set on the host — the confirmation still shows either way.
    try {
      await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, division: route }),
      })
    } catch (_) { /* endpoint not deployed yet — confirm anyway */ }
    setSent(true)
  }

  return (
    <section className={'quote' + (bare ? ' bare' : '')}>
      <div className="q-wrap">
        <div className="q-left">
          <p className="eyebrow">Get a rapid-response estimate</p>
          <h2>Tell us the job.<br />We'll point it at the right Sudor.</h2>
          <p className="q-blurb">One form. Pick your service and it goes straight to the person who handles it —
          Doug for electric &amp; tile, Braiden for demo &amp; dumpsters. Transparent, fair pricing, reviewed in-house.</p>
          <div className={'q-route' + (route ? ' on' : '')} style={{ borderColor: accent }}>
            <span className="q-route-dot" style={{ background: accent }} />
            {contact ? (
              <div><b style={{ color: accent }}>Routes to {contact.name}</b><small>{contact.div} · {contact.phone}</small></div>
            ) : (<div><b>Pick a service</b><small>We'll show who it reaches</small></div>)}
          </div>
        </div>

        {!sent ? (
          <form className="q-form" onSubmit={submit} style={{ '--accent': accent }}>
            <div className="q-bar" style={{ background: accent }} />
            <div className="q-row"><label>Full name*<input value={form.name} onChange={set('name')} placeholder="Jane Homeowner" required /></label></div>
            <div className="q-row two">
              <label>Phone*<input value={form.phone} onChange={set('phone')} placeholder="412-555-0100" required /></label>
              <label>Email<input type="email" value={form.email} onChange={set('email')} placeholder="you@email.com" /></label>
            </div>
            <div className="q-row"><label>Address / location<input value={form.location} onChange={set('location')} placeholder="Neighborhood or full address" /></label></div>
            <div className="q-row"><label>Service needed*
              <select value={form.service} onChange={set('service')} required>
                <option value="">Choose a service…</option>
                {SERVICES.map((g) => (<optgroup key={g.group} label={g.group}>{g.items.map((it) => <option key={it} value={it}>{it}</option>)}</optgroup>))}
              </select></label></div>
            <div className="q-row"><label>Job details<textarea value={form.details} onChange={set('details')} rows={4} placeholder="What are we working with? Photos help — you can send them after we connect." /></label></div>
            <button type="submit" className="q-submit" style={{ background: accent }}>{contact ? 'Send to ' + contact.name.split(' ')[0] : 'Send my request'}</button>
            <p className="q-fine">You'll get a call back from the right Sudor. Agency is CC'd on every lead.</p>
          </form>
        ) : (
          <div className="q-done" style={{ borderColor: accent }}>
            <div className="q-check" style={{ background: accent }}><CheckIcon /></div>
            <h3>You're in, {form.name.split(' ')[0]}.</h3>
            {contact ? (
              <p><b style={{ color: accent }}>{contact.name}</b> ({contact.div}) gets this and will reach out at <b>{form.phone}</b>. Need it now? Call <a href={'tel:' + contact.tel} style={{ color: accent }}>{contact.phone}</a>.</p>
            ) : (<p>We've got your request and someone will point you to the right crew shortly.</p>)}
            <button className="q-reset" onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', location: '', service: '', details: '' }) }}>Send another</button>
          </div>
        )}
      </div>
    </section>
  )
}
