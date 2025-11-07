import { ReactNode } from 'react'

type SectionProps = {
  id: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="py-20">
      <div className="container">
        <div className="max-w-2xl">
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{eyebrow}</p>}
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
          {description && <p className="mt-4 text-lg text-slate-600">{description}</p>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}


