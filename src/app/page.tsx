import React from 'react';
import { Hero } from '@/components/home/Hero';
import { FeaturedMenu } from '@/components/home/FeaturedMenu';
import { AboutSection } from '@/components/home/AboutSection';
import { Gallery } from '@/components/home/Gallery';
import { LocationSection } from '@/components/home/LocationSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <AboutSection />
      <Gallery />
      <LocationSection />
    </>
  );
}

