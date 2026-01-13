import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Achievement {
  text: string;
  metric?: string;
}

interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'work' | 'education';
  description: string;
  achievements: Achievement[];
  technologies?: string[];
  isExpanded: boolean;
  onToggle: () => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  company,
  role,
  period,
  location,
  type,
  description,
  achievements,
  technologies,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border" />
      
      {/* Timeline Dot */}
      <div className={`absolute left-0 top-2 w-4 h-4 rounded-full border-4 transform -translate-x-[7px] ${
        type === 'work' ? 'bg-primary border-primary/20' : 'bg-accent border-accent/20'
      }`} />

      {/* Content Card */}
      <div className="bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-200">
        <button
          onClick={onToggle}
          className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
          aria-expanded={isExpanded}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Icon 
                  name={type === 'work' ? 'BriefcaseIcon' : 'AcademicCapIcon'} 
                  size={20} 
                  className="text-primary flex-shrink-0"
                  variant="solid"
                />
                <h3 className="font-headline font-semibold text-lg text-foreground truncate">
                  {role}
                </h3>
              </div>
              <p className="font-body text-base text-primary font-medium mb-1">
                {company}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Icon name="CalendarIcon" size={16} variant="outline" />
                  {period}
                </span>
                <span className="flex items-center gap-1">
                  <Icon name="MapPinIcon" size={16} variant="outline" />
                  {location}
                </span>
              </div>
            </div>
            <Icon 
              name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'} 
              size={24} 
              className="text-muted-foreground flex-shrink-0"
              variant="outline"
            />
          </div>
        </button>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="px-6 pb-6 space-y-4 animate-in fade-in duration-200">
            <p className="font-body text-base text-textSecondary leading-relaxed">
              {description}
            </p>

            {/* Achievements */}
            {achievements.length > 0 && (
              <div>
                <h4 className="font-headline font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                  <Icon name="CheckBadgeIcon" size={18} variant="solid" className="text-success" />
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Icon 
                        name="CheckCircleIcon" 
                        size={20} 
                        className="text-success flex-shrink-0 mt-0.5"
                        variant="solid"
                      />
                      <span className="font-body text-sm text-textSecondary flex-1">
                        {achievement.text}
                        {achievement.metric && (
                          <span className="font-semibold text-primary ml-1">
                            {achievement.metric}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {technologies && technologies.length > 0 && (
              <div>
                <h4 className="font-headline font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                  <Icon name="CodeBracketIcon" size={18} variant="solid" className="text-primary" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-textSecondary font-body text-xs rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;