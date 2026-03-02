/** Initiative slugs and copy – used by WellnessInitiativeOverview and InitiativePage */
export const INITIATIVES = [
  {
    slug: 'environment',
    title: 'Environment',
    shortDesc: 'Sustainable practices and green spaces for wellbeing.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
  },
  {
    slug: 'health',
    title: 'Health',
    shortDesc: 'Fitness, nutrition, and physical wellness.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80',
  },
  {
    slug: 'mental',
    title: 'Mental',
    shortDesc: 'Mindfulness, stress relief, and mental health support.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
  },
  {
    slug: 'social-awareness',
    title: 'Social Awareness',
    shortDesc: 'Community, inclusion, and social wellbeing.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
  },
  {
    slug: 'news-articles',
    title: 'News & Articles',
    shortDesc: 'Latest wellness insights and expert articles.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80',
  },
];

export function getInitiative(slug) {
  return INITIATIVES.find((i) => i.slug === slug) ?? null;
}
