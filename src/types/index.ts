export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  property_name: string;
  property_type: string;
  room_count: string;
  inquiry_type: string;
  message: string;
}

export interface Product {
  name: string;
  tier: string;
  description: string;
  features: string[];
  specs: {
    density: string;
    height: string;
    firmness: string;
  };
  sizes: string[];
  image: string;
}
