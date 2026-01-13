import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ name, tagline, image, imageAlt }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm <span className="text-primary">{name}</span>
              </h1>
              <p className="font-body text-xl lg:text-2xl text-textSecondary leading-relaxed">
                {tagline}
              </p>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3" />
              <div className="relative overflow-hidden rounded-2xl shadow-elevation">
                <AppImage
                  src={image}
                  alt={imageAlt}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;