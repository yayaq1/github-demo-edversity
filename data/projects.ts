export type Project = {
  title: string
  category: string
  description: string
  highlights?: string[]
  technologies?: string[]
}

export const projects: Project[] = [
  {
    title: 'Solar Integration Program',
    category: 'Grid Modernization',
    description: 'Led integration of 150MW solar capacity across regional substations, improving renewable energy penetration to 28% of peak demand.',
    highlights: [
      'Coordinated multi-stakeholder approvals across grid operators and utilities',
      'Implemented advanced forecasting algorithms for solar variability',
      'Designed dynamic voltage support systems for grid stability',
    ],
    technologies: ['SCADA', 'Power Flow Simulation', 'Renewable Forecasting', 'Grid Automation'],
  },
  {
    title: 'Predictive Maintenance Dashboard',
    category: 'Digital Transformation',
    description: 'Developed IoT-enabled monitoring system that predicted equipment failures 21 days in advance, reducing unplanned downtime by 18%.',
    highlights: [
      'Integrated data from 200+ transformer units across regional network',
      'Built machine learning models for failure prediction with 94% accuracy',
      'Trained 50+ technicians on new maintenance protocols',
    ],
    technologies: ['IoT', 'Machine Learning', 'Real-time Analytics', 'Cloud Infrastructure'],
  },
  {
    title: 'Wind-Solar Hybrid Plant',
    category: 'Renewable Energy',
    description: 'Managed engineering and commissioning of 180MW hybrid renewable facility combining wind and solar resources for optimal capacity factor.',
    highlights: [
      'Coordinated 8-month construction with cross-disciplinary teams',
      'Implemented digital commissioning reducing handover time by 25%',
      'Achieved grid interconnection ahead of schedule',
    ],
    technologies: ['Wind Engineering', 'Solar Design', 'Project Management', 'Grid Interconnection'],
  },
  {
    title: 'Condition-Based Monitoring Program',
    category: 'Asset Management',
    description: 'Introduced data-driven monitoring program for 500+ distribution transformers, optimizing maintenance schedules and reducing O&M costs by 12%.',
    highlights: [
      'Developed predictive analytics for transformer health assessment',
      'Reduced emergency repairs by 34% through proactive interventions',
      'Achieved $2.1M annual cost savings',
    ],
    technologies: ['Diagnostics', 'Data Analytics', 'Asset Management Software', 'Condition Monitoring'],
  },
]

