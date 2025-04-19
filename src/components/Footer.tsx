import { Heart, Mail, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-medical-danger" />
              <span className="font-bold text-xl">Skin Savvy</span>
            </div>
            <p className="text-gray-600 text-sm">
              Helping detect potential skin cancer early, when it's most treatable.
            </p>
            <div className="flex items-center gap-1 mt-4">
              <Shield className="h-4 w-4 text-medical-blue" />
              <span className="text-xs text-gray-500">
                For educational purposes only, not a medical diagnosis
              </span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-medical-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-medical-blue">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-gray-600 hover:text-medical-blue">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/find-doctor" className="text-gray-600 hover:text-medical-blue">
                  Find a Doctor
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.cancer.org/cancer/types/skin-cancer.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-medical-blue"
                >
                  American Cancer Society
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aad.org/public/diseases/skin-cancer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-medical-blue"
                >
                  American Academy of Dermatology
                </a>
              </li>
              <li>
                <a 
                  href="https://www.skincancer.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-medical-blue"
                >
                  Skin Cancer Foundation
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail className="h-4 w-4 text-medical-blue" />
              <a href="mailto:info@skinsavvyai.com" className="hover:text-medical-blue">
                info@skinsavvyai.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Skin Savvy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-600 hover:text-medical-blue">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-medical-blue">
                Terms of Use
              </Link>
              <Link to="/disclaimer" className="text-gray-600 hover:text-medical-blue">
                Medical Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
