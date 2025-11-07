"use client"

import { useState } from 'react'

type Status = { type: 'idle' | 'loading' | 'success' | 'error'; message?: string }

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: 'idle' })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    setStatus({ type: 'loading' })

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
      if (!accessKey) {
        throw new Error('Missing Web3Forms access key')
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New message from Ahmad Hassan portfolio',
          botcheck: '',
          ...payload,
        }),
      })

      const data = (await response.json()) as { success: boolean; message: string }

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong')
      }

      setStatus({ type: 'success', message: 'Thanks! Your message has been sent.' })
      form.reset()
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to send message'
      setStatus({ type: 'error', message })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
      <input type="hidden" name="botcheck" />
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Full name
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          How can I help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
          placeholder="Tell me about your project, timeline, and goals"
        />
      </div>
      <button
        type="submit"
        disabled={status.type === 'loading'}
        className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 disabled:cursor-not-allowed disabled:bg-brand-400"
      >
        {status.type === 'loading' ? 'Sending…' : 'Send message'}
      </button>

      {status.type === 'success' && (
        <p className="text-sm text-emerald-600">{status.message}</p>
      )}
      {status.type === 'error' && <p className="text-sm text-rose-600">{status.message}</p>}
    </form>
  )
}


