const fs = require('fs');
const path = require('path');

const dirs = [
  'public/images/brand',
  'public/images/hero',
  'public/images/menu',
  'public/images/gallery',
  'public/images/placeholders',
  'public/icons'
];

dirs.forEach(d => {
  fs.mkdirSync(path.join(__dirname, '..', d), { recursive: true });
});

// Category theme colors and icons
const themes = {
  'starters': { color: '#F3B544', icon: '🍗', bg: '#231B15', title: 'Starters' },
  'regular-pizza': { color: '#D92D2D', icon: '🍕', bg: '#241714', title: 'Regular Pizza' },
  'special-pizza': { color: '#E09F2B', icon: '🍕✨', bg: '#251D16', title: 'Special Pizza' },
  'sandwiches': { color: '#E5A93C', icon: '🥪', bg: '#211B17', title: 'Sandwiches' },
  'pastas': { color: '#E87D3E', icon: '🍝', bg: '#261C18', title: 'Pastas' },
  'fried-items': { color: '#F3B544', icon: '🍟', bg: '#231C16', title: 'Fried Items' },
};

function generateSVG(name, category, price, isStarting) {
  const t = themes[category] || themes['regular-pizza'];
  const formattedPrice = isStarting ? `Starting at Rs. ${price}` : `Rs. ${price}`;
  
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="${t.bg}"/>
      <stop offset="70%" stop-color="#171311"/>
      <stop offset="100%" stop-color="#0F0C0A"/>
    </radialGradient>
    <radialGradient id="glow" cx="50%" cy="45%" r="40%">
      <stop offset="0%" stop-color="${t.color}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${t.color}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="crust" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97724"/>
      <stop offset="50%" stop-color="#B45309"/>
      <stop offset="100%" stop-color="#78350F"/>
    </linearGradient>
    <linearGradient id="cheese" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047"/>
      <stop offset="60%" stop-color="#F59E0B"/>
      <stop offset="100%" stop-color="#D97706"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="800" height="600" fill="url(#bgGrad)"/>
  
  <!-- Subtle circular grid texture -->
  <circle cx="400" cy="270" r="220" fill="none" stroke="#38302A" stroke-width="1.5" stroke-dasharray="6,6" opacity="0.4"/>
  <circle cx="400" cy="270" r="170" fill="url(#glow)"/>

  <!-- Main Food Plate / Pan Visual -->
  <g transform="translate(400, 270)">
    <!-- Base Plate -->
    <ellipse cx="0" cy="15" rx="190" ry="140" fill="#1C1714" stroke="#3A3029" stroke-width="4"/>
    <ellipse cx="0" cy="10" rx="180" ry="130" fill="#261E1A"/>

    ${category.includes('pizza') ? `
      <!-- Pizza Crust -->
      <ellipse cx="0" cy="5" rx="160" ry="110" fill="url(#crust)" stroke="#78350F" stroke-width="3"/>
      <!-- Pizza Cheese Layer -->
      <ellipse cx="0" cy="5" rx="140" ry="92" fill="url(#cheese)"/>
      <!-- Pizza Sauce Ring -->
      <ellipse cx="0" cy="5" rx="120" ry="78" fill="#B91C1C" opacity="0.65"/>
      <!-- Pizza Toppings / Meat & Herbs -->
      <circle cx="-50" cy="-20" r="14" fill="#991B1B"/>
      <circle cx="40" cy="-35" r="15" fill="#7F1D1D"/>
      <circle cx="-10" cy="20" r="16" fill="#991B1B"/>
      <circle cx="70" cy="15" r="13" fill="#7F1D1D"/>
      <circle cx="-80" cy="25" r="12" fill="#991B1B"/>
      <!-- Pepperoni / Capsicum slices -->
      <rect x="-30" y="-45" width="22" height="7" rx="3" fill="#15803D" transform="rotate(25, -30, -45)"/>
      <rect x="25" y="-10" width="24" height="7" rx="3" fill="#15803D" transform="rotate(-35, 25, -10)"/>
      <rect x="-60" y="-5" width="20" height="6" rx="3" fill="#15803D" transform="rotate(45, -60, -5)"/>
      <rect x="15" y="30" width="22" height="6" rx="3" fill="#E2E8F0" transform="rotate(15, 15, 30)"/>
      <!-- Black olives -->
      <circle cx="0" cy="-20" r="6" fill="#1E293B" stroke="#0F172A" stroke-width="2"/>
      <circle cx="-35" cy="40" r="6" fill="#1E293B" stroke="#0F172A" stroke-width="2"/>
      <circle cx="45" cy="40" r="6" fill="#1E293B" stroke="#0F172A" stroke-width="2"/>
    ` : category === 'pastas' ? `
      <!-- Pasta Bowl -->
      <ellipse cx="0" cy="15" rx="150" ry="105" fill="#DC2626" opacity="0.8"/>
      <ellipse cx="0" cy="5" rx="135" ry="90" fill="#FEF08A"/>
      <path d="M-80,-20 Q-40,-50 0,-20 T80,-20 Q40,30 0,20 T-80,20 Z" fill="#F59E0B" opacity="0.9"/>
      <ellipse cx="0" cy="5" rx="70" ry="40" fill="#EF4444" opacity="0.7"/>
      <!-- Garnish -->
      <circle cx="-20" cy="-10" r="10" fill="#16A34A"/>
      <circle cx="20" cy="5" r="12" fill="#16A34A"/>
    ` : category === 'sandwiches' ? `
      <!-- Sandwich Bread -->
      <rect x="-120" y="-50" width="240" height="65" rx="20" fill="#D97706" stroke="#92400E" stroke-width="3"/>
      <!-- Fillings -->
      <rect x="-125" y="-15" width="250" height="20" rx="6" fill="#16A34A"/>
      <rect x="-125" y="-5" width="250" height="18" rx="5" fill="#EF4444"/>
      <rect x="-120" y="5" width="240" height="22" rx="6" fill="#FBBF24"/>
      <rect x="-120" y="20" width="240" height="50" rx="18" fill="#B45309"/>
    ` : category === 'fried-items' ? `
      <!-- Fries Container / Loaded -->
      <ellipse cx="0" cy="20" rx="130" ry="80" fill="#B91C1C"/>
      <g fill="#F59E0B" stroke="#D97706" stroke-width="2">
        <rect x="-70" y="-60" width="16" height="90" rx="4" transform="rotate(-15 -70 -60)"/>
        <rect x="-40" y="-70" width="16" height="100" rx="4" transform="rotate(-8 -40 -70)"/>
        <rect x="-10" y="-75" width="16" height="105" rx="4" transform="rotate(2 -10 -75)"/>
        <rect x="20" y="-70" width="16" height="100" rx="4" transform="rotate(10 20 -70)"/>
        <rect x="50" y="-60" width="16" height="90" rx="4" transform="rotate(18 50 -60)"/>
      </g>
      <!-- Melted cheese topping -->
      <path d="M-80,-10 Q0,-40 80,-10 Q50,40 0,30 Q-50,40 -80,-10 Z" fill="#FDE047" opacity="0.85"/>
      <circle cx="-20" cy="0" r="7" fill="#DC2626"/>
      <circle cx="25" cy="5" r="7" fill="#DC2626"/>
    ` : `
      <!-- Starters (Wings / Cheesy Sticks / Nuggets / Bread) -->
      <ellipse cx="0" cy="10" rx="140" ry="95" fill="#3B261D"/>
      <ellipse cx="-45" cy="-10" rx="40" ry="25" fill="#D97706" transform="rotate(-20 -45 -10)"/>
      <ellipse cx="45" cy="-15" rx="42" ry="26" fill="#B45309" transform="rotate(25 45 -15)"/>
      <ellipse cx="0" cy="25" rx="48" ry="28" fill="#D97706"/>
      <!-- Garnish -->
      <circle cx="-10" cy="15" r="5" fill="#16A34A"/>
      <circle cx="25" cy="20" r="6" fill="#16A34A"/>
    `}
  </g>

  <!-- Bottom Details Bar Overlay -->
  <rect x="0" y="470" width="800" height="130" fill="#130F0D" fill-opacity="0.95"/>
  <line x1="0" y1="470" x2="800" y2="470" stroke="#38302A" stroke-width="1.5"/>

  <!-- Category Pill -->
  <rect x="50" y="492" width="140" height="26" rx="13" fill="#211C19" stroke="${t.color}" stroke-opacity="0.5" stroke-width="1"/>
  <text x="120" y="509" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="${t.color}" text-anchor="middle" letter-spacing="1">${t.title.toUpperCase()}</text>

  <!-- Product Title -->
  <text x="50" y="550" font-family="system-ui, sans-serif" font-size="24" font-weight="800" fill="#FFFFFF" letter-spacing="0.5">${name}</text>

  <!-- Price Tag -->
  <text x="750" y="546" font-family="system-ui, sans-serif" font-size="20" font-weight="800" fill="${t.color}" text-anchor="end">${formattedPrice}</text>
  <text x="750" y="566" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#85786E" text-anchor="end">INDICATIVE PUBLIC RATE</text>
</svg>`;
}

const items = [
  // Starters
  { id: 'garlic-bread', name: 'Garlic Bread', cat: 'starters', price: 200, start: true },
  { id: 'cheesy-stick', name: 'Cheesy Stick', cat: 'starters', price: 550, start: false },
  { id: 'chicken-nuggets', name: 'Chicken Nuggets', cat: 'starters', price: 450, start: true },
  { id: 'chicken-wings', name: 'Chicken Wings', cat: 'starters', price: 550, start: true },

  // Regular Pizza
  { id: 'chicken-tikka-pizza', name: 'Chicken Tikka Pizza', cat: 'regular-pizza', price: 750, start: true },
  { id: 'chicken-fajita-pizza', name: 'Chicken Fajita Pizza', cat: 'regular-pizza', price: 750, start: true },
  { id: 'fajita-sicillian-pizza', name: 'Fajita Sicillian Pizza', cat: 'regular-pizza', price: 750, start: true },
  { id: 'tandoori-hot-pizza', name: 'Tandoori Hot Pizza', cat: 'regular-pizza', price: 750, start: true },
  { id: 'cheesy-delight-pizza', name: 'Cheesy Delight Pizza', cat: 'regular-pizza', price: 750, start: true },
  { id: 'afghani-delux-pizza', name: 'Afghani Delux Pizza', cat: 'regular-pizza', price: 750, start: true },
  { id: 'arabian-green-pizza', name: 'Arabian Green Pizza', cat: 'regular-pizza', price: 750, start: true },
  { id: 'veggie-lover-pizza', name: 'Veggie Lover Pizza', cat: 'regular-pizza', price: 750, start: true },
  { id: 'italian-delight-pizza', name: 'Italian Delight Pizza', cat: 'regular-pizza', price: 750, start: true },
  { id: 'hot-pepperoni-pizza', name: 'Hot Pepperoni Pizza', cat: 'regular-pizza', price: 800, start: true },
  { id: 'kababis-pizza', name: 'Kababis Pizza', cat: 'regular-pizza', price: 1300, start: false },

  // Special Pizza
  { id: 'pizzano-max-chicken-pizza', name: 'Pizzano Max Chicken Pizza', cat: 'special-pizza', price: 750, start: true },
  { id: 'pizzano-kabab-delight-pizza', name: 'Pizzano Kabab Delight Pizza', cat: 'special-pizza', price: 1000, start: true },
  { id: 'pizzano-creamy-shawarma-pizza', name: 'Pizzano Creamy Shawarma Pizza', cat: 'special-pizza', price: 750, start: true },
  { id: 'pizzano-malai-classic-pizza', name: 'Pizzano Malai Classic Pizza', cat: 'special-pizza', price: 750, start: true },
  { id: 'stuffed-crust-cheese-pizza', name: 'Stuffed Crust Cheese Pizza', cat: 'special-pizza', price: 1000, start: false },

  // Sandwiches
  { id: 'chicken-sandwich', name: 'Chicken Sandwich', cat: 'sandwiches', price: 550, start: false },
  { id: 'mexican-sandwich', name: 'Mexican Sandwich', cat: 'sandwiches', price: 550, start: false },

  // Pastas
  { id: 'creamy-pasta', name: 'Creamy Pasta', cat: 'pastas', price: 700, start: false },
  { id: 'chicken-lasagne', name: 'Chicken Lasagne', cat: 'pastas', price: 850, start: false },

  // Fried Items
  { id: 'large-pizza-fries', name: 'Large Pizza Fries', cat: 'fried-items', price: 750, start: false },
  { id: 'small-pizza-fries', name: 'Small Pizza Fries', cat: 'fried-items', price: 450, start: false },
];

items.forEach(item => {
  const svg = generateSVG(item.name, item.cat, item.price, item.start);
  fs.writeFileSync(path.join(__dirname, '..', `public/images/menu/${item.id}.svg`), svg);
  // Also write .jpg fallback reference if needed or both
});

// Generate brand logo SVG
const brandSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100" width="300" height="100">
  <defs>
    <linearGradient id="brandRed" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D92D2D"/>
      <stop offset="100%" stop-color="#991B1B"/>
    </linearGradient>
  </defs>
  <rect width="300" height="100" fill="#171311" rx="12"/>
  <circle cx="48" cy="50" r="26" fill="url(#brandRed)"/>
  <text x="48" y="58" font-family="system-ui" font-size="24" fill="#FFFFFF" text-anchor="middle">🔥</text>
  <text x="90" y="52" font-family="system-ui" font-size="26" font-weight="900" fill="#FFFFFF" letter-spacing="2">DE PIZZANO</text>
  <text x="92" y="70" font-family="system-ui" font-size="10" font-weight="700" fill="#F3B544" letter-spacing="3">TASTY DELICIOUS</text>
</svg>`;
fs.writeFileSync(path.join(__dirname, '..', 'public/images/brand/logo.svg'), brandSvg);

// Generate placeholder SVG
const placeholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450" width="600" height="450">
  <rect width="600" height="450" fill="#211C19"/>
  <circle cx="300" cy="200" r="80" fill="#2E2622"/>
  <text x="300" y="215" font-size="64" text-anchor="middle">🍕</text>
  <text x="300" y="320" font-family="system-ui" font-size="18" font-weight="700" fill="#B8ACA2" text-anchor="middle">DE PIZZANO CONCEPT</text>
</svg>`;
fs.writeFileSync(path.join(__dirname, '..', 'public/images/placeholders/food-placeholder.svg'), placeholderSvg);

console.log(`Successfully generated ${items.length} menu SVGs and brand assets!`);

