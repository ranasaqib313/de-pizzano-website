'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ExternalLink, Menu, X, Flame, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MAIN_NAV_ITEMS } from '@/data/navigation';
import { BUSINESS_CONFIG } from '@/data/business';
import { getPhoneLink, getFoodpandaUrl } from '@/lib/links';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Demo Concept Announcement Header */}
      <div className="bg-gradient-to-r from-neutral-900 via-primary/30 to-neutral-900 border-b border-primary/20 text-xs py-1.5 px-4 text-center">
        <Container size="xl" className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-muted-light">
          <span className="font-semibold text-secondary tracking-wide flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            {BUSINESS_CONFIG.demoNotice.badge}
          </span>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span className="text-[11px] text-muted">
            {BUSINESS_CONFIG.demoNotice.disclaimer}
          </span>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <motion.header
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur-md',
          isScrolled
            ? 'bg-background/95 border-b border-surface-border shadow-lg py-3'
            : 'bg-background/70 border-b border-surface-border/50 py-4'
        )}
      >
        <Container size="xl">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-md group-hover:shadow-glow-red transition-shadow"
              >
                <Flame className="w-6 h-6 text-white" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white font-display uppercase group-hover:text-secondary transition-colors">
                  DE PIZZANO
                </span>
                <span className="text-[10px] tracking-widest uppercase text-muted-light -mt-1 font-semibold">
                  {BUSINESS_CONFIG.tagline} • Soldier Bazar
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-md transition-colors',
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-muted-light hover:text-white hover:bg-surface/50'
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <Button
                variant="outline"
                size="sm"
                href={getPhoneLink()}
                icon={<Phone className="w-3.5 h-3.5 text-secondary" />}
                className="hidden xl:inline-flex"
                title="Call Restaurant Directly (Provisional Number)"
              >
                {BUSINESS_CONFIG.contact.formattedPhone}
              </Button>

              <Button
                variant="foodpanda"
                size="sm"
                href={getFoodpandaUrl()}
                external
                icon={<ExternalLink className="w-3.5 h-3.5" />}
                iconPosition="right"
              >
                Order on Foodpanda
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="foodpanda"
                size="sm"
                href={getFoodpandaUrl()}
                external
                className="sm:hidden text-xs px-2.5 py-1.5"
              >
                Foodpanda
              </Button>

              <motion.button
                type="button"
                whileTap={{ scale: 0.92 }}
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-muted-light hover:text-white bg-surface border border-surface-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPath={pathname}
      />
    </>
  );
}
