'use client';

import React, { useState, useEffect } from 'react';
import TimelineItem from './TimelineItem';
import TestimonialCard from './TestimonialCard';
import CareerProgressChart from './CareerProgressChart';
import CertificationCard from './CertificationCard';
import Icon from '@/components/ui/AppIcon';

interface Achievement {
  text: string;
  metric?: string;
}

interface TimelineData {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'work' | 'education';
  description: string;
  achievements: Achievement[];
  technologies?: string[];
}

interface TestimonialData {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  relationship: string;
}

interface CertificationData {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  alt: string;
  verificationUrl?: string;
}

interface CareerProgressData {
  year: string;
  projects: number;
  skills: number;
}

const ExperienceInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['exp-1']));
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const timelineData: TimelineData[] = [
  {
    id: 'exp-1',
    company: 'DevTech Hub',
    role: 'Full Stack Developer',
    period: 'May 2025 - Nov 2025',
    location: 'Monack Junction, Enugu',
    type: 'work',
    description: 'Leading development of enterprise-scale web applications using modern JavaScript frameworks and cloud technologies. Architecting scalable solutions that serve global active users with my team developers.',
    achievements: [
    { text: 'Reduced application load time by', metric: '65%' },
    { text: 'Implemented CI/CD pipeline reducing deployment time by', metric: '80%' },
    { text: 'Led migration to microservices architecture serving', metric: '2M+ requests/day' },
    // { text: 'Mentored 5 junior developers resulting in', metric: '3 promotions' }
    ],

    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes']
  },
  {
    id: 'exp-2',
    company: 'Hot Sui',
    role: 'Full Stack Developer',
    period: 'Jun 2025 - Dec 2025',
    location: 'Remote, Enugu',
    type: 'work',
    description: 'Developed and maintained multiple client-facing web applications with focus on performance optimization and user experience. Collaborated with cross-functional teams to deliver projects on time and within budget.',
    achievements: [
    { text: 'Built 2+ production applications with', metric: '99.9% uptime' },
    { text: 'Improved code quality metrics by', metric: '45%' },
    { text: 'Reduced bug reports by implementing comprehensive testing, achieving', metric: '90% coverage' },
    { text: 'Optimized database queries resulting in', metric: '50% faster response times' }],

    technologies: ['React', 'Vue.js', 'Python', 'Django', 'MongoDB', 'Redis', 'Git', 'Jenkins']
  },
  // {
  //   id: 'exp-3',
  //   company: 'StartupHub Technologies',
  //   role: 'Junior Web Developer',
  //   period: 'Aug 2019 - May 2021',
  //   location: 'Boston, MA',
  //   type: 'work',
  //   description: 'Started career building responsive web interfaces and RESTful APIs for startup clients. Gained hands-on experience with modern development workflows and agile methodologies.',
  //   achievements: [
  //   { text: 'Contributed to 8+ successful product launches' },
  //   { text: 'Improved mobile responsiveness across', metric: '15 client websites' },
  //   { text: 'Reduced page load times by', metric: '40%' },
  //   { text: 'Received "Rising Star Developer" award in', metric: '2020' }],

  //   technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'PHP', 'MySQL', 'Git']
  // },
  // {
  //   id: 'edu-1',
  //   company: 'Massachusetts Institute of Technology',
  //   role: 'Master of Science in Computer Science',
  //   period: 'Sep 2017 - May 2019',
  //   location: 'Cambridge, MA',
  //   type: 'education',
  //   description: 'Specialized in Software Engineering and Distributed Systems. Completed thesis on "Optimizing Microservices Architecture for High-Traffic Applications" with focus on scalability and performance.',
  //   achievements: [
  //   { text: 'Graduated with', metric: 'GPA 3.9/4.0' },
  //   { text: 'Published 2 research papers in peer-reviewed conferences' },
  //   { text: 'Teaching Assistant for Advanced Web Development course' },
  //   { text: 'Winner of MIT Hackathon', metric: '2018' }],

  //   technologies: ['Algorithms', 'Distributed Systems', 'Cloud Computing', 'Machine Learning', 'Software Architecture']
  // },
  {
    id: 'edu-2',
    company: 'University Of Nigeria Nsukka, Enugu',
    role: 'Bachelor of Science in Computer Science',
    period: 'Sep 2022 - May 2026',
    location: 'Enugu, Enugu',
    type: 'education',
    description: 'Comprehensive computer science education with focus on software development, data structures, and algorithms. Active member of Computer Science Club and participated in multiple hackathons.',
    achievements: [
    { text: 'Graduated', metric: 'With Honor' },
    // { text: 'Dean\'s List for', metric: '6 consecutive semesters' },
    { text: 'Led team project to ', metric: 'Enugu Hackathon 2026' },
    { text: 'Completed 1 internships at leading tech companies' }],

    technologies: ['Java', 'Python', 'C++', 'Data Structures', 'Algorithms', 'Database Systems', 'Operating Systems']
  }];


  const testimonials: TestimonialData[] = [
  {
    id: 'test-1',
    name: 'Christian',
    role: 'Developer',
    company: 'DevTech Hub',
    image: "null",
    alt: 'Professional woman with blonde hair in navy blazer smiling confidently in modern office',
    quote: 'Emmanuel is an exceptional developer who consistently delivers high-quality solutions. His ability to architect scalable systems and encourage developers has been invaluable to our team. He transformed our application performance and set new standards for code quality.',
    relationship: 'Direct Supervisor'
  },
  // {
  //   id: 'test-2',
  //   name: 'Michael Chen',
  //   role: 'Product Manager',
  //   company: 'Digital Innovations Inc',
  //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a6292082-1763301117847.png",
  //   alt: 'Asian man with short black hair and beard in gray suit smiling in corporate setting',
  //   quote: 'Working with Emmanuel was a game-changer for our projects. He has a rare combination of technical expertise and business acumen. His solutions always consider both user experience and business objectives, making him an invaluable partner in product development.',
  //   relationship: 'Colleague'
  // },
  // {
  //   id: 'test-3',
  //   name: 'Emily Rodriguez',
  //   role: 'Senior Developer',
  //   company: 'StartupHub Technologies',
  //   image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0f48e8d-1763295027844.png",
  //   alt: 'Hispanic woman with long brown hair in professional attire smiling warmly in office environment',
  //   quote: 'Emmanuel was my mentor when I started my career, and his guidance was instrumental in my growth as a developer. He has an incredible ability to explain complex concepts clearly and always makes time to help others succeed. A true team player and technical leader.',
  //   relationship: 'Mentee'
  // },
  {
    id: 'test-4',
    name: 'Topgun',
    role: 'Operation Director',
    company: 'Hot Sui',
    image: "null",
    alt: 'Middle-aged man with gray hair in dark suit smiling professionally in executive office',
    quote: 'Emmanuel\'s contributions to our engineering team have been outstanding. His technical skills are matched only by his professionalism and collaborative spirit. He consistently goes above and beyond to ensure project success and team growth.',
    relationship: 'Senior Manager'
  }];


  const certifications: CertificationData[] = [
  {
    id: 'cert-1',
    title: 'AWS Certified Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    date: 'Dec 2024',
    credentialId: 'AWS-PSA-2024-MR-8472',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12c7fee32-1766881880765.png",
    alt: 'Digital illustration of Earth from space with glowing network connections representing cloud computing',
    verificationUrl: 'https://aws.amazon.com/verification'
  },
  {
    id: 'cert-2',
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: 'Aug 2024',
    credentialId: 'GCP-PD-2024-MR-3891',
    image: "https://images.unsplash.com/photo-1721791253381-a00352b903d6",
    alt: 'Abstract digital technology background with blue and white geometric patterns',
    verificationUrl: 'https://cloud.google.com/certification'
  },
  {
    id: 'cert-3',
    title: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    date: 'May 2024',
    credentialId: 'CKA-2024-MR-5623',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ec2416e4-1767204263123.png",
    alt: 'Futuristic digital network visualization with interconnected nodes and blue light trails',
    verificationUrl: 'https://www.cncf.io/certification'
  },
  {
    id: 'cert-4',
    title: 'Meta Front-End Developer Professional',
    issuer: 'Meta (Facebook)',
    date: 'Feb 2024',
    credentialId: 'META-FE-2024-MR-7234',
    image: "https://images.unsplash.com/photo-1608306448197-e83633f1261c",
    alt: 'Modern laptop displaying colorful code on screen in dark workspace with ambient lighting',
    verificationUrl: 'https://www.coursera.org/verify'
  }];


  const careerProgressData: CareerProgressData[] = [
  { year: '2019', projects: 8, skills: 12 },
  { year: '2020', projects: 15, skills: 18 },
  { year: '2021', projects: 22, skills: 25 },
  { year: '2022', projects: 28, skills: 32 },
  { year: '2023', projects: 35, skills: 38 },
  { year: '2024', projects: 42, skills: 45 }];


  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    const filteredData = timelineData.filter((item) => item.type === activeTab);
    setExpandedItems(new Set(filteredData.map((item) => item.id)));
  };

  const collapseAll = () => {
    setExpandedItems(new Set());
  };

  const filteredTimeline = timelineData.filter((item) => item.type === activeTab);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-16" />
        <div className="container mx-auto px-6 py-16">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3" />
            <div className="h-6 bg-muted rounded w-2/3" />
            <div className="space-y-4">
              {[1, 2, 3].map((i) =>
              <div key={i} className="h-32 bg-muted rounded" />
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-body text-sm font-medium">
              <Icon name="BriefcaseIcon" size={16} variant="solid" />
              Professional Journey
            </div>
            <h1 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl text-foreground">
              Experience & <span className="text-primary">Education</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed">
              A comprehensive timeline of my professional growth, educational achievements, and continuous learning journey in software development.
            </p>
          </div>
        </div>
      </section>

      {/* Career Progress Chart */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <CareerProgressChart data={careerProgressData} />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex gap-2 bg-muted p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab('work')}
                  className={`px-6 py-2 font-cta text-sm rounded-md transition-all duration-200 ${
                  activeTab === 'work' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-textSecondary hover:text-foreground'}`
                  }>

                  Work Experience
                </button>
                <button
                  onClick={() => setActiveTab('education')}
                  className={`px-6 py-2 font-cta text-sm rounded-md transition-all duration-200 ${
                  activeTab === 'education' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-textSecondary hover:text-foreground'}`
                  }>

                  Education
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={expandAll}
                  className="px-4 py-2 font-body text-sm text-primary hover:bg-primary/10 rounded-md transition-colors duration-200">

                  Expand All
                </button>
                <button
                  onClick={collapseAll}
                  className="px-4 py-2 font-body text-sm text-textSecondary hover:bg-muted rounded-md transition-colors duration-200">

                  Collapse All
                </button>
              </div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-0">
              {filteredTimeline.map((item) =>
              <TimelineItem
                key={item.id}
                {...item}
                isExpanded={expandedItems.has(item.id)}
                onToggle={() => toggleItem(item.id)} />

              )}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
                Certifications & <span className="text-primary">Credentials</span>
              </h2>
              <p className="font-body text-lg text-textSecondary max-w-2xl mx-auto">
                Professional certifications demonstrating expertise in modern technologies and best practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert) =>
              <CertificationCard key={cert.id} {...cert} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground mb-4">
                Professional <span className="text-primary">Recommendations</span>
              </h2>
              <p className="font-body text-lg text-textSecondary max-w-2xl mx-auto">
                What colleagues, supervisors, and mentees say about working with me.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) =>
              <TestimonialCard key={testimonial.id} {...testimonial} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-foreground">
              Ready to Work Together?
            </h2>
            <p className="font-body text-lg text-textSecondary max-w-2xl mx-auto">
              Let&apos;s discuss how my experience and expertise can help bring your project to life.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-3 font-cta text-base bg-primary text-primary-foreground rounded-md shadow-sm hover:bg-primary/90 hover:shadow-md transition-all duration-200">

                Start a Conversation
              </a>
              <a
                href="/portfolio"
                className="px-8 py-3 font-cta text-base bg-card text-foreground border border-border rounded-md hover:bg-muted transition-all duration-200">

                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>);

};

export default ExperienceInteractive;