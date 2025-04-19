
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToUpload = () => {
    const uploadSection = document.getElementById("upload-section");
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-br from-medical-lightBlue via-white to-medical-lightTeal">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-medical-text mb-6">
            Early Detection <span className="text-medical-blue">Saves Lives</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Upload an image of your skin lesion and get an instant screening to help
            identify potential skin cancer concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToUpload}
              className="bg-medical-blue hover:bg-medical-blue/90 text-white px-8 py-6 text-lg"
            >
              Upload Image
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/education">
              <Button 
                variant="outline" 
                className="border-medical-teal text-medical-teal hover:bg-medical-lightTeal px-8 py-6 text-lg"
              >
                Learn More
                <Shield className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <Link to="/disclaimer" className="mt-8 text-sm text-gray-500 flex items-center justify-center gap-2 hover:text-gray-700 hover:underline">
            <Shield className="h-4 w-4" />
            <span>This tool is for screening purposes only and not a medical diagnosis</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
