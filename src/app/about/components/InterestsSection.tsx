import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Interest {
  icon: string;
  title: string;
  description: string;
}

interface InterestsSectionProps {
  interests: Interest[];
}

const InterestsSection: React.FC<InterestsSectionProps> = ({ interests }) => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Beyond the Code
            </h2>
            <p className="font-body text-lg text-textSecondary">
              Personal interests that shape my perspective and creativity
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center hover:shadow-elevation transition-shadow duration-200 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon name={interest.icon} size={28} className="text-primary" />
                </div>
                <h3 className="font-headline text-lg font-semibold text-foreground mb-2">
                  {interest.title}
                </h3>
                <p className="font-body text-sm text-textSecondary leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;