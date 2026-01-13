import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface SocialLink {
  id: number;
  platform: string;
  icon: string;
  url: string;
  username: string;
  color: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <h3 className="font-headline text-2xl font-bold text-foreground mb-2">
        Connect on Social Media
      </h3>
      <p className="font-body text-sm text-textSecondary mb-6">
        Follow me for updates, insights, and behind-the-scenes content
      </p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center p-4 bg-muted rounded-lg hover:bg-primary hover:shadow-elevation transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <Icon 
                name={link.icon as any} 
                size={28} 
                variant="outline" 
                className="text-textSecondary group-hover:text-white transition-colors duration-300" 
              />
            </div>
            <span className="font-body text-xs font-medium text-foreground group-hover:text-white transition-colors duration-300 text-center">
              {link.platform}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;