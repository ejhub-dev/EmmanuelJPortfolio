import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Expectation {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface ResponseExpectationsProps {
  expectations: Expectation[];
}

const ResponseExpectations: React.FC<ResponseExpectationsProps> = ({ expectations }) => {
  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="ClockIcon" size={24} variant="outline" className="text-primary" />
        </div>
        <h3 className="font-headline text-2xl font-bold text-foreground">
          What to Expect
        </h3>
      </div>
      
      <div className="space-y-4">
        {expectations.map((expectation, index) => (
          <div key={expectation.id} className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-headline text-sm font-bold">
              {index + 1}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <Icon name={expectation.icon as any} size={18} variant="outline" className="text-primary" />
                <h4 className="font-headline text-base font-semibold text-foreground">
                  {expectation.title}
                </h4>
              </div>
              <p className="font-body text-sm text-textSecondary">
                {expectation.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponseExpectations;