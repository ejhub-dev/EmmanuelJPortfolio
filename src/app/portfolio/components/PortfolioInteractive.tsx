'use client';

import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import FilterBar from './FilterBar';
import Icon from '@/components/ui/AppIcon';

interface Technology {
  name: string;
  category: string;
}

interface ProjectMetrics {
  label: string;
  value: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  image: string;
  alt: string;
  technologies: Technology[];
  metrics: ProjectMetrics[];
  demoUrl?: string;
  githubUrl?: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
  featured: boolean;
}

const PortfolioInteractive: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockProjects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform Redesign',
    category: 'Web Application',
    industry: 'Retail',
    description: 'Complete redesign and development of a modern e-commerce platform with advanced filtering, real-time inventory management, and seamless checkout experience.',
    challenge: 'The client had an outdated platform with poor user experience, slow load times, and high cart abandonment rates. The existing system could not handle peak traffic during sales events.',
    solution: 'Built a scalable Next.js application with server-side rendering for optimal performance, implemented Redis caching for inventory management, and integrated Stripe for secure payments. Added progressive web app features for mobile users.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12d7de71f-1764676026833.png",
    alt: 'Modern e-commerce website interface showing product grid with shopping cart on desktop computer screen',
    technologies: [
    { name: 'Next.js', category: 'Framework' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Redux', category: 'State Management' },
    { name: 'Stripe', category: 'Payment' },
    { name: 'PostgreSQL', category: 'Database' }],

    metrics: [
    { label: 'Load Time Reduction', value: '65%' },
    { label: 'Conversion Rate', value: '+42%' },
    { label: 'Mobile Traffic', value: '+78%' },
    { label: 'Customer Satisfaction', value: '4.8/5' }],

    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/example/project',
    testimonial: {
      text: 'Mezanur transformed our online presence completely. The new platform not only looks stunning but has significantly improved our sales and customer engagement. His attention to detail and technical expertise are exceptional.',
      author: 'Sarah Johnson',
      role: 'CEO, Fashion Retail Co.'
    },
    featured: true
  },
  {
    id: 2,
    title: 'Healthcare Patient Portal',
    category: 'Web Application',
    industry: 'Healthcare',
    description: 'Secure patient portal enabling appointment scheduling, medical records access, telemedicine consultations, and prescription management with HIPAA compliance.',
    challenge: 'Healthcare provider needed a HIPAA-compliant solution to reduce administrative burden while improving patient engagement. Legacy systems were disconnected and required manual data entry.',
    solution: 'Developed a secure React-based portal with end-to-end encryption, integrated with existing EHR systems via HL7 FHIR APIs, and implemented role-based access control. Added video consultation features using WebRTC.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_195a6e902-1764648555298.png",
    alt: 'Healthcare professional using tablet showing patient medical records dashboard in modern clinic',
    technologies: [
    { name: 'React', category: 'Framework' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'WebRTC', category: 'Video' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Socket.io', category: 'Real-time' }],

    metrics: [
    { label: 'Admin Time Saved', value: '45%' },
    { label: 'Patient Engagement', value: '+89%' },
    { label: 'Appointment No-shows', value: '-32%' },
    { label: 'User Adoption', value: '92%' }],

    demoUrl: 'https://example.com/demo',
    testimonial: {
      text: 'The portal has revolutionized how we interact with our patients. Mezanur ensured every security requirement was met while creating an intuitive interface that our elderly patients can easily navigate.',
      author: 'Dr. Michael Chen',
      role: 'Medical Director, HealthFirst Clinic'
    },
    featured: true
  },
  {
    id: 3,
    title: 'Real Estate Listing Platform',
    category: 'Web Application',
    industry: 'Real Estate',
    description: 'Comprehensive property listing platform with advanced search filters, virtual tours, mortgage calculators, and agent management system.',
    challenge: 'Real estate agency needed to compete with major platforms while maintaining their unique brand identity. Required integration with multiple MLS systems and property management tools.',
    solution: 'Created a custom Next.js platform with Mapbox integration for location-based search, implemented 360° virtual tour viewer, and built automated listing syndication to major real estate portals.',
    image: "https://images.unsplash.com/photo-1620086385485-d0bd6daa815c",
    alt: 'Luxury modern living room with floor-to-ceiling windows showing city skyline view',
    technologies: [
    { name: 'Next.js', category: 'Framework' },
    { name: 'Mapbox', category: 'Maps' },
    { name: 'Three.js', category: '3D' },
    { name: 'GraphQL', category: 'API' },
    { name: 'Prisma', category: 'ORM' },
    { name: 'Vercel', category: 'Hosting' }],

    metrics: [
    { label: 'Listing Views', value: '+156%' },
    { label: 'Lead Generation', value: '+94%' },
    { label: 'Agent Productivity', value: '+67%' },
    { label: 'Mobile Usage', value: '71%' }],

    githubUrl: 'https://github.com/example/project',
    testimonial: {
      text: 'Our agents love the new platform. The virtual tour feature has been a game-changer, especially for out-of-state buyers. Mezanur delivered exactly what we envisioned and more.',
      author: 'Jennifer Martinez',
      role: 'Broker Owner, Prime Properties'
    },
    featured: false
  },
  {
    id: 4,
    title: 'Financial Dashboard Analytics',
    category: 'Dashboard',
    industry: 'Finance',
    description: 'Real-time financial analytics dashboard with portfolio tracking, market insights, automated reporting, and risk assessment tools for investment firms.',
    challenge: 'Investment firm needed real-time data visualization with complex calculations while maintaining sub-second response times. Legacy Excel-based reporting was error-prone and time-consuming.',
    solution: 'Built a React dashboard with WebSocket connections for live market data, implemented custom charting with D3.js, and created automated PDF report generation. Added machine learning models for risk prediction.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1370e02cd-1766487882870.png",
    alt: 'Financial analyst viewing multiple stock market charts and graphs on dual monitor setup',
    technologies: [
    { name: 'React', category: 'Framework' },
    { name: 'D3.js', category: 'Visualization' },
    { name: 'Python', category: 'Backend' },
    { name: 'TensorFlow', category: 'ML' },
    { name: 'Redis', category: 'Cache' },
    { name: 'Docker', category: 'DevOps' }],

    metrics: [
    { label: 'Report Generation', value: '10x Faster' },
    { label: 'Data Accuracy', value: '99.9%' },
    { label: 'User Efficiency', value: '+83%' },
    { label: 'Cost Savings', value: '$250K/yr' }],

    demoUrl: 'https://example.com/demo',
    featured: false
  },
  {
    id: 5,
    title: 'Educational Learning Management System',
    category: 'Web Application',
    industry: 'Education',
    description: 'Comprehensive LMS with course management, video streaming, interactive quizzes, progress tracking, and certification system for online education.',
    challenge: 'Educational institution needed to transition from in-person to hybrid learning model. Required support for 10,000+ concurrent users with minimal latency for video content.',
    solution: 'Developed a scalable LMS using Next.js with CDN-based video delivery, implemented adaptive bitrate streaming, and created an interactive quiz engine with instant feedback. Added gamification elements to boost engagement.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a8f5d4d2-1767271764356.png",
    alt: 'Student using laptop for online learning with notebook and coffee on wooden desk',
    technologies: [
    { name: 'Next.js', category: 'Framework' },
    { name: 'AWS S3', category: 'Storage' },
    { name: 'CloudFront', category: 'CDN' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Mux', category: 'Video' },
    { name: 'Kubernetes', category: 'DevOps' }],

    metrics: [
    { label: 'Student Enrollment', value: '+215%' },
    { label: 'Course Completion', value: '87%' },
    { label: 'Platform Uptime', value: '99.98%' },
    { label: 'Student Satisfaction', value: '4.7/5' }],

    githubUrl: 'https://github.com/example/project',
    testimonial: {
      text: 'The LMS exceeded our expectations. Students find it intuitive, and instructors appreciate the comprehensive analytics. Mezanur was responsive to our feedback throughout the development process.',
      author: 'Prof. David Williams',
      role: 'Dean of Online Education, Tech University'
    },
    featured: true
  },
  {
    id: 6,
    title: 'Restaurant Management System',
    category: 'Mobile App',
    industry: 'Hospitality',
    description: 'All-in-one restaurant management solution with POS integration, inventory tracking, table reservations, online ordering, and staff scheduling.',
    challenge: 'Restaurant chain struggled with disconnected systems for different locations, leading to inventory discrepancies and poor customer experience. Manual processes were inefficient and error-prone.',
    solution: 'Created a unified React Native app with offline-first architecture, integrated with existing POS systems, and implemented real-time synchronization across locations. Added customer loyalty program and push notifications.',
    image: "https://images.unsplash.com/photo-1636055832732-5869c97a6090",
    alt: 'Modern restaurant interior with wooden tables, pendant lighting, and open kitchen visible in background',
    technologies: [
    { name: 'React Native', category: 'Framework' },
    { name: 'Firebase', category: 'Backend' },
    { name: 'Stripe', category: 'Payment' },
    { name: 'Twilio', category: 'SMS' },
    { name: 'Google Maps', category: 'Location' },
    { name: 'Redux', category: 'State' }],

    metrics: [
    { label: 'Order Accuracy', value: '+96%' },
    { label: 'Table Turnover', value: '+28%' },
    { label: 'Food Waste', value: '-41%' },
    { label: 'Customer Retention', value: '+63%' }],

    demoUrl: 'https://example.com/demo',
    featured: false
  }];


  // Extract unique values for filters
  const categories = ['All', ...Array.from(new Set(mockProjects.map((p) => p.category)))];
  const industries = ['All', ...Array.from(new Set(mockProjects.map((p) => p.industry)))];
  const allTechnologies = mockProjects.flatMap((p) => p.technologies.map((t) => t.name));
  const technologies = ['All', ...Array.from(new Set(allTechnologies))];

  // Filter projects
  const filteredProjects = mockProjects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesIndustry = selectedIndustry === 'All' || project.industry === selectedIndustry;
    const matchesTechnology =
    selectedTechnology === 'All' ||
    project.technologies.some((tech) => tech.name === selectedTechnology);
    const matchesSearch =
    searchQuery === '' ||
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.technologies.some((tech) =>
    tech.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return matchesCategory && matchesIndustry && matchesTechnology && matchesSearch;
  });

  const handleClearFilters = () => {
    setSelectedCategory('All');
    setSelectedIndustry('All');
    setSelectedTechnology('All');
    setSearchQuery('');
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-6 py-24">
          <div className="animate-pulse">
            <div className="h-12 bg-muted rounded w-1/3 mb-4"></div>
            <div className="h-6 bg-muted rounded w-2/3 mb-8"></div>
            <div className="h-64 bg-muted rounded mb-8"></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-muted rounded"></div>
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-headline font-bold text-4xl md:text-5xl text-foreground mb-4">
            Project Portfolio
          </h1>
          <p className="font-body text-lg text-textSecondary max-w-3xl mx-auto">
            Explore my collection of projects showcasing technical expertise, creative problem-solving, and measurable business impact across diverse industries and technologies.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          categories={categories}
          industries={industries}
          technologies={technologies}
          selectedCategory={selectedCategory}
          selectedIndustry={selectedIndustry}
          selectedTechnology={selectedTechnology}
          searchQuery={searchQuery}
          onCategoryChange={setSelectedCategory}
          onIndustryChange={setSelectedIndustry}
          onTechnologyChange={setSelectedTechnology}
          onSearchChange={setSearchQuery}
          onClearFilters={handleClearFilters} />


        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="font-body text-sm text-textSecondary">
            Showing {filteredProjects.length} of {mockProjects.length} projects
          </p>
          {filteredProjects.length === 0 &&
          <button
            onClick={handleClearFilters}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">

              <Icon name="ArrowPathIcon" size={16} variant="outline" />
              Reset Filters
            </button>
          }
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ?
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) =>
          <ProjectCard
            key={project.id}
            project={project}
            onViewDetails={setSelectedProject} />

          )}
          </div> :

        <div className="text-center py-16">
            <Icon
            name="FolderOpenIcon"
            size={64}
            variant="outline"
            className="text-textSecondary mx-auto mb-4" />

            <h3 className="font-headline font-bold text-xl text-foreground mb-2">
              No Projects Found
            </h3>
            <p className="font-body text-base text-textSecondary mb-6">
              Try adjusting your filters or search query to find what you&apos;re looking for.
            </p>
            <button
            onClick={handleClearFilters}
            className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">

              Clear All Filters
            </button>
          </div>
        }

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg text-center">
          <h2 className="font-headline font-bold text-2xl text-foreground mb-3">
            Ready to Start Your Project?
          </h2>
          <p className="font-body text-base text-textSecondary mb-6 max-w-2xl mx-auto">
            Let&apos;s collaborate to bring your vision to life with cutting-edge technology and strategic thinking.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg text-base font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-elevation">

            Start a Conversation
            <Icon name="ArrowRightIcon" size={20} variant="outline" />
          </a>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>);

};

export default PortfolioInteractive;