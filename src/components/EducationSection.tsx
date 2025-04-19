
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EducationSection = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-medical-text mb-3">Understanding Skin Cancer</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Learn about the different types of skin cancer, warning signs, and when to seek professional advice.
        </p>
      </div>
      
      <Tabs defaultValue="types" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="types">Types of Skin Cancer</TabsTrigger>
          <TabsTrigger value="signs">Warning Signs</TabsTrigger>
          <TabsTrigger value="prevention">Prevention</TabsTrigger>
        </TabsList>
        
        <TabsContent value="types">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-5">
              <h3 className="font-bold text-lg mb-2">Melanoma</h3>
              <p className="text-sm text-gray-600 mb-3">
                The most dangerous form of skin cancer, melanoma develops from melanocytes
                (the skin cells that produce melanin pigment).
              </p>
              <img 
                src="https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso/melanoma-skin-cancer-signs-symptoms-300x200.jpg" 
                alt="Melanoma example"
                className="w-full h-40 object-cover rounded-md mb-3" 
              />
              <div className="text-sm text-medical-danger font-medium">
                Requires immediate attention
              </div>
            </Card>
            
            <Card className="p-5">
              <h3 className="font-bold text-lg mb-2">Basal Cell Carcinoma</h3>
              <p className="text-sm text-gray-600 mb-3">
                The most common skin cancer, typically developing on sun-exposed areas
                like the face and neck.
              </p>
              <img 
                src="https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso/basal-cell-carcinoma-skin-cancer-300x200.jpg" 
                alt="Basal cell carcinoma example"
                className="w-full h-40 object-cover rounded-md mb-3" 
              />
              <div className="text-sm text-medical-warning font-medium">
                Slow growing, rarely metastasizes
              </div>
            </Card>
            
            <Card className="p-5">
              <h3 className="font-bold text-lg mb-2">Squamous Cell Carcinoma</h3>
              <p className="text-sm text-gray-600 mb-3">
                The second most common skin cancer, developing in the squamous cells
                that make up the middle and outer layers of the skin.
              </p>
              <img 
                src="https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso/squamous-cell-carcinoma-skin-cancer-300x200.jpg" 
                alt="Squamous cell carcinoma example"
                className="w-full h-40 object-cover rounded-md mb-3" 
              />
              <div className="text-sm text-medical-warning font-medium">
                Can spread if left untreated
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="signs">
          <Card className="p-6">
            <h3 className="font-bold text-xl mb-4">The ABCDE Rule for Melanoma</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-medical-blue text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  A
                </div>
                <div>
                  <h4 className="font-medium text-lg">Asymmetry</h4>
                  <p className="text-gray-600">
                    One half of the mole doesn't match the other half in size, shape, color, or thickness.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-medical-blue text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  B
                </div>
                <div>
                  <h4 className="font-medium text-lg">Border</h4>
                  <p className="text-gray-600">
                    The edges are irregular, ragged, notched, or blurred.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-medical-blue text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  C
                </div>
                <div>
                  <h4 className="font-medium text-lg">Color</h4>
                  <p className="text-gray-600">
                    The color is not uniform and may include different shades of brown or black, or patches of red, white, or blue.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-medical-blue text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  D
                </div>
                <div>
                  <h4 className="font-medium text-lg">Diameter</h4>
                  <p className="text-gray-600">
                    The mole is larger than 6 millimeters in diameter (about the size of a pencil eraser).
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-medical-blue text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                  E
                </div>
                <div>
                  <h4 className="font-medium text-lg">Evolving</h4>
                  <p className="text-gray-600">
                    The mole is changing in size, shape, color, or elevation. Also, if the mole begins to bleed, itch, or crust, it's important to see a doctor.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="prevention">
          <Card className="p-6">
            <h3 className="font-bold text-xl mb-4">Skin Cancer Prevention Tips</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-lg mb-2">Sun Protection</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Apply sunscreen with SPF 30+ every 2 hours</li>
                  <li>Wear protective clothing, hats, and sunglasses</li>
                  <li>Seek shade, especially between 10am and 4pm</li>
                  <li>Avoid tanning beds and sun lamps</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">Regular Skin Checks</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Perform monthly self-examinations</li>
                  <li>Schedule annual skin checks with a dermatologist</li>
                  <li>Document any changes in existing moles</li>
                  <li>Be aware of your skin's "normal" appearance</li>
                </ul>
              </div>
              
              <div className="md:col-span-2">
                <h4 className="font-medium text-lg mb-2">Risk Factors to Be Aware Of</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Fair skin, light hair, or light eyes</li>
                  <li>History of sunburns, especially severe ones</li>
                  <li>Excessive sun exposure</li>
                  <li>Living at high altitude or near the equator</li>
                  <li>Family or personal history of skin cancer</li>
                  <li>Weakened immune system</li>
                  <li>Exposure to radiation or certain substances like arsenic</li>
                </ul>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EducationSection;
