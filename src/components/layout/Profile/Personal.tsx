import { useState } from "react";
import { useDropzone } from "react-dropzone";

import { InputField, MYButton } from "../../index";
import FieldType from "../../../entities/Field";
import Props from "../../../entities/Profile";
import useProfile from "../../../hooks/useProfile";

type PreviewImage = {
  name: string; // File name
  type: string; // File type (e.g., "image/jpeg")
  size: number; // File size in bytes
  // ... other properties you want to include
  preview?: string; // Optional URL for preview image
};

const Personal: React.FC<Props> = ({ tab }) => {
  const { fields, button, label, register, handleSubmit, errors } =
    useProfile(tab);
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

  const onSubmit = (data: any) => {
    console.log(data); // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <div className="rounded-full bg-yellow-secondary text-yellow-primary w-[100px] h-[100px] flex items-center justify-center font-bold text-[20px] ml-5 overflow-hidden">
          {previewImage ? (
            <img
              src={previewImage.preview}
              className="object-cover h-full w-full"
            />
          ) : (
            "NM"
          )}
        </div>
        <div>
          <div
            {...getRootProps()}
            className="cursor-pointer border-solid border-2 border-brand-primary rounded-lg p-[10px] mb-5 mt-1 bg-white font-body text-[18px] text-brand-primary"
          >
            <input {...getInputProps()} />
            ویرایش تصویر پروفایل
          </div>
          <p className="font-body text-[#8A8989] text-[12px]">
            این تصویر برای عموم قابل نمایش است.
          </p>
        </div>
      </div>
      {fields?.map(({ key, type, label }: FieldType) => (
        <InputField
          key={key}
          label={label}
          type={type}
          register={register(key)}
          error={errors[key]}
        />
      ))}
      <MYButton myKey={button} label={label} />
    </form>
  );
};

export default Personal;
