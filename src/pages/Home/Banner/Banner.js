import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="container-fluid">
            <div className="row bannerBackground d-flex align-items-center justify-content-center">
                <div className="col-12 col-md-6">
                    <h3 className="pt-5">
                        Welcome to you, Our Study family!!!
                    </h3>
                </div>
                <div className="col-12 col-md-6">
                    <img
                        style={{ width: "100%" }}
                        src="https://i.ibb.co/M25K6ns/online-1-removebg-preview.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
