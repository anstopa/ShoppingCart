export interface CartProduct {
  productId: number;
  name?: string;
  price?: number;
  quantity?: number;
  photoUrl?: string;
}

export interface Product {
  productId: number;
  name?: string;
  price?: number;
  quantity?: number;
  photoUrl?: string;
  relatedProducts?: string;
}

export interface Config {
  production: boolean;
  apiUrl: string;
}
