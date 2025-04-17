
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FindDoctor from '@/components/FindDoctor';

const FindDoctorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-medical-lightBlue py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-medical-text">
              Find a Dermatologist
            </h1>
            <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
              Connect with board-certified skin specialists near you for professional diagnosis and treatment.
            </p>
          </div>
        </div>
        
        <FindDoctor />
      </main>
      
      <Footer />
    </div>
  );
};

export default FindDoctorPage;
