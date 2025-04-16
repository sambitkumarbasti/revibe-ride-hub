
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Vehicle } from '@/types/vehicle';

interface CartItem {
  vehicle: Vehicle;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (vehicle: Vehicle) => void;
  removeItem: (vehicleId: string) => void;
  updateQuantity: (vehicleId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([]);
  
  // Initialize cart from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
    }
  }, []);
  
  // Save cart to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [items]);
  
  // Add item to cart
  const addItem = (vehicle: Vehicle) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.vehicle.id === vehicle.id);
      
      if (existingItem) {
        // Update quantity if item already exists
        return prevItems.map(item => 
          item.vehicle.id === vehicle.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      
      // Add new item
      return [...prevItems, { vehicle, quantity: 1 }];
    });
  };
  
  // Remove item from cart
  const removeItem = (vehicleId: string) => {
    setItems(prevItems => 
      prevItems.filter(item => item.vehicle.id !== vehicleId)
    );
  };
  
  // Update quantity of an item
  const updateQuantity = (vehicleId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(vehicleId);
      return;
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.vehicle.id === vehicleId 
          ? { ...item, quantity } 
          : item
      )
    );
  };
  
  // Clear cart
  const clearCart = () => {
    setItems([]);
  };
  
  // Calculate total number of items
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  
  // Calculate total price
  const totalPrice = items.reduce(
    (total, item) => total + (item.vehicle.price * item.quantity), 
    0
  );
  
  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    totalPrice
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
