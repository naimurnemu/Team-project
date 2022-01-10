import React, { useState } from 'react';
import { useForm } from 'react-hook-form';





const AddEvent = () => {


    const { register, handleSubmit, reset } = useForm();
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
                    reset();
                }
            });
    };




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
                            {...register("location")}
                            required
                            type="text"
                            placeholder="location"
                        />

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
                            {...register("image")}
                            accept="image/*"
                            type="file"
                        />
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
            </div>
        </div>
    );
};

export default AddEvent;