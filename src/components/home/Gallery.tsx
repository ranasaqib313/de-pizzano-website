import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Sparkles } from 'lucide-react';

interface GalleryItem {
  title: string;
  category: string;
  caption: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: 'Stone-Baked Chicken Tikka',
    category: 'Regular Pizza',
    caption: 'Tikka spiced chicken, sliced onions, rich cheese blend',
    image: '/images/menu/chicken-tikka-pizza.svg',
  },
  {
    title: 'Pizzano Creamy Shawarma',
    category: 'Special Pizza',
    caption: 'Creamy sauce base, tender shawarma fajita, jalapenos',
    image: '/images/menu/pizzano-creamy-shawarma-pizza.svg',
  },
  {
    title: 'Loaded Pizza Fries',
    category: 'Fried Items',
    caption: 'Crispy seasoned fries draped in marinara and bubbling cheese',
    image: '/images/menu/large-pizza-fries.svg',
  },
  {
    title: 'Oven Baked Chicken Lasagne',
    category: 'Pastas',
    caption: 'Layers of tender pasta sheets, savory minced chicken, melted cheese',
    image: '/images/menu/chicken-lasagne.svg',
  },
  {
    title: 'Toasted Chicken Sandwich',
    category: 'Sandwiches',
    caption: 'Crisp toasted sub roll filled with seasoned chicken slices and garlic dressing',
    image: '/images/menu/chicken-sandwich.svg',
  },
  {
    title: 'Oven Baked Cheesy Sticks',
    category: 'Starters',
    caption: 'Warm golden breadsticks layered with melted mozzarella',
    image: '/images/menu/cheesy-stick.svg',
  },
];

export function Gallery() {
  return (
    <section className="py-20 bg-surface/30 border-b border-surface-border">
      <Container size="xl">
        <SectionHeading
          badge="Culinary Showcase"
          title="VISUAL EXPERIENCE"
          subtitle="Explore the flavours and dish concepts featured across our menu categories."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-surface border border-surface-border aspect-[4/3] flex flex-col justify-end p-6 hover:border-secondary/50 transition-all duration-300 shadow-md"
            >
              {/* Background illustrative display */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />

              {/* Decorative category badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-surface-elevated/90 backdrop-blur-md text-secondary border border-secondary/30 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Content info */}
              <div className="relative z-20 space-y-1">
                <h3 className="text-lg font-bold text-white font-display group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Illustrative imagery disclaimer note */}
        <div className="mt-8 text-center text-xs text-muted-dark">
          <p className="flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-secondary inline" />
            <span>Illustrative concept gallery. Authentic restaurant photographs will replace concept visuals upon owner approval.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
