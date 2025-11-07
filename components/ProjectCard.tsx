import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-50 p-8 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/10">
      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-block h-3 w-3 rounded-full bg-brand-500" />
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            {project.category}
          </span>
        </div>
        <h3 className="mb-3 text-2xl font-bold text-slate-900">{project.title}</h3>
        <p className="mb-6 text-slate-600 leading-relaxed">{project.description}</p>
        
        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-6 space-y-2">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="flex gap-2 text-slate-600 text-sm">
                <span className="shrink-0 text-brand-500">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  )
}

