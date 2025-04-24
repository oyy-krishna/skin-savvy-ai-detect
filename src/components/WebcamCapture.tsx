
import { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { Button } from '@/components/ui/button';
import { Camera, RefreshCw, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface WebcamCaptureProps {
  onCapture: (image: string) => void;
  onClose: () => void;
}

const WebcamCapture = ({ onCapture, onClose }: WebcamCaptureProps) => {
  const webcamRef = useRef<Webcam>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [cameraError, setCameraError] = useState<boolean>(false);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setCapturedImage(imageSrc);
      }
    }
  }, [webcamRef]);

  const retake = () => {
    setCapturedImage(null);
  };

  const confirmCapture = () => {
    if (capturedImage) {
      onCapture(capturedImage);
    }
  };

  const handleUserMediaError = () => {
    setCameraError(true);
  };

  return (
    <Card className="p-4">
      <div className="flex flex-col items-center gap-4">
        {cameraError ? (
          <div className="text-center p-4">
            <p className="text-red-500 mb-2">Unable to access camera</p>
            <p className="text-sm text-gray-500">
              Please ensure you have granted camera permissions and that your device has a working camera.
            </p>
            <Button onClick={onClose} className="mt-4">
              Back to Upload
            </Button>
          </div>
        ) : capturedImage ? (
          <>
            <div className="relative">
              <img 
                src={capturedImage} 
                alt="Captured" 
                className="rounded-lg max-h-[400px] object-contain"
              />
            </div>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={retake}
                className="flex items-center gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                Retake
              </Button>
              <Button 
                onClick={confirmCapture}
                className="bg-medical-blue hover:bg-medical-blue/90 flex items-center gap-2"
              >
                <CheckCircle className="h-4 w-4" />
                Use Photo
              </Button>
            </div>
          </>
        ) : (
          <>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={{
                width: 720,
                height: 720,
                facingMode: "user"
              }}
              onUserMediaError={handleUserMediaError}
              className="rounded-lg"
            />
            <Button 
              onClick={capture}
              className="bg-medical-blue hover:bg-medical-blue/90 flex items-center gap-2"
            >
              <Camera className="h-4 w-4" />
              Capture Photo
            </Button>
            <p className="text-sm text-center text-gray-500">
              Position the skin area in the center of the frame and ensure good lighting.
            </p>
          </>
        )}
        {!capturedImage && !cameraError && (
          <Button variant="outline" onClick={onClose}>
            Back to Upload
          </Button>
        )}
      </div>
    </Card>
  );
};

export default WebcamCapture;
