import { useForm } from "react-hook-form";
import { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const nftImageTypesAccepted = "image/jpeg,image/png,image/gif,image/svg,image/webp";

interface FormData {
  description: string;
  name: string;
  image: FileList;
}

interface MintNftFormProps {
  mintNft: (name: string, description: string, image: Blob) => Promise<void>;
}

export default function MintNftForm({ mintNft }: MintNftFormProps) {
  const [isCropped, setIsCropped] = useState(false);
  const [imageUploadUri, setImageUploadUri] = useState("");
  const [imageUploadBlob, setImageUploadBlob] = useState(new Blob());
  const [cropperInstance, setCropperInstance] = useState<Cropper>();
  const [enableCropping, setEnableCropping] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    defaultValues: {
      description: "",
      name: "",
      image: new File([], ""),
    },
  });

  const onSubmit = async (data: FormData) => {
    if (imageUploadUri === "" || (enableCropping && !isCropped)) {
      // handle error
    } else {
      try {
        await mintNft(
          data.name,
          data.description,
          enableCropping ? imageUploadBlob : data.image[0]
        );
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
            {...register("name", { required: "You must provide a name for this NFT" })}
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
                {...register("image", {
                  required: "You must upload an image to represent this NFT",
                })}
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
              {enableCropping && imageUploadUri && (
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
          {(isCropped || !enableCropping) && (
            <>
              <img
                src={
                  enableCropping
                    ? URL.createObjectURL(imageUploadBlob)
                    : imageUploadUri
                }
                alt="NFT image"
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
          <div className="mt-4">
            <input
              type="checkbox"
              id="enableCropping"
              checked={enableCropping}
              onChange={(e) => setEnableCropping(e.target.checked)}
            />
            <label className="ml-2" htmlFor="enableCropping">
              Enable cropping
            </label>
          </div>
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
