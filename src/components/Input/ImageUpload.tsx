"use client";
import { Alert, AlertDescription } from "@/components/Alert";
import React, { useCallback, useState } from "react";

const MAX_FILE_SIZE_MB = 2;

const ImageUpload = () => {
  const [isMaxFileSize, setIsMaxFileSize] = useState(false);
  const [fileToUpload, setFileToUpload] = useState<File | undefined>();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        if (event.target.files[0].size > MAX_FILE_SIZE_MB * 1000 * 1024) {
          setIsMaxFileSize(true);
        } else {
          setIsMaxFileSize(false);
          setFileToUpload(event.target.files[0]);
        }
      }
    },
    []
  );

  return (
    <div>
      {fileToUpload ? (
        <div className="bg-[#F2F2F2] rounded-2xl py-[14px] px-4 border border-spacing-1 border-dashed border-[#919999] text-center text-[#6D6B6E] flex items-center gap-3">
          <img src="./assets/images/image-file.svg" alt="icon" />
          <span className="flex-1 text-left text-sm">{fileToUpload.name}</span>
          <span
            className="cursor-pointer"
            onClick={() => {
              setFileToUpload(undefined);
            }}
          >
            <img src="./assets/images/x-icon.svg" alt="x-icon" />
          </span>
        </div>
      ) : (
        <>
          <input
            type="file"
            accept="image/*"
            hidden
            id="image-upload"
            onChange={handleChange}
          />
          <label htmlFor="image-upload">
            <div className="bg-[#F2F2F2] rounded-2xl p-7 border border-spacing-1 border-dashed border-[#919999] text-center text-[#6D6B6E]">
              <img
                src="./assets/images/upload-file.svg"
                alt="Icon upload"
                className="mx-auto mb-3"
              />
              <p>Unggah foto rekening</p>
              <p>max {MAX_FILE_SIZE_MB} MB </p>
            </div>
          </label>
        </>
      )}
      {isMaxFileSize ? (
        <Alert variant="destructive" className="mt-4">
          <AlertDescription>Max file size!</AlertDescription>
        </Alert>
      ) : null}
    </div>
  );
};

export default ImageUpload;
