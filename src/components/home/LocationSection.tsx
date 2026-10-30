import React from 'react';
import { MapPin, Clock, Phone, ExternalLink, AlertCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { BUSINESS_CONFIG } from '@/data/business';
import { getPhoneLink, getMapsDirectionsUrl, getFoodpandaUrl } from '@/lib/links';

export function LocationSection() {
  const loc = BUSINESS_CONFIG.primaryLocation;

  return (
    <section className="py-20 bg-background relative">
      <Container size="xl">
        <SectionHeading
          badge="Visit Or Order"
          title="FIND US IN SOLDIER BAZAR"
          subtitle="Stop by for takeaway pickup or order hot, freshly baked pizzas directly to your doorstep in Karachi."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Location Card */}
          <div className="lg:col-span-7 bg-surface border border-surface-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 pb-6 border-b border-surface-border">
                <div>
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider block mb-1">
                    Primary Branch
                  </span>
                  <h3 className="text-2xl font-bold text-white font-display uppercase">
                    {loc.name}
                  </h3>
                </div>
                <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                  Open Daily
                </span>
              </div>

              <div className="py-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase text-muted tracking-wider">
                      Full Address
                    </h4>
                    <p className="text-sm font-medium text-white mt-0.5">
                      {loc.address}, {loc.landmark}, {loc.city}, {loc.country}.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase text-muted tracking-wider">
                      Business Operating Hours
                    </h4>
                    <p className="text-sm font-medium text-white mt-0.5">
                      {BUSINESS_CONFIG.operatingHours.daily}
                    </p>
                    <p className="text-xs text-muted-dark mt-0.5">
                      {BUSINESS_CONFIG.operatingHours.note}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold uppercase text-muted tracking-wider">
                      Public Listing Contact
                    </h4>
                    <a
                      href={getPhoneLink()}
                      className="text-sm font-bold text-white hover:text-secondary transition-colors mt-0.5 inline-block"
                    >
                      {BUSINESS_CONFIG.contact.formattedPhone}
                    </a>
                    <p className="text-xs text-muted-dark mt-0.5">
                      {BUSINESS_CONFIG.contact.disclaimer}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-surface-border flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="md"
                href={getMapsDirectionsUrl()}
                external
                icon={<MapPin className="w-4 h-4" />}
                className="flex-1 justify-center"
              >
                Directions on Google Maps
              </Button>
              <Button
                variant="foodpanda"
                size="md"
                href={getFoodpandaUrl()}
                external
                icon={<ExternalLink className="w-4 h-4" />}
                iconPosition="right"
                className="flex-1 justify-center"
              >
                Order on Foodpanda
              </Button>
            </div>
          </div>

          {/* Secondary Information & Architecture Readiness Card */}
          <div className="lg:col-span-5 bg-surface-elevated/60 border border-surface-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-secondary" />
                <h4 className="text-base font-bold text-white uppercase tracking-wider">
                  Location Architecture
                </h4>
              </div>

              <p className="text-xs text-muted leading-relaxed mb-6">
                This website is built around the primary verified branch in Soldier Bazar No. 3. Historical directories mention unverified references to Korangi, Mehmoodabad, or North Karachi. Under strict integrity guidelines, only the confirmed Soldier Bazar branch is published as active.
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-surface rounded-xl border border-surface-border">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-white">Soldier Bazar No. 3</span>
                    <span className="text-secondary font-medium">Primary Active</span>
                  </div>
                  <span className="text-[11px] text-muted-dark block mt-0.5">
                    Shop No. 9, Murtaza Terrace, Soldier Bazar No. 3
                  </span>
                </div>

                <div className="p-3 bg-surface/40 rounded-xl border border-surface-border/60 opacity-60">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-muted-light">Additional Branches</span>
                    <span className="text-muted-dark font-medium">Awaiting Owner Confirmation</span>
                  </div>
                  <span className="text-[11px] text-muted-dark block mt-0.5">
                    Multi-branch routing engine ready for post-launch activation
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border">
              <Button
                variant="outline"
                size="sm"
                href="/locations"
                className="w-full text-xs justify-center"
              >
                View Full Branch Information
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

