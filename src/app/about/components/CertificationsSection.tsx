import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  badge: string;
  badgeAlt: string;
  credentialUrl: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Certifications & Education
            </h2>
            <p className="font-body text-lg text-textSecondary">
              Continuous learning and professional development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-elevation transition-all duration-200 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center overflow-hidden">
                    <AppImage
                      src={cert.badge}
                      alt={cert.badgeAlt}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-headline text-lg font-semibold text-foreground">
                      {cert.name}
                    </h3>
                    <p className="font-body text-sm text-textSecondary">
                      {cert.issuer}
                    </p>
                    <p className="font-body text-xs text-textSecondary">
                      {cert.date}
                    </p>
                  </div>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200"
                  >
                    <span className="font-body text-sm font-medium">View Credential</span>
                    <Icon name="ArrowTopRightOnSquareIcon" size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;