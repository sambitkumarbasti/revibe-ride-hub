
import { Link } from 'react-router-dom';
import {
  Car,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Clock
} from "lucide-react";
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-blue-dark flex items-center justify-center">
              <Car size={20} className="text-white" />
            </div>
            <span className="font-bold text-xl">
              <span className="text-gradient-blue">ReVibe</span>
              <span className="text-foreground"> Ride Hub</span>
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            ReVibe Ride Hub transforms pre-owned vehicles into premium refurbished cars, 
            offering quality, reliability, and style at unbeatable prices.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Facebook size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Instagram size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Twitter size={18} />
            </Button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-revibe transition-colors text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link to="/buy" className="text-muted-foreground hover:text-revibe transition-colors text-sm">
                Browse Cars
              </Link>
            </li>
            <li>
              <Link to="/sell" className="text-muted-foreground hover:text-revibe transition-colors text-sm">
                Sell Your Car
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-revibe transition-colors text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-muted-foreground hover:text-revibe transition-colors text-sm">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/faq" className="text-muted-foreground hover:text-revibe transition-colors text-sm">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-muted-foreground hover:text-revibe transition-colors text-sm">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-muted-foreground hover:text-revibe transition-colors text-sm">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/warranty" className="text-muted-foreground hover:text-revibe transition-colors text-sm">
                Warranty Information
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone size={16} className="text-revibe" />
              <span>(123) 456-7890</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail size={16} className="text-revibe" />
              <span>info@reviberidehub.com</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin size={16} className="text-revibe" />
              <span>123 Auto Plaza Rd, Carville, CV 12345</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Clock size={16} className="text-revibe" />
              <span>Mon-Sat: 9AM-6PM, Sun: Closed</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-4">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ReVibe Ride Hub. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
