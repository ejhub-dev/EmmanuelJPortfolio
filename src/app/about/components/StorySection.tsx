import React from 'react';

interface StorySectionProps {
  story: string[];
}

const StorySection: React.FC<StorySectionProps> = ({ story }) => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-8">
            My Journey
          </h2>
          <div className="space-y-6">
            {story.map((paragraph, index) => (
              <p
                key={index}
                className="font-body text-lg text-textSecondary leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;