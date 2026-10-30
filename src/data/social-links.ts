export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  handle: string;
  verified: boolean;
  notes: string;
}

// Configurable social links. Unverified links remain hidden or explicitly marked
// according to guidelines until owner confirms official handles.
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'facebook',
    platform: 'Facebook',
    url: 'https://www.facebook.com/depizzano/',
    handle: 'depizzano',
    verified: false,
    notes: 'Provisional profile reference; requires owner confirmation before activation.',
  },
  {
    id: 'instagram',
    platform: 'Instagram',
    url: 'https://www.instagram.com/depizzano.1/',
    handle: '@depizzano.1',
    verified: false,
    notes: 'Reported username; profile availability unverified.',
  },
];

// Active verified links to display in public navigation / footer
export const ACTIVE_SOCIAL_LINKS = SOCIAL_LINKS.filter((link) => link.verified);

