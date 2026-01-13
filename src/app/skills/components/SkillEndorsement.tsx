import React from 'react';
import AppImage from '@/components/ui/AppImage';

interface SkillEndorsementProps {
  name: string;
  role: string;
  company: string;
  endorsement: string;
  avatar: string;
  avatarAlt: string;
  skillEndorsed: string;
}

const SkillEndorsement: React.FC<SkillEndorsementProps> = ({
  name,
  role,
  company,
  endorsement,
  avatar,
  avatarAlt,
  skillEndorsed,
}) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:shadow-elevation">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <AppImage
            src={avatar}
            alt={avatarAlt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-headline font-semibold text-base text-foreground">
            {name}
          </h4>
          <p className="text-sm text-textSecondary">
            {role} at {company}
          </p>
        </div>
      </div>
      <div className="mb-3">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
          Endorsed: {skillEndorsed}
        </span>
      </div>
      <p className="text-sm text-textSecondary italic leading-relaxed">
        &ldquo;{endorsement}&rdquo;
      </p>
    </div>
  );
};

export default SkillEndorsement;