import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections: FooterSection[];
}

const Footer: React.FC<FooterProps> = ({ sections }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/homepage" className="flex items-center space-x-2 mb-4 group">
              <div className="relative">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:rotate-12"
                >
                  <rect width="40" height="40" rx="8" fill="var(--color-primary)" />
                  <path
                    d="M12 28V12L20 20L28 12V28L20 20L12 28Z"
                    fill="white"
                    fillOpacity="0.95"
                  />
                </svg>
              </div>
              <span className="font-headline font-bold text-xl text-background tracking-tight">
                Mezanur<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="font-body text-sm text-background/70 mb-6 leading-relaxed">
              Architecting digital experiences that solve real business problems through innovative technology solutions.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: 'CodeBracketIcon', link: 'https://github.com/ejhub-dev', label: 'GitHub' },
                { icon: 'BriefcaseIcon', link: 'https://linkedin.com/in/dev-emmanueljoseph', label: 'LinkedIn' },
                { icon: 'ChatBubbleLeftIcon', link: 'https://twitter.com/dev_emmanuel', label: 'Twitter' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-all duration-200"
                  aria-label={social.label}
                >
                  <Icon name={social.icon as any} size={18} variant="outline" className="text-background" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-headline text-lg font-semibold text-background mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-background/70 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-background/70">
              © {currentYear} Emmanuel Joseph. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="font-body text-sm text-background/70 hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-body text-sm text-background/70 hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;