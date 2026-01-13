'use client';

import React, { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  companyLogoAlt: string;
  avatar: string;
  avatarAlt: string;
  testimonial: string;
  rating: number;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isHydrated]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              Client Testimonials
            </h2>
            <p className="font-body text-lg text-textSecondary">
              What clients say about working with me
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-card rounded-2xl shadow-xl border border-border p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-primary/10">
              <Icon name="ChatBubbleLeftRightIcon" size={64} variant="solid" />
            </div>

            {/* Rating Stars */}
            <div className="flex items-center justify-center gap-1 mb-6 relative z-10">
              {[...Array(5)].map((_, index) => (
                <Icon
                  key={index}
                  name="StarIcon"
                  size={24}
                  variant={index < currentTestimonial.rating ? 'solid' : 'outline'}
                  className={index < currentTestimonial.rating ? 'text-accent' : 'text-muted'}
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="relative z-10 mb-8">
              <p className="font-body text-lg md:text-xl text-foreground text-center leading-relaxed">
                "{currentTestimonial.testimonial}"
              </p>
            </blockquote>

            {/* Client Info */}
            <div className="flex flex-col items-center gap-4 relative z-10">
              <AppImage
                src={currentTestimonial.avatar}
                alt={currentTestimonial.avatarAlt}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
              />
              <div className="text-center">
                <h4 className="font-headline text-lg font-semibold text-foreground">
                  {currentTestimonial.name}
                </h4>
                <p className="font-body text-sm text-textSecondary">
                  {currentTestimonial.role} at {currentTestimonial.company}
                </p>
              </div>
              <AppImage
                src={currentTestimonial.companyLogo}
                alt={currentTestimonial.companyLogoAlt}
                className="h-8 w-auto object-contain opacity-60"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={handlePrevious}
                className="w-12 h-12 flex items-center justify-center bg-surface rounded-full border border-border hover:bg-muted hover:border-primary transition-all duration-200 active:scale-95"
                aria-label="Previous testimonial"
              >
                <Icon name="ChevronLeftIcon" size={24} variant="outline" className="text-foreground" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex ? 'w-8 bg-primary' : 'bg-muted'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 flex items-center justify-center bg-surface rounded-full border border-border hover:bg-muted hover:border-primary transition-all duration-200 active:scale-95"
                aria-label="Next testimonial"
              >
                <Icon name="ChevronRightIcon" size={24} variant="outline" className="text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;