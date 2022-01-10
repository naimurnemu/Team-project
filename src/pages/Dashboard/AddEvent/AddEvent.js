<<<<<<< HEAD
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddEvent = () => {
    const { register, handleSubmit, reset } = useForm();
    const [alert, setAlert] = useState(false);
    const onSubmit = (data) => {
=======
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';





const AddEvent = () => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {

>>>>>>> 9f12b45f5ce6ebac037127f6755d902bb675529f
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
<<<<<<< HEAD
=======

>>>>>>> 9f12b45f5ce6ebac037127f6755d902bb675529f
                if (data.acknowledged) {
                    setAlert(true);
                    reset();
                    alert("Event Post Successfully!!")
                }
            });
    };

<<<<<<< HEAD
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
=======

>>>>>>> 9f12b45f5ce6ebac037127f6755d902bb675529f

                        <input
                            className="form-control mb-3 mx-auto w-75"
                            {...register("description")}
                            required
                            type="text"
                            placeholder="description"
                        />

<<<<<<< HEAD
                        <input
                            className="form-control mb-3 mx-auto w-75"
=======
    return (
        <div className="p-0 container-fluid">
            <h2>this is add event</h2>
            <div className="row  bg-secondary d-flex align-items-center m-0 p-0">
                <div className="col-md-6">


                    <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                        <input
                            className="my-2 w-50 rounded-2 border-0 ps-2"
                            {...register("title")}
                            required
                            type="text"
                            placeholder="Title"
                        />
                        <br />
                        <input
                        
                            className="my-2 w-50 rounded-2 border-0 ps-2"
                            {...register("description")}
                            required
                            type="text"
                            placeholder="description"
                        />
                        <br />
                        <input
                            className="my-2 w-50 rounded-2 border-0 ps-2"
>>>>>>> 9f12b45f5ce6ebac037127f6755d902bb675529f
                            {...register("location")}
                            required
                            type="text"
                            placeholder="location"
                        />

<<<<<<< HEAD
                        <input
                            className="form-control mx-auto mb-3 w-75"
                            {...register("date")}
                            required
                            type="date"
                        />

                        <input
                            className="form-control mx-auto mb-3 w-75"
=======
                        <br />
                        <input
                            className="my-2 w-50 rounded-2 border-0 ps-2"
                            {...register("date")}
                            required
                            type="date"

                        />




                        <br />
                        <input
                        
                            className="my-2 w-50 rounded-2 border-0 "
>>>>>>> 9f12b45f5ce6ebac037127f6755d902bb675529f
                            {...register("image")}
                            accept="image/*"
                            type="file"
                        />
<<<<<<< HEAD

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
=======
                        <br />
                        <input
                            className="my-2 w-50 bg-danger rounded-3"
                            type="submit"
                        />
                    </form>
                </div>

                <div className="col-md-6">
                    <div className="text-center">
                        <img className="my-0 py-0" src="https://i.ibb.co/pzrffPp/event-removebg-preview.png" alt="" />
                        <h5 className="d-flex justify-content-center my-0 py-0">Event</h5>
                    </div>
                </div>
>>>>>>> 9f12b45f5ce6ebac037127f6755d902bb675529f
            </div>
        </div>
    );
};

export default AddEvent;
