import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddPost = () => {
    const { user } = useAuth();
    const [alert, setAlert] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("post", data.post);
        formData.append("user", user.email);
        formData.append("date", new Date().toLocaleString());
        formData.append("image", data.image[0]);

        const url = "http://localhost:5000/newPost";
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
                }
            });
    };
    return (
        <div className="container-fluid bg-light">
            <div className="row">
                <div className="col-md-6">
                    <img
                        style={{ width: "100%" }}
                        src="https://cdn.dribbble.com/users/246068/screenshots/10493400/media/1b1c6d5b0c0d85e7c6db45b75445641e.gif"
                        alt=""
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="text-dark my-4 text-center">
                        Share your <span className="text-danger"> Idea</span>
                    </h1>
                    <form
                        className="text-center"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            className=" w-75  form-control mx-auto rounded-2 border-2 ps-2"
                            {...register("title")}
                            required
                            type="text"
                            placeholder="Title"
                        />
                        <br />
                        <textarea
                            style={{ height: "180px" }}
                            className="w-75  form-control mx-auto rounded-2 border-2 ps-2"
                            {...register("post")}
                            required
                            type="text"
                            placeholder="What is on your mind?"
                        />
                        <br />
                        <input
                            className="w-75 form-control mx-auto rounded-2 border-2 "
                            {...register("image")}
                            accept="image/*"
                            type="file"
                        />
                        <br />
                        <input className="w-75 btn btn-danger" type="submit" />
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
        </div>
    );
};

export default AddPost;
