export const INITIATIVE_OPTIONS = [
  {
    id: 1,
    slug: "environment",
    title: "Environment",
    shortDesc: "Green spaces and sustainable habits support your wellbeing.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
  },
  {
    id: 2,
    slug: "health",
    title: "Health",
    shortDesc: "From nutrition to movement, our programs support your health.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
  },
  {
    id: 3,
    slug: "mental",
    title: "Mental",
    shortDesc: "Build resilience and calm with mindfulness.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773"
  },
  {
    id: 4,
    slug: "social-awareness",
    title: "Social Awareness",
    shortDesc: "Strong connections and inclusive communities.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac"
  },
  {
    id: 5,
    slug: "news-articles",
    title: "News & Articles",
    shortDesc: "Evidence-based insights and stories.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8"
  }
];

export function getInitiative(slug) {
  return INITIATIVE_OPTIONS.find((item) => item.slug === slug);
}