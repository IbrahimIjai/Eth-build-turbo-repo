import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const nftImageTypesAccepted = "image/jpeg,image/png,image/gif,image/svg,image/webp";

interface FormData {
  description: string;
  name: string;
  image: FileList;
}

const schema = yup.object().shape({
  description: yup.string(),
  name: yup.string().required("You must provide a name for this NFT"),
  image: yup.mixed().required("You must upload an image to represent this NFT"),
});

interface MintNftFormProps {
  mintNft: (name: string, description: string, image: Blob) => Promise<void>;
}

export default function MintNftForm({ mintNft }: MintNftFormProps) {
  const [isCropped, setIsCropped] = useState(false);
  const [imageUploadUri, setImageUploadUri] = useState("");
  const [imageUploadBlob, setImageUploadBlob] = useState(new Blob());
  const [cropperInstance, setCropperInstance] = useState<Cropper>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (imageUploadUri === "" || !isCropped) {
      // handle error
    } else {
      try {
        await mintNft(data.name, data.description, imageUploadBlob);
      } finally {
        reset();
        setIsCropped(false);
        setImageUploadBlob(new Blob());
        setImageUploadUri("");
      }
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-lg font-bold mb-4">Mint new NFT</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            className={`w-full p-2 border rounded-md ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            id="name"
            type="text"
            placeholder="My awesome NFT"
            autoComplete="off"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className={`w-full p-2 border rounded-md ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
            id="description"
            placeholder="Description of my awesome NFT"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Image upload and crop logic here */}
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="image"
          >
            Image
          </label>
          {!isCropped && (
            <>
              <input
                type="file"
                accept={nftImageTypesAccepted}
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    const reader = new FileReader();
                    reader.readAsDataURL(e.target.files[0]);
                    reader.onload = () => {
                      setImageUploadUri(reader.result as string);
                    };
                  }
                }}
              />
              {imageUploadUri && (
                <>
                  <Cropper
                    src={imageUploadUri}
                    aspectRatio={1}
                    guides={false}
                    style={{ width: "100%", height: "20rem" }}
                    onInitialized={(instance) => setCropperInstance(instance)}
                  />
                  <button
                    className={`w-full p-2 rounded-md bg-blue-600 text-white font-medium mt-4`}
                    type="button"
                    onClick={() => {
                      if (cropperInstance) {
                        cropperInstance.getCroppedCanvas().toBlob((blob) => {
                          if (blob) {
                            setImageUploadBlob(blob);
                            setIsCropped(true);
                          }
                        });
                      }
                    }}
                  >
                    Crop Image
                  </button>
                </>
              )}
            </>
          )}
          {isCropped && (
            <>
              <img
                src={URL.createObjectURL(imageUploadBlob)}
                alt="Cropped NFT image"
                className="w-full rounded-md"
              />
              <button
                className={`w-full p-2 rounded-md bg-blue-600 text-white font-medium mt-4`}
                type="button"
                onClick={() => {
                  setIsCropped(false);
                  setImageUploadUri("");
                  setImageUploadBlob(new Blob());
                }}
              >
                Change Image
              </button>
            </>
          )}
        </div>

        <button
          className={`w-full p-2 rounded-md bg-blue-600 text-white font-medium ${
            Object.keys(errors).length > 0 && "opacity-50 cursor-not-allowed"
          }`}
          type="submit"
          disabled={Object.keys(errors).length > 0}
        >
          Create collection
        </button>
      </form>
    </div>
  );
}
