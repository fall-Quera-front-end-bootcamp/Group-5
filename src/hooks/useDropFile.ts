import { useState } from "react";
import { useDropzone } from "react-dropzone";

type PreviewImage = {
  name: string; // File name
  type: string; // File type (e.g., "image/jpeg")
  size: number; // File size in bytes
  // ... other properties you want to include
  preview?: string; // Optional URL for preview image
};
const useDropFile = () => {
  const [previewImage, setPreviewImage] = useState<PreviewImage>();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple: false, // Allow only single file selection
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];

      // Handle file validation and preview here
      setPreviewImage(
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
    },
  });
  return { previewImage, getRootProps, getInputProps };
};

export default useDropFile;