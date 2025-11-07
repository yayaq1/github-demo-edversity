# Ahmad Portfolio - GitHub Learning Demo

Welcome! 👋 This repository is a **teaching demo** designed to help you learn fundamental GitHub and Git concepts through a real-world project.

## 📚 What You'll Learn

This demo covers essential Git and GitHub workflows:

- **Repositories**: Understanding what a repo is and its structure
- **Commits**: Writing meaningful commit messages and tracking changes
- **Branches**: Working with feature branches and main branches
- **Pull Requests**: Collaborating and reviewing code
- **Remote & Local**: Syncing changes between your local machine and GitHub
- **Collaboration**: Working with teams and managing conflicts

## 🎯 About This Project

This is a **modern portfolio website** built with Next.js and Tailwind CSS for Ahmad, a Senior Power Systems Engineer with expertise in energy transformation and grid modernization.

### Portfolio Features

The website showcases:

- **Hero Section**: A compelling introduction
- **Experience Timeline**: Professional background spanning a decade in the Middle East energy sector
- **Projects Section**: Highlighted work including:
  - Solar Integration Programs (150MW capacity)
  - Predictive Maintenance Dashboards
  - Wind-Solar Hybrid Plants
  - Condition-Based Monitoring Systems
- **Contact Form**: Easy way for potential collaborators to get in touch
- **Responsive Design**: Mobile-friendly layouts using Tailwind CSS

## 🏗️ Project Structure

```
ahmad-portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── robots.txt         # SEO: robots configuration
│   └── sitemap.ts         # SEO: sitemap generation
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── ExperienceTimeline.tsx  # Experience display
│   ├── ProjectCard.tsx    # Individual project cards
│   ├── ContactForm.tsx    # Contact form component
│   ├── Section.tsx        # Reusable section wrapper
│   └── Footer.tsx         # Footer component
├── data/                  # Static data and types
│   ├── experience.ts      # Professional experience data
│   └── projects.ts        # Project data
├── public/                # Static assets
│   └── og.png            # Open Graph image
├── package.json           # Project dependencies
├── tailwind.config.ts     # Tailwind CSS configuration
├── next.config.mjs        # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yayaq/ahmad-portfolio.git
   cd ahmad-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:3000` (or `3001` if port 3000 is busy)

## 💻 Technology Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with server-side rendering |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first CSS framework |
| **React** | UI component library |

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter (if configured)
npm run lint
```

## 🔧 Key Concepts Demonstrated

### Component Architecture
- **Reusable Components**: `Section`, `ProjectCard` are designed to be flexible and reusable
- **Type Safety**: TypeScript interfaces ensure data consistency
- **Props Pattern**: Clean data flow from parent to child components

### Data Management
- **Type Definitions**: Separate types for `Experience` and `Project`
- **Data Separation**: Data lives in `/data` folder, separate from components
- **Array Mapping**: Demonstrating `.map()` for rendering lists

### Styling
- **Tailwind CSS**: Utility classes for responsive, modern design
- **Responsive Breakpoints**: Mobile-first responsive design (e.g., `md:grid-cols-2`)
- **Design System**: Consistent color scheme using CSS variables

## 📖 Git & GitHub Learning Exercises

As you work with this repo, practice these Git concepts:

### Basic Commits
```bash
git add .
git commit -m "feat(components): add ProjectCard component"
git push origin main
```

### Creating Branches
```bash
git checkout -b feature/add-blog-section
# Make changes...
git commit -m "feat(blog): add blog section to portfolio"
git push origin feature/add-blog-section
```

### Viewing History
```bash
# See commit history
git log

# See specific file history
git log -- components/ProjectCard.tsx

# See what changed in last commit
git show
```

### Collaboration
- **Fork** this repo to your account
- **Clone** your fork locally
- **Create branches** for each feature
- **Push** your changes
- **Open Pull Requests** to suggest changes

## 📚 Recommended Learning Path

1. **Clone & Setup**: Get the project running locally
2. **Explore the Code**: Understand the folder structure
3. **Make Small Changes**: Update project content or styling
4. **Practice Commits**: Write clear, descriptive commit messages
5. **Create Branches**: Try feature branches
6. **Push & Sync**: Get comfortable with push/pull operations
7. **Practice Collaboration**: Fork, modify, and create PRs

## 🎓 Commit Message Best Practices

Use this format for commit messages:

```
<type>(<scope>): <description>

Examples:
- feat(components): add ProjectCard component
- fix(styling): fix responsive grid layout
- style(header): improve navigation spacing
- docs(readme): add setup instructions
```

Types: `feat`, `fix`, `style`, `docs`, `refactor`, `test`

## 🤝 Contributing

This is a learning repo! You can:
- Fork and experiment
- Create branches
- Make commits
- Practice Git workflows
- Suggest improvements via Pull Requests

## 📞 Contact

For questions about the portfolio or learning materials, reach out through the contact form on the website.

## 📄 License

This project is open for educational purposes.

---

**Happy Learning! 🚀**

Use this repository to practice Git, GitHub, and web development. Don't be afraid to experiment—that's how you learn!

