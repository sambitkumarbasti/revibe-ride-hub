
export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  exteriorColor: string;
  interiorColor: string;
  fuelType: string;
  transmission: string;
  engine: string;
  vin: string;
  status: 'for-sale' | 'pending' | 'sold';
  images: string[];
  description: string;
  features: string[];
  condition: 'excellent' | 'good' | 'fair';
  bodyType: string;
  createdAt: string;
  updatedAt: string;
}

export interface VehicleFilter {
  make?: string[];
  model?: string[];
  minYear?: number;
  maxYear?: number;
  minPrice?: number;
  maxPrice?: number;
  maxMileage?: number;
  bodyType?: string[];
  fuelType?: string[];
  transmission?: string[];
  exteriorColor?: string[];
}
