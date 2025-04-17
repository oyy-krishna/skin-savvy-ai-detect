
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-medical-lightBlue py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-medical-text">
              Medical Disclaimer
            </h1>
            <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
              Important information about the limitations of SkinSavvy AI
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 border-t-4 border-medical-warning mb-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-medical-warning" />
                <h2 className="text-2xl font-bold">Not a Medical Device</h2>
              </div>
              
              <p className="text-gray-600 mb-4">
                SkinSavvy AI is an educational tool and is not approved, cleared, or authorized by the FDA or any regulatory body as a medical device. It does not provide medical advice, diagnoses, or treatment recommendations.
              </p>
              
              <p className="text-gray-600">
                The results provided by SkinSavvy AI should be considered informational only. While our AI algorithms have been trained on medical images, they cannot replace the expertise of a qualified healthcare professional.
              </p>
            </Card>
            
            <Card className="p-8 mb-8">
              <h3 className="text-xl font-bold mb-4">Limitations of AI Analysis</h3>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <ShieldAlert className="h-5 w-5 text-medical-warning flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Accuracy Limitations:</strong> While our system has been trained on thousands of images, it may not accurately identify all skin conditions or differentiate between similar-looking conditions.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ShieldAlert className="h-5 w-5 text-medical-warning flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Image Quality Dependency:</strong> The analysis is highly dependent on the quality, lighting, and angle of the uploaded image. Poor quality images may lead to less reliable results.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ShieldAlert className="h-5 w-5 text-medical-warning flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Not Comprehensive:</strong> The system evaluates only the specific image uploaded and cannot assess your overall health, medical history, or other factors a doctor would consider.
                  </span>
                </li>
                <li className="flex gap-3">
                  <ShieldAlert className="h-5 w-5 text-medical-warning flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Evolving Technology:</strong> AI-based detection is continually improving but is not yet a substitute for clinical evaluation by a dermatologist.
                  </span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 mb-8">
              <h3 className="text-xl font-bold mb-4">When to Seek Medical Care</h3>
              
              <p className="text-gray-600 mb-4">
                Regardless of the results provided by SkinSavvy AI, you should consult a healthcare professional if:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>You notice a new or changing spot on your skin</li>
                <li>You have a mole or skin lesion that is asymmetrical, has irregular borders, contains multiple colors, is larger than 6mm, or is evolving</li>
                <li>You have a skin growth that bleeds, itches, or doesn't heal</li>
                <li>You have a personal or family history of skin cancer</li>
                <li>You have concerns about your skin health</li>
              </ul>
              
              <p className="text-gray-600">
                Skin cancer is highly treatable when detected early. Regular skin checks by a dermatologist are recommended, especially for individuals with risk factors.
              </p>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Use of Information</h3>
              
              <p className="text-gray-600 mb-4">
                By using SkinSavvy AI, you acknowledge and agree that:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>The information provided is for educational purposes only</li>
                <li>The results do not constitute medical advice or diagnosis</li>
                <li>You will not use the results as a substitute for professional medical consultation</li>
                <li>You understand the limitations of AI-based analysis</li>
                <li>You assume all responsibility for interpreting and acting upon the information provided</li>
              </ul>
              
              <p className="text-gray-600 font-medium">
                If you do not agree with these terms, please do not use SkinSavvy AI.
              </p>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Disclaimer;
