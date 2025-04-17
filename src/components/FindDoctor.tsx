
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Star, ExternalLink } from "lucide-react";
import { useState } from "react";

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  location: string;
  distance: string;
  phone: string;
};

const mockDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Dermatologist",
    rating: 4.8,
    location: "123 Medical Center, New York, NY",
    distance: "1.2 miles",
    phone: "(212) 555-1234"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Dermatologist, Skin Cancer Specialist",
    rating: 4.9,
    location: "456 Health Plaza, New York, NY",
    distance: "2.4 miles",
    phone: "(212) 555-5678"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Dermatologist",
    rating: 4.7,
    location: "789 Care Clinic, New York, NY",
    distance: "3.0 miles",
    phone: "(212) 555-9012"
  }
];

const FindDoctor = () => {
  const [location, setLocation] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchPerformed(true);
  };
  
  return (
    <div className="py-12 bg-medical-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-medical-text mb-3">Find a Specialist Near You</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with board-certified dermatologists in your area who specialize in skin cancer detection and treatment.
          </p>
        </div>
        
        <Card className="max-w-xl mx-auto p-6 mb-8">
          <form onSubmit={handleSearch}>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <Input
                  placeholder="Enter your zip code or city"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="py-6"
                />
              </div>
              <Button type="submit" className="bg-medical-blue hover:bg-medical-blue/90 py-6">
                Search
              </Button>
            </div>
          </form>
        </Card>
        
        {searchPerformed && (
          <div className="space-y-4 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Dermatologists near you:</h3>
            
            {mockDoctors.map((doctor) => (
              <Card key={doctor.id} className="p-5">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-bold text-lg">{doctor.name}</h4>
                    <p className="text-sm text-gray-500">{doctor.specialty}</p>
                    
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(doctor.rating)
                              ? "text-yellow-400 fill-yellow-400" 
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-1">{doctor.rating}</span>
                    </div>
                    
                    <div className="mt-3 flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                      <span>{doctor.location}</span>
                      <span className="ml-2 text-xs bg-gray-100 rounded-full px-2 py-0.5">
                        {doctor.distance}
                      </span>
                    </div>
                    
                    <div className="mt-1 flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-1 text-gray-400" />
                      <span>{doctor.phone}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Button className="bg-medical-blue hover:bg-medical-blue/90">
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                    <Button variant="outline" className="border-medical-blue text-medical-blue">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Website
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDoctor;
