import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  relationship: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  image,
  alt,
  quote,
  relationship,
}) => {
  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-start gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary/20">
          <AppImage
            src={image}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-headline font-semibold text-base text-foreground truncate">
            {name}
          </h4>
          <p className="font-body text-sm text-primary font-medium truncate">
            {role}
          </p>
          <p className="font-body text-sm text-muted-foreground truncate">
            {company}
          </p>
          <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 bg-muted text-textSecondary font-body text-xs rounded-full">
            <Icon name="UserGroupIcon" size={12} variant="outline" />
            {relationship}
          </span>
        </div>
      </div>

      <div className="relative">
        <Icon 
          name="ChatBubbleLeftIcon" 
          size={24} 
          className="text-primary/20 absolute -top-2 -left-2"
          variant="solid"
        />
        <p className="font-body text-sm text-textSecondary leading-relaxed italic pl-4">
          &quot;{quote}&quot;
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;