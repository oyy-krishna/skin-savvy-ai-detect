import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageUpload from '@/components/ImageUpload';
import ResultsDisplay, { ResultsType } from '@/components/ResultsDisplay';
import EducationSection from '@/components/EducationSection';
import FindDoctor from '@/components/FindDoctor';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import useImageClassification from '@/hooks/useImageClassification';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Loader2 } from 'lucide-react';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { prediction, confidence, heatmapUrl, loading, error, classifyImage } = useImageClassification();
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleImageSelect = (image: File) => {
    setSelectedImage(image);
    setAnalysisComplete(false);
  };

  const handleAnalyze = () => {
    if (selectedImage) {
      classifyImage(selectedImage)
        .then(() => {
          setAnalysisComplete(true);
        });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <ImageUpload 
              onImageSelect={handleImageSelect} 
              onAnalyze={handleAnalyze}
              isAnalyzing={loading}
            />
            
            {loading && (
              <div className="mt-6 flex flex-col items-center">
                <div className="flex items-center gap-2 text-medical-blue mb-2">
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <span className="font-medium">Analyzing your image...</span>
                </div>
                <p className="text-sm text-gray-500">
                  This typically takes a few seconds
                </p>
              </div>
            )}
            
            {error && (
              <Alert variant="destructive" className="mt-6">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  {error}
                </AlertDescription>
              </Alert>
            )}
            
            {analysisComplete && !loading && !error && (
              <div className="mt-6">
                <ResultsDisplay
                  results={{
                    prediction,
                    confidence,
                    heatmapUrl
                  }}
                />
              </div>
            )}
          </div>
        </div>
        
        <EducationSection />
        <FindDoctor />
      </main>
      
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
