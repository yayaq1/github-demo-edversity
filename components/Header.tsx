"use client"

import { useEffect, useState } from 'react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Header() {
  const [active, setActive] = useState<string>('about')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(section.id)
            }
          })
        },
        { rootMargin: '-40% 0px -60% 0px' }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container flex items-center justify-between py-4">
        <a href="#about" className="text-lg font-semibold text-slate-900">
          Ahmad Hassan
        </a>
        <nav className="flex gap-6 text-sm font-medium text-slate-600">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`transition-colors ${
                active === section.id ? 'text-brand-600' : 'hover:text-slate-900'
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

