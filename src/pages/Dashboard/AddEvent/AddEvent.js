import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();
    const [alert, setAlert] = useState(false);
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("location", data.location);
        formData.append("date", data.date);
        formData.append("image", data.image[0]);

        const url = "http://localhost:5000/addEvent";
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    setAlert(true);
                    reset();
                    alert("Event Post Successfully!!");
                }
            });
    };

    return (
        <div className="m-5 px-3">
            <div className="Container-md rounded-3 py-3">
                <h2 className="text-dark pb-3 text-center">
                    Add a new <span className="text-warning"> Event</span>
                </h2>
                <div>
                    <form
                        className="text-center"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            className="form-control mb-3 mx-auto w-75"
                            {...register("title")}
                            required
                            type="text"
                            placeholder="Title"
                        />

                        <input
                            className="form-control mb-3 mx-auto w-75"
                            {...register("description")}
                            required
                            type="text"
                            placeholder="description"
                        />

                        <input
                            className="form-control mb-3 mx-auto w-75"
                            {...register("location")}
                            required
                            type="text"
                            placeholder="location"
                        />

                        <input
                            className="form-control mx-auto mb-3 w-75"
                            {...register("date")}
                            required
                            type="date"
                        />

                        <input
                            className="form-control mx-auto mb-3 w-75"
                            {...register("image")}
                            accept="image/*"
                            type="file"
                        />

                        <input
                            className="btn btn-warning mb-3 mx-auto w-75"
                            type="submit"
                        />
                    </form>
                </div>
                {alert && (
                    <div className="text-center">
                        <span className="bg-success text-light fw-5 my-2 mx-auto w-75 p-2">
                            Event Added Successful!
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddEvent;
