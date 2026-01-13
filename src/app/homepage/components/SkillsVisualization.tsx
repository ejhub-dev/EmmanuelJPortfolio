import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

interface SkillsVisualizationProps {
  skills: Skill[];
}

const SkillsVisualization: React.FC<SkillsVisualizationProps> = ({ skills }) => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical Expertise
            </h2>
            <p className="font-body text-lg text-textSecondary max-w-2xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks that power innovative digital solutions
            </p>
          </div>

          {/* Skills Grid by Category */}
          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category}>
                <h3 className="font-headline text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-primary rounded-full"></span>
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill) => (
                      <div
                        key={skill.name}
                        className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-primary/50 transition-all duration-200"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon name={skill.icon as any} size={24} variant="outline" className="text-primary" />
                            </div>
                            <div>
                              <h4 className="font-headline text-lg font-semibold text-foreground">
                                {skill.name}
                              </h4>
                            </div>
                          </div>
                          <span className="font-body text-sm font-medium text-primary">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsVisualization;