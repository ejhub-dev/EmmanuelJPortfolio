import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'career' | 'achievement';
}

interface TimelineSectionProps {
  timeline: TimelineItem[];
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ timeline }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-success/10 text-success';
      case 'career':
        return 'bg-primary/10 text-primary';
      case 'achievement':
        return 'bg-accent/10 text-accent';
      default:
        return 'bg-muted text-textSecondary';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education':
        return 'AcademicCapIcon';
      case 'career':
        return 'BriefcaseIcon';
      case 'achievement':
        return 'TrophyIcon';
      default:
        return 'StarIcon';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Career Timeline
            </h2>
            <p className="font-body text-lg text-textSecondary">
              Key milestones in my professional journey
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-card border-4 border-background rounded-full items-center justify-center shadow-sm z-10">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getTypeColor(item.type)}`}>
                      <Icon name={getTypeIcon(item.type)} size={20} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-card rounded-xl p-6 shadow-sm hover:shadow-elevation transition-shadow duration-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
                          {item.year}
                        </span>
                        <h3 className="font-headline text-xl font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="font-body text-textSecondary mt-1">
                          {item.organization}
                        </p>
                      </div>
                      <div className="md:hidden">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getTypeColor(item.type)}`}>
                          <Icon name={getTypeIcon(item.type)} size={20} />
                        </div>
                      </div>
                    </div>
                    <p className="font-body text-textSecondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;