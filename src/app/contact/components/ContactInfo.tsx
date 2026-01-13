import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: number;
  icon: string;
  label: string;
  value: string;
  href: string;
  description: string;
}

interface ContactInfoProps {
  methods: ContactMethod[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ methods }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {methods.map((method) => (
        <a
          key={method.id}
          href={method.href}
          target={method.href.startsWith('http') ? '_blank' : undefined}
          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-elevation transition-all duration-300"
        >
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
              <Icon 
                name={method.icon as any} 
                size={24} 
                variant="outline" 
                className="text-primary group-hover:text-white transition-colors duration-300" 
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-headline text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                {method.label}
              </h3>
              <p className="font-body text-sm text-textSecondary mb-2">
                {method.description}
              </p>
              <p className="font-body text-sm font-medium text-primary break-all">
                {method.value}
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;