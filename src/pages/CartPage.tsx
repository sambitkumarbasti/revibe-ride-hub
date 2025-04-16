
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/layout/PageLayout';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, Plus, Minus, ArrowLeft, CreditCard, ShoppingCart } from 'lucide-react';
import { Vehicle } from '@/types/vehicle';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const CartPage = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'payment' | 'confirmation'>('cart');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Function to handle checkout
  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get current user session
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError || !session) {
        toast.error("Please sign in to complete your purchase");
        navigate('/sign-in');
        return;
      }

      // Calculate final price with tax and fees
      const finalPrice = totalPrice + totalPrice * 0.08 + 249;
      
      // Save order to Supabase
      const { error } = await supabase
        .from('orders')
        .insert({
          user_id: session.user.id,
          total_price: finalPrice,
          cart_items: items.map(item => ({
            vehicle_id: item.vehicle.id,
            quantity: item.quantity,
            price: item.vehicle.price,
            vehicle_details: {
              make: item.vehicle.make,
              model: item.vehicle.model,
              year: item.vehicle.year,
              exteriorColor: item.vehicle.exteriorColor
            }
          }))
        });

      if (error) {
        console.error("Error saving order:", error);
        toast.error("Failed to process your order. Please try again.");
        setIsSubmitting(false);
        return;
      }
      
      // Success - proceed to confirmation
      setCheckoutStep('confirmation');
      toast.success("Order placed successfully!");
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0 && checkoutStep === 'cart') {
    return (
      <PageLayout>
        <div className="container px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-6 inline-block p-5 rounded-full bg-muted">
              <ShoppingCart size={64} className="text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any vehicles to your cart yet.
            </p>
            <Button asChild className="bg-revibe hover:bg-revibe/90 text-white">
              <Link to="/buy">Browse Vehicles</Link>
            </Button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="container px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">
          {checkoutStep === 'cart' && 'Your Cart'}
          {checkoutStep === 'payment' && 'Payment Details'}
          {checkoutStep === 'confirmation' && 'Order Confirmation'}
        </h1>
        
        {checkoutStep === 'cart' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {items.map(({ vehicle, quantity }) => (
                  <CartItem 
                    key={vehicle.id} 
                    vehicle={vehicle} 
                    quantity={quantity} 
                    onRemove={() => removeItem(vehicle.id)}
                    onUpdateQuantity={(newQty) => updateQuantity(vehicle.id, newQty)}
                  />
                ))}
              </div>
              <Button 
                variant="ghost" 
                onClick={clearCart} 
                className="mt-6 text-muted-foreground hover:text-destructive"
              >
                Clear Cart
              </Button>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (8%)</span>
                    <span>${(totalPrice * 0.08).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Fee</span>
                    <span>$249</span>
                  </div>
                  <div className="border-t border-border my-4 pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${(totalPrice + totalPrice * 0.08 + 249).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  className="w-full mt-6 bg-revibe hover:bg-revibe/90 text-white"
                  onClick={() => setCheckoutStep('payment')}
                >
                  Proceed to Payment
                </Button>
                <Button 
                  variant="outline"
                  className="w-full mt-3"
                  asChild
                >
                  <Link to="/buy">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {checkoutStep === 'payment' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleCheckout} className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Card Number</label>
                      <Input placeholder="1234 5678 9012 3456" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Expiration Date</label>
                        <Input placeholder="MM/YY" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">CVV</label>
                        <Input placeholder="123" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Cardholder Name</label>
                      <Input placeholder="John Doe" required />
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">First Name</label>
                        <Input placeholder="John" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Last Name</label>
                        <Input placeholder="Doe" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Address</label>
                      <Input placeholder="123 Main St" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">City</label>
                        <Input placeholder="New York" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">State</label>
                        <Input placeholder="NY" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Zip Code</label>
                        <Input placeholder="10001" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number</label>
                      <Input placeholder="(123) 456-7890" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <Input placeholder="johndoe@example.com" type="email" required />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setCheckoutStep('cart')}
                  >
                    <ArrowLeft size={16} className="mr-2" />
                    Back to Cart
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-revibe hover:bg-revibe/90 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : (
                      <>
                        <CreditCard size={16} className="mr-2" />
                        Complete Purchase
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax (8%)</span>
                    <span>${(totalPrice * 0.08).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Fee</span>
                    <span>$249</span>
                  </div>
                  <div className="border-t border-border my-4 pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${(totalPrice + totalPrice * 0.08 + 249).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <h3 className="font-medium mb-2">Your Cart ({items.length} items)</h3>
                    {items.map(({ vehicle, quantity }) => (
                      <div key={vehicle.id} className="flex justify-between items-center py-2 text-sm">
                        <div className="flex-1 truncate">
                          {quantity} x {vehicle.year} {vehicle.make} {vehicle.model}
                        </div>
                        <div className="font-medium">${(vehicle.price * quantity).toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {checkoutStep === 'confirmation' && (
          <div className="max-w-2xl mx-auto py-10 text-center">
            <div className="mb-6 inline-block p-5 rounded-full bg-revibe/10">
              <CheckCircleIcon size={64} className="text-revibe" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Thank You for Your Purchase!</h2>
            <p className="text-muted-foreground mb-8">
              Your order has been received and is being processed. You will receive an email confirmation shortly.
            </p>
            <p className="font-semibold mb-6">Order #RVB-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
            <div className="bg-card border border-border rounded-lg p-6 mb-8 text-left">
              <h3 className="font-semibold mb-3">Order Summary</h3>
              {items.map(({ vehicle, quantity }) => (
                <div key={vehicle.id} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <div>
                    <div className="font-medium">{vehicle.year} {vehicle.make} {vehicle.model}</div>
                    <div className="text-sm text-muted-foreground">Quantity: {quantity}</div>
                  </div>
                  <div className="font-medium">${(vehicle.price * quantity).toLocaleString()}</div>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${(totalPrice + totalPrice * 0.08 + 249).toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-revibe hover:bg-revibe/90 text-white"
                onClick={() => {
                  clearCart();
                  navigate('/');
                }}
              >
                Return to Home
              </Button>
              <Button 
                variant="outline"
                asChild
              >
                <Link to="/buy">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

interface CartItemProps {
  vehicle: Vehicle;
  quantity: number;
  onRemove: () => void;
  onUpdateQuantity: (quantity: number) => void;
}

const CartItem = ({ vehicle, quantity, onRemove, onUpdateQuantity }: CartItemProps) => {
  return (
    <div className="flex border border-border rounded-lg overflow-hidden">
      {/* Image */}
      <div className="w-32 h-32 bg-muted hidden sm:block">
        <img 
          src={vehicle.images[0]} 
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="flex-1 p-4 flex flex-col sm:flex-row justify-between">
        <div>
          <h3 className="font-medium">{vehicle.year} {vehicle.make} {vehicle.model}</h3>
          <p className="text-revibe font-bold">${vehicle.price.toLocaleString()}</p>
          <div className="text-sm text-muted-foreground mt-1 space-y-1">
            <p>Color: {vehicle.exteriorColor}</p>
            <p>Mileage: {vehicle.mileage.toLocaleString()} miles</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6 mt-4 sm:mt-0">
          {/* Quantity */}
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-r-none"
              onClick={() => onUpdateQuantity(quantity - 1)}
              disabled={quantity <= 1}
            >
              <Minus size={16} />
            </Button>
            <div className="h-8 px-4 flex items-center justify-center border-y border-border">
              {quantity}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 rounded-l-none"
              onClick={() => onUpdateQuantity(quantity + 1)}
            >
              <Plus size={16} />
            </Button>
          </div>
          
          {/* Remove Button */}
          <Button variant="ghost" size="icon" onClick={onRemove} className="text-muted-foreground hover:text-destructive">
            <Trash2 size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

const CheckCircleIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default CartPage;
