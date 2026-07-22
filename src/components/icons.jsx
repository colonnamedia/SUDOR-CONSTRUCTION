export function PhoneIcon() {
  return (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>)
}
export function CheckIcon() {
  return (<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>)
}
export function CloverMark({ small }) {
  const s = small ? 26 : 64
  return (<svg width={s} height={s} viewBox="0 0 64 64" aria-hidden="true"><g fill="var(--green)" stroke="#0d2b16" strokeWidth="1.5"><path d="M32 30c-2-8 2-16 8-16s8 8 0 12c6-2 12 2 10 8s-10 4-14 0"/><path d="M32 30c2-8-2-16-8-16s-8 8 0 12c-6-2-12 2-10 8s10 4 14 0"/></g><path d="M32 30c0 10-3 20-6 24" stroke="#0d2b16" strokeWidth="3" fill="none" strokeLinecap="round"/></svg>)
}
