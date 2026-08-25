import { Home, User, Briefcase, Sparkles, Mail, Github, Linkedin, Instagram, Twitter } from 'lucide-react';

export const NAV = [
  { id: 'hero', label: 'Home', Icon: Home },
  { id: 'about', label: 'About', Icon: User },
  { id: 'work', label: 'Work', Icon: Briefcase },
  { id: 'skills', label: 'Skills', Icon: Sparkles },
  { id: 'contact', label: 'Contact', Icon: Mail },
];

export const SOCIALS = [
  { label: 'GitHub', handle: 'Kaushtubh2004', href: 'https://github.com/Kaushtubh2004', Icon: Github },
  { label: 'LinkedIn', handle: 'kaushtubh2004', href: 'https://linkedin.com/in/kaushtubh2004', Icon: Linkedin },
  { label: 'Instagram', handle: '_kaushtubhsingh_', href: 'https://instagram.com/_kaushtubhsingh_', Icon: Instagram },
  { label: 'Twitter', handle: 'Kaushtubh2004', href: 'https://twitter.com/Kaushtubh2004', Icon: Twitter },
];

export const SKILLS = [
  { group: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL', 'HTML5', 'CSS3'] },
  { group: 'Frontend', items: ['React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'Responsive Design'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'JWT Auth', 'Microservices'] },
  { group: 'Databases', items: ['MongoDB', 'MySQL', 'Redis', 'Query Optimization'] },
  { group: 'DevOps & Tools', items: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Postman', 'Vercel', 'Render'] },
];

export const PROJECTS = [
  {
    name: 'BunAi',
    tag: 'AI-Powered Portfolio Generator',
    points: [
      'Streamlined onboarding by 70% with a secure OAuth 2.0 flow integrated with Cloudinary + Multer asset pipeline.',
      'Boosted Lighthouse performance by 35% through payload optimization, dynamic imports, and MongoDB aggregation tuning.',
    ],
    href: 'https://github.com/Kaushtubh2004',
  },
  {
    name: 'TableServe',
    tag: 'Restaurant Management System',
    points: [
      'Built a QR-code ordering architecture for 50+ tables, automating table management and cutting staff intervention.',
      'Reduced payment processing time by 40% integrating Razorpay with real-time WebSockets for instant order updates.',
    ],
    href: 'https://github.com/Kaushtubh2004',
  },
];

export const EDUCATION = [
  {
    degree: 'B.Tech, Computer Science & Engineering (AIML)',
    school: 'Ajay Kumar Garg Engineering College, Ghaziabad',
    period: 'Aug 2023 — Jun 2026',
    meta: 'Aggregate 75.25%',
  },
  {
    degree: 'Diploma in Information Technology',
    school: 'Government Polytechnic, Mirzapur',
    period: 'Sep 2021 — Sep 2023',
    meta: 'Aggregate 80.39%',
  },
];

export const CERTS = [
  'Full Stack Web Development — Indradhanush Infotech',
  'Python Programming — Infosys Springboard',
];
