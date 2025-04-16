
import { useState } from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Car, DollarSign, Star, CheckCircle, ArrowRight } from 'lucide-react';

const SellPage = () => {
  const [formStep, setFormStep] = useState(1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStep(2);
  };
  
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-revibe-dark to-revibe-darker py-16">
        <div className="container px-4">
          <h1 className="text-4xl font-bold mb-6">Sell Your Car to Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Get a fair price for your vehicle with our streamlined selling process.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left Column - Form */}
            <div className="lg:col-span-3">
              {formStep === 1 ? (
                <>
                  <h2 className="text-2xl font-semibold mb-6">Tell Us About Your Vehicle</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="make">Make</Label>
                        <Input id="make" placeholder="e.g., Toyota, Honda" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="model">Model</Label>
                        <Input id="model" placeholder="e.g., Camry, Civic" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="year">Year</Label>
                        <Input id="year" type="number" placeholder="e.g., 2018" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="mileage">Mileage</Label>
                        <Input id="mileage" type="number" placeholder="e.g., 50000" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="condition">Overall Condition</Label>
                      <Select defaultValue="good">
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="excellent">Excellent</SelectItem>
                          <SelectItem value="good">Good</SelectItem>
                          <SelectItem value="fair">Fair</SelectItem>
                          <SelectItem value="poor">Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="description">Additional Details</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Tell us more about your vehicle (optional)"
                        rows={4}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" required />
                    </div>
                    
                    <Button type="submit" className="w-full bg-revibe hover:bg-revibe/90 text-white">
                      Get Your Estimate
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="mb-6 inline-block p-4 rounded-full bg-revibe/10">
                    <CheckCircle size={64} className="text-revibe" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                  <p className="text-muted-foreground mb-8">
                    We've received your vehicle information and will contact you within 24 hours with an estimate.
                  </p>
                  <Button onClick={() => setFormStep(1)} variant="outline">
                    Submit Another Vehicle
                  </Button>
                </div>
              )}
            </div>
            
            {/* Right Column - Process & Benefits */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-6">Our Selling Process</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-revibe/10 flex-shrink-0 flex items-center justify-center">
                      <span className="font-semibold text-revibe">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Submit Your Info</h4>
                      <p className="text-sm text-muted-foreground">
                        Fill out the form with your vehicle details.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-revibe/10 flex-shrink-0 flex items-center justify-center">
                      <span className="font-semibold text-revibe">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Get Your Estimate</h4>
                      <p className="text-sm text-muted-foreground">
                        We'll contact you with a fair market offer.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-revibe/10 flex-shrink-0 flex items-center justify-center">
                      <span className="font-semibold text-revibe">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Schedule Inspection</h4>
                      <p className="text-sm text-muted-foreground">
                        Bring your car in for a quick inspection.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-full bg-revibe/10 flex-shrink-0 flex items-center justify-center">
                      <span className="font-semibold text-revibe">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Get Paid</h4>
                      <p className="text-sm text-muted-foreground">
                        Accept our offer and receive payment immediately.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <h3 className="text-lg font-semibold mb-4">Why Sell to Us?</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-revibe" />
                      <span className="text-sm">Fair, competitive offers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-revibe" />
                      <span className="text-sm">No haggling or pressure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-revibe" />
                      <span className="text-sm">Fast, same-day payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-revibe" />
                      <span className="text-sm">Free towing service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-revibe" />
                      <span className="text-sm">We handle all paperwork</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SellPage;
