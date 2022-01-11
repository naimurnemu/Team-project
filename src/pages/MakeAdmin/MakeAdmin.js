import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const MakeAdmin = () => {
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const { isLoading } = useAuth();
    const onSubmit = (data) => {
       
        fetch("https://floating-cliffs-11080.herokuapp.com/users/makeAdmin", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    setSuccess(true);
                    reset();
                }
            });
    };
    return (
        <div>
            {isLoading ? (
                <div>
                    <br />
                    <br />
                    <Spinner />
                </div>
            ) : (
                <div className="bg-light text-center">
                    <h3 className="text-center py-3 ">Make New Admin</h3>
                    <div className="pb-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="w-25 form-control mx-auto"
                                name="email"
                                placeholder="Enter email"
                                type="email"
                                {...register("email", { required: true })}
                            />
                            <br />

                            <input
                                className="submit-btn btn px-2 w-25 btn-danger mt-3"
                                type="submit"
                                value="Create Admin"
                            />
                        </form>
                    </div>
                </div>
            )}
            {success && (
                <div className="text-center">
                    <span className="bg-success text-light fw-5 my-2 mx-auto w-75 p-2">
                        Event Added Successful
                    </span>
                </div>
            )}
        </div>
    );
};

export default MakeAdmin;
