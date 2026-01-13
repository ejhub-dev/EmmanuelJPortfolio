'use client';

import React, { useEffect } from 'react';
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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-card rounded-lg shadow-elevation overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 p-2 bg-background/90 backdrop-blur-sm rounded-full text-foreground hover:bg-background transition-colors shadow-md"
          aria-label="Close modal"
        >
          <Icon name="XMarkIcon" size={24} variant="outline" />
        </button>

        {/* Project Image */}
        <div className="relative h-96 overflow-hidden bg-muted">
          <AppImage
            src={project.image}
            alt={project.alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {project.category}
              </span>
              <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                {project.industry}
              </span>
              {project.featured && (
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                  Featured
                </span>
              )}
            </div>

            <h2 className="font-headline font-bold text-3xl text-foreground mb-3">
              {project.title}
            </h2>

            <p className="font-body text-base text-textSecondary">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mt-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <Icon name="ArrowTopRightOnSquareIcon" size={18} variant="outline" />
                  View Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 bg-muted text-foreground rounded-md text-sm font-medium hover:bg-muted/80 transition-colors"
                >
                  <Icon name="CodeBracketIcon" size={18} variant="outline" />
                  View Code
                </a>
              )}
            </div>
          </div>

          {/* Metrics */}
          {project.metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-surface rounded-lg">
              {project.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="font-headline font-bold text-2xl text-primary mb-1">
                    {metric.value}
                  </div>
                  <div className="font-body text-sm text-textSecondary">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-headline font-bold text-xl text-foreground mb-3 flex items-center gap-2">
                <Icon name="ExclamationTriangleIcon" size={24} variant="outline" className="text-warning" />
                The Challenge
              </h3>
              <p className="font-body text-base text-textSecondary leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h3 className="font-headline font-bold text-xl text-foreground mb-3 flex items-center gap-2">
                <Icon name="LightBulbIcon" size={24} variant="outline" className="text-success" />
                The Solution
              </h3>
              <p className="font-body text-base text-textSecondary leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="font-headline font-bold text-xl text-foreground mb-4">
              Technologies Used
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-3 bg-surface rounded-lg border border-border"
                >
                  <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-success" />
                  <div>
                    <div className="font-body font-medium text-sm text-foreground">
                      {tech.name}
                    </div>
                    <div className="font-body text-xs text-textSecondary">
                      {tech.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-lg">
              <Icon name="ChatBubbleLeftRightIcon" size={32} variant="outline" className="text-primary mb-3" />
              <p className="font-body text-base text-foreground italic mb-4">
                &quot;{project.testimonial.text}&quot;
              </p>
              <div>
                <div className="font-headline font-semibold text-sm text-foreground">
                  {project.testimonial.author}
                </div>
                <div className="font-body text-sm text-textSecondary">
                  {project.testimonial.role}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;