
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Car, DollarSign, Settings, ArrowRight, Star, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/layout/PageLayout';
import { VehicleGrid } from '@/components/vehicles/VehicleGrid';
import { useCart } from '@/context/CartContext';
import { getForSaleVehicles } from '@/data/mockVehicles';

const Index = () => {
  const { addItem } = useCart();
  const featuredVehicles = getForSaleVehicles().slice(0, 3);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-revibe-dark to-revibe-darker py-20">
        <div className="absolute inset-0 bg-car-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient-blue">ReVibe</span> Your Drive
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10">
            Premium refurbished vehicles that combine quality, reliability, and affordability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-revibe hover:bg-revibe/90 text-white px-8 py-6">
              <Link to="/buy">Browse Inventory</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-revibe text-revibe hover:bg-revibe/10 px-8 py-6">
              <Link to="/sell">Sell Your Car</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How ReVibe Ride Hub Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our refurbishment process ensures every vehicle meets our exacting standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-background p-6 rounded-lg border border-border flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-revibe/10 flex items-center justify-center mb-4">
                <Car size={32} className="text-revibe" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Vehicle Acquisition</h3>
              <p className="text-muted-foreground">
                We purchase pre-owned vehicles from individuals and perform a comprehensive 150-point inspection.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-background p-6 rounded-lg border border-border flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-revibe/10 flex items-center justify-center mb-4">
                <Settings size={32} className="text-revibe" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Expert Refurbishment</h3>
              <p className="text-muted-foreground">
                Our skilled mechanics restore each vehicle to optimal condition, replacing parts and addressing all issues.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-background p-6 rounded-lg border border-border flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-revibe/10 flex items-center justify-center mb-4">
                <DollarSign size={32} className="text-revibe" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Great Value</h3>
              <p className="text-muted-foreground">
                We offer these premium refurbished vehicles at competitive prices, providing exceptional value.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-revibe hover:bg-revibe/90 text-white">
              <Link to="/about">
                Learn More About Our Process
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Vehicles</h2>
            <Button asChild variant="outline">
              <Link to="/buy">
                View All
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>

          <VehicleGrid vehicles={featuredVehicles} onAddToCart={addItem} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose ReVibe Ride Hub</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality refurbished vehicles and exceptional customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-background p-6 rounded-lg border border-border">
              <CheckCircle size={32} className="text-revibe mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Every vehicle undergoes a thorough 150-point inspection and refurbishment process.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-background p-6 rounded-lg border border-border">
              <Shield size={32} className="text-revibe mb-4" />
              <h3 className="text-xl font-semibold mb-2">Extended Warranty</h3>
              <p className="text-muted-foreground">
                All our refurbished vehicles come with a comprehensive 12-month warranty for peace of mind.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-background p-6 rounded-lg border border-border">
              <DollarSign size={32} className="text-revibe mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">
                No hidden fees or surprises - just honest, upfront pricing on every vehicle.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-background p-6 rounded-lg border border-border">
              <Star size={32} className="text-revibe mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
              <p className="text-muted-foreground">
                Join thousands of satisfied customers who've found their perfect refurbished vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-revibe/90 to-revibe-secondary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Car?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Browse our inventory of premium refurbished vehicles or sell your current car at a fair price.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-revibe hover:bg-white/90">
              <Link to="/buy">Browse Inventory</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/sell">Sell Your Car</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
