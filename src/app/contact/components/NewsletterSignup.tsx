'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-8 text-white">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
          <Icon name="EnvelopeIcon" size={28} variant="solid" className="text-white" />
        </div>
        
        <h3 className="font-headline text-2xl lg:text-3xl font-bold mb-3">
          Stay Updated with My Journey
        </h3>
        <p className="font-body text-sm lg:text-base text-white/90 mb-6">
          Get monthly insights on web development, project updates, and exclusive content delivered to your inbox.
        </p>
        
        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 bg-white text-foreground rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-primary font-cta text-sm rounded-lg hover:bg-white/90 transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center space-x-2 py-3">
            <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-white" />
            <span className="font-body text-base font-medium">
              Thank you for subscribing!
            </span>
          </div>
        )}
        
        <p className="font-body text-xs text-white/70 mt-4">
          No spam, unsubscribe anytime. Your privacy is important to me.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;