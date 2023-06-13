/** @format */

"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import {PropagateLoader} from "react-spinners"

interface IFormInput {
	collectionName: string;
	collectionSymbol: string;
	collectionDescription: string;
}

export default function Form() {
	const { register, handleSubmit, formState:{isSubmitting, errors}, reset  } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(isSubmitting)
        console.log(data);
        reset()
    }

	return (
		<form className="text-gray-400 flex flex-col gap-8 items-center justify-center  w-[70%]" onSubmit={handleSubmit(onSubmit)}>
			<div className="w-full">
				<label className="label">Collection Name</label>
				<input className="w-full input" {...register("collectionName", { required: true })} />
				{errors.collectionName && <span className="errors">This field is required</span>}
			</div>

            <div className="w-full">
                <label className="label">Collection Symbol</label>
                <input className="w-full input" {...register("collectionSymbol", { required: true })} />
                {errors.collectionSymbol && <span  className="errors">This field is required</span>}
            </div>
			
            <div className="w-full">
                <label className="label">Collection Description</label>
                <textarea className="w-full min-h-[150px] input" {...register("collectionDescription", { required: true, minLength: 20 })} />
                {errors.collectionDescription && errors.collectionDescription.type === "required" && <span className="errors">This field is required</span>}
                {errors.collectionDescription && errors.collectionDescription.type === "minLength" && <span className="errors">Minimum of 20 words required</span>}
            </div>
			
			<button className="button" disabled={isSubmitting || Object.keys(errors).length > 0}>{isSubmitting ? <PropagateLoader/> : "Create collection"}</button>
		</form>
	);
}
