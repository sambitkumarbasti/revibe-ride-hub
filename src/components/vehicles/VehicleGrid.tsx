
import { Vehicle } from '@/types/vehicle';
import { VehicleCard } from './VehicleCard';

interface VehicleGridProps {
  vehicles: Vehicle[];
  onAddToCart?: (vehicle: Vehicle) => void;
}

export function VehicleGrid({ vehicles, onAddToCart }: VehicleGridProps) {
  if (vehicles.length === 0) {
    return (
      <div className="py-12 text-center">
        <h3 className="text-xl font-medium text-muted-foreground">
          No vehicles found
        </h3>
        <p className="mt-2 text-muted-foreground">
          Try adjusting your filters or check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {vehicles.map((vehicle) => (
        <VehicleCard 
          key={vehicle.id} 
          vehicle={vehicle} 
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
