
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Gauge, 
  Fuel, 
  RotateCw, 
  Heart, 
  ShoppingCart 
} from 'lucide-react';
import { Vehicle } from '@/types/vehicle';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface VehicleCardProps {
  vehicle: Vehicle;
  onAddToCart?: (vehicle: Vehicle) => void;
}

export function VehicleCard({ vehicle, onAddToCart }: VehicleCardProps) {
  const { id, make, model, year, price, mileage, images, fuelType, transmission } = vehicle;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(vehicle);
    }
  };

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
  
  const formattedMileage = new Intl.NumberFormat('en-US').format(mileage);

  return (
    <Link to={`/vehicle/${id}`} className="car-card card-hover">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <img 
          src={images[0]} 
          alt={`${year} ${make} ${model}`} 
          className="object-cover w-full h-full"
        />
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/30 backdrop-blur-sm hover:bg-background/50"
        >
          <Heart size={16} />
        </Button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">{year} {make} {model}</h3>
            <p className="text-2xl font-bold text-revibe">{formattedPrice}</p>
          </div>
          <Badge variant="outline" className="bg-revibe/10 text-revibe border-revibe/20">
            Refurbished
          </Badge>
        </div>
        
        {/* Specs */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar size={14} />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Gauge size={14} />
            <span>{formattedMileage} mi</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Fuel size={14} />
            <span>{fuelType}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <RotateCw size={14} />
            <span>{transmission}</span>
          </div>
        </div>
        
        {/* Actions */}
        <div className="pt-2 grid grid-cols-2 gap-2">
          <Button className="w-full" variant="outline">
            Details
          </Button>
          <Button 
            className="w-full bg-revibe hover:bg-revibe/90 text-white"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={16} className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
}
