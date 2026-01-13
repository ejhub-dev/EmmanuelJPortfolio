import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ title, subtitle, description }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Icon name="ChatBubbleLeftRightIcon" size={32} variant="solid" className="text-primary" />
          </div>
          
          <h1 className="font-headline text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 tracking-tight">
            {title}
          </h1>
          
          <p className="font-body text-xl lg:text-2xl text-primary font-semibold mb-4">
            {subtitle}
          </p>
          
          <p className="font-body text-base lg:text-lg text-textSecondary max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};

export default ContactHero;