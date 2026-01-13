'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ProjectType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ProjectTypeSelectorProps {
  projectTypes: ProjectType[];
  selectedType: string;
  onSelectType: (typeId: string) => void;
}

const ProjectTypeSelector: React.FC<ProjectTypeSelectorProps> = ({
  projectTypes,
  selectedType,
  onSelectType,
}) => {
  return (
    <div className="space-y-4">
      <label className="block font-headline text-sm font-semibold text-foreground mb-3">
        Project Type <span className="text-error">*</span>
      </label>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectTypes.map((type) => (
          <button
            key={type.id}
            type="button"
            onClick={() => onSelectType(type.id)}
            className={`
              relative p-4 rounded-lg border-2 text-left transition-all duration-200
              ${
                selectedType === type.id
                  ? 'border-primary bg-primary/5 shadow-sm'
                  : 'border-border bg-card hover:border-primary/50 hover:bg-muted'
              }
            `}
          >
            <div className="flex items-start space-x-3">
              <div className={`
                flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200
                ${selectedType === type.id ? 'bg-primary text-white' : 'bg-muted text-textSecondary'}
              `}>
                <Icon name={type.icon as any} size={20} variant="outline" />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-headline text-sm font-semibold text-foreground mb-1">
                  {type.title}
                </h4>
                <p className="font-body text-xs text-textSecondary">
                  {type.description}
                </p>
              </div>
            </div>
            
            {selectedType === type.id && (
              <div className="absolute top-2 right-2">
                <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-primary" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectTypeSelector;