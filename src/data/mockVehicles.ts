
import { Vehicle } from '@/types/vehicle';

export const mockVehicles: Vehicle[] = [
  {
    id: 'v1',
    make: 'Toyota',
    model: 'Camry',
    year: 2019,
    price: 18990,
    mileage: 45200,
    exteriorColor: 'Silver',
    interiorColor: 'Black',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '2.5L 4-Cylinder',
    vin: '4T1BF1FK5KU123456',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000',
    ],
    description: 'This recently refurbished Toyota Camry is in excellent condition. Our mechanics have fully inspected and restored all systems to optimal working condition. The exterior has been professionally detailed and the interior thoroughly cleaned.',
    features: ['Bluetooth', 'Backup Camera', 'Cruise Control', 'Keyless Entry', 'USB Port'],
    condition: 'excellent',
    bodyType: 'Sedan',
    createdAt: '2023-12-15T10:30:00Z',
    updatedAt: '2024-01-05T14:45:00Z'
  },
  {
    id: 'v2',
    make: 'Honda',
    model: 'CR-V',
    year: 2018,
    price: 22500,
    mileage: 38750,
    exteriorColor: 'Blue',
    interiorColor: 'Gray',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '1.5L Turbo 4-Cylinder',
    vin: '2HKRW1H54JH123456',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1000',
    ],
    description: 'This Honda CR-V has been meticulously refurbished by our expert technicians. All mechanical components have been thoroughly checked and repaired or replaced as necessary. The vehicle has undergone a complete exterior and interior restoration.',
    features: ['All-Wheel Drive', 'Heated Seats', 'Apple CarPlay', 'Android Auto', 'Sunroof'],
    condition: 'excellent',
    bodyType: 'SUV',
    createdAt: '2023-11-20T09:15:00Z',
    updatedAt: '2024-01-10T11:30:00Z'
  },
  {
    id: 'v3',
    make: 'Ford',
    model: 'F-150',
    year: 2017,
    price: 26750,
    mileage: 62400,
    exteriorColor: 'Black',
    interiorColor: 'Tan',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '3.5L V6 EcoBoost',
    vin: '1FTEW1CP8HFC12345',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?q=80&w=1000',
      'https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?q=80&w=1000',
    ],
    description: 'This Ford F-150 has undergone extensive refurbishment. Our team has addressed all mechanical and cosmetic issues. The powertrain has been thoroughly inspected and all necessary repairs completed. The interior and exterior have been restored to near-new condition.',
    features: ['4x4', 'Towing Package', 'Backup Camera', 'Bluetooth', 'Navigation'],
    condition: 'good',
    bodyType: 'Truck',
    createdAt: '2023-10-05T14:20:00Z',
    updatedAt: '2023-12-22T16:45:00Z'
  },
  {
    id: 'v4',
    make: 'Chevrolet',
    model: 'Equinox',
    year: 2020,
    price: 21990,
    mileage: 32100,
    exteriorColor: 'Red',
    interiorColor: 'Black',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '1.5L Turbo',
    vin: '3GNAXUEV2LS123456',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000',
      'https://images.unsplash.com/photo-1596768336967-50ffc9a12525?q=80&w=1000',
    ],
    description: 'This Chevrolet Equinox has been fully refurbished to meet our stringent quality standards. All systems have been inspected and restored. The vehicle has received new fluids, filters, and necessary mechanical repairs. The exterior has been professionally detailed.',
    features: ['Apple CarPlay', 'Android Auto', 'Remote Start', 'Backup Camera', 'WiFi Hotspot'],
    condition: 'excellent',
    bodyType: 'SUV',
    createdAt: '2024-01-03T13:10:00Z',
    updatedAt: '2024-01-15T09:30:00Z'
  },
  {
    id: 'v5',
    make: 'Nissan',
    model: 'Rogue',
    year: 2019,
    price: 19850,
    mileage: 41500,
    exteriorColor: 'White',
    interiorColor: 'Black',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '2.5L 4-Cylinder',
    vin: '5N1AT2MV4KC123456',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1000',
      'https://images.unsplash.com/photo-1605794485736-03c93046dfa4?q=80&w=1000',
    ],
    description: 'Our refurbished Nissan Rogue is ready for a new home. The vehicle has undergone a comprehensive mechanical inspection with all issues addressed. The interior has been deep-cleaned and treated, while the exterior has been professionally detailed.',
    features: ['Blind Spot Monitoring', 'Lane Departure Warning', 'Automatic Emergency Braking', 'Hands-free Liftgate', 'Satellite Radio'],
    condition: 'good',
    bodyType: 'SUV',
    createdAt: '2023-11-15T10:45:00Z',
    updatedAt: '2023-12-28T15:20:00Z'
  },
  {
    id: 'v6',
    make: 'BMW',
    model: '3 Series',
    year: 2018,
    price: 27990,
    mileage: 39600,
    exteriorColor: 'Black',
    interiorColor: 'Beige',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    engine: '2.0L Turbo 4-Cylinder',
    vin: 'WBA8J9C55JA123456',
    status: 'for-sale',
    images: [
      'https://images.unsplash.com/photo-1607853554439-0069ec0f29b6?q=80&w=1000',
      'https://images.unsplash.com/photo-1572811448247-be65ea7b25cc?q=80&w=1000',
    ],
    description: 'This BMW 3 Series has been meticulously refurbished by our German car specialists. All systems have been thoroughly inspected and any issues addressed. The vehicle has received all necessary maintenance and been restored to exceptional condition inside and out.',
    features: ['Leather Seats', 'Sunroof', 'Navigation', 'Premium Sound System', 'Parking Sensors'],
    condition: 'excellent',
    bodyType: 'Sedan',
    createdAt: '2023-12-01T11:30:00Z',
    updatedAt: '2024-01-07T14:15:00Z'
  }
];

// Service functions
export function getAllVehicles(): Vehicle[] {
  return mockVehicles;
}

export function getVehicleById(id: string): Vehicle | undefined {
  return mockVehicles.find(vehicle => vehicle.id === id);
}

export function getVehiclesByStatus(status: Vehicle['status']): Vehicle[] {
  return mockVehicles.filter(vehicle => vehicle.status === status);
}

export function getForSaleVehicles(): Vehicle[] {
  return getVehiclesByStatus('for-sale');
}
