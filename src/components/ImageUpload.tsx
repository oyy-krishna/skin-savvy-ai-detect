
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, X, Image as ImageIcon, Loader2 } from "lucide-react";
import { useState, useRef } from "react";

type ImageUploadProps = {
  onImageSelect: (image: File) => void;
  onAnalyze?: () => void;
  isAnalyzing?: boolean;
};

const ImageUpload = ({ onImageSelect, onAnalyze, isAnalyzing = false }: ImageUploadProps) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  return (
    <Card className="p-6" id="upload-section">
      <h2 className="text-2xl font-bold text-center mb-4">Upload Skin Image</h2>
      <p className="text-center text-gray-500 mb-6">
        For best results, upload a clear, well-lit photo of the skin lesion
      </p>
      
      {!preview ? (
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
