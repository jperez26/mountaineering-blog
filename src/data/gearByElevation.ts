// Edited less often than blog/summit posts, so this lives as a small data
// file rather than a content collection. Update the arrays below to change
// the Buying Guide page (/gear/guide).

export interface GearTier {
  id: string;
  range: string;
  title: string;
  description: string;
  categories: {
    category: string;
    items: string[];
  }[];
}

export const gearByElevation: GearTier[] = [
  {
    id: 'under-10k',
    range: 'Under 10,000 ft',
    title: 'Day Hikes & Low Alpine',
    description:
      'Trail-focused terrain where the main risks are weather swings and rough footing, not altitude or glaciers.',
    categories: [
      { category: 'Footwear', items: ['Sturdy hiking boots', 'Wool or synthetic hiking socks'] },
      { category: 'Layers', items: ['Moisture-wicking base layer', 'Softshell or fleece mid-layer', 'Packable rain shell'] },
      { category: 'Essentials', items: ['Map/compass or GPS app', 'Headlamp + spare batteries', 'First-aid kit'] },
    ],
  },
  {
    id: '10k-14k',
    range: '10,000 – 14,000 ft',
    title: 'High Alpine, Non-Technical to Moderate',
    description:
      'Thinner air and possible snow/ice travel. Peaks like Rainier and many Colorado 14ers live here.',
    categories: [
      { category: 'Footwear', items: ['Insulated mountaineering boots', 'Gaiters'] },
      { category: 'Glacier travel', items: ['Crampons', 'Ice axe', 'Climbing harness', 'Rope (shared on team)'] },
      { category: 'Layers', items: ['Insulated puffy jacket', 'Wind shell', 'Glove system (liner + shell)'] },
      { category: 'Altitude', items: ['Acclimatization schedule', 'Basic AMS awareness/medication plan'] },
    ],
  },
  {
    id: '14k-18k',
    range: '14,000 – 18,000 ft',
    title: 'Expedition-Style Peaks',
    description:
      'Multi-day approaches, cold camps, and real altitude effects. Think Denali basecamp elevations and Andean peaks.',
    categories: [
      { category: 'Footwear', items: ['Double or expedition mountaineering boots', 'Overboots/supergaiters'] },
      { category: 'Shelter', items: ['4-season tent rated for high wind', 'Sub-zero sleeping bag', 'Insulated sleeping pad'] },
      { category: 'Travel', items: ['Sled or expedition pack', 'Snow shovel', 'Avalanche safety gear where relevant'] },
      { category: 'Layers', items: ['Down parka', 'Insulated mitts', 'Balaclava / face protection'] },
    ],
  },
  {
    id: '18k-plus',
    range: '18,000 ft+',
    title: '8,000ers & High-Altitude Expeditions',
    description:
      'Sustained time above 18k where supplemental oxygen, fixed lines, and serious logistics come into play.',
    categories: [
      { category: 'Oxygen system', items: ['Mask + regulator', 'Oxygen bottles (cached via logistics team)'] },
      { category: 'Footwear', items: ['8,000m-rated triple boots'] },
      { category: 'Climbing', items: ['Ascender/jumar for fixed lines', 'Second ice axe / technical tools as needed'] },
      { category: 'Support', items: ['Guide/Sherpa support planning', 'Satellite communicator', 'Detailed medical kit'] },
    ],
  },
];
