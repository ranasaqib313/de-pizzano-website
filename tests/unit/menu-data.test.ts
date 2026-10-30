import { MENU_CATEGORIES, MENU_ITEMS } from '@/data/menu';
import { formatMenuItemPrice } from '@/lib/format-price';

describe('Menu Data & Integrity Tests', () => {
  test('total menu item count must be exactly 26 products', () => {
    expect(MENU_ITEMS).toHaveLength(26);
  });

  test('there must be exactly 6 categories with expected labels', () => {
    expect(MENU_CATEGORIES).toHaveLength(6);
    const categoryIds = MENU_CATEGORIES.map((c) => c.id);
    expect(categoryIds).toEqual([
      'starters',
      'regular-pizza',
      'special-pizza',
      'sandwiches',
      'pastas',
      'fried-items',
    ]);
  });

  test('each category has the exact expected item count', () => {
    const countsByCategory = MENU_ITEMS.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    expect(countsByCategory['starters']).toBe(4);
    expect(countsByCategory['regular-pizza']).toBe(11);
    expect(countsByCategory['special-pizza']).toBe(5);
    expect(countsByCategory['sandwiches']).toBe(2);
    expect(countsByCategory['pastas']).toBe(2);
    expect(countsByCategory['fried-items']).toBe(2);
  });

  test('every item has a unique ID and non-empty name', () => {
    const ids = new Set<string>();
    MENU_ITEMS.forEach((item) => {
      expect(item.id).toBeTruthy();
      expect(item.name).toBeTruthy();
      expect(item.price).toBeGreaterThan(0);
      expect(ids.has(item.id)).toBe(false);
      ids.add(item.id);
    });
  });

  test('price formatting strictly handles starting prices', () => {
    const startingItem = MENU_ITEMS.find((item) => item.id === 'garlic-bread');
    expect(startingItem).toBeDefined();
    expect(startingItem?.isStartingPrice).toBe(true);
    expect(formatMenuItemPrice(startingItem!)).toBe('Starting at Rs. 200');

    const fixedItem = MENU_ITEMS.find((item) => item.id === 'cheesy-stick');
    expect(fixedItem).toBeDefined();
    expect(fixedItem?.isStartingPrice).toBe(false);
    expect(formatMenuItemPrice(fixedItem!)).toBe('Rs. 550');
  });

  test('researched descriptions are accurately matched and uninvented items are empty', () => {
    const tikka = MENU_ITEMS.find((i) => i.id === 'chicken-tikka-pizza');
    expect(tikka?.description).toBe('Pizza sauce, onion, chicken tikka, cheese.');

    const kababis = MENU_ITEMS.find((i) => i.id === 'kababis-pizza');
    // For products without researched descriptions, description should not be invented
    expect(kababis?.description).toBeUndefined();
  });
});

