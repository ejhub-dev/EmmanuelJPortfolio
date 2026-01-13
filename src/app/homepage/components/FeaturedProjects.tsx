'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Technology {
  name: string;
  icon: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  technologies: Technology[];
  category: string;
  link: string;
}

interface FeaturedProjectsProps {
  projects: Project[];
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="font-body text-lg text-textSecondary max-w-2xl mx-auto mb-8">
              Showcasing digital experiences that blend technical excellence with strategic business thinking
            </p>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 font-cta text-primary hover:text-primary/80 transition-colors duration-200"
            >
              View All Projects
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
            </Link>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <AppImage
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-cta rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="font-headline text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-textSecondary mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 px-2 py-1 bg-muted rounded-md"
                      >
                        <Icon name={tech.icon as any} size={16} variant="outline" className="text-primary" />
                        <span className="font-body text-xs text-textSecondary">{tech.name}</span>
                      </div>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-muted rounded-md font-body text-xs text-textSecondary">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Project Link */}
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-2 font-cta text-sm text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    View Case Study
                    <Icon 
                      name="ArrowRightIcon" 
                      size={16} 
                      variant="outline"
                      className={`transition-transform duration-200 ${hoveredProject === project.id ? 'translate-x-1' : ''}`}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;