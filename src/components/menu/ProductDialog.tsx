'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ExternalLink, Phone, AlertCircle } from 'lucide-react';
import { MenuItem } from '@/types/menu';
import { formatMenuItemPrice } from '@/lib/format-price';
import { getFoodpandaUrl, getPhoneLink } from '@/lib/links';
import { Button } from '@/components/ui/Button';

interface ProductDialogProps {
  item: MenuItem | null;
  onClose: () => void;
}

export function ProductDialog({ item, onClose }: ProductDialogProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const formattedPrice = formatMenuItemPrice(item);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-lg bg-surface border border-surface-border rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 text-muted-light hover:text-white backdrop-blur-md border border-surface-border transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Close Product Details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image */}
        <div className="relative aspect-[16/9] w-full bg-surface-elevated overflow-hidden">
          {item.image ? (
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl bg-surface">
              🍕
            </div>
          )}
          <div className="absolute bottom-3 left-3">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-background/90 backdrop-blur-md text-secondary border border-secondary/30 rounded-full">
              {item.category.replace('-', ' ')}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                id="product-dialog-title"
                className="text-2xl font-bold text-white font-display uppercase tracking-wide"
              >
                {item.name}
              </h3>
              <p className="text-xl font-extrabold text-secondary mt-1">
                {formattedPrice}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-4 pt-4 border-t border-surface-border">
            <h4 className="text-xs font-semibold text-muted-light uppercase tracking-wider mb-1.5">
              Product Overview
            </h4>
            {item.description ? (
              <p className="text-sm text-foreground leading-relaxed">
                {item.description}
              </p>
            ) : (
              <p className="text-sm text-muted-light italic">
                Freshly baked to order using standard recipe crust and toppings.
              </p>
            )}
          </div>

          {/* Public price warning badge */}
          <div className="mt-5 p-3.5 bg-surface-elevated rounded-xl border border-secondary/20 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
            <p className="text-xs text-muted leading-relaxed">
              Price reflects provisional public directory listing (Foodpanda). Actual restaurant direct prices may vary and await owner confirmation before launch.
            </p>
          </div>

          {/* Action Ordering Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button
              variant="foodpanda"
              size="md"
              href={getFoodpandaUrl()}
              external
              className="flex-1 justify-center"
              icon={<ExternalLink className="w-4 h-4" />}
              iconPosition="right"
            >
              Order on Foodpanda
            </Button>
            <Button
              variant="outline"
              size="md"
              href={getPhoneLink()}
              className="flex-1 justify-center"
              icon={<Phone className="w-4 h-4 text-secondary" />}
            >
              Call Restaurant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

