
import { Button } from "@/components/ui/button";
import { Heart, Info, Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-medical-danger" />
          <span className="font-bold text-xl text-medical-text">Skin Savvy</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            <Link 
              to="/" 
              className={`font-medium ${isActive('/') 
                ? 'text-medical-blue' 
                : 'text-medical-text hover:text-medical-blue'}`}
            >
              Home
            </Link>
            <Link 
              to="/education" 
              className={`font-medium ${isActive('/education') 
                ? 'text-medical-blue' 
                : 'text-medical-text hover:text-medical-blue'}`}
            >
              Learn
            </Link>
            <Link 
              to="/find-doctor" 
              className={`font-medium ${isActive('/find-doctor') 
                ? 'text-medical-blue' 
                : 'text-medical-text hover:text-medical-blue'}`}
            >
              Find a Doctor
            </Link>
          </nav>
          <Link to="/about">
            <Button 
              variant={isActive('/about') ? "default" : "outline"} 
              className={`flex items-center gap-2 ${isActive('/about') 
                ? 'bg-medical-blue hover:bg-medical-blue/90' 
                : ''}`}
            >
              <Info className="h-4 w-4" />
              About
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden text-medical-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 border-t">
          <nav className="flex flex-col gap-2">
            <Link 
              to="/" 
              className={`font-medium py-2 ${isActive('/') 
                ? 'text-medical-blue' 
                : 'text-medical-text hover:text-medical-blue'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/education" 
              className={`font-medium py-2 ${isActive('/education') 
                ? 'text-medical-blue' 
                : 'text-medical-text hover:text-medical-blue'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Learn
            </Link>
            <Link 
              to="/find-doctor" 
              className={`font-medium py-2 ${isActive('/find-doctor') 
                ? 'text-medical-blue' 
                : 'text-medical-text hover:text-medical-blue'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Find a Doctor
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Button 
                variant={isActive('/about') ? "default" : "outline"} 
                className={`flex items-center gap-2 mt-2 justify-center w-full ${isActive('/about') 
                  ? 'bg-medical-blue hover:bg-medical-blue/90' 
                  : ''}`}
              >
                <Info className="h-4 w-4" />
                About
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
