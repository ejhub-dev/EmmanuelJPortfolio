'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import SkillCard from './SkillCard';
import CertificationBadge from './CertificationBadge';
import SkillEndorsement from './SkillEndorsement';
import LearningProgress from './LearningProgress';
import TechnologyPreference from './TechnologyPreference';

interface Skill {
  id: number;
  name: string;
  level: number;
  category: string;
  description: string;
  yearsOfExperience: number;
  icon: string;
}

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
  logo: string;
}

interface Endorsement {
  id: number;
  name: string;
  role: string;
  company: string;
  endorsement: string;
  avatar: string;
  avatarAlt: string;
  skillEndorsed: string;
}

interface LearningSkill {
  id: number;
  skill: string;
  currentLevel: number;
  targetLevel: number;
  startDate: string;
  estimatedCompletion: string;
  resources: string[];
  category: string;
}

interface TechPreference {
  id: number;
  technology: string;
  category: string;
  preferenceLevel: 'Preferred' | 'Comfortable' | 'Familiar';
  icon: string;
  useCases: Array<{scenario: string;reason: string;}>;
  alternatives: string[];
}

const SkillsInteractive: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTab, setActiveTab] = useState<
    'skills' | 'certifications' | 'endorsements' | 'learning' | 'preferences'>(
    'skills');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'DevOps',
  'Tools',
  'Soft Skills'];


  const skills: Skill[] = [
  {
    id: 1,
    name: 'React.js',
    level: 95,
    category: 'Frontend',
    description:
    'Expert in building scalable, performant React applications with hooks, context, and modern patterns.',
    yearsOfExperience: 5,
    icon: '⚛️'
  },
  {
    id: 2,
    name: 'Next.js',
    level: 92,
    category: 'Frontend',
    description:
    'Advanced proficiency in server-side rendering, static generation, and API routes with Next.js framework.',
    yearsOfExperience: 4,
    icon: '▲'
  },
  {
    id: 3,
    name: 'TypeScript',
    level: 90,
    category: 'Frontend',
    description:
    'Strong typing expertise for building maintainable, scalable applications with enhanced developer experience.',
    yearsOfExperience: 4,
    icon: '📘'
  },
  {
    id: 4,
    name: 'Node.js',
    level: 88,
    category: 'Backend',
    description:
    'Proficient in building RESTful APIs, microservices, and real-time applications with Node.js ecosystem.',
    yearsOfExperience: 5,
    icon: '🟢'
  },
  {
    id: 5,
    name: 'Express.js',
    level: 87,
    category: 'Backend',
    description:
    'Expert in creating robust backend services with middleware, routing, and authentication patterns.',
    yearsOfExperience: 5,
    icon: '🚂'
  },
  {
    id: 6,
    name: 'MongoDB',
    level: 85,
    category: 'Database',
    description:
    'Advanced knowledge of NoSQL database design, aggregation pipelines, and performance optimization.',
    yearsOfExperience: 4,
    icon: '🍃'
  },
  {
    id: 7,
    name: 'PostgreSQL',
    level: 82,
    category: 'Database',
    description:
    'Solid understanding of relational database design, complex queries, and transaction management.',
    yearsOfExperience: 3,
    icon: '🐘'
  },
  {
    id: 8,
    name: 'Docker',
    level: 80,
    category: 'DevOps',
    description:
    'Containerization expertise for consistent development environments and deployment workflows.',
    yearsOfExperience: 3,
    icon: '🐳'
  },
  {
    id: 9,
    name: 'Git & GitHub',
    level: 93,
    category: 'Tools',
    description:
    'Advanced version control practices, branching strategies, and collaborative development workflows.',
    yearsOfExperience: 5,
    icon: '🔀'
  },
  {
    id: 10,
    name: 'Tailwind CSS',
    level: 94,
    category: 'Frontend',
    description:
    'Expert in utility-first CSS framework for rapid UI development with consistent design systems.',
    yearsOfExperience: 3,
    icon: '🎨'
  },
  {
    id: 11,
    name: 'AWS',
    level: 75,
    category: 'DevOps',
    description:
    'Intermediate knowledge of cloud services including EC2, S3, Lambda, and deployment automation.',
    yearsOfExperience: 2,
    icon: '☁️'
  },
  {
    id: 12,
    name: 'Problem Solving',
    level: 91,
    category: 'Soft Skills',
    description:
    'Strong analytical thinking and systematic approach to breaking down complex technical challenges.',
    yearsOfExperience: 6,
    icon: '🧩'
  },
  {
    id: 13,
    name: 'Communication',
    level: 89,
    category: 'Soft Skills',
    description:
    'Effective technical communication with stakeholders, clear documentation, and collaborative teamwork.',
    yearsOfExperience: 6,
    icon: '💬'
  },
  {
    id: 14,
    name: 'Redux',
    level: 86,
    category: 'Frontend',
    description:
    'Proficient in state management patterns, middleware integration, and Redux Toolkit for complex applications.',
    yearsOfExperience: 4,
    icon: '🔄'
  },
  {
    id: 15,
    name: 'GraphQL',
    level: 78,
    category: 'Backend',
    description:
    'Intermediate experience with query language for APIs, schema design, and resolver implementation.',
    yearsOfExperience: 2,
    icon: '◈'
  }];


  const certifications: Certification[] = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Dec 2025',
    credentialId: 'AWS-CSA-2025-MR',
    verificationUrl: 'https://aws.amazon.com/verification',
    logo: '☁️'
  },
  {
    id: 2,
    title: 'Meta Front-End Developer Professional',
    issuer: 'Meta (Facebook)',
    date: 'Sep 2024',
    credentialId: 'META-FED-2024-MR',
    verificationUrl: 'https://coursera.org/verify',
    logo: '📘'
  },
  {
    id: 3,
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: 'Jun 2024',
    credentialId: 'MONGO-DEV-2024-MR',
    verificationUrl: 'https://university.mongodb.com/verify',
    logo: '🍃'
  },
  {
    id: 4,
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: 'Mar 2025',
    credentialId: 'GCP-PD-2025-MR',
    verificationUrl: 'https://cloud.google.com/certification',
    logo: '🌐'
  },
  {
    id: 5,
    title: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: 'Jan 2025',
    credentialId: 'DOCKER-CA-2025-MR',
    verificationUrl: 'https://docker.com/certification',
    logo: '🐳'
  },
  {
    id: 6,
    title: 'Advanced React Patterns',
    issuer: 'Frontend Masters',
    date: 'Nov 2024',
    credentialId: 'FEM-ARP-2024-MR',
    verificationUrl: 'https://frontendmasters.com/certificates',
    logo: '⚛️'
  }];


  const endorsements: Endorsement[] = [
  {
    id: 1,
    name: 'Christian',
    role: 'Product Manager',
    company: 'DevTech Hub',
    endorsement:
    'Emmanuel consistently delivers high-quality React applications with exceptional attention to detail. His ability to translate complex requirements into elegant solutions is outstanding.',
    avatar: "null",
    avatarAlt:
    'Professional woman with blonde hair in business attire smiling at camera',
    skillEndorsed: 'React.js'
  },
  // {
  //   id: 2,
  //   name: 'Michael Chen',
  //   role: 'Lead Backend Engineer',
  //   company: 'DataFlow Systems',
  //   endorsement:
  //   'Working with Mezanur on our Node.js microservices was a pleasure. His deep understanding of backend architecture and API design significantly improved our system performance.',
  //   avatar:
  //   "https://img.rocket.new/generatedImages/rocket_gen_img_144f5236b-1763295524542.png",
  //   avatarAlt: 'Asian man with short black hair in casual blue shirt outdoors',
  //   skillEndorsed: 'Node.js'
  // },
  // {
  //   id: 3,
  //   name: 'Emily Rodriguez',
  //   role: 'UX Designer',
  //   company: 'Creative Digital Agency',
  //   endorsement:
  //   'Emmanuel bridges the gap between design and development beautifully. His Tailwind CSS expertise brings our designs to life with pixel-perfect precision and responsive excellence.',
  //   avatar:
  //   "https://img.rocket.new/generatedImages/rocket_gen_img_1f225624a-1763293838525.png",
  //    avatarAlt:
  //   'Hispanic woman with long dark hair in professional attire with warm smile',
  //   skillEndorsed: 'Tailwind CSS'
  // },
  {
    id: 4,
    name: 'Topgun',
    role: 'CTO',
    company: 'Hot Sui',
    endorsement:
    'Emmanuel problem-solving skills are exceptional. He approaches challenges methodically and always finds innovative solutions that balance technical excellence with business needs.',
    avatar: "null",
    avatarAlt:
    'Middle-aged man with gray beard in navy blazer with confident expression',
    skillEndorsed: 'Problem Solving'
  }];


  const learningSkills: LearningSkill[] = [
  {
    id: 1,
    skill: 'Rust Programming',
    currentLevel: 45,
    targetLevel: 80,
    startDate: 'Nov 2025',
    estimatedCompletion: 'Jun 2026',
    resources: ['The Rust Book', 'Rustlings', 'Exercism'],
    category: 'Backend'
  },
  {
    id: 2,
    skill: 'Machine Learning Basics',
    currentLevel: 30,
    targetLevel: 70,
    startDate: 'Dec 2025',
    estimatedCompletion: 'Aug 2026',
    resources: ['Coursera ML', 'Fast.ai', 'Kaggle'],
    category: 'AI/ML'
  },
  {
    id: 3,
    skill: 'Kubernetes',
    currentLevel: 55,
    targetLevel: 85,
    startDate: 'Oct 2025',
    estimatedCompletion: 'Apr 2026',
    resources: ['Kubernetes Docs', 'KodeKloud', 'CNCF Courses'],
    category: 'DevOps'
  },
  {
    id: 4,
    skill: 'WebAssembly',
    currentLevel: 25,
    targetLevel: 65,
    startDate: 'Jan 2026',
    estimatedCompletion: 'Sep 2026',
    resources: ['MDN Docs', 'Wasm By Example', 'Emscripten'],
    category: 'Frontend'
  }];


  const techPreferences: TechPreference[] = [
  {
    id: 1,
    technology: 'Next.js',
    category: 'Frontend Framework',
    preferenceLevel: 'Preferred',
    icon: '▲',
    useCases: [
    {
      scenario: 'Full-stack web applications',
      reason:
      'Built-in API routes, SSR/SSG capabilities, and excellent developer experience make it ideal for modern web apps.'
    },
    {
      scenario: 'SEO-critical projects',
      reason:
      'Server-side rendering ensures optimal search engine indexing and social media sharing.'
    }],

    alternatives: ['Remix', 'Gatsby', 'Astro']
  },
  {
    id: 2,
    technology: 'TypeScript',
    category: 'Programming Language',
    preferenceLevel: 'Preferred',
    icon: '📘',
    useCases: [
    {
      scenario: 'Large-scale applications',
      reason:
      'Type safety catches errors early and improves code maintainability in complex codebases.'
    },
    {
      scenario: 'Team collaboration',
      reason:
      'Self-documenting code and IDE autocomplete enhance team productivity and reduce bugs.'
    }],

    alternatives: ['JavaScript', 'Flow']
  },
  {
    id: 3,
    technology: 'Tailwind CSS',
    category: 'CSS Framework',
    preferenceLevel: 'Preferred',
    icon: '🎨',
    useCases: [
    {
      scenario: 'Rapid prototyping',
      reason:
      'Utility-first approach enables quick UI development without context switching.'
    },
    {
      scenario: 'Design system consistency',
      reason:
      'Configuration-based theming ensures consistent spacing, colors, and typography.'
    }],

    alternatives: ['CSS Modules', 'Styled Components', 'Sass']
  },
  {
    id: 4,
    technology: 'PostgreSQL',
    category: 'Database',
    preferenceLevel: 'Comfortable',
    icon: '🐘',
    useCases: [
    {
      scenario: 'Complex relational data',
      reason:
      'ACID compliance and advanced query capabilities handle complex business logic reliably.'
    },
    {
      scenario: 'Data integrity requirements',
      reason:
      'Strong constraints and transaction support ensure data consistency.'
    }],

    alternatives: ['MongoDB', 'MySQL', 'Supabase']
  }];


  const filteredSkills =
  activeCategory === 'All' ?
  skills :
  skills.filter((skill) => skill.category === activeCategory);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="h-12 bg-muted rounded w-64 mx-auto mb-4" />
                <div className="h-6 bg-muted rounded w-96 mx-auto" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) =>
                <div key={i} className="h-64 bg-muted rounded-lg" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                <Icon name="CodeBracketIcon" size={16} variant="solid" />
                <span>Technical Expertise</span>
              </div>
              <h1 className="font-headline font-bold text-4xl md:text-5xl text-foreground mb-4">
                Skills & Certifications
              </h1>
              <p className="text-lg text-textSecondary max-w-2xl mx-auto">
                A comprehensive overview of my technical competencies,
                professional certifications, and continuous learning journey in
                software development.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
              { key: 'skills', label: 'Skills Matrix', icon: 'CpuChipIcon' },
              {
                key: 'certifications',
                label: 'Certifications',
                icon: 'AcademicCapIcon'
              },
              {
                key: 'endorsements',
                label: 'Endorsements',
                icon: 'ChatBubbleLeftRightIcon'
              },
              {
                key: 'learning',
                label: 'Learning',
                icon: 'BookOpenIcon'
              },
              {
                key: 'preferences',
                label: 'Tech Preferences',
                icon: 'HeartIcon'
              }].
              map((tab) =>
              <button
                key={tab.key}
                onClick={() =>
                setActiveTab(
                  tab.key as
                  'skills' | 'certifications' | 'endorsements' | 'learning' | 'preferences'
                )
                }
                className={`
                    flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm
                    transition-all duration-200
                    ${
                activeTab === tab.key ?
                'bg-primary text-primary-foreground shadow-sm' :
                'bg-card text-textSecondary hover:bg-muted hover:text-foreground'}
                  `
                }>

                  <Icon
                  name={tab.icon as any}
                  size={16}
                  variant={activeTab === tab.key ? 'solid' : 'outline'} />

                  <span>{tab.label}</span>
                </button>
              )}
            </div>

            {/* Skills Matrix Tab */}
            {activeTab === 'skills' &&
            <>
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {categories.map((category) =>
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                        px-4 py-2 rounded-full font-medium text-sm
                        transition-all duration-200
                        ${
                  activeCategory === category ?
                  'bg-primary text-primary-foreground shadow-sm' :
                  'bg-card text-textSecondary hover:bg-muted hover:text-foreground border border-border'}
                      `
                  }>

                      {category}
                    </button>
                )}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSkills.map((skill) =>
                <SkillCard key={skill.id} {...skill} />
                )}
                </div>
              </>
            }

            {/* Certifications Tab */}
            {activeTab === 'certifications' &&
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert) =>
              <CertificationBadge key={cert.id} {...cert} />
              )}
              </div>
            }

            {/* Endorsements Tab */}
            {activeTab === 'endorsements' &&
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {endorsements.map((endorsement) =>
              <SkillEndorsement key={endorsement.id} {...endorsement} />
              )}
              </div>
            }

            {/* Learning Progress Tab */}
            {activeTab === 'learning' &&
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningSkills.map((skill) =>
              <LearningProgress key={skill.id} {...skill} />
              )}
              </div>
            }

            {/* Technology Preferences Tab */}
            {activeTab === 'preferences' &&
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {techPreferences.map((pref) =>
              <TechnologyPreference key={pref.id} {...pref} />
              )}
              </div>
            }
          </div>
        </div>
      </div>
    </div>);

};

export default SkillsInteractive;