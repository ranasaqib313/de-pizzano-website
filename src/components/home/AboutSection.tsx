import React from 'react';
import Link from 'next/link';
import { Flame, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { BUSINESS_CONFIG } from '@/data/business';

export function AboutSection() {
  const highlights = [
    {
      title: 'Soldier Bazar Location',
      description: 'Conveniently situated at Shop No. 9, Murtaza Terrace, Soldier Bazar No. 3, Karachi.',
    },
    {
      title: 'Extensive 26-Item Variety',
      description: 'A focused selection spanning regular pizzas, gourmet specialties, sandwiches, pastas, and fries.',
    },
    {
      title: 'Delivery & Takeaway Services',
      description: 'Available through direct call orders and official Foodpanda delivery in the surrounding area.',
    },
    {
      title: 'Late Evening Hours',
      description: 'Open late into the night (12:00 PM – 3:00 AM provisional public schedule).',
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              align="left"
              badge="About The Kitchen"
              title="CRAFTING KARACHI'S FAVOURITE PIZZA BITES"
              subtitle="De Pizzano is a dedicated pizza and fast food eatery situated in Soldier Bazar No. 3, Karachi. Known for rich flavours, aromatic local marinades, and cheesy comfort meals."
              className="mb-8"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="bg-surface/60 border border-surface-border p-4 rounded-xl flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{h.title}</h4>
                    <p className="text-xs text-muted leading-relaxed">{h.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                href="/about"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Learn More About The Concept
              </Button>

              <Button
                variant="outline"
                size="md"
                href="/locations"
                icon={<MapPin className="w-4 h-4 text-secondary" />}
              >
                View Location Details
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Infographic Box */}
          <div className="lg:col-span-5">
            <div className="bg-surface border border-surface-border rounded-2xl p-6 sm:p-8 relative">
              <div className="flex items-center gap-3 pb-6 border-b border-surface-border">
                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white uppercase font-display">
                    {BUSINESS_CONFIG.name}
                  </h3>
                  <p className="text-xs text-secondary font-semibold">
                    {BUSINESS_CONFIG.tagline}
                  </p>
                </div>
              </div>

              <div className="py-6 space-y-4 text-xs text-muted-light">
                <div className="flex justify-between items-center py-1 border-b border-surface-border/50">
                  <span className="text-muted">Primary Cuisine</span>
                  <span className="text-white font-medium">Pizza & Fast Food</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-surface-border/50">
                  <span className="text-muted">Active Listing Location</span>
                  <span className="text-white font-medium">Soldier Bazar No. 3</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-surface-border/50">
                  <span className="text-muted">Operating Hours</span>
                  <span className="text-white font-medium">12:00 PM – 3:00 AM (Provisional)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-surface-border/50">
                  <span className="text-muted">Online Ordering Destination</span>
                  <span className="text-secondary font-medium">Foodpanda Verified Listing</span>
                </div>
              </div>

              {/* Demo transparency banner inside info box */}
              <div className="bg-surface-elevated p-3.5 rounded-xl border border-secondary/20 text-[11px] text-muted leading-relaxed">
                <span className="font-semibold text-secondary block mb-1">Presentation Notice:</span>
                This website concept is prepared for the restaurant owner to demonstrate an independent online menu and ordering showcase.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

