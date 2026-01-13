'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
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

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-elevation transition-all duration-300 border border-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <AppImage
          src={project.image}
          alt={project.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
            <p className="font-body text-sm line-clamp-3">{project.description}</p>
            <div className="flex items-center gap-3 mt-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon name="ArrowTopRightOnSquareIcon" size={16} variant="outline" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-background/20 backdrop-blur-sm text-background rounded-md text-sm font-medium hover:bg-background/30 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon name="CodeBracketIcon" size={16} variant="outline" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold shadow-md">
            Featured
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
            {project.category}
          </span>
          <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
            {project.industry}
          </span>
        </div>

        <h3 className="font-headline font-bold text-xl text-foreground mb-2 line-clamp-1">
          {project.title}
        </h3>

        <p className="font-body text-sm text-textSecondary mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-surface text-textSecondary rounded text-xs font-medium"
            >
              {tech.name}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 bg-surface text-textSecondary rounded text-xs font-medium">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onViewDetails(project)}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-muted text-foreground rounded-md text-sm font-medium hover:bg-muted/80 transition-colors group/btn"
        >
          View Case Study
          <Icon
            name="ArrowRightIcon"
            size={16}
            variant="outline"
            className="transition-transform duration-200 group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;