import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  resumeUrl: string;
}

const CTASection: React.FC<CTASectionProps> = ({ resumeUrl }) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-primary/80">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white">
              Let's Build Something Amazing Together
            </h2>
            <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
              Whether you have a project in mind or just want to connect, I'm always open to discussing new opportunities and collaborations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary rounded-lg font-cta shadow-elevation hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <span>Get in Touch</span>
              <Icon name="ArrowRightIcon" size={20} />
            </Link>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-lg font-cta hover:bg-white/20 transition-all duration-200"
            >
              <Icon name="ArrowDownTrayIcon" size={20} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;