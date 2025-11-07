import { ContactForm } from '@/components/ContactForm'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { Hero } from '@/components/Hero'
import { ProjectCard } from '@/components/ProjectCard'
import { Section } from '@/components/Section'
import { projects } from '@/data/projects'

export default function Home() {
  return (
    <>
      <Hero />
      <Section
        id="experience"
        eyebrow="Experience"
        title="Delivering reliable energy systems"
        description="A decade navigating the energy transformation across the Middle East, leading projects that balance sustainability, reliability, and cost."
      >
        <ExperienceTimeline />
      </Section>
      <Section
        id="projects"
        eyebrow="Projects"
        title="Selected work"
        description="Highlights from recent engagements shaping modern energy infrastructure."
      >
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>
      <Section
        id="contact"
        eyebrow="Contact"
        title="Let’s collaborate"
        description="Looking for support on grid modernization, renewable integration, or energy strategy? Send a note and I’ll get back within two business days."
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-brand-50/60 p-8">
            <h3 className="text-xl font-semibold text-slate-900">What you can expect</h3>
            <ul className="mt-6 space-y-4 text-slate-600">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-hidden />
                <span>Expertise across transmission, distribution, and renewable integration.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-hidden />
                <span>Pragmatic guidance that balances technical feasibility and business outcomes.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-500" aria-hidden />
                <span>Collaborative approach with clear communication and measurable milestones.</span>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  )
}

