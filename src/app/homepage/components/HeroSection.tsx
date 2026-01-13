'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  typingTexts: string[];
  stats: {
    experience: number;
    projects: number;
    satisfaction: number;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ typingTexts, stats }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const currentFullText = typingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex, typingTexts, isHydrated]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-muted overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
            <span className="font-body text-sm text-primary font-medium">Available for new projects</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Hi, I'm <span className="text-primary">Emmanuel Joseph</span>
          </h1>

          {/* Typing Animation */}
          <div className="h-20 mb-8">
            <p className="font-headline text-2xl md:text-3xl lg:text-4xl font-semibold text-textSecondary">
              {isHydrated ? (
                <>
                  {displayedText}
                  <span className="inline-block w-0.5 h-8 bg-primary ml-1 animate-pulse"></span>
                </>
              ) : (
                typingTexts[0]
              )}
            </p>
          </div>

          {/* Description */}
          <p className="font-body text-lg md:text-xl text-textSecondary max-w-2xl mx-auto mb-10 leading-relaxed">
            I architect digital experiences that solve real business problems. A developer who understands that great code serves great user experiences and business outcomes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 font-cta text-base bg-primary text-primary-foreground rounded-lg shadow-md transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:scale-95"
            >
              <span className="flex items-center justify-center gap-2">
                Start a Project
                <Icon name="ArrowRightIcon" size={20} variant="outline" />
              </span>
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 font-cta text-base bg-surface text-foreground border-2 border-border rounded-lg transition-all duration-200 hover:bg-muted hover:border-primary active:scale-95"
            >
              View My Work
            </Link>
            <button
              onClick={() => {
                if (isHydrated) {
                  window.open('/assets/resume.pdf', '_blank');
                }
              }}
              className="w-full sm:w-auto px-8 py-4 font-cta text-base bg-surface text-foreground border-2 border-border rounded-lg transition-all duration-200 hover:bg-muted hover:border-primary active:scale-95"
            >
              <span className="flex items-center justify-center gap-2">
                <Icon name="ArrowDownTrayIcon" size={20} variant="outline" />
                Download Resume
              </span>
            </button>
          </div>

          {/* Stats Counter */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="font-headline text-4xl font-bold text-primary mb-2">
                {stats.experience}+
              </div>
              <div className="font-body text-sm text-textSecondary">Years Experience</div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="font-headline text-4xl font-bold text-primary mb-2">
                {stats.projects}+
              </div>
              <div className="font-body text-sm text-textSecondary">Projects Completed</div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <div className="font-headline text-4xl font-bold text-primary mb-2">
                {stats.satisfaction}%
              </div>
              <div className="font-body text-sm text-textSecondary">Client Satisfaction</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <Icon name="ChevronDownIcon" size={32} variant="outline" className="text-textSecondary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;