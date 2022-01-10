import React from "react";
import { useForm } from "react-hook-form";
const AddTeacher = () => {
    const { register, handleSubmit, reset } = useForm();
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
                    reset();
                    alert("New Teacher Added Successfully!!")
                }
            });
    };

    return (
        <div>
            <div className="text-center bg-secondary pb-5">
                <h3>You can add Teacher</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="my-2 w-25"
                        {...register("name")}
                        required
                        type="text"
                        placeholder="Name"
                    />
                    <br />
                    <input
                        className="my-2 w-25"
                        {...register("education")}
                        required
                        type="text"
                        placeholder="Education"
                    />
                    <br />
                    <input
                        className="my-2 w-25"
                        {...register("subject")}
                        required
                        type="text"
                        placeholder="Subject"
                    />
                    <br />
                    <input
                        className="my-2 w-25"
                        {...register("phone")}
                        required
                        type="text"
                        placeholder="Phone"
                    />
                    <br />
                    <input
                        className="my-2 w-25"
                        {...register("about")}
                        required
                        type="text"
                        placeholder="About"
                    />
                    <br />
                    <input
                        className="my-2 w-25"
                        {...register("age")}
                        required
                        type="text"
                        placeholder="Age"
                    />
                    <br />
                    <input
                        className="my-2 w-25"
                        {...register("link")}
                        required
                        type="URL"
                        placeholder="Your social media link"
                    />
                    <br />
                    <input
                        className="my-2 w-25"
                        {...register("image")}
                        accept="image/*"
                        type="file"
                    />
                    <br />
                    <input
                        className="my-2 w-25 bg-danger rounded-3"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddTeacher;
