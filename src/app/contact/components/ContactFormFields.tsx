'use client';

import React from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  timeline: string;
  message: string;
}

interface ContactFormFieldsProps {
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
}

const ContactFormFields: React.FC<ContactFormFieldsProps> = ({ formData, onInputChange }) => {
  const budgetRanges = [
    { value: '', label: 'Select Budget Range' },
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: 'over-50k', label: 'Over $50,000' },
    { value: 'flexible', label: 'Flexible / To Be Discussed' },
  ];

  const timelineOptions = [
    { value: '', label: 'Select Timeline' },
    { value: 'urgent', label: 'Urgent (1-2 weeks)' },
    { value: 'short', label: 'Short Term (1 month)' },
    { value: 'medium', label: 'Medium Term (2-3 months)' },
    { value: 'long', label: 'Long Term (3+ months)' },
    { value: 'flexible', label: 'Flexible Timeline' },
  ];

  return (
    <div className="space-y-6">
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-headline text-sm font-semibold text-foreground mb-2">
            Full Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => onInputChange('name', e.target.value)}
            placeholder="Emmanuel J"
            required
            className="w-full px-4 py-3 bg-input border border-border rounded-lg font-body text-sm text-foreground placeholder:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block font-headline text-sm font-semibold text-foreground mb-2">
            Email Address <span className="text-error">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => onInputChange('email', e.target.value)}
            placeholder="emmanuel@example.com"
            required
            className="w-full px-4 py-3 bg-input border border-border rounded-lg font-body text-sm text-foreground placeholder:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* Phone and Company Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block font-headline text-sm font-semibold text-foreground mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => onInputChange('phone', e.target.value)}
            placeholder="+1 (123) 123-4567"
            className="w-full px-4 py-3 bg-input border border-border rounded-lg font-body text-sm text-foreground placeholder:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block font-headline text-sm font-semibold text-foreground mb-2">
            Company / Organization
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => onInputChange('company', e.target.value)}
            placeholder="DevTech Hub."
            className="w-full px-4 py-3 bg-input border border-border rounded-lg font-body text-sm text-foreground placeholder:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* Budget and Timeline Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className="block font-headline text-sm font-semibold text-foreground mb-2">
            Project Budget <span className="text-error">*</span>
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => onInputChange('budget', e.target.value)}
            required
            className="w-full px-4 py-3 bg-input border border-border rounded-lg font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
          >
            {budgetRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="timeline" className="block font-headline text-sm font-semibold text-foreground mb-2">
            Expected Timeline <span className="text-error">*</span>
          </label>
          <select
            id="timeline"
            value={formData.timeline}
            onChange={(e) => onInputChange('timeline', e.target.value)}
            required
            className="w-full px-4 py-3 bg-input border border-border rounded-lg font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
          >
            {timelineOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block font-headline text-sm font-semibold text-foreground mb-2">
          Project Details <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => onInputChange('message', e.target.value)}
          placeholder="Tell me about your project, goals, and any specific requirements..."
          required
          rows={6}
          className="w-full px-4 py-3 bg-input border border-border rounded-lg font-body text-sm text-foreground placeholder:text-textSecondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
        />
        <p className="mt-2 font-body text-xs text-textSecondary">
          Minimum 50 characters. Please provide as much detail as possible.
        </p>
      </div>
    </div>
  );
};

export default ContactFormFields;