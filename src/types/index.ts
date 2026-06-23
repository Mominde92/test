export type Product = {
  id: string;
  name: string;
  brand: string;
  categoryId: string;
  storeId: string;
  price: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  reviewCount?: number;
  storeCount?: number;
  discountPercent?: number;
  image: string;
  isFeatured?: boolean;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
};

export type Store = {
  id: string;
  name: string;
  logo: string;
  image?: string;
  rating: number;
  reviewCount?: number;
  storeCount?: number;
  productCount?: number;
  workingHours?: string;
  deliveryLabel: string;
};

export type Partner = {
  id: string;
  name: string;
  logo: string;
  url: string;
};
