import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="margin-box">
            <div className="container-fluid bannerBackground">
                <div className="py-5 blurbg">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-12 col-md-6 py-5">
                            <h1 className=" text-light">
                                <span className="text-danger">
                                    Welcome You in
                                </span>
                                <br />
                                Green Wisdom High School
                            </h1>
                            <p className="fs-6 text-light">
                                Every high school should provide all students
                                and teachers with the books, computers,
                                laboratory equipment, technology, and other
                                resources they need to be successful. And every
                                school should maintain safe, clean facilities
                                that are fit for teaching and learning.
                            </p>
                            <Link to="/login">
                                <Button variant="success">
                                    Join to Know more
                                </Button>
                            </Link>
                        </div>
                        <div className="col-12 col-md-6 p-2 img-box">
                            <img
                                className="img-fluid"
                                src="https://media.istockphoto.com/photos/teenage-boy-listening-to-music-while-doing-homework-picture-id1033164992?k=20&m=1033164992&s=612x612&w=0&h=LU3XrP73-ApUGsAj0hMCz_gSqG1WsjhYmySUj1nypXU="
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
