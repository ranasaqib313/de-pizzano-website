import { MenuItem } from '@/types/menu';

/**
 * Formats a menu item's price following strict guidelines:
 * - If item has isStartingPrice = true, returns "Starting at Rs. X"
 * - Otherwise returns "Rs. X"
 */
export function formatMenuItemPrice(item: Pick<MenuItem, 'price' | 'isStartingPrice' | 'currency'>): string {
  const formattedNumber = item.price.toLocaleString('en-PK');
  const currency = item.currency || 'Rs.';

  if (item.isStartingPrice) {
    return `Starting at ${currency} ${formattedNumber}`;
  }

  return `${currency} ${formattedNumber}`;
}

/**
 * Formats an amount with currency
 */
export function formatCurrency(amount: number, currency = 'Rs.'): string {
  return `${currency} ${amount.toLocaleString('en-PK')}`;
}

