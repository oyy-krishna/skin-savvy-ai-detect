import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Heart, Shield, BrainCircuit, Microscope, Users, BarChart4 } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-medical-lightBlue py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-medical-text">
              About Skin Savvy
            </h1>
            <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
              Our mission is to make early skin cancer detection accessible to everyone through innovative technology.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-medical-lightBlue p-3 rounded-full">
                  <Heart className="h-6 w-6 text-medical-blue" />
                </div>
                <h2 className="text-2xl font-bold">Our Story</h2>
              </div>
              
              <p className="text-gray-600 mb-4">
                Skin Savvy was created by three passionate computer science students who recognized the potential of technology to make a significant impact in healthcare, particularly in early skin cancer detection.
              </p>
              
              <p className="text-gray-600 mb-4">
                Our platform uses advanced detection technologies to help identify potential skin concerns. By making this technology widely available, we hope to encourage more people to monitor changes in their skin and seek professional medical care when needed.
              </p>
              
              <p className="text-gray-600">
                While our technology is powerful, we emphasize that it is a screening tool, not a replacement for professional medical diagnosis. We collaborate with healthcare professionals to continuously improve our system and ensure it serves as a helpful bridge to proper medical care.
              </p>
            </Card>
            
            <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-medical-lightBlue p-4 rounded-full mb-4">
                    <Microscope className="h-6 w-6 text-medical-blue" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Image Analysis</h3>
                  <p className="text-gray-600 text-sm">
                    Our AI model examines your uploaded skin images for patterns and features associated with various skin conditions.
                  </p>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-medical-lightBlue p-4 rounded-full mb-4">
                    <BrainCircuit className="h-6 w-6 text-medical-blue" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">AI Processing</h3>
                  <p className="text-gray-600 text-sm">
                    Using deep learning algorithms trained on thousands of medical images, the system identifies potential concerns.
                  </p>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-medical-lightBlue p-4 rounded-full mb-4">
                    <BarChart4 className="h-6 w-6 text-medical-blue" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Results &amp; Guidance</h3>
                  <p className="text-gray-600 text-sm">
                    You receive insights about your skin image and recommendations for next steps if needed.
                  </p>
                </div>
              </Card>
            </div>
            
            <Card className="p-8 mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-medical-lightBlue p-3 rounded-full">
                  <Users className="h-6 w-6 text-medical-blue" />
                </div>
                <h2 className="text-2xl font-bold">Our Team</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                Skin Savvy brings together three talented individuals who combine their expertise in computer science, machine learning, and healthcare technology:
              </p>
              
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-2">
                  <span className="font-medium">Krishan:</span>
                  <span>Project Lead and Full Stack Developer - Oversees the project development and implements the core features of our platform</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium">Shreyansh:</span>
                  <span>Machine Learning Engineer - Specializes in developing and optimizing our skin analysis algorithms</span>
                </li>
                <li className="flex gap-2">
                  <span className="font-medium">Yash:</span>
                  <span>UI/UX Designer and Frontend Developer - Creates the intuitive user interface and ensures a seamless user experience</span>
                </li>
              </ul>
            </Card>
            
            <div className="text-center p-8 bg-medical-lightTeal rounded-lg">
              <Shield className="h-10 w-10 text-medical-teal mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Our Commitment</h3>
              <p className="text-gray-600">
                We're committed to improving skin health outcomes through accessible technology, education, and connecting users with professional care when needed. Skin Savvy is a tool for awareness and early detection—not a replacement for medical expertise.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
