import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface PhilosophyItem {
  icon: string;
  title: string;
  description: string;
}

interface PhilosophySectionProps {
  philosophies: PhilosophyItem[];
}

const PhilosophySection: React.FC<PhilosophySectionProps> = ({ philosophies }) => {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
              My Philosophy
            </h2>
            <p className="font-body text-lg text-textSecondary max-w-2xl mx-auto">
              Core principles that guide my approach to development and problem-solving
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {philosophies.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-elevation transition-shadow duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={item.icon} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-textSecondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;