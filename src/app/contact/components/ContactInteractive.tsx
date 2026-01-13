'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import ProjectTypeSelector from './ProjectTypeSelector';
import ContactFormFields from './ContactFormFields';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';
import ResponseExpectations from './ResponseExpectations';
import NewsletterSignup from './NewsletterSignup';
import LocationMap from './LocationMap';

interface ProjectType {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  timeline: string;
  message: string;
}

interface ContactMethod {
  id: number;
  icon: string;
  label: string;
  value: string;
  href: string;
  description: string;
}

interface SocialLink {
  id: number;
  platform: string;
  icon: string;
  url: string;
  username: string;
  color: string;
}

interface Expectation {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface ContactInteractiveProps {
  projectTypes: ProjectType[];
  contactMethods: ContactMethod[];
  socialLinks: SocialLink[];
  expectations: Expectation[];
  location: {
    city: string;
    country: string;
    timezone: string;
    lat: number;
    lng: number;
  };
}

const ContactInteractive: React.FC<ContactInteractiveProps> = ({
  projectTypes,
  contactMethods,
  socialLinks,
  expectations,
  location,
}) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedProjectType) {
      alert('Please select a project type');
      return;
    }

    if (formData.message.length < 50) {
      alert('Please provide more details about your project (minimum 50 characters)');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSelectedProjectType('');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        budget: '',
        timeline: '',
        message: '',
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  if (!isHydrated) {
    return (
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 animate-pulse">
            <div className="h-8 bg-muted rounded w-1/3 mb-4" />
            <div className="h-4 bg-muted rounded w-2/3 mb-8" />
            <div className="space-y-4">
              <div className="h-12 bg-muted rounded" />
              <div className="h-12 bg-muted rounded" />
              <div className="h-32 bg-muted rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Contact Methods */}
        <section>
          <div className="text-center mb-8">
            <h2 className="font-headline text-3xl font-bold text-foreground mb-3">
              Multiple Ways to Reach Me
            </h2>
            <p className="font-body text-base text-textSecondary max-w-2xl mx-auto">
              Choose your preferred communication method. I typically respond within 24 hours.
            </p>
          </div>
          <ContactInfo methods={contactMethods} />
        </section>

        {/* Main Contact Form */}
        <section className="bg-card border border-border rounded-xl p-8 lg:p-12">
          <div className="mb-8">
            <h2 className="font-headline text-3xl font-bold text-foreground mb-3">
              Start Your Project
            </h2>
            <p className="font-body text-base text-textSecondary">
              Fill out the form below and I'll get back to you with a detailed proposal and timeline.
            </p>
          </div>

          {submitSuccess ? (
            <div className="py-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-success/10 rounded-full mb-6">
                <Icon name="CheckCircleIcon" size={48} variant="solid" className="text-success" />
              </div>
              <h3 className="font-headline text-2xl font-bold text-foreground mb-3">
                Message Sent Successfully!
              </h3>
              <p className="font-body text-base text-textSecondary max-w-md mx-auto">
                Thank you for reaching out. I'll review your project details and respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <ProjectTypeSelector
                projectTypes={projectTypes}
                selectedType={selectedProjectType}
                onSelectType={setSelectedProjectType}
              />

              <ContactFormFields formData={formData} onInputChange={handleInputChange} />

              <div className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
                <Icon name="InformationCircleIcon" size={20} variant="outline" className="text-primary mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-textSecondary">
                  By submitting this form, you agree to be contacted regarding your project inquiry. Your information will be kept confidential and never shared with third parties.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-cta text-base rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="ArrowPathIcon" size={20} variant="outline" className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Project Inquiry</span>
                    <Icon name="PaperAirplaneIcon" size={20} variant="solid" />
                  </>
                )}
              </button>
            </form>
          )}
        </section>

        {/* Response Expectations */}
        <section>
          <ResponseExpectations expectations={expectations} />
        </section>

        {/* Location Map */}
        <section>
          <LocationMap location={location} />
        </section>

        {/* Social Links */}
        <section>
          <SocialLinks links={socialLinks} />
        </section>

        {/* Newsletter Signup */}
        <section>
          <NewsletterSignup />
        </section>
      </div>
    </div>
  );
};

export default ContactInteractive;