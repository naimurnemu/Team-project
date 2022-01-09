import React, { useState } from 'react';
import {  useForm } from 'react-hook-form';





const AddEvent = () => {


    const { register, handleSubmit,  reset } = useForm();
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
        <div>
            <h2>this is add event</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="my-2 w-25"
                        {...register("title")}
                        required
                        type="text"
                        placeholder="Title"
                    />
                    <br />
                    <input
                        className="my-2 w-25"
                        {...register("description")}
                        required
                        type="text"
                        placeholder="description"
                    />
                    <br />
                    <input
                        className="my-2 w-25"
                        {...register("location")}
                        required
                        type="text"
                        placeholder="location"
                    />

                    <br />
                    <input
                        className="my-2 w-25"
                        {...register("date")}
                        required
                        type="date"
                        
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
    );
};

export default AddEvent;