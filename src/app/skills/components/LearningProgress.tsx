import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface LearningProgressProps {
  skill: string;
  currentLevel: number;
  targetLevel: number;
  startDate: string;
  estimatedCompletion: string;
  resources: string[];
  category: string;
}

const LearningProgress: React.FC<LearningProgressProps> = ({
  skill,
  currentLevel,
  targetLevel,
  startDate,
  estimatedCompletion,
  resources,
  category,
}) => {
  const progress = (currentLevel / targetLevel) * 100;

  return (
    <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-elevation hover:border-accent/30">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-headline font-semibold text-base text-foreground mb-1">
            {skill}
          </h4>
          <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded">
            {category}
          </span>
        </div>
        <div className="flex items-center space-x-1 text-accent">
          <Icon name="AcademicCapIcon" size={20} variant="solid" />
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-textSecondary">Progress</span>
          <span className="font-medium text-foreground">
            {currentLevel}% / {targetLevel}%
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <p className="text-textSecondary mb-1">Started</p>
          <p className="font-medium text-foreground">{startDate}</p>
        </div>
        <div>
          <p className="text-textSecondary mb-1">Target Date</p>
          <p className="font-medium text-foreground">{estimatedCompletion}</p>
        </div>
      </div>

      <div>
        <p className="text-sm text-textSecondary mb-2">Learning Resources:</p>
        <div className="flex flex-wrap gap-2">
          {resources.map((resource, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-textSecondary text-xs rounded"
            >
              {resource}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningProgress;