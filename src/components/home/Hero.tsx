'use client';

import React from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { Flame, Utensils, ExternalLink, Phone, MapPin, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { BUSINESS_CONFIG } from '@/data/business';
import { getPhoneLink, getFoodpandaUrl, getMapsDirectionsUrl } from '@/lib/links';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut', delay: 0.3 },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 sm:py-24 bg-hero-glow">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Tagline Badge */}
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface border border-secondary/30 text-secondary text-xs font-semibold uppercase tracking-wider shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span>{BUSINESS_CONFIG.tagline} • Soldier Bazar No. 3</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-white font-display leading-[1.08] uppercase"
            >
              BIG FLAVOURS.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary-light">
                UNFORGETTABLE
              </span>{' '}
              BITES.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg md:text-xl text-muted-light max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Explore De Pizzano&apos;s pizza, pasta, sandwiches and favourite bites in Soldier
              Bazar, Karachi. Handcrafted recipes baked fresh for delivery and takeaway.
            </motion.p>

            {/* Metrics Bar */}
            <motion.div
              variants={fadeUp}
              custom={0.3}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 py-2 text-xs sm:text-sm text-muted"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary" />
                <span className="text-white font-semibold">26 Researched</span> Menu Items
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-white font-semibold">6 Distinct</span> Categories
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-white font-semibold">Foodpanda</span> Delivery Listed
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              custom={0.4}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                href="/menu"
                icon={<Utensils className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Explore Full Menu
              </Button>

              <Button
                variant="foodpanda"
                size="lg"
                href={getFoodpandaUrl()}
                external
                icon={<ExternalLink className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                Order on Foodpanda
              </Button>

              <Button
                variant="outline"
                size="lg"
                href={getPhoneLink()}
                icon={<Phone className="w-4 h-4 text-secondary" />}
                className="w-full sm:w-auto"
              >
                Call: {BUSINESS_CONFIG.contact.formattedPhone}
              </Button>
            </motion.div>

            {/* Address */}
            <motion.div
              variants={fadeUp}
              custom={0.5}
              initial="hidden"
              animate="visible"
              className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-muted-dark"
            >
              <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span>Shop No. 9, Murtaza Terrace, Soldier Bazar No. 3, Karachi</span>
              <a
                href={getMapsDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline font-medium ml-1"
              >
                (View Map)
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual Showcase */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Outer ring */}
            <div className="relative w-72 sm:w-88 md:w-96 aspect-square rounded-full border-2 border-secondary/30 bg-surface/40 p-4 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-surface to-secondary/10 border border-surface-border flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
                {/* Spinning subtle glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 animate-spin" style={{ animationDuration: '8s' }} />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="text-7xl sm:text-8xl mb-3 drop-shadow-xl relative z-10"
                >
                  🍕
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-wider relative z-10">
                  DE PIZZANO
                </h3>
                <p className="text-xs text-secondary font-bold tracking-widest uppercase mt-1 relative z-10">
                  TASTY DELICIOUS
                </p>
                <div className="mt-4 px-3 py-1 bg-surface-elevated/90 rounded-full border border-surface-border text-[11px] text-muted-light relative z-10">
                  Starting at Rs. 750 (Regular Pizza)
                </div>

                {/* Floating Tags */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute top-4 right-4 bg-background/95 border border-primary/40 px-3 py-1 rounded-lg text-[10px] font-bold text-white shadow-lg z-10"
                >
                  🔥 Tikka & Fajita
                </motion.div>

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-6 left-4 bg-background/95 border border-secondary/40 px-3 py-1 rounded-lg text-[10px] font-bold text-secondary shadow-lg z-10"
                >
                  🧀 Cheesy Sticks
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
