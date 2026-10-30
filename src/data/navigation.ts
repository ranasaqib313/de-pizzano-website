export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu', description: 'Explore all 26 pizzas, pastas, sandwiches & sides' },
  { label: 'About', href: '/about', description: 'Our concept and culinary focus' },
  { label: 'Locations', href: '/locations', description: 'Soldier Bazar branch information' },
  { label: 'Contact', href: '/contact', description: 'Get in touch & order info' },
];

