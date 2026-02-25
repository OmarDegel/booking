import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "../../assets/lib/utils";

export function ProfileDropZone({
  setAvatar,
  avatar,
}: {
  setAvatar: (file: File | null) => void;
  avatar: string | null;
}) {
  const [preview, setPreview] = useState<string | null>(avatar || null);
  const [isPending, setIsPending] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;
      const file = acceptedFiles[0];
      setIsPending(true);

      setAvatar(file);

      await new Promise((res) => setTimeout(res, 1000));
      setPreview(URL.createObjectURL(file));
      setIsPending(false);
    },
    [setAvatar],
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    maxSize: 10 * 1024 * 1024,
    multiple: false,
  });

  return (
    <div {...getRootProps()} className="cursor-pointer">
      <input {...getInputProps()} />
      <div className="flex gap-8 bg-transparent text-sm">
        <div
          className={cn(
            "w-44 h-44 rounded-full border flex items-center justify-center overflow-hidden bg-gray-200",
            isPending && "animate-pulse",
          )}
        >
          {preview ? (
            <img
              src={preview}
              alt="Avatar"
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-gray-500 font-semibold">JG</span>
          )}
        </div>
        <div className="flex flex-col gap-1 font-semibold">
          <p>Upload a new avatar</p>
          <p className="text-xs text-muted-foreground">
            Please select an image smaller than 10MB
          </p>
          {isPending && <p className="text-xs text-blue-500">Uploading...</p>}
        </div>
      </div>
    </div>
  );
}
