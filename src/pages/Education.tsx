
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EducationSection from '@/components/EducationSection';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ChevronRight, Download, FileText } from 'lucide-react';

const Education = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-medical-lightBlue py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-medical-text">
              Skin Cancer Education Center
            </h1>
            <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
              Learn about skin cancer types, warning signs, prevention methods, and when to seek professional medical advice.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <EducationSection />
          
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-3">Self-Examination Guide</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to perform regular skin self-examinations to monitor for changes in moles and other skin marks.
                </p>
                <Button className="w-full flex items-center justify-center gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF Guide
                </Button>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-3">Risk Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Understand your personal risk factors for developing skin cancer and learn about appropriate screening schedules.
                </p>
                <Button className="w-full flex items-center justify-center gap-2">
                  <FileText className="h-4 w-4" />
                  Take Risk Assessment
                </Button>
              </Card>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">How accurate is the AI detection?</h3>
                  <p className="text-gray-600">
                    Our AI model has been trained on thousands of medical images and achieves an accuracy rate of approximately 85-90% in identifying potentially concerning skin lesions. However, it is not a replacement for professional medical diagnosis, and all results should be confirmed by a dermatologist.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">How often should I check my skin?</h3>
                  <p className="text-gray-600">
                    Most dermatologists recommend performing a self-examination once a month. Additionally, an annual skin check with a dermatologist is recommended for adults, especially those with risk factors for skin cancer.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-2">Can melanoma develop in areas not exposed to the sun?</h3>
                  <p className="text-gray-600">
                    Yes, melanoma can appear anywhere on the body, including areas that are not regularly exposed to the sun. It can develop on the soles of feet, palms of hands, under nails, and even in the eyes or internal organs.
                  </p>
                </Card>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Ready to check a concerning skin spot?
              </p>
              <Link to="/">
                <Button className="bg-medical-blue hover:bg-medical-blue/90">
                  Upload an Image for Analysis
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Education;
