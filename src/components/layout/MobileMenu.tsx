'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { X, Phone, MapPin, ExternalLink, Flame } from 'lucide-react';
import { MAIN_NAV_ITEMS } from '@/data/navigation';
import { BUSINESS_CONFIG } from '@/data/business';
import { getPhoneLink, getMapsDirectionsUrl, getFoodpandaUrl } from '@/lib/links';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex justify-end"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-sm h-full bg-background border-l border-surface-border shadow-2xl flex flex-col p-6 z-10 overflow-y-auto">
        {/* Header with Close */}
        <div className="flex items-center justify-between pb-6 border-b border-surface-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-white font-display">DE PIZZANO</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-muted-light hover:text-white rounded-lg bg-surface border border-surface-border focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close Navigation Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1 py-6 flex-1">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  'flex flex-col px-4 py-3 rounded-lg transition-colors',
                  isActive
                    ? 'bg-primary/15 text-white border-l-4 border-primary font-semibold'
                    : 'text-muted-light hover:text-white hover:bg-surface/60'
                )}
              >
                <span className="text-base">{item.label}</span>
                {item.description && (
                  <span className="text-xs text-muted mt-0.5">{item.description}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons & Info */}
        <div className="pt-6 border-t border-surface-border space-y-3">
          <Button
            variant="foodpanda"
            size="md"
            href={getFoodpandaUrl()}
            external
            className="w-full justify-center"
            icon={<ExternalLink className="w-4 h-4" />}
            iconPosition="right"
          >
            Order on Foodpanda
          </Button>

          <Button
            variant="outline"
            size="md"
            href={getPhoneLink()}
            className="w-full justify-center"
            icon={<Phone className="w-4 h-4 text-secondary" />}
          >
            Call {BUSINESS_CONFIG.contact.formattedPhone}
          </Button>

          <Button
            variant="ghost"
            size="sm"
            href={getMapsDirectionsUrl()}
            external
            className="w-full justify-center text-xs"
            icon={<MapPin className="w-3.5 h-3.5 text-secondary" />}
          >
            Directions to Soldier Bazar
          </Button>

          {/* Verification Warning Notice */}
          <div className="bg-surface/80 p-3 rounded-lg border border-surface-border text-[11px] text-muted leading-relaxed text-center mt-3">
            <span className="text-secondary font-semibold block mb-0.5">Demo Notice</span>
            Prices and operating hours are indicative and require owner approval prior to launch.
          </div>
        </div>
      </div>
    </div>
  );
}

