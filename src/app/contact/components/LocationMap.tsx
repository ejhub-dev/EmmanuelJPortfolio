import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface LocationMapProps {
  location: {
    city: string;
    country: string;
    timezone: string;
    lat: number;
    lng: number;
  };
}

const LocationMap: React.FC<LocationMapProps> = ({ location }) => {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-2">
          <Icon name="MapPinIcon" size={24} variant="solid" className="text-primary" />
          <h3 className="font-headline text-xl font-bold text-foreground">
            My Location
          </h3>
        </div>
        <p className="font-body text-sm text-textSecondary">
          {location.city}, {location.country} • {location.timezone}
        </p>
      </div>
      
      <div className="relative w-full h-80 bg-muted">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title={`${location.city}, ${location.country}`}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=12&output=embed`}
          className="border-0"
        />
      </div>
      
      <div className="p-6 bg-muted">
        <div className="flex items-start space-x-3">
          <Icon name="InformationCircleIcon" size={20} variant="outline" className="text-primary mt-0.5" />
          <p className="font-body text-sm text-textSecondary">
            Available for remote collaboration worldwide. Open to on-site meetings in {location.city} and surrounding areas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;