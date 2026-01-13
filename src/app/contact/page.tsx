import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/common/Header';
import ContactHero from './components/ContactHero';
import ContactInteractive from './components/ContactInteractive';

export const metadata: Metadata = {
  title: 'Contact - EmmanuelPortfolio',
  description: 'Get in touch with Mezanur Rahman for web development projects, collaborations, or consultations. Multiple contact methods available with 24-hour response time.',
};

interface ProjectType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ContactMethod {
  id: number;
  icon: string;
  label: string;
  value: string;
  href: string;
  description: string;
}

interface SocialLink {
  id: number;
  platform: string;
  icon: string;
  url: string;
  username: string;
  color: string;
}

interface Expectation {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export default function ContactPage() {
  const projectTypes: ProjectType[] = [
    {
      id: 'web-app',
      title: 'Web Application',
      description: 'Full-stack web apps with modern frameworks',
      icon: 'GlobeAltIcon',
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce',
      description: 'Online stores and payment integration',
      icon: 'ShoppingCartIcon',
    },
    {
      id: 'landing-page',
      title: 'Landing Page',
      description: 'High-converting marketing pages',
      icon: 'DocumentTextIcon',
    },
    {
      id: 'mobile-app',
      title: 'Mobile App',
      description: 'Cross-platform mobile applications',
      icon: 'DevicePhoneMobileIcon',
    },
    {
      id: 'api-integration',
      title: 'API Integration',
      description: 'Third-party service connections',
      icon: 'CodeBracketIcon',
    },
    {
      id: 'consulting',
      title: 'Consulting',
      description: 'Technical guidance and code review',
      icon: 'LightBulbIcon',
    },
  ];

  const contactMethods: ContactMethod[] = [
    {
      id: 1,
      icon: 'EnvelopeIcon',
      label: 'Email',
      value: 'emmanueljxx@gmail.com',
      href: 'mailto:emmanueljxx@gmail.com',
      description: 'Best for detailed project inquiries',
    },
    {
      id: 2,
      icon: 'PhoneIcon',
      label: 'Phone',
      value: '+234 (703) 241-1695',
      href: 'tel:+2347032411695',
      description: 'Available Mon-Fri, 9 AM - 6 PM EST',
    },
    {
      id: 3,
      icon: 'ChatBubbleLeftRightIcon',
      label: 'LinkedIn',
      value: 'linkedin.com/in/dev-emmanueljoseph',
      href: 'https://linkedin.com/in/dev-emmanueljoseph',
      description: 'Professional networking and quick messages',
    },
    {
      id: 4,
      icon: 'CodeBracketIcon',
      label: 'GitHub',
      value: 'github.com/ejhub-dev',
      href: 'https://github.com/ejhub-dev',
      description: 'View my code and open source contributions',
    },
    {
      id: 5,
      icon: 'VideoCameraIcon',
      label: 'Schedule Call',
      value: 'calendly.com/emmanuel',
      href: 'https://calendly.com/emmanuel',
      description: 'Book a free 30-minute consultation',
    },
    {
      id: 6,
      icon: 'ChatBubbleBottomCenterTextIcon',
      label: 'WhatsApp',
      value: '+234 (703) 241-1695',
      href: 'https://wa.me/2347032411695',
      description: 'Quick questions and instant messaging',
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      id: 1,
      platform: 'GitHub',
      icon: 'CodeBracketIcon',
      url: 'https://github.com/ejhub-dev',
      username: '@ejhub-dev',
      color: '#333',
    },
    {
      id: 2,
      platform: 'LinkedIn',
      icon: 'BriefcaseIcon',
      url: 'https://linkedin.com/in/dev-emmanueljoseph',
      username: 'dev-emmanueljoseph',
      color: '#0077B5',
    },
    {
      id: 3,
      platform: 'Twitter',
      icon: 'ChatBubbleLeftIcon',
      url: 'https://twitter.com/dev_emmanuel',
      username: '@dev_emmanuel',
      color: '#1DA1F2',
    },
    // {
    //   id: 4,
    //   platform: 'Dev.to',
    //   icon: 'DocumentTextIcon',
    //   url: 'https://dev.to/emmanuel',
    //   username: 'emmanuel',
    //   color: '#0A0A0A',
    // },
    // {
    //   id: 5,
    //   platform: 'Stack Overflow',
    //   icon: 'QuestionMarkCircleIcon',
    //   url: 'https://stackoverflow.com/users/emmanuel',
    //   username: 'emmanuel',
    //   color: '#F48024',
    // },
    // {
    //   id: 6,
    //   platform: 'Medium',
    //   icon: 'PencilIcon',
    //   url: 'https://medium.com/@',
    //   username: '@emmanuel',
    //   color: '#000000',
    // },
  ];

  const expectations: Expectation[] = [
    {
      id: 1,
      icon: 'ClockIcon',
      title: 'Initial Response',
      description: "You'll receive an acknowledgment within 24 hours, typically much sooner during business hours.",
    },
    {
      id: 2,
      icon: 'DocumentCheckIcon',
      title: 'Project Review',
      description: "I'll carefully review your requirements and prepare a detailed proposal with timeline and cost estimates.",
    },
    {
      id: 3,
      icon: 'VideoCameraIcon',
      title: 'Discovery Call',
      description: "We'll schedule a video call to discuss your project in detail, clarify requirements, and align expectations.",
    },
    {
      id: 4,
      icon: 'RocketLaunchIcon',
      title: 'Project Kickoff',
      description: "Once we agree on terms, we'll establish milestones, communication channels, and begin development.",
    },
  ];

  const location = {
    city: 'Enugu ',
    country: 'Nigeria',
    timezone: 'GMT (WAT+1)',
    lat: 6.4408386,
    lng: 7.5126355,
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        <ContactHero
          title="Let's Build Something Amazing Together"
          subtitle="Ready to Start Your Project?"
          description="Whether you have a detailed project plan or just an idea, I'm here to help bring your vision to life. Let's discuss how we can collaborate to create exceptional digital experiences."
        />

        <ContactInteractive
          projectTypes={projectTypes}
          contactMethods={contactMethods}
          socialLinks={socialLinks}
          expectations={expectations}
          location={location}
        />
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="font-body text-sm text-textSecondary">
              © {new Date().getFullYear()} Emmanuel Joseph. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}