


/** @format */

"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import React from "react";
import { ToastContainer, toast } from "react-toastify";

import { ImCloudUpload } from "react-icons/im";

const nftImageTypesAccepted =
	"image/jpeg,image/png,image/gif,image/svg,image/webp";

interface FormData {
	description: string;
	name: string;
	image: any;
	traits: string;
}


export default function MintNftForm() {
	const [isCropped, setIsCropped] = useState(false);
	const [imageUploadUri, setImageUploadUri] = useState("");
	const [imageUploadBlob, setImageUploadBlob] = useState(new Blob());
	const [cropperInstance, setCropperInstance] = useState<Cropper>();
	const [enableCropping, setEnableCropping] = useState(true);

	const notify = () =>
		toast.error(
			"Wrong file formate! you can only mint an SVG, PNG, JPG, GIF, WEBP file!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }
		);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>({
		defaultValues: {
			description: "",
			name: "",
			image: new File([], ""),
			traits:
				"Theme: love || dreams || nature || photography || celebrity\nArt Form: art || photography || digital art || painting\nSpecifics: celebrity name || location of image taken || art inspiration",
		},
	});

	const onSubmit = async (data: FormData) => {
		if (imageUploadUri === "" || (enableCropping && !isCropped)) {
			return;
		} else {
			try {
				console.log(
					data.name,
					data.traits,
					enableCropping ? imageUploadBlob : data.image[0],
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
		<div className="">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-4">
					<label className="label" htmlFor="name">
						NFT Name/Title
					</label>
					<input
						className={`input ${errors.name ? "border-red-500" : ""}`}
						id="name"
						type="text"
						placeholder="My awesome NFT"
						autoComplete="off"
						{...register("name", { required: true })}
					/>
					{errors.name && <span className="errors">{errors.name.message}</span>}
				</div>

				<div className="mb-4">
					<label className="label" htmlFor="traits">
						Traits/Properties
					</label>
					<textarea
						className="input min-h-[110px]"
						id="traits"
						{...register("traits", { required: true })}
					/>
					{errors.description && <span className="errors">You need to </span>}
				</div>

				{/* Image upload and crop logic here */}
				<div className="mb-4">
					<label className="label" htmlFor="image">
						Image/Art work
					</label>

					<div className="mt-4">
					<input
						className="text-[2rem]"
						type="checkbox"
						id="enableCropping"
						checked={enableCropping}
						onChange={(e) => setEnableCropping(e.target.checked)}
					/>
					<label className="ml-2 text-primary" htmlFor="enableCropping">
						Enable cropping
					</label>
				</div>
					{!isCropped && (
						<div className="flex flex-col items-center gap-8 relative">
							{!imageUploadUri && (
								<label
									htmlFor="dropzone-file"
									className="flex cursor-pointer flex-col items-center justify-center">
									<ImCloudUpload size={35} />
									<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
										<span className="font-semibold">Click to upload</span> or
										drag anddrop
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-400">
										SVG, PNG, JPG, GIF, WEBP
									</p>

									<input
										type="file"
										id="dropzone-file"
										accept={nftImageTypesAccepted}
										className="hidden w-full"
										onChange={(e) => {
											if (e.target.files && e.target.files.length > 0) {
												const file = e.target.files[0];
												if (!nftImageTypesAccepted.includes(file.type)) {
													notify();
													return;
												} else {
													const reader = new FileReader();
													reader.readAsDataURL(e.target.files[0]);
													reader.onload = () => {
														setImageUploadUri(reader.result as string);
													};
												}
											}
										}}
									/>
								</label>
							)}

							{enableCropping && imageUploadUri && (
								<>
									<Cropper
										src={imageUploadUri}
										aspectRatio={1}
										guides={false}
										style={{ width: "80%", height: "30rem" }}
										onInitialized={(instance) => setCropperInstance(instance)}
									/>
									<button
										className={`w-full p-2 rounded-md bg-black text-white font-medium mt-4`}
										onClick={() => {
											if (cropperInstance) {
												cropperInstance.getCroppedCanvas().toBlob((blob) => {
													if (blob) {
														setImageUploadBlob(blob);
														setIsCropped(true);
													}
												});
											}
										}}>
										Crop Image
									</button>
								</>
							)}
						</div>
					)}
					{(isCropped || (!enableCropping && imageUploadUri)) && (
						<>
							<img
								src={
									enableCropping
										? URL.createObjectURL(imageUploadBlob)
										: imageUploadUri
								}
								alt="Cropped NFT image"
								className="w-[50%] h-[180px] rounded-md "
							/>
							<button
								className="w-full p-2 m-5 rounded-md bg-primary text-white font-medium mt-4"
								onClick={() => {
									setIsCropped(false);
									setImageUploadUri("");
									setImageUploadBlob(new Blob());
								}}>
								Change Image
							</button>
						</>
					)}
				</div>
				

				<button
					className={`w-full p-2 rounded-md bg-blue-600 text-white font-medium ${
						Object.keys(errors).length > 0 && "opacity-50 cursor-not-allowed"
					}`}
					//   type="submit"
					disabled={Object.keys(errors).length > 0}>
					Create collection
				</button>
			</form>
		</div>
	);
}
