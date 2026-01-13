import React from 'react';

interface UseCaseScenario {
  scenario: string;
  reason: string;
}

interface TechnologyPreferenceProps {
  technology: string;
  category: string;
  preferenceLevel: 'Preferred' | 'Comfortable' | 'Familiar';
  icon: string;
  useCases: UseCaseScenario[];
  alternatives: string[];
}

const TechnologyPreference: React.FC<TechnologyPreferenceProps> = ({
  technology,
  category,
  preferenceLevel,
  icon,
  useCases,
  alternatives,
}) => {
  const getPreferenceColor = (level: string): string => {
    switch (level) {
      case 'Preferred':
        return 'bg-success text-success-foreground';
      case 'Comfortable':
        return 'bg-primary text-primary-foreground';
      case 'Familiar':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-textSecondary';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-elevation">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
            {icon}
          </div>
          <div>
            <h4 className="font-headline font-semibold text-base text-foreground">
              {technology}
            </h4>
            <p className="text-sm text-textSecondary">{category}</p>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${getPreferenceColor(
            preferenceLevel
          )}`}
        >
          {preferenceLevel}
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <h5 className="text-sm font-semibold text-foreground mb-2">
            Best Use Cases:
          </h5>
          <div className="space-y-2">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-muted rounded-lg p-3">
                <p className="text-sm font-medium text-foreground mb-1">
                  {useCase.scenario}
                </p>
                <p className="text-xs text-textSecondary">{useCase.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {alternatives.length > 0 && (
          <div>
            <h5 className="text-sm font-semibold text-foreground mb-2">
              Alternatives I Use:
            </h5>
            <div className="flex flex-wrap gap-2">
              {alternatives.map((alt, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted text-textSecondary text-xs rounded-full"
                >
                  {alt}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnologyPreference;