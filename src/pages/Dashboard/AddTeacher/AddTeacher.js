import React, { useState } from "react";
import { useForm } from "react-hook-form";
const AddTeacher = () => {
    const { register, handleSubmit, reset } = useForm();
    const [alert, setAlert] = useState(false);
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("education", data.education);
        formData.append("subject", data.subject);
        formData.append("phone", data.phone);
        formData.append("about", data.about);
        formData.append("age", data.age);
        formData.append("link", data.link);
        formData.append("image", data.image[0]);

        const url = "http://localhost:5000/teachers";
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    setAlert(true);
                    reset();
                    alert("New Teacher Added Successfully!!")
                }
            });
    };

    return (
        <div className="container">
            <div className="text-center pb-5">
                <h1 className="text-dark my-4">
                    Add <span className="text-success">New Teacher</span> to
                    list
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="form-control mb-3 mx-auto w-75"
                        {...register("name")}
                        required
                        type="text"
                        placeholder="Name"
                    />

                    <input
                        className="form-control mb-3 mx-auto w-75"
                        {...register("education")}
                        required
                        type="text"
                        placeholder="Education"
                    />

                    <input
                        className="form-control mb-3 mx-auto w-75"
                        {...register("subject")}
                        required
                        type="text"
                        placeholder="Subject"
                    />

                    <input
                        className="form-control mb-3 mx-auto w-75"
                        {...register("phone")}
                        required
                        type="text"
                        placeholder="Phone"
                    />

                    <input
                        className="form-control mb-3 mx-auto w-75"
                        {...register("about")}
                        required
                        type="text"
                        placeholder="About"
                    />

                    <input
                        className="form-control mb-3 mx-auto w-75"
                        {...register("age")}
                        required
                        type="text"
                        placeholder="Age"
                    />

                    <input
                        className="form-control mb-3 mx-auto w-75"
                        {...register("link")}
                        required
                        type="URL"
                        placeholder="Your social media link"
                    />

                    <input
                        className="form-control mb-3 mx-auto w-75"
                        {...register("image")}
                        accept="image/*"
                        type="file"
                    />

                    <input
                        className="btn btn-success rounded-pill w-75"
                        type="submit"
                    />
                </form>
                {alert && (
                    <div className="text-center">
                        <span className="bg-success text-light fw-5 my-2 mx-auto w-75 p-2">
                            Event Added Successful
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddTeacher;
