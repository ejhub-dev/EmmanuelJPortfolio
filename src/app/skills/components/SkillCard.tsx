import React from 'react';

interface SkillCardProps {
  name: string;
  level: number;
  category: string;
  description: string;
  yearsOfExperience: number;
  icon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  name,
  level,
  category,
  description,
  yearsOfExperience,
  icon,
}) => {
  const getLevelColor = (level: number): string => {
    if (level >= 90) return 'bg-success';
    if (level >= 75) return 'bg-primary';
    if (level >= 60) return 'bg-accent';
    return 'bg-secondary';
  };

  const getLevelText = (level: number): string => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className="group bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-elevation hover:border-primary/30">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <div>
            <h3 className="font-headline font-semibold text-lg text-foreground">
              {name}
            </h3>
            <p className="text-sm text-textSecondary">{category}</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-textSecondary">
          {yearsOfExperience}+ years
        </span>
      </div>

      <p className="text-sm text-textSecondary mb-4 line-clamp-2">
        {description}
      </p>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">
            {getLevelText(level)}
          </span>
          <span className="text-textSecondary">{level}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className={`h-full ${getLevelColor(level)} rounded-full transition-all duration-500 ease-out`}
            style={{ width: `${level}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;