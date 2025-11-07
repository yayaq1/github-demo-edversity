export type Experience = {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    company: 'Gulf Energy Solutions',
    role: 'Senior Power Systems Engineer',
    period: '2022 — Present',
    location: 'Dubai, UAE',
    highlights: [
      'Lead grid modernization programs integrating 150MW of solar capacity across regional substations.',
      'Designed predictive maintenance dashboards that reduced downtime by 18%.',
      'Collaborate with regulatory bodies to align projects with sustainability targets.',
    ],
  },
  {
    company: 'Sahara Renewables',
    role: 'Energy Projects Engineer',
    period: '2018 — 2022',
    location: 'Abu Dhabi, UAE',
    highlights: [
      'Managed multi-discipline teams delivering wind-solar hybrid plants exceeding KPIs.',
      'Implemented digital commissioning workflows cutting handover time by 25%.',
      'Authored best-practice playbook for integrating storage assets into legacy grids.',
    ],
  },
  {
    company: 'Atlas Power',
    role: 'Electrical Engineer',
    period: '2015 — 2018',
    location: 'Doha, Qatar',
    highlights: [
      'Performed load flow, short circuit, and protection coordination studies for major infrastructure projects.',
      'Introduced condition-based monitoring program reducing annual O&M costs by 12%.',
    ],
  },
]


