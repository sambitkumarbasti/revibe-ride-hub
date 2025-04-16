
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Car,
  ShoppingCart,
  DollarSign,
  Menu,
  X,
  User,
  Search
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // This will be connected to a cart context later

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-blue-dark flex items-center justify-center">
            <Car size={20} className="text-white" />
          </div>
          <span className="font-bold text-xl">
            <span className="text-gradient-blue">ReVibe</span>
            <span className="text-foreground"> Ride Hub</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/buy" className="text-muted-foreground hover:text-foreground transition-colors">
            Buy Cars
          </Link>
          <Link to="/sell" className="text-muted-foreground hover:text-foreground transition-colors">
            Sell Your Car
          </Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
            About Us
          </Link>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search size={20} />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <Badge 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-revibe text-white" 
                  variant="outline"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
          </Link>
          <Button className="bg-revibe hover:bg-revibe/90 text-white">
            <User size={18} className="mr-2" /> Sign In
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-card border-b p-4 md:hidden flex flex-col gap-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/buy" 
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Buy Cars
            </Link>
            <Link 
              to="/sell" 
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sell Your Car
            </Link>
            <Link 
              to="/cart" 
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart size={18} className="mr-2" />
              Cart
              {cartCount > 0 && (
                <Badge className="ml-auto bg-revibe text-white">{cartCount}</Badge>
              )}
            </Link>
            <Link 
              to="/about" 
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Button className="mt-2 bg-revibe hover:bg-revibe/90 text-white">
              <User size={18} className="mr-2" /> Sign In
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
