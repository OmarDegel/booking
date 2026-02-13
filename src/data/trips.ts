import destSantorini from "@assets/dest-santorini.jpg";
import destBali from "@assets/dest-bali.jpg";
import destParis from "@assets/dest-paris.jpg";
import destTokyo from "@assets/dest-tokyo.jpg";
import destMaldives from "@assets/dest-maldives.jpg";
import destSwiss from "@assets/dest-swiss.jpg";
export interface Trip {
  id: string;
  title: string;
  shortDescription: string;
  destination: string;
  region: string;
  image: string;
  images: string[];
  price: number;
  originalPrice?: number;
  duration: string;
  durationDays: number;
  startDate: string;
  endDate: string;
  rating: number;
  reviews: number;
  description: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  category: string;
  featured?: boolean;
}

export const trips: Trip[] = [
  {
    id: "santorini-escape",
    title: "Santorini Island Escape",
    shortDescription: "Iconic white-washed villages, stunning sunsets, and crystal-clear Aegean waters.",
    destination: "Santorini",
    region: "Europe",
    image: destSantorini,
    images: [destSantorini, destMaldives, destParis],
    price: 1299,
    originalPrice: 1599,
    duration: "7 days",
    durationDays: 7,
    startDate: "2026-04-15",
    endDate: "2026-04-21",
    rating: 4.9,
    reviews: 234,
    description: "Experience the magic of Santorini with its iconic white-washed buildings and stunning sunsets over the Aegean Sea. Explore charming villages perched on volcanic cliffs, savor world-class Greek cuisine, and unwind on unique red and black sand beaches. This carefully curated 7-day escape blends relaxation with cultural immersion for an unforgettable Mediterranean getaway.",
    highlights: ["Sunset cruise around the caldera", "Wine tasting at local vineyards", "Volcanic hot springs visit", "Private clifftop villa stay"],
    included: ["Luxury accommodation", "Daily breakfast", "Airport transfers", "Guided caldera tour", "Wine tasting experience", "Sunset catamaran cruise", "Travel insurance"],
    notIncluded: ["International flights", "Lunch & dinner", "Personal expenses", "Optional activities", "Visa fees"],
    category: "Beach",
    featured: true,
  },
  {
    id: "bali-adventure",
    title: "Bali Cultural Adventure",
    shortDescription: "Lush rice terraces, ancient temples, and vibrant culture in the Island of the Gods.",
    destination: "Bali",
    region: "Asia",
    image: destBali,
    images: [destBali, destTokyo, destSantorini],
    price: 899,
    originalPrice: 1199,
    duration: "10 days",
    durationDays: 10,
    startDate: "2026-05-01",
    endDate: "2026-05-10",
    rating: 4.8,
    reviews: 189,
    description: "Immerse yourself in Bali's rich culture, lush rice terraces, and ancient temples. From the spiritual heart of Ubud to the stunning beaches of Seminyak, this 10-day adventure covers the best of the Island of the Gods. Experience traditional ceremonies, learn Balinese cooking, and rejuvenate at world-class spas.",
    highlights: ["Rice terrace trek in Tegallalang", "Temple visits at Uluwatu", "Traditional cooking class", "Spa & wellness retreat"],
    included: ["Boutique hotel stays", "Daily breakfast", "Airport transfers", "Guided temple tours", "Cooking class", "Spa treatment", "Travel insurance"],
    notIncluded: ["International flights", "Lunch & dinner", "Personal expenses", "Visa on arrival fee"],
    category: "Adventure",
    featured: true,
  },
  {
    id: "paris-romance",
    title: "Romantic Paris Getaway",
    shortDescription: "The City of Light awaits with world-class art, cuisine, and timeless romance.",
    destination: "Paris",
    region: "Europe",
    image: destParis,
    images: [destParis, destSwiss, destSantorini],
    price: 1599,
    duration: "5 days",
    durationDays: 5,
    startDate: "2026-06-10",
    endDate: "2026-06-14",
    rating: 4.7,
    reviews: 312,
    description: "Fall in love with the City of Light. From the Eiffel Tower to hidden cafés, Paris awaits with its world-class museums, exquisite cuisine, and timeless romance. Stroll along the Seine, explore Montmartre's artistic quarter, and indulge in fine French dining.",
    highlights: ["Eiffel Tower private dinner", "Skip-the-line Louvre tour", "Seine river cruise", "Montmartre art walk"],
    included: ["4-star hotel in central Paris", "Daily breakfast", "Airport transfers", "Louvre guided tour", "Seine cruise tickets", "Metro pass", "Travel insurance"],
    notIncluded: ["International flights", "Lunch & dinner", "Personal shopping", "Optional museum entries"],
    category: "City",
    featured: true,
  },
  {
    id: "tokyo-discovery",
    title: "Tokyo Discovery Tour",
    shortDescription: "Ancient traditions meet cutting-edge innovation in Japan's electric capital.",
    destination: "Tokyo",
    region: "Asia",
    image: destTokyo,
    images: [destTokyo, destBali, destParis],
    price: 1899,
    duration: "8 days",
    durationDays: 8,
    startDate: "2026-03-20",
    endDate: "2026-03-27",
    rating: 4.9,
    reviews: 156,
    description: "Explore the perfect blend of ancient tradition and cutting-edge modernity in Tokyo. From the serene Meiji Shrine to the neon-lit streets of Shibuya, this 8-day discovery tour reveals the many faces of Japan's fascinating capital city.",
    highlights: ["Tsukiji fish market tour", "Traditional tea ceremony", "Shibuya nightlife experience", "Mt. Fuji day trip"],
    included: ["Ryokan & hotel stays", "Daily breakfast", "Airport transfers", "Bullet train pass", "Tea ceremony", "Guided market tour", "Travel insurance"],
    notIncluded: ["International flights", "Lunch & dinner", "Personal expenses", "Optional activities"],
    category: "City",
  },
  {
    id: "maldives-luxury",
    title: "Maldives Luxury Retreat",
    shortDescription: "Overwater villas, turquoise lagoons, and pure tropical paradise.",
    destination: "Maldives",
    region: "Asia",
    image: destMaldives,
    images: [destMaldives, destSantorini, destBali],
    price: 2499,
    originalPrice: 2999,
    duration: "6 days",
    durationDays: 6,
    startDate: "2026-07-05",
    endDate: "2026-07-10",
    rating: 5.0,
    reviews: 98,
    description: "Indulge in overwater luxury with crystal-clear waters and pristine white beaches. The Maldives offers the ultimate tropical escape with world-class snorkeling, private dining experiences, and sunsets that will take your breath away.",
    highlights: ["Overwater villa with glass floor", "Snorkeling safari with manta rays", "Sunset dolphin cruise", "Private beach dining"],
    included: ["Overwater villa", "All meals included", "Speedboat transfers", "Snorkeling equipment", "Dolphin cruise", "Spa treatment", "Travel insurance"],
    notIncluded: ["International flights", "Premium beverages", "Diving certification", "Personal expenses"],
    category: "Beach",
    featured: true,
  },
  {
    id: "swiss-alps",
    title: "Swiss Alps Explorer",
    shortDescription: "Majestic peaks, charming villages, and breathtaking alpine scenery.",
    destination: "Switzerland",
    region: "Europe",
    image: destSwiss,
    images: [destSwiss, destParis, destTokyo],
    price: 1799,
    duration: "7 days",
    durationDays: 7,
    startDate: "2026-08-01",
    endDate: "2026-08-07",
    rating: 4.8,
    reviews: 145,
    description: "Breathtaking mountain landscapes, charming villages, and world-class skiing await in the Swiss Alps. Ride panoramic trains through stunning passes, taste authentic Swiss cheese and chocolate, and explore glacial lakes surrounded by towering peaks.",
    highlights: ["Panoramic mountain railway", "Swiss cheese tasting", "Glacier walk adventure", "Lakeside village tour"],
    included: ["Mountain lodge stays", "Daily breakfast", "Train passes", "Guided glacier walk", "Cheese tasting tour", "Cable car tickets", "Travel insurance"],
    notIncluded: ["International flights", "Lunch & dinner", "Ski equipment rental", "Personal expenses"],
    category: "Mountain",
  },
];

export const destinations = [
  { name: "Santorini", country: "Greece", image: destSantorini, trips: 12 },
  { name: "Bali", country: "Indonesia", image: destBali, trips: 18 },
  { name: "Paris", country: "France", image: destParis, trips: 24 },
  { name: "Tokyo", country: "Japan", image: destTokyo, trips: 15 },
  { name: "Maldives", country: "Maldives", image: destMaldives, trips: 8 },
  { name: "Swiss Alps", country: "Switzerland", image: destSwiss, trips: 10 },
];
