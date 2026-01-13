import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface CertificationBadgeProps {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verificationUrl: string;
  logo: string;
}

const CertificationBadge: React.FC<CertificationBadgeProps> = ({
  title,
  issuer,
  date,
  credentialId,
  verificationUrl,
  logo,
}) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-elevation hover:border-primary/30">
      <div className="flex items-start space-x-4">
        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
          {logo}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-headline font-semibold text-base text-foreground mb-1">
            {title}
          </h4>
          <p className="text-sm text-textSecondary mb-2">{issuer}</p>
          <div className="flex items-center space-x-4 text-xs text-textSecondary mb-3">
            <span className="flex items-center space-x-1">
              <Icon name="CalendarIcon" size={14} variant="outline" />
              <span>{date}</span>
            </span>
            <span className="flex items-center space-x-1">
              <Icon name="IdentificationIcon" size={14} variant="outline" />
              <span>{credentialId}</span>
            </span>
          </div>
          <a
            href={verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-sm text-primary hover:text-primary/80 transition-colors duration-200"
          >
            <span>Verify Credential</span>
            <Icon name="ArrowTopRightOnSquareIcon" size={14} variant="outline" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificationBadge;