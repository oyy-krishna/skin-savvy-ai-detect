
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ResultsType = {
  prediction: 'benign' | 'malignant';
  confidence: number;
  heatmapUrl?: string;
};

const ResultsDisplay = ({ results }: { results: ResultsType }) => {
  const { prediction, confidence, heatmapUrl } = results;
  
  const isMalignant = prediction === 'malignant';
  const confidencePercent = Math.round(confidence * 100);
  
  return (
    <Card className="p-6 border-t-4 border-t-medical-blue">
      <div className="flex items-center gap-2 mb-4">
        <Info className="h-5 w-5 text-medical-blue" />
        <h3 className="text-lg font-semibold">Analysis Results</h3>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left column with prediction */}
        <div className="flex-1">
          <div className={`p-4 rounded-lg ${
            isMalignant 
              ? "bg-red-50 border border-red-100" 
              : "bg-green-50 border border-green-100"
          }`}>
            <h4 className="font-medium text-gray-700 mb-2">Prediction</h4>
            <div className={`text-2xl font-bold mb-3 ${
              isMalignant ? "text-medical-danger" : "text-medical-success"
            }`}>
              {isMalignant ? "Potentially Malignant" : "Likely Benign"}
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span>Confidence</span>
                <span className="font-medium">{confidencePercent}%</span>
              </div>
              <Progress 
                value={confidencePercent} 
                className={`${isMalignant ? "bg-red-100" : "bg-green-100"}`}
              />
            </div>
            
            <div className="text-sm text-gray-500 mt-4 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <span>This is not a medical diagnosis</span>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="font-medium mb-3">What this means:</h4>
            <p className="text-gray-600 text-sm">
              {isMalignant 
                ? "The AI has detected features that may be concerning. It's important to consult with a dermatologist as soon as possible."
                : "The AI suggests this is likely benign, but if you're concerned or notice any changes, please consult a dermatologist."}
            </p>
            
            <div className="mt-4">
              <Button variant="outline" className="text-sm">
                <Download className="h-4 w-4 mr-2" />
                Download Report
              </Button>
            </div>
          </div>
        </div>
        
        {/* Right column with heatmap */}
        <div className="flex-1">
          <h4 className="font-medium mb-3">Areas of Interest</h4>
          
          {heatmapUrl ? (
            <img 
              src={heatmapUrl} 
              alt="Analysis heatmap" 
              className="w-full rounded-lg border border-gray-200"
            />
          ) : (
            <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Heatmap visualization unavailable</p>
            </div>
          )}
          
          <p className="text-sm text-gray-500 mt-3">
            The highlighted areas show regions the AI analyzed most closely for its prediction.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ResultsDisplay;
