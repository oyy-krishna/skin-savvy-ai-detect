import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, X, Image as ImageIcon, Loader2, Heart, Microscope, Camera } from "lucide-react";
import { useState, useRef } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import WebcamCapture from "./WebcamCapture";

type ImageUploadProps = {
  onImageSelect: (image: File) => void;
  onAnalyze?: () => void;
  isAnalyzing?: boolean;
};

const ImageUpload = ({ onImageSelect, onAnalyze, isAnalyzing = false }: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showWebcam, setShowWebcam] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const imageRequirements = [
    "Clear, well-lit photo of the skin lesion",
    "Close-up shot (within 6-12 inches)",
    "In-focus, not blurry",
    "Without flash reflection",
    "Without hair covering the lesion",
    "Maximum size: 10MB"
  ];

  const bodyPartGuidelines = [
    "Face and neck area",
    "Arms and hands",
    "Legs and feet",
    "Torso (chest, back, abdomen)",
    "Scalp (with hair parted to show skin)"
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onImageSelect(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onImageSelect(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const clearImage = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleAnalyzeClick = () => {
    if (onAnalyze) {
      onAnalyze();
    }
  };

  const handleWebcamCapture = (imageSrc: string) => {
    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "webcam-capture.jpg", { type: "image/jpeg" });
        onImageSelect(file);
        setPreview(imageSrc);
        setShowWebcam(false);
      });
  };

  return (
    <Card className="p-6" id="upload-section">
      <h2 className="text-2xl font-bold text-center mb-4">Upload Skin Image</h2>
      
      <div className="mb-6 space-y-4">
        <div className="bg-medical-lightBlue/20 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Microscope className="h-5 w-5 text-medical-blue" />
            <h3 className="font-semibold text-medical-blue">Image Requirements:</h3>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {imageRequirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div className="bg-medical-lightTeal/20 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="h-5 w-5 text-medical-teal" />
            <h3 className="font-semibold text-medical-teal">Recommended Body Areas:</h3>
          </div>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {bodyPartGuidelines.map((part, index) => (
              <li key={index}>{part}</li>
            ))}
          </ul>
        </div>
      </div>

      {!preview && !showWebcam ? (
        <div className="space-y-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${
                    isDragging ? "border-medical-blue bg-medical-lightBlue" : "border-gray-300"
                  }`}
                  onClick={handleButtonClick}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <div className="flex flex-col items-center gap-4">
                    <div className="bg-medical-lightBlue rounded-full p-4">
                      <Upload className="h-8 w-8 text-medical-blue" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">Drag and drop or click to upload</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Supported formats: JPG, PNG, WEBP (max 10MB)
                      </p>
                    </div>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click or drag an image that meets the requirements above</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <div className="text-center">
            <span className="text-sm text-gray-500">or</span>
          </div>
          
          <Button 
            variant="outline" 
            onClick={() => setShowWebcam(true)}
            className="w-full py-6 flex items-center justify-center gap-2"
          >
            <Camera className="h-5 w-5" />
            Use Webcam
          </Button>
        </div>
      ) : showWebcam ? (
        <WebcamCapture 
          onCapture={handleWebcamCapture} 
          onClose={() => setShowWebcam(false)}
        />
      ) : (
        <div className="relative">
          <img
            src={preview}
            alt="Skin lesion preview"
            className="w-full max-h-[400px] object-contain rounded-lg border border-gray-200"
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2"
            onClick={clearImage}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {preview && (
        <div className="mt-6">
          <Button 
            className="w-full bg-medical-blue hover:bg-medical-blue/90 py-6 text-lg"
            onClick={handleAnalyzeClick}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                Analyze Image
                <ImageIcon className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      )}
    </Card>
  );
};

export default ImageUpload;
