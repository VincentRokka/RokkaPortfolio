/** Nội dung portfolio — chỉnh sửa theo CV của bạn */
export const profile = {
  name: 'Rokka',
  title: 'Fullstack .Net Developer',
  tagline:
    'Building and maintaining business-oriented software with C# and .NET.',
  avatar: '/images/profile.png',
  avatarAlt: 'Rokka — ảnh đại diện',
}

export const navItems = [
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]

export const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/VincentRokka',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/loctran412/',
    icon: 'linkedin',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/_agnis.412/',
    icon: 'instagram',
  },
]

export const summaryParagraphs = [
  `I'm Fullstack .NET Developer with 4 years of experience in building and maintaining software applications using C# and .NET technologies. Good understanding of <span class="hl">business-oriented software design</span>. Experienced in project deployment and team coordination with 2 years of hands-on project management experience.`,
  `Currently highly fascinated by <span class="hl">Applied AI</span>, passionate about learning <span class="hl">new languages and technologies</span>. I'm recognized as a collaborative and approachable team member who actively supports colleagues and partners in both small and large-scale projects.`,
]

/** Dữ liệu tạm — thay bằng CV thật */
export const experienceItems = [
  {
    id: 'exp-1',
    role: 'Fullstack .NET Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 — Present',
    description:
      'Design and maintain enterprise web APIs and internal dashboards. Lead deployment pipelines and coordinate sprint delivery across a team of 6.',
    technologies: ['C#', '.NET 8', 'SQL Server', 'Azure', 'React'],
  },
  {
    id: 'exp-2',
    role: '.NET Developer',
    company: 'Digital Ventures',
    period: '2021 — 2022',
    description:
      'Built RESTful services and integrated third-party payment gateways. Improved query performance and reduced API latency by 30%.',
    technologies: ['ASP.NET Core', 'Entity Framework', 'PostgreSQL'],
  },
  {
    id: 'exp-3',
    role: 'Junior Software Developer',
    company: 'Startup Hub',
    period: '2020 — 2021',
    description:
      'Contributed to MVP features for a B2B SaaS platform. Participated in code reviews and Agile ceremonies.',
    technologies: ['C#', '.NET Framework', 'Angular', 'Docker'],
  },
]

export const projectItems = [
  {
    id: 'proj-1',
    title: 'Inventory Management System',
    description:
      'Fullstack warehouse management app with real-time stock tracking, role-based access, and reporting exports.',
    href: '#',
    technologies: ['.NET 8', 'Blazor', 'SQL Server', 'SignalR'],
  },
  {
    id: 'proj-2',
    title: 'AI Document Assistant',
    description:
      'Internal tool that summarizes PDFs and suggests actions using Azure OpenAI. Integrated with existing .NET auth layer.',
    href: '#',
    technologies: ['C#', 'Azure OpenAI', 'Minimal APIs', 'Vue'],
  },
  {
    id: 'proj-3',
    title: 'Project Tracker API',
    description:
      'REST API for task and milestone tracking used by PM teams. Includes webhooks, email notifications, and Swagger docs.',
    href: '#',
    technologies: ['ASP.NET Core', 'Redis', 'PostgreSQL', 'Docker'],
  },
]
