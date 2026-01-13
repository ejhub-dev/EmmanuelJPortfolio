'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link: string;
}

interface ContactSectionProps {
  contactInfo: ContactInfo[];
}

const ContactSection: React.FC<ContactSectionProps> = ({ contactInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="font-body text-lg text-textSecondary max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can create something amazing together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-xl p-8 shadow-md border border-border">
              <h3 className="font-headline text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="Emmanue J"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                    placeholder="emmanuel@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 font-cta text-base bg-primary text-primary-foreground rounded-lg shadow-md transition-all duration-200 hover:bg-primary/90 hover:shadow-lg active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-headline text-2xl font-semibold text-foreground mb-6">
                  Get in Touch
                </h3>
                <p className="font-body text-textSecondary mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of these channels.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-200 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                      <Icon name={info.icon as any} size={24} variant="outline" className="text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-textSecondary">{info.label}</p>
                      <p className="font-headline text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <p className="font-body text-sm text-textSecondary mb-4">Connect with me</p>
                <div className="flex items-center gap-4">
                  {[
                    { icon: 'CodeBracketIcon', link: 'https://github.com/ejhub-dev', label: 'GitHub' },
                    { icon: 'BriefcaseIcon', link: 'https://linkedin.com/in/dev-emmanueljoseph', label: 'LinkedIn' },
                    { icon: 'ChatBubbleLeftIcon', link: 'https://x.com/dev_emmanuel', label: 'X' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
                      aria-label={social.label}
                    >
                      <Icon name={social.icon as any} size={20} variant="outline" className="text-foreground hover:text-primary" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="pt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-cta text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  View Full Contact Page
                  <Icon name="ArrowRightIcon" size={20} variant="outline" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;