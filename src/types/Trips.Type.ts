export type TTrip ={
  id: number;
  link: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  image: string;
  price: number;
  offer_price?: number | null;
  start_date: string;
  end_date: string;
  is_feature?: boolean;
  is_new?: boolean;
  is_offer?: boolean;
  rating?: { rate: number; count: number };
  category?: { name: { en: string; ar: string }; link: string };
  city?: { name: { en: string; ar: string }; link: string };
  region?: { name: { en: string; ar: string }; link: string };
}