import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  alt: string;
  verificationUrl?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  credentialId,
  image,
  alt,
  verificationUrl,
}) => {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      <div className="relative w-full h-48 bg-muted overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h4 className="font-headline font-semibold text-base text-foreground mb-1">
            {title}
          </h4>
          <p className="font-body text-sm text-primary font-medium">
            {issuer}
          </p>
        </div>
        
        <div className="space-y-1 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Icon name="CalendarIcon" size={16} variant="outline" />
            <span className="font-body">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="IdentificationIcon" size={16} variant="outline" />
            <span className="font-body text-xs truncate">{credentialId}</span>
          </div>
        </div>

        {verificationUrl && (
          <a
            href={verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-cta text-sm rounded-md hover:bg-primary/90 transition-colors duration-200"
          >
            <Icon name="CheckBadgeIcon" size={16} variant="solid" />
            Verify Credential
          </a>
        )}
      </div>
    </div>
  );
};

export default CertificationCard;