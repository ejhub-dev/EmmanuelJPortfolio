'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';

interface NavigationItem {
  label: string;
  href: string;
}

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const navigationItems: NavigationItem[] = [
    { label: 'Home', href: '/homepage' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Skills', href: '/skills' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isActivePath = (href: string) => {
    return isMounted && pathname === href;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/homepage" 
            className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105"
          >
            <div className="relative">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover:rotate-12"
              >
                <rect width="40" height="40" rx="8" fill="var(--color-primary)" />
                <path
                  d="M12 28V12L20 20L28 12V28L20 20L12 28Z"
                  fill="white"
                  fillOpacity="0.95"
                />
              </svg>
            </div>
            <span className="font-headline font-bold text-xl text-foreground tracking-tight">
              Emmanuel<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative px-4 py-2 font-body font-medium text-sm rounded-md
                  transition-all duration-200 ease-out
                  ${
                    isActivePath(item.href)
                      ? 'text-primary bg-primary/10' :'text-textSecondary hover:text-primary hover:bg-muted'
                  }
                `}
              >
                {item.label}
                {isActivePath(item.href) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="
                px-6 py-2.5 font-cta text-sm
                bg-primary text-primary-foreground
                rounded-md shadow-sm
                transition-all duration-200 ease-out
                hover:bg-primary/90 hover:shadow-elevation
                active:scale-95
              "
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-textSecondary hover:text-primary hover:bg-muted transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} 
              size={24} 
              variant="outline"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border bg-card">
            <div className="flex flex-col space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    px-4 py-3 font-body font-medium text-base rounded-md
                    transition-all duration-200 ease-out
                    ${
                      isActivePath(item.href)
                        ? 'text-primary bg-primary/10' :'text-textSecondary hover:text-primary hover:bg-muted'
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  mx-4 mt-4 px-6 py-3 font-cta text-base text-center
                  bg-primary text-primary-foreground
                  rounded-md shadow-sm
                  transition-all duration-200 ease-out
                  hover:bg-primary/90 hover:shadow-elevation
                  active:scale-95
                "
              >
                Start a Project
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;