'use client';

import React, { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface WorkspaceImage {
  url: string;
  alt: string;
  caption: string;
}

interface WorkspaceSectionProps {
  images: WorkspaceImage[];
}

const WorkspaceSection: React.FC<WorkspaceSectionProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Behind the Scenes
            </h2>
            <p className="font-body text-lg text-textSecondary">
              A glimpse into my workspace and development environment
            </p>
          </div>

          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-elevation">
              <AppImage
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
                <p className="font-body text-white text-lg">
                  {images[selectedImage].caption}
                </p>
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-200 ${
                    selectedImage === index
                      ? 'ring-4 ring-primary shadow-elevation'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <AppImage
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-24 lg:h-32 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceSection;