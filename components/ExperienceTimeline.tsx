import { experience } from '@/data/experience'

export function ExperienceTimeline() {
  return (
    <ol className="relative border-l border-slate-200 pl-6">
      {experience.map((item, index) => (
        <li key={`${item.company}-${item.period}`} className="relative mb-12 pl-4">
          <div className="absolute left-[-9px] top-1 h-3 w-3 rounded-full border border-white bg-brand-600 shadow-soft" aria-hidden />
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{item.period}</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">
            {item.role} · {item.company}
          </h3>
          <p className="text-sm text-slate-500">{item.location}</p>
          <ul className="mt-4 space-y-2 text-slate-600">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2 text-base">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-400" aria-hidden />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          {index !== experience.length - 1 && <div className="mt-6 border-b border-dashed border-slate-200" />}
        </li>
      ))}
    </ol>
  )
}

