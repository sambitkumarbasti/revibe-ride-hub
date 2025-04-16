
import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { VehicleGrid } from '@/components/vehicles/VehicleGrid';
import { useCart } from '@/context/CartContext';
import { getForSaleVehicles } from '@/data/mockVehicles';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { SearchIcon, SlidersHorizontal, X } from 'lucide-react';

const BuyPage = () => {
  const { addItem } = useCart();
  const allVehicles = getForSaleVehicles();
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 50000]);

  // Simple search function
  const filteredVehicles = allVehicles.filter(vehicle => {
    const searchString = `${vehicle.year} ${vehicle.make} ${vehicle.model}`.toLowerCase();
    const isInPriceRange = vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1];
    return searchString.includes(searchTerm.toLowerCase()) && isInPriceRange;
  });

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-revibe-dark to-revibe-darker py-16">
        <div className="container px-4">
          <h1 className="text-4xl font-bold mb-6">Find Your Perfect Refurbished Vehicle</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Browse our inventory of quality refurbished vehicles at competitive prices.
          </p>
          
          {/* Search bar */}
          <div className="relative max-w-2xl">
            <Input
              type="text"
              placeholder="Search by make, model, or year..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-10"
            />
            <SearchIcon size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
      </div>
      
      <div className="container px-4 py-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold">Available Vehicles</h2>
            <p className="text-muted-foreground">
              {filteredVehicles.length} {filteredVehicles.length === 1 ? 'vehicle' : 'vehicles'} found
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            {showFilters ? <X size={16} /> : <SlidersHorizontal size={16} />}
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>
        
        {/* Filters */}
        {showFilters && (
          <div className="mb-10 p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold mb-4">Filters</h3>
            
            {/* Price Range */}
            <div className="mb-8">
              <Label className="mb-2 block">Price Range</Label>
              <Slider 
                defaultValue={[0, 50000]} 
                max={50000} 
                step={1000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-2"
              />
              <div className="flex justify-between text-sm">
                <span>${priceRange[0].toLocaleString()}</span>
                <span>${priceRange[1].toLocaleString()}</span>
              </div>
            </div>
            
            {/* Simple filters - we'd add more with real data */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label className="mb-2 block">Vehicle Type</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sedan" />
                    <label htmlFor="sedan" className="text-sm">Sedan</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="suv" />
                    <label htmlFor="suv" className="text-sm">SUV</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="truck" />
                    <label htmlFor="truck" className="text-sm">Truck</label>
                  </div>
                </div>
              </div>
              
              <div>
                <Label className="mb-2 block">Make</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="toyota" />
                    <label htmlFor="toyota" className="text-sm">Toyota</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="honda" />
                    <label htmlFor="honda" className="text-sm">Honda</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="ford" />
                    <label htmlFor="ford" className="text-sm">Ford</label>
                  </div>
                </div>
              </div>
              
              <div>
                <Label className="mb-2 block">Transmission</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="automatic" />
                    <label htmlFor="automatic" className="text-sm">Automatic</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="manual" />
                    <label htmlFor="manual" className="text-sm">Manual</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Vehicle Grid */}
        <VehicleGrid vehicles={filteredVehicles} onAddToCart={addItem} />
      </div>
    </PageLayout>
  );
};

export default BuyPage;
