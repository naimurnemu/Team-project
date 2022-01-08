import React from "react";
import Event from "../../Events/Event/Event";

const Controls = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img
                        style={{ height: "600px" }}
                        src="https://blog.oneupapp.io/wp-content/uploads/2021/02/image-3.png"
                        alt=""
                    />
                </div>
                <div className="col-md-4 ">
                    <Event />
                </div>
                <div className="col-md-4">
                    <img src="https://i.ibb.co/4Tz4DjT/Imagef1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Controls;
